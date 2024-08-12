//event handlers
  
function myfunction(){
    console.log("i am clicked");

}
const mouseover=()=>{
    console.log("i am hovered");
}
const keypress=()=>{
    console.log("i am pressed");
}
const keydown=()=>{
    console.log("key down was  pressed");
}
const keyupevent=()=>{
    console.log("key up was  pressed");
}
//event listeners
const container=document.getElementById('container')
container.addEventListener('click',(e)=>{
    console.log("container clicked");
    
},true);

const box1=document.getElementById("box-1")
box1.addEventListener('click',(e)=>{
    console.log("box 1 clicked");
    
});
const nameinput=document.getElementById('name')
nameinput.addEventListener('keydown',(e)=>{
    console.log('event object',e.key);
}
)
nameinput.addEventListener('focus',(e)=>{
    console.log("key",e);
    
})
