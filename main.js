// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "It is dark");
let boiler_room = new Room("Boiler Room","It's colder than normal.");
let boiler = new Room("Boiler","The boiler doesn't seem to be working.");
let bodybag = new Room("Bodybag","I could hide in this but I won't know when I'm safe without assistance.");
let garage = new Room("Garage","The exit is welded shut.");
let closet = new Room("Closet","There's something on top but I'm not tall enough.");
let attic = new Room("Attic","I would need a light to see in here.");
let basement = new Room("Basement","If I were to go down here like an idiot, I'll need a light to see.");
let spark_plug = new Item("Spark Plug","")
let oil_lamp1 = new Item("Empty oil lamp","")
let oil_canister = new Item("","")
let armor_padding = new Item("","")
let battering_ram = new Item("","")
let ladder = new Item("","")
let wrench = new Item("","")
let bolts = new Item("","")
let metal_shard = new Item("","")
let lockbox = new Item("","")
let lockbox_key = new Item("","")
let heat_glue1 = new Item("","")
let heat_glue2 = new Item("","")
let small_device = new Item("","")
let swat_vest1 = new Item("","")
let coat = new Item("","")


// Put them in their spots
hallway.addItem(vase);
hallway.addItem(boiler_room);
hallway.addItem(basement);
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
attic.addItem(oil_canister);
attic.addItem(small_device);
closet.addItem(lockbox_key);
closet.addItem(coat);
basement.addItem(swat_vest1);
basement.addItem(battering_ram);

let locations = [];
locations.push(hallway, room);
player.location = new Room("hallway", "It is dark. The floorboards creak when you walk.");
player.location.addItems(locations);

player.location.enter();
