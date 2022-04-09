var randomvalue = Math.floor(Math.random()*6)  + 1;
var randomImage = "images/dice"+randomvalue+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomvalue2 = Math.floor(Math.random()*6)  + 1;
var randomImage2 = "images/dice"+randomvalue2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomvalue>randomvalue2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomvalue2>randomvalue) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";

}
else{
  document.querySelector("h1").innerHTML = "Draw!!.. Refresh It Again";
}
