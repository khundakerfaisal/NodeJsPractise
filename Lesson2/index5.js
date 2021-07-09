// ----------Exist MODULE USE FOR Exist FILE checking purpose-----------
const fs=require('fs');
fs.exists('demo1',(result)=>{
    if(result){
        console.log('found')
    }else{
        console.log('not found')
    }
})