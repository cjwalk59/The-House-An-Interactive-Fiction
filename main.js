// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()
//Create your objects
let hallway = new Room("hallway", "clouds of dust kick up with every step.");
let start = new Room("tutorial room","going to help you survive.");
let damp_room = new Room("dark room", "It is dark and flooded.");
let boiler_room = new Room("boiler room","It's colder than normal.");
let boiler = new Room("boiler","The boiler doesn't seem to be working since it got so hot it evaprated water.");
let bodybag = new Room("bodybag","I could hide in this but I won't know when I'm safe without assistance.");
let garage = new Room("garage","The exit has melted shut, I'll need to ram it open after I put a few cracks in it.");
let closet = new Room("closet","There's something on top but I'm not tall enough.");
let attic = new Room("attic","I would need a light to see in here.");
let basement = new Room("basement","If I were to go down here like an idiot, I'll need a light to see.");
let driveway = new Room("driveway","It's so hot the asphalt is melting, it's as if I'm not on earth.");
let park = new Room("abandoned park","This place had seen better days... wait how did I know that?")
let note = new Item("inspect worthy note","saying that you can DISAPPOINTYOURFAMILY, EAT orphans, SICKFLIP, say FECK, and ENDMYSUFFERING.")
let gun = new Item("magnum","empty, COMBINE with bullet.")
let bullet = new Item("bullet","for a pistol, TAKE me.")
let ammo = new Item("ammo","a full container of lead slugs.")
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let warning = new Item("warning","saying not to look at this link, https://www.youtube.com/watch?v=dQw4w9WgXcQ and the handwriting is strangely familiar to you, like you know who wrote this... maybe you should ignore the warning and do it anyway.")
let spark_plug = new Item("spark plug","is used to power small machines.")
let oil_lamp1 = new Item("empty oil lamp","empty.")
let oil_canister = new Item("oil canister","filled to the brim with oil, strange the U.S should've bombed me by now.")
let armor_padding = new Item("padding","made of some sort of gel.")
let battering_ram = new Item("battering ram","going to help me break out, but it'll be loud.")
let car_jack = new Item("car jack","a little slippery.")
let cement_mix = new Item("cement mix","sturdier than other variations of cement.")
let ladder = new Item("large ladder","foldable.")
let wrench = new Item("wrench","rusty but it'll work as a tool and a weapon.")
let bolts = new Item("metal bolts","is useful for industrial repair.")
let metal_shard = new Item("metal shard","is from a small metal object, 'Emergency fi' is engraved on it.")
let lockbox = new Item("lockbox","locked, duh.")
let lockbox_key = new Item("lockbox key","for a lockbox, duh")
let heat_glue1 = new Item("heatproof glue","used for things that produce a lot of heat.")
let heat_glue2 = new Item("empty glue bottle","empty, but at least it can be thrown.")
let small_device = new Item("tracker","going to tell me if someone is near, I hope I won't need it.")
let swat_vest1 = new Item("SWAT vest","lacking in protective padding, but came with ammo.")
let swat_vest2 = new Item("padded SWAT vest","now padded with gel but it's only good for force distribution and not bullets.")
let coat1 = new Item("coat","fire resistant, and it came with a pressure valve.")
let coat2 = new Item("chilled coat","completely heatproof, this thing won't melt even in next to a volcano... wait how do I know that?")
let pressure_valve = new Item("pressure valve","in good shape dispite having a half-life of 3 years.")
let lighter1 = new Item("broken lighter","going to burn me if I use it without fixing the hole, 're Starter' is engraved on it.")
let lighter2 = new Item("lighter","now usable, has 'Emergency fire starter' engraved on it.")
let generator = new Item("generator","an old fashoned guzzler.")
let dolly = new Item("dolly","going to save my back a lot of trouble.")
let jackhammer = new Item("jackhammer","in surprisingly good shape, I can certain put dents in things with it if I could lift it.")
let car = new Item("crashed police cruiser","completely totaled and will never work again, but why all the molten metal?")
let orphan = new Item("disabled orphan","only a newborn and it's already abused regularly, it's so LOUD and riddled with singed holes.")
// Put them in their spots
start.addItem(gun);
start.addItem(bullet);
start.addItem(warning);
start.addItem(note);
start.addItem(hallway);
hallway.addItem(vase);
hallway.addItem(boiler_room);
hallway.addItem(basement);
hallway.addItem(orphan);
basement.addItem(swat_vest1);
basement.addItem(battering_ram);
basement.addItem(damp_room);
damp_room.addItem(cement_mix);
damp_room.addItem(car_jack);
boiler_room.addItem(boiler);
boiler_room.addItem(bodybag);
boiler_room.addItem(spark_plug);
boiler_room.addItem(oil_lamp1);
boiler_room.addItem(garage);
bodybag.addItem(armor_padding);
bodybag.addItem(ladder);
boiler.addItem(wrench);
boiler.addItem(metal_shard);
garage.addItem(bolts);
garage.addItem(lockbox);
garage.addItem(attic);
garage.addItem(heat_glue1);
garage.addItem(generator);
garage.addItem(jackhammer);
garage.addItem(driveway);
driveway.addItem(car);
driveway.addItem(park);
attic.addItem(oil_canister);
attic.addItem(small_device);
closet.addItem(lockbox_key);
closet.addItem(coat1);

let checkAction =/check/;
let check =function(action, player, object) {
  if (action == 'check'){
    let l = list(player.inventory);
    addLine("Item List: " + l)
  }
  return player
}
addAction(checkAction, check);

let takeAction = /take/;
let take = function(action, player, object) {
  if (action == 'take') {
    player.inventory.push(object);
    addLine("You take the " + object.name + ' and put it away.')
  }
  return player;
}
addAction(takeAction, take);

let feckAction = /feck/;
let feck = function(action, player, object) {
 if (action == 'feck'){
   addLine("You say feck out loud and... nothing happened.")
 }
 return player;
}
addAction(feckAction, feck);

let endmysufferingAction = /end my suffering/;
let endmysuffering = function(action, player, object) {
  if (action == 'end my suffering') {
    addLine("You've finally had enough of the pain and take some painkillers for your stomach, what did you think I meant and do you know why you have them?")
  }
  return player;
}
addAction(endmysufferingAction, endmysuffering);

let disappointyourfamilyAction = /disappoint your family/;
let disappointyourfamily = function(action, player, object) {
  if (action == 'disappoint your family') {
    addLine("You dab and immediately get shot, when you wake a voice says welcome back and goes quiet, this is why you were put up for adoption you stupid fecker.")
  }
  return player;
}
addAction(disappointyourfamilyAction, disappointyourfamily);

let eatAction = /eat/;
let eat = function(action, player, object) {
  if (action == 'eat') {
    object.eat();
  }
  return player;
}
addAction(eatAction, eat);

let sickflipAction = /sickflip/;
let sickflip = function(action, player, object) {
  if (action == 'sickflip') {
    addLine("You perform a backflip and a mysterious crowd starts to clap, very unnerving.")
  }
  return player;
}
addAction(sickflipAction, sickflip);

orphan.eat = function(){
 addLine("You gorge on the crying child to stop the screeches, it cries out in excruciating pain in a desperate but futile attempt to be spared, but no you crush it in between your teeth as you mercilessly slaughter the innocent child with nothing but bloodlust and malice chiming in your skull as blood spews everywhere and onto the walls of this damned place. As powdered bone falls to the ground to be stamped out from under your boots as internal organs slop out of your gullet and stain your shirt red with blood and hatred, but no this meager sacrifice cannot saciate your desire for innocent life. Are you happy with yourself? Do you feel ecstasy from the slaughter? Think of it's foster parents who where worried sick about their new child because they're unable to concive one naturally, and you just tore it apart like an animal from hell. That child has been abused all it's life and you put the nail in the coffin. Was the silence really worth it you heartless bastard!?")
}

let locations = [];
player.move(start);
