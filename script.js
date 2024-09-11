let email = document.getElementById("emailinput");
let button = document.getElementById("button");
let paragraphemail = document.getElementById("paragraphemail");
let backgroundimg = document.getElementById("backgroundimg");
let body = document.body;

let buttonbackground1 = document.getElementById("buttonbackground1");
let buttonbackground2 = document.getElementById("buttonbackground2");
let allitems = document.getElementById("allitems");
let backgroundparagraph = document.getElementById("backgroundparagraph");
function choosebackground(imageUrl, color) {
  allitems.style.display = "block";

  if (imageUrl) {
    body.style.backgroundImage = `url(${imageUrl})`;
    body.style.backgroundColor = "";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    buttonbackground1.style.display = "none";
    buttonbackground2.style.display = "none";
    backgroundparagraph.style.display = "none";
  } else if (color) {
    body.style.backgroundImage = "";
    body.style.backgroundColor = color;
    buttonbackground2.style.display = "none";
    buttonbackground1.style.display = "none";
    backgroundparagraph.style.display = "none";
  }
}

buttonbackground1.addEventListener("click", function () {
  choosebackground("starter-code/assets/mobile/image-host.jpg", null);
});

buttonbackground2.addEventListener("click", function () {
  choosebackground(null, "black");
});

function RequestAccess() {
  let emailValue = email.value;
  if (emailValue.includes("@gmail.com") || emailValue.includes("@mail.ru")) {
    paragraphemail.style.display = "none";
  } else {
    paragraphemail.textContent = "Oops! Please check your email";
    paragraphemail.style.display = "block";
  }
}
button.addEventListener("click", RequestAccess);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    RequestAccess();
  }
});
let clickcount = 0;
function changecolor() {
  clickcount++;
  if (clickcount % 2 == 1) {
    body.style.backgroundImage =
      'url("starter-code/assets/mobile/image-host.jpg")';
  } else if (clickcount % 2 == 0) {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = `black`;
  }
}

backgroundimg.addEventListener("click", changecolor);
