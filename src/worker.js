import { parentPort, threadId, workerData } from "node:worker_threads";

//CPUめちゃくちゃ使用する重い処理
function heavyTask(n) {
	let sum = 0;
	for (let i = 0; i <= 10 ** n; i++) {
		sum += i;
	}
	return sum;
}

function run() {
	heavyTask(workerData.value);
	parentPort?.postMessage({
		threadId: threadId,
	});
}

run();
