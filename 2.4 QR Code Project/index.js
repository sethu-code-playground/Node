/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        name:"url",
        message: "Enter a url:"
    }
    ]).then((answers) => {
        var response = answers.url;
        console.log(response);

        var png = qr.image(response, {type: 'png'});
        
        png.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("url.txt", response, (error)=>{
            if (error) throw error;
            console.log("This file is saved");
        })
});

