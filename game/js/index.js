function game(){
  var question = prompt("You run into a monster - do you run or fight?");

if (question === "run") {
  alert("you run away and trip over a log you hurt your ankle"); }

else {
  alert("you win the fight good job now you will have a monster carpet");
}
  
  
var question2 = prompt("the monster is gone now. what do you do next - stay or make weapons?");

if (question2 ==="make weapons") {
  alert("now no one will mess with you, you built a spear, bow and arrow and a sheild");
 var weapon = prompt ("what will you do with your weapons? do you go out to find more food or just stay put");
  
  if (weapon ==="stay put") {
    alert("you build a shelter its's better than you expected to be its a mansion you WINNER!!");
  }
  
  else {
  alert("you keep walking you run into a bowl of spgetti! you eat it's posioned GAME OVER!!!");  
}
}

}