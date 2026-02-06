// Loader Fix
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 2000);
};

// Navigation
function showSection(id){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// Popup
function showPopup(msg){
  let pop = document.getElementById("popup");

  pop.innerHTML = `
    <h3>${msg}</h3>
    <button onclick="closePopup()">OK</button>
  `;

  pop.style.display="block";
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}

// Proposal
function yesClick(){
  showPopup("SIRF YES BOLOGI MADAM JI 😘❤️");
}

function alwaysClick(){

  let box = document.getElementById("ringBox");

  box.style.display="flex";

  box.innerHTML = `
    <p>There is a surprise 💝</p>
    <button onclick="showRing()">Tap Me</button>
  `;

  startHearts();
}

function showRing(){

  let box = document.getElementById("ringBox");

  box.innerHTML = `
    <img src="https://i.imgur.com/J5q7R7A.png" width="180">
    <h2>NOW YOU ARE MINE ❤️</h2>
    <h3>AND I AM YOURS FOREVER 💍</h3>
  `;
}

// Hearts Animation
function startHearts(){

  for(let i=0;i<40;i++){

    let h = document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";

    h.style.left = Math.random()*100+"vw";
    h.style.animationDuration = (2+Math.random()*3)+"s";

    document.body.appendChild(h);

    setTimeout(()=>{
      h.remove();
    },5000);
  }
}
