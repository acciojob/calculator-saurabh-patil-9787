const display = document.getElementById('input')
const buttons = document.querySelectorAll('button')
const ans = document.getElementById('ans')
const specialChar = ["+","-","/","*","="]
let output = '';

const calculate = (btnvalue)=>{
       if(btnvalue==="=" && output !== ""){
        output = eval(output)
       }
      else if(btnvalue === "C" ){
           output = "";
       }
      
       else{
        if(output==="" && specialChar.includes(btnvalue)) return;
        output+=btnvalue

       }
       display.value = output
}

buttons.forEach((button)=>{
    
    button.addEventListener('click',(event)=>calculate(event.target.innerText))
   
})


