let hex=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

function getrandom(){
   return Math.floor((Math.random())*hex.length);
}


const bdy=document.body;
const sp=document.getElementById('color');

const btn=document.getElementById('changer');
btn.addEventListener('click',colourcode);
function colourcode(){
    let value="#";
for( let i=0;i<6;i++){
    value+=hex[getrandom()];
}
sp.style.color=value;
sp.innerText=value;
bdy.style.backgroundColor=value;
}