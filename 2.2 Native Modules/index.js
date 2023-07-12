const fs = require("fs")

// fs.writeFile("messages.txt", ('Hello boys'),(err)=>{

//     if(err){
//         throw err;
//     }

//     console.log("File is saved")
// })

fs.readFile("./messages.txt", 'utf8', (err,data)=>{

    if (err){
        throw err
    }

    else{
        data
    }

    console.log(data)
})