alert("Loading main.js!"); //Don't change this line
player = new Player()

console.log("Loading game");
//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "It is dark");
// let bedroom = new Room('bedroom', 'It is a bedroom')
// var key = new Item('rusty key', 'It is a large, heavy brass key.')
// let dungeon = new Room('dungeon', 'Long, rusty chains hang from hooks on the walls. The floor is damp, and the room smells of mold and must.')


//1.) Create the function & the search term
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


//To create a function that interacts with an object...
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

orphan.eat = function(){
 addLine("You ate the crying child to stop the screeches, it cries out in excruciating pain as a futile attempt for help, but you crush it in between your teeth as you mercilessly slaughter the innocent child with nothing but bloodlust chiming in your head, blood spews everywhere you are a murderer. Are you happy with yourself? Think of it's foster parents who where worried sick about there new child since they cannot have one naturally, and you just tore it apart like an animal. Was the silence really worth it?")
}
// You can also extend the class, adding an eat() method to all items in your game.
// Item.prototype.eat = function() {
//   addLine("You ate the " + this.name);
// }

//Add the function to the action list



// Put them in their spots
hallway.addItem(vase);
hallway.addItem(room);
hallway.addItem(key);
room.addItem(bedroom);
room.addItem(hallway);


player.move(hallway)
