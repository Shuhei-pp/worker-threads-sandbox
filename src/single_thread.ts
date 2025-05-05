function heavyTask(n: number) {
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}

async function run() {
	const start = new Date();
	//プロセスIDを取得
	console.log(`process.pid: ${process.pid}`);
	console.log("start!");
	heavyTask(1e10);
	console.log(`time: ${new Date().getTime() - start.getTime()}ms`);
	heavyTask(1e10);
	console.log(`time: ${new Date().getTime() - start.getTime()}ms`);
	heavyTask(1e10);
	console.log(`time: ${new Date().getTime() - start.getTime()}ms`);
	console.log("end");
}

run();
