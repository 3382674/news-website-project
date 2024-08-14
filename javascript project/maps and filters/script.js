let students=[
    {"name": "John", "age": 20, "grade": 95},
    {"name": "Jane", "age": 21, "grade": 85},
    {"name": "Bob", "age": 19, "grade": 95},
    {"name": "barb", "age": 26, "grade": 95},
    {"name": "Alice", "age": 22, "grade": 80}
     
]
const names=students.map((curvalue,index,array)=>{
     return `<li>${curvalue.name}</li>`;
 });
console.log(names);
const div=document.getElementById('container');
div.innerHTML=`<ul>${names.join('')}</ul>`;
 
const name=students
.filter(curvalue=>curvalue.grade===95)
.map((curvalue,index,array)=>{
    return `<li>${curvalue.name}</li>`;
})
console.log(name);
document.getElementById('container');
div.innerHTML=`<ul>${name.join('')}</ul>`;







// const newarray=students.filter((curvalue)=>{
//     if(curvalue.age%2==0){
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log("new arraw here>>");
// console.log(newarray);
// const names=students.map((curvalue)=>{
//     return curvalue.name;
// })
// console.log(names);


   