// ----------Append MODULE USE FOR New Line Added in existing line-----------
    const fs=require('fs');
    fs.appendFile('demo1.txt','i have completed my task',function(err){
        if(err){
            console.log(err)
        }else{
            console.log('success the file')
        }
    })