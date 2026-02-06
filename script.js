// Loader System
window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");
const main=document.getElementById("main");

if(loader && main){
loader.style.display="none";
main.style.display="block";
}

},2000);

});


// Popup System
function showPopup(text){

let pop=document.getElementById("popup");

pop.innerHTML=`
<h3>${text}</h3><br>
<button onclick="closePopup()">OK</button>
`;

pop.style.display="block";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}


// YES Button
function yesClick(){
showPopup("SIRF YES BOLOGI MADAM JI, ALWAYS NHI 😜❤️");
}


// ALWAYS Button
function alwaysClick(){

let box=document.getElementById("ringBox");

box.style.display="flex";

box.innerHTML=`
<p style="font-size:22px;">There is a surprise 💝</p><br>
<button onclick="showRing()">Tap Me 💍</button>
`;

startHearts();
}


// Show Ring
function showRing(){

let box=document.getElementById("ringBox");

box.innerHTML=`
<img src="https://i.imgur.com/J5q7R7A.png" width="180"><br><br>

<h2>NOW YOU ARE MINE ❤️</h2><br>

<h3>AND THE FOREVER CONTINUES ♾️</h3>
`;
}


// Hearts Animation
function startHearts(){

for(let i=0;i<60;i++){

let heart=document.createElement("div");
heart.className="heart";

heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(Math.random()*2+2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},3000);

}

  }

