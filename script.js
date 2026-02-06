
// Loader Fix
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


// Popup System
function showPopup(text) {
  let pop = document.getElementById("popup");

  pop.innerHTML = `
    <h3>${text}</h3><br>
    <button onclick="closePopup()">OK</button>
  `;

  pop.style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


// Proposal Buttons
function yesClick() {
  showPopup("SIRF YES BOLOGI MADAM JI, ALWAYS NHI 😜❤️");
}

function alwaysClick() {

  let box = document.getElementById("ringBox");

  box.style.display = "flex";

  box.innerHTML = `
    <div class="confetti"></div>

    <p>There is a surprise 💝</p>

    <button onclick="showRing()">Tap Me 💍</button>
  `;

  startConfetti();
}


// Ring Show
function showRing() {

  let box = document.getElementById("ringBox");

  box.innerHTML = `
    <img src="https://i.imgur.com/J5q7R7A.png" width="180">

    <h2>NOW YOU ARE MINE ❤️</h2>

    <h3>AND THE FOREVER CONTINUES ♾️</h3>
  `;

}


// Confetti + Hearts
function startConfetti() {

  for (let i = 0; i < 50; i++) {

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
      2 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
