
    const fs=require('fs');
    fs.rename('demo2','demo1',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('success')
        }
    })