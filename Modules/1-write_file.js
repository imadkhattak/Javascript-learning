const { error } = require('console');
const fs = require('fs');

/*
const { error } = require('console');

console.log("creating a new file");

fs.writeFile("./1-write_file.txt", "Hello World", (error) => {
    if (error) {
        console.log(error);
    }
});

console.log("File written successfully");  

*/

/*

fs.readFile("./1-write_file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data);
});

*/

/*

fs.appendFile("./1-write_file.txt", "Hello i am imad", (error) => {
    if (error) {
        console.log(error);
    }
});

fs.readFile("./1-write_file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data);
});

*/

/*

if (fs.existsSync("./1-write_file.txt")) {
    console.log("File already exists");
};

fs.unlink("./1-write_file.txt", (error) => {
    if (error) {
        console.log(error);
    }
    console.log("File deleted successfully");
})

*/

/*

fs.mkdir("./New folder/sub folder", (error) => {
    if (error) {
        console.log(error);
    }

    console.log("Folder created successfully");

    fs.writeFile("./New folder/sub folder/text_file.txt", "Hello i am imad and this is his World", (error) => {
        if (error) {
            console.log(error);
        }
    })

    console.log("File created successfully");

    fs.readFile("./New folder/sub folder/text_file.txt", "utf-8", (error, data) => {
        if (error) {
            console.log(error);
        }
        console.log(data);
    })

    console.log("File read successfully");
})

*/

/*

fs.readdir("./New folder", (error, files) => {
    if (error) {
        console.log(error);
    }
    console.log(files);
})

*/

