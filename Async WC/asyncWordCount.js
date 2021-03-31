const fs = require('fs')
const path = "./files"

const running = []
const wordCounts = []
var completed = 0
var start = Date.now()

const checkComplete = () => {
    completed++
    if (completed === running.length) {
        console.log(wordCounts)
        console.log(`Operation Finished in ${Date.now()-start} millis.`)
    }
}

const wordCounter = (filename, text) => {
    const words = text
        .toString()
        .split(/\W+/)
        .filter(word => word != "")

    wordCounts.push({ filename, wc: words.length })
    console.log(`[${Date.now()-start} ms] Filename: ${filename} words counted.`)
}

fs.readdir(path, (err, files) => {
    if (err) throw err
    files.forEach(file => {
        const task = (file => {
            return () => {
                fs.readFile(file, (err, text) => {
                    if (err) throw err
                    wordCounter(file.split("/").pop(), text)
                    checkComplete()
                })
            }
        })(path + "/" + file)
        running.push(task)
    })
    running.forEach(task => task())
})