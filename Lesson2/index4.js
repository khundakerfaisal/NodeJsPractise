
    const fs=require('fs');
    fs.unlink('demo1',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('success')
        }
    })