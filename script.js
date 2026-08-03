let playeroneinput = document.querySelector(".playeroneinput");
let playeronebutton = document.querySelector(".playeronebutton");
let playertwoinput = document.querySelector(".playertwoinput");
let playertwobutton = document.querySelector(".playertwobutton");
let heading = document.querySelector(".heading");
let anotherheading = document.querySelector(".anotherheading");
let error = document.querySelector(".error");
let span = document.querySelector("span");
let img = document.querySelector("img");

let playerOneNumber;
let count = 5;

// Player One Function
playeronebutton.addEventListener("click", function () {
  if (playeroneinput.value == "") {
    error.style.color = "red";
    error.innerHTML = "Please give a number";
  } else {
    if (Number(playeroneinput.value)) {
      if (
        Number(playeroneinput.value) >= 1 &&
        Number(playeroneinput.value) <= 10
      ) {
        playerOneNumber = playeroneinput.value;
        span.innerHTML = count;
        error.innerHTML = "";
        heading.innerHTML = "Player-2";
        anotherheading.style.display = "block";
        displayControl("p1np2b");
      } else {
        error.style.color = "red";
        error.innerHTML = "Please give a number between 1 to 10";
      }
    } else {
      error.style.color = "red";
      error.innerHTML = "Please give a number";
    }
  }
});

// Player Two Function
playertwobutton.addEventListener("click", function () {
  if (playertwoinput.value == "") {
    error.style.color = "red";
    error.innerHTML = "Please give a number";
  } else {
    if (Number(playertwoinput.value)) {
      if (
        Number(playertwoinput.value) >= 1 &&
        Number(playertwoinput.value) <= 10
      ) {
        if (count > 0) {
          count--;
          span.innerHTML = count;
        }
        error.innerHTML = "";
        if (playerOneNumber == playertwoinput.value) {
          heading.innerHTML = "Player-2 Winner";
          displayControl("p1np2n");
        } else if (count == 0) {
          heading.innerHTML = "Player-1 Winner";
          displayControl("p1np2n");
        }
      } else {
        error.style.color = "red";
        error.innerHTML = "Please give a number between 1 to 10";
      }
    } else {
      error.style.color = "red";
      error.innerHTML = "Please give a number";
    }
  }
});

function displayControl(type) {
  if (type == "p1np2b") {
    playeroneinput.style.display = "none";
    playeronebutton.style.display = "none";
    playertwoinput.style.display = "inline-block";
    playertwobutton.style.display = "inline-block";
  } else if (type == "p1np2n") {
    playeroneinput.style.display = "none";
    playeronebutton.style.display = "none";
    playertwoinput.style.display = "none";
    playertwobutton.style.display = "none";
    anotherheading.style.display = "none";
    img.style.display = "block"
  }
}
