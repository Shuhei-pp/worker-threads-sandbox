import path from "node:path";
import { Worker } from "node:worker_threads";

function createWorker(workerData: { value: number }) {
	return new Promise((resolve) => {
		const worker = new Worker(path.resolve("worker.js"), {
			workerData,
		});

		worker.on("message", ({ threadId }) => {
			console.log(`messageを受け取りました - threadId:${threadId}`);
			resolve(threadId);
		});
	});
}

async function run() {
	//プロセスIDを取得
	console.log(`process.pid: ${process.pid}`);
	const start = new Date();
	console.log("start!");

	await Promise.all([
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
		createWorker({ value: 10 }),
	]);
	console.log(`time: ${new Date().getTime() - start.getTime()}ms`);
}

run();
