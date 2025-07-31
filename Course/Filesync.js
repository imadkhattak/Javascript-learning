const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/First.txt','utf-8');
const second = readFileSync('./content/secondtext-file.txt','utf-8');

console.log(first);
console.log(second);

 writeFileSync(
     './content/result-sync.txt',
     `Here is the result : ${first}, ${second}`, {
         flag: 'a'
     }
 )

 console.log('done with this task');
 console.log('starting the next one');