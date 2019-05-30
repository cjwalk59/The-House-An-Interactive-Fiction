alert("Loading main.js!"); //Don't change this line
player = new Player()
console.log("Loading game");
let jumpaction = /jump/;
let jump = function(action, player, object) {
  if (action == 'jump') {
    let text = "";
    addLine("You fall through the floor!");
    player.move(dungeon)
    player.cameFrom = null;
  }
  return player
}
addAction(jumpaction, jump);

let eatAction = /eat/;
let eat = function(action, player, object) {
  if (action == 'eat') {
    object.eat();
  }
  return player;
}
addAction(eatAction, eat);

vase.eat = function() {
  addLine("You ate the " + this.name)
}
player.move(hallway)
