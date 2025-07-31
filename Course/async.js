const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/First.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/secondtext-file.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Done with this task");
        });
    });
});
console.log("Done with this task");