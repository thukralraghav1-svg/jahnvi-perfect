// Loader
window.onload=()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";
document.getElementById("bgMusic").play();
},2000);
};

// Scroll
function goTo(id){
document.getElementById(id).scrollIntoView();
}

// Quotes
let quotes=[
"One Kiss All It Takes To Fall In Love With Me 💋",
"I thought this was the best thing that ever happened to me… but then you happened.💫",
"You’re the person I’m meant to spend the rest of my life with.🥹❤️",
"Shaadi is daal chawal for pachaas saal… till death do us part.❤️😄",
"“Hum ek baar jeete hain, ek baar marte hain… aur pyaar bhi ek hi baar hota hai.”
(Aur wo ek baar mujhe aapse ho chuka hai smjhe aap)❤️❤️"
];

let q=0;
document.getElementById("quoteText").innerText=quotes[0];

function nextQuote(){
q=(q+1)%quotes.length;
document.getElementById("quoteText").innerText=quotes[q];
}

// Music
function playSong(song,msg){

let player=document.getElementById("player");
player.src="assets/music/"+song;
player.play();

showPopup(msg);
}

// Popup
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

// Proposal
function yesClick(){
showPopup("SIRF YES BOLOGI MADAM JI ALWAYS NHI 😁❤️");
}

function alwaysClick(){

let box=document.getElementById("ringBox");
box.style.display="flex";

setTimeout(()=>{
box.innerHTML+=`
<p>There is a surprise 💝</p>
<button onclick="showRing()">Tap Me</button>
`;
},2000);

}

function showRing(){
document.getElementById("ringBox").innerHTML=`
<img src="https://i.imgur.com/J5q7R7A.png">
<h2>NOW YOU ARE MINE ❤️</h2>
<h3>AND I AM YOURS FOREVER 💍</h3>
`;
}

