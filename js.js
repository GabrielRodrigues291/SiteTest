let mobile = document.querySelector('.mobile');
let relative = document.querySelector('.relative');

mobile.addEventListener('click', () => {

    if(relative.classList.contains("transition")) {
        relative.classList.add("transitionBack");  
        relative.classList.remove("transition");      
      
    }
    else {
        relative.classList.add("transition");
        relative.classList.remove("transitionBack");
    }

    

  
   
   
})