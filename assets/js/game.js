var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if(promptFight === 'fight' || promptFight === "FIGHT"){
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // If user entered skip
}else if(promptFight === 'skip' || promptFight === 'SKIP'){
    window.alert(playerName + " has chosen to skip the fight!");
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    playerMoney = playerMoney - 2;
  }
  else {
    fight();
  }
}
// If user entered a different answer than what was asked
else{
    window.alert("You need to choose a valid option. Try again!");
}
};
fight();