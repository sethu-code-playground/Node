const fs = require("fs"); //importing file system module

fs.writeFile("message.txt", "This is written using nodejs", (err)=>{
    if(err) throw err;
    console.log("This file has been saved!");
});

fs.readFile("./message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 