window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const main = document.getElementById("main");

        if (loader && main) {
            loader.style.display = "none";
            main.style.display = "block";
        }
    }, 2000); // 2 sec baad site open hogi
});
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

