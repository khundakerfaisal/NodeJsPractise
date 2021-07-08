//----------FS Module 
    // writeFile();
    // readFile();
    // appendFile();
    // rename()
    // unlink()
    // Exist()

    const fs=require('fs')

    fs.writeFile('Name.txt',"This is my first fs",function(err){
        if(err){
           console.log(err)
        }else{
            console.log('successfully')
        }
    })