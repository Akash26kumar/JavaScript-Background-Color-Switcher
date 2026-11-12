
const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

//nodelist support forEach loop
buttons.forEach((button)=>{
    console.log(button)
    //add event listner
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id ==="grey"){
            body.style.background=e.target.id 
        }
        else if(e.target.id ==="yellow"){
            body.style.background=e.target.id 
        }
        else if(e.target.id==="white"){
              body.style.background=e.target.id 
        }
        else if(e.target.id==="purple"){
              body.style.background=e.target.id 
        }
        else{
            body.style.background=e.target.id 
        }
    });
});