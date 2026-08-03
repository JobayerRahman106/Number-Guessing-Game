let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobutton = document.querySelector(".playertwobutton")
let heading = document.querySelector(".heading")
let error = document.querySelector(".error")

playeronebutton.addEventListener("click", function(){

    if (playeroneinput.value == "") {
      error.style.color = "red";
      error.innerHTML = "Please give a number";
    } 
    else {
      if (Number(playeroneinput.value)) {
        error.innerHTML = "";
        heading.innerHTML = "Player-2"
        displayControl("p1np2b")
      } else {
        error.style.color = "red";
        error.innerHTML = "Please give a number";
      }
    }

})

function displayControl (type){

    if(type == "p1np2b"){
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
        playertwoinput.style.display = "inline-block"
        playertwobutton.style.display = "inline-block"
    }
}