// console.log('My Name is faisal')

//------------Export all Name--------------

// const s1=require('./student')
// console.log(s1.getCollege())
// console.log(s1.getName())
// console.log(s1.getCgpa())

//------------------export indivisual----------
const {getName}=require('./student')
console.log(getName())