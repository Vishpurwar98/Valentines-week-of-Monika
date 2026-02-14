var secret = "Nothing";

var lockScreen = document.getElementById("lockScreen");
var questionScreen = document.getElementById("questionScreen");
var resultScreen = document.getElementById("resultScreen");

var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

var questionText = document.querySelector("h1");
var imageContainer = document.getElementById("imageContainer");
var finalTitle = document.getElementById("finalTitle");
var finalMessage = document.getElementById("finalMessage");

var noMessages = [
  "Oops 😜 try harder",
  "Harder baby 😏",
  "Muahhhh💋"
];
var noClicks = 0;
var yesScale = 1;


var noMessageBox = document.getElementById("noMessage");
/* =========================
   VALENTINE WEEK DATA
   (CORRECT ORDER)
========================= */

var days = [
  {
    q: "Do you accept my rose? 🌹",
    title: "Happy Rose Day ❤️",
    msg: "To be very honest, No rose is prettier than you. You are the most beautiful rose in this whole world but still this rose carries everything I feel for you.",
    imgs: ["rose.jpg", "rose1.jpg"]
  },
  {
    q: "Will you be mine forever? 💍",
    title: "Happy Propose Day 💕",
    msg: "I choose you. Again and again and forever.",
    imgs: ["propose.jpg"]
  },
  {
    q: "Will you share all chocolates with me? 🍫",
    title: "Happy Chocolate Day 🍫",
    msg: "I know you already do! Just wanna say that life is sweeter with you. Oh and we should try eating chocolate off each other next time, it'll tastse even better xD",
    imgs: ["choco1.jpg", "choco2.jpg"]
  },
  {
    q: "Can I be your cuddle forever ? 🧸",
    title: "Happy Teddy Day 🧸",
    msg: "You are my comfort place. I love cuddling with you! Holding you is the best feeling in the whole world. Your amazing aroma, silky hair brishing on my nose constantly. Just love it",
    imgs: ["teddy.gif", "teddy1.jpg"]
  },
  {
    q: "Do you promise us? 🤞",
    title: "Happy Promise Day 🤍",
    msg: "I know you asked me a few things which were left unanswered. And today i wanna tell you that Monika, i wanna be with you, iwanna give you all the happiness in the world. I do promise you everything that you asked for. We'll figure out the best. Always and forever. It’s us.",
    imgs: ["promise.jpg"]
  },
  {
    q: "Can I hug you right now? 🤗",
    title: "Happy Hug Day 🤗",
    msg: "Wrapped in you, always. Sorry but another best feeling in the world!",
    imgs: ["hug1.jpg", "hug2.jpg"]
  },
  {
    q: "Can I steal a kiss? 💋",
    title: "Happy Kiss Day 💋",
    msg: "Your juice lips 😭 uuuff. Every kiss with you feels like home. I could just kiss you all day long forever 😘 ",
    imgs: ["kiss1.gif", "kiss2.jpg"]
  },
  {
    q: "Monika, Will you be my Valentine? ❤️",
    title: "Happy Valentine’s Day ❤️",
    msg: "Forever & always. It’s you It has always been you.",
    imgs: ["valentine.jpg"]
  }
];

/* =========================
   DATE-BASED LOGIC
   Feb 7 – Feb 14
========================= */

var today = new Date();

// GitHub Pages runs in UTC, so adjust to local time
today.setHours(today.getHours() + today.getTimezoneOffset() / -60);

var month = today.getMonth(); // February = 1
var date = today.getDate();

var index;

// Valentine week: Feb 7 (0) → Feb 14 (7)
if (month === 1 && date >= 7 && date <= 14) {
  index = date - 7;
} else {
  index = 7; // Default to Valentine's Day if outside range
}

var todayData = days[index];
// Apply Valentine theme
if (todayData.title.includes("Valentine")) {
  document.body.classList.add("valentine-theme");
}

// Apply Kiss Day night vibe
if (todayData.title.includes("Kiss Day")) {
  document.body.classList.add("kiss-night");
}

/* =========================
   APPLY DAY CONTENT
========================= */

questionText.innerText = todayData.q;
finalTitle.innerText = todayData.title;
finalMessage.innerHTML = todayData.msg.replace(/\./g, ".<br><br>");


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
  if (input.toLowerCase() === secret.toLowerCase()) {
    lockScreen.style.display = "none";
    questionScreen.style.display = "flex";
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
  if (noClicks < 3) {
    noMessageBox.innerText = noMessages[noClicks];
    noMessageBox.style.opacity = "1";
    noMessageBox.style.transform = "translateY(-5px)";

    setTimeout(() => {
      noMessageBox.style.opacity = "0";
      noMessageBox.style.transform = "translateY(0)";
    }, 1200);
  }

  noClicks++;

  noBtn.style.transform = "scale(" + (1 - noClicks * 0.2) + ")";
  yesScale += 0.3;
  yesBtn.style.transform = "scale(" + yesScale + ")";

  if (noClicks >= 3) {
    noBtn.style.display = "none";
  }
};

yesBtn.onclick = function () {
  // block YES until 3 NO clicks
  if (noClicks < 3) {
    noMessageBox.innerText = "I know i'm tempting😌";
    noMessageBox.style.opacity = "1";
    noMessageBox.style.transform = "translateY(-5px)";

    setTimeout(() => {
      noMessageBox.style.opacity = "0";
      noMessageBox.style.transform = "translateY(0)";
    }, 1200);

    return;
  }

  questionScreen.style.display = "none";
  
  // Heart explosion burst
for (let i = 0; i < 40; i++) {
  setTimeout(createHeart, i * 40);
}

  setTimeout(() => {
  resultScreen.style.display = "block";

  setTimeout(() => {
    resultScreen.style.opacity = "1";
    resultScreen.style.transform = "translateY(0)";
  }, 50);

}, 1200);


/* 👇 ADD THIS PART */
setTimeout(() => {
  resultScreen.style.opacity = "1";
  resultScreen.style.transform = "translateY(0)";
}, 50);
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100);
  }
};
/* ===== Floating Hearts Generator ===== */

function createHeart() {
  var heart = document.createElement("img");
  heart.src = "floatinghearts.png";
  heart.className = "teddy";

  heart.style.left = Math.random() * 100 + "vw";

  // Random rotation start
  heart.style.transform = `rotate(${Math.random() * 360}deg)`;

  // Random speed
  heart.style.animationDuration = (Math.random() * 4 + 6) + "s";


  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 400);

// Giant heart every 6 seconds
setInterval(() => {
  var bigHeart = document.createElement("img");
  bigHeart.src = "floatinghearts.png";
  bigHeart.className = "teddy";
  bigHeart.style.width = "120px";
  bigHeart.style.left = Math.random() * 100 + "vw";
  bigHeart.style.animationDuration = "8s";

  document.body.appendChild(bigHeart);

  setTimeout(() => {
    bigHeart.remove();
  }, 8000);

}, 6000);


