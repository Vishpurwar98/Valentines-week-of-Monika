var secret = "home";

var lockScreen = document.getElementById("lockScreen");
var questionScreen = document.getElementById("questionScreen");
var resultScreen = document.getElementById("resultScreen");

var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

var noClicks = 0;
var yesScale = 1;

function unlock() {
  var input = document.getElementById("secretInput").value;
  if (input.toLowerCase() === secret) {
    lockScreen.style.display = "none";
    questionScreen.style.display = "block";
  } else {
    alert("Not quite ❤️");
  }
}

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
  yesScale = yesScale + 0.3;
  yesBtn.style.transform = "scale(" + yesScale + ")";

  if (noClicks >= 3) {
    noBtn.style.display = "none";
  }
};

yesBtn.onclick = function () {
  questionScreen.style.display = "none";
  resultScreen.style.display = "block";
};
