var secret = "home";

var lockScreen = document.getElementById("lockScreen");
var questionScreen = document.getElementById("questionScreen");
var resultScreen = document.getElementById("resultScreen");

var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

var questionText = document.querySelector("h1");
var imageContainer = document.getElementById("imageContainer");
var finalTitle = document.getElementById("finalTitle");
var finalMessage = document.getElementById("finalMessage");

var noClicks = 0;
var yesScale = 1;

/* =========================
   VALENTINE WEEK DATA
   (CORRECT ORDER)
========================= */

var days = [
  {
    q: "Do you accept my rose? 🌹",
    title: "Happy Rose Day ❤️",
    msg: "This rose carries everything I feel for you.",
    imgs: ["rose.jpg"]
  },
  {
    q: "Will you be mine forever? 💍",
    title: "Happy Propose Day 💕",
    msg: "I choose you. Again and again.",
    imgs: ["propose.jpg"]
  },
  {
    q: "Will you share all chocolates with me? 🍫",
    title: "Happy Chocolate Day 🍫",
    msg: "Life is sweeter with you.",
    imgs: ["choco1.jpg", "choco2.jpg"]
  },
  {
    q: "Can I be your cuddle forever ? 🧸",
    title: "Happy Teddy Day 🧸",
    msg: "You are my comfort place.",
    imgs: ["teddy.gif"]
  },
  {
    q: "Do you promise us? 🤞",
    title: "Happy Promise Day 🤍",
    msg: "Always and forever. It’s us.",
    imgs: ["promise.jpg"]
  },
  {
    q: "Can I hug you right now? 🤗",
    title: "Happy Hug Day 🤗",
    msg: "Wrapped in you, always.",
    imgs: ["hug1.jpg", "hug2.jpg"]
  },
  {
    q: "Can I steal a kiss? 💋",
    title: "Happy Kiss Day 💋",
    msg: "Every kiss with you feels like home.",
    imgs: ["kiss1.gif", "kiss2.jpg"]
  },
  {
    q: "Will you be my Valentine? ❤️",
    title: "Happy Valentine’s Day ❤️",
    msg: "Forever & always. It’s you.",
    imgs: ["valentine.jpg"]
  }
];

/* =========================
   DATE-BASED LOGIC
   Feb 7 – Feb 14
========================= */

var today = new Date();
var month = today.getMonth(); // February = 1
var date = today.getDate();

var index = 7; // default: Valentine Day

//if (month === 1 && date >= 7 && date <= 14) {
//  index = date - 7;
//}

var todayData = days[index];

/* =========================
   APPLY DAY CONTENT
========================= */

questionText.innerText = todayData.q;
finalTitle.innerText = todayData.title;
finalMessage.innerText = todayData.msg;

imageContainer.innerHTML = "";
todayData.imgs.forEach(function (src) {
  var img = document.createElement("img");
  img.src = src;
  imageContainer.appendChild(img);
});

/* =========================
   LOCK SCREEN
========================= */

function unlock() {
  var input = document.getElementById("secretInput").value;
  if (input.toLowerCase() === secret) {
    lockScreen.style.display = "none";
    questionScreen.style.display = "block";
  } else {
    alert("Not quite ❤️");
  }
}

/* =========================
   BUTTON BEHAVIOR
========================= */

noBtn.onmouseover = function () {
  var x = Math.random() * 300 - 150;
  var y = Math.random() * 300 - 150;
  noBtn.style.position = "relative";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

noBtn.onclick = function () {
  noClicks++;

  noBtn.style.transform = "scale(" + (1 - noClicks * 0.2) + ")";
  yesScale += 0.3;
  yesBtn.style.transform = "scale(" + yesScale + ")";

  if (noClicks >= 3) {
    noBtn.style.display = "none";
  }
};

yesBtn.onclick = function () {
  questionScreen.style.display = "none";
  resultScreen.style.display = "block";
};
