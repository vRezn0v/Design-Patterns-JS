const { Worker } = require('worker_threads')

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}

async function run() {
    var instance = require('./singleton').getInstance()
    const result1 = await runService(instance)
    const result2 = await runService(instance)
    const result3 = await runService(instance)
    const result4 = await runService(instance)
    console.log(result1, result2, result3, result4);
}

run().catch(err => console.error(err))