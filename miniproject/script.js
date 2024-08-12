const accordion= document.querySelectorAll('.accordion');
accordion.forEach(accordion=>{
   const icon =accordion.querySelector('.icon');
   const answer =accordion.querySelector('.answers');
   accordion.addEventListener('click',()=>{
    icon.classList.toggle('active');
    answer.classList.toggle('active');
    if(icon.classList.contains('active')){
        icon.classList.remove('active');
        answer.style.maxHeight=null;
    }else{
        icon.classList.remove('active');
        answer.style.maxHeight=answer.scrollHeight +px;
    }

   })
})