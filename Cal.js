let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
screen.value=0;
let screenvalue='';
console.log(typeof screenvalue);

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
         
         if(buttonText=='C'){
            screenvalue='';
            screen.value=0;
        }

        else if(buttonText=='='){
            console.log(screen.value=eval(screenvalue));
        }
        
        else{
            screenvalue += buttonText;
            screen.value=screenvalue;
        }
       
    })
}