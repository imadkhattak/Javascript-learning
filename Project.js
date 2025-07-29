const fs = require('fs');
const prompt = require('prompt-sync')();

let tasks = []

while (true) {
    console.log("Type buy to exit");
    const task = prompt("Enter a task: ");
    if (task.toLowerCase() === "buy" || task.toLowerCase() === "quit") {
        break;
    }
    tasks.push(task);
    console.log("Tasks: ", tasks);
    fs.writeFileSync("tasks.txt", tasks.join("\n"));
};
    

