// try{
//     const res=prompt("are you a robot?");
//     if(res=='y'){
//         // throw{
//         //     name:'juhi',
//         // };
//         throw new Error("Robot found");
            
        
//     }
// }
// catch(e){
//    console.log(e.name);
//    console.log(e.message);
   
   
// }
  
  
  
  
  
 // try{
// console.log(age);
// }   
// catch (error) {
//   console.log(error.name);
//   console.log(error.message);    
// }

// const a=2*3;
// console.log("important",a);

try{
    console.log("before the error");
    console.log(age);
    console.log("after the error");    
}
catch (error) {
 console.log(error.name);
 console.log(error.message);
}
finally{
    console.log("from finally");
    
}

const a =2*4;
console.log("important",a);