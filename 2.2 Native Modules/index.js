const fs = require("fs")

fs.writeFile("messages.txt", ('Hello boys'),(err)=>{

    if(err){
        throw err;
    }

    console.log("File is saved")
})