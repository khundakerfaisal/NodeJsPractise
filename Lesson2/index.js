//----------Built In Module,http,url,path,fs In This Lesson We will work on FS Module ------------
    // writeFile();
    // readFile();
    // appendFile();
    // rename()
    // unlink()
    // Exist()

// ----------Write MODULE USE FOR write line in specific FILE ----------
    const fs=require('fs');
    fs.writeFile('demo2','This is new line',function(err){
        if(err){
            console.log(err)
        }else{
            console.log('success the file')
        }
    })