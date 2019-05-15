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
let spark_plug = new Item("Spark Plug","is used to power small machines.")
let oil_lamp1 = new Item("Empty oil lamp","empty.")
let oil_canister = new Item("Oil Canister","filled to the brim with oil, strange the U.S should've bombed me by now.")
let armor_padding = new Item("Armor Padding","made of some sort of gel.")
let battering_ram = new Item("Battering Ram","going to help me break out, but it'll be loud.")
let ladder = new Item("Ladder","foldable.")
let wrench = new Item("Wrench","rusty but it'll work as a tool and a weapon.")
let bolts = new Item("Bolts","is useful for industrial repair.")
let metal_shard = new Item("Metal Shard","is from a small metal object, 'Emergency fi' is engraved on it.")
let lockbox = new Item("Lockbox","locked, duh.")
let lockbox_key = new Item("Lockbox Key","for a lockbox, duh")
let heat_glue1 = new Item("Heatproof Glue","used for things that produce a lot of heat.")
let heat_glue2 = new Item("Empty Glue bottle","empty, but at least it can be thrown.")
let small_device = new Item("Tracker","going to tell me if someone is near, I hope I won't need it.")
let swat_vest1 = new Item("SWAT vest","lacking in protective padding.")
let swat_vest2 = new Item("Padded SWAT vest","now padded with gel.")
let coat = new Item("Coat","Heatproof, and it came with a pressure valve.")
let pressure_valve = new Item("Pressure valve","in good shape dispite having a half-life of 3 years.")
let lighter1 = new Item("Broken Lighter","going to burn me if I use it without fixing the hole, 're Starter' is engraved on it.")
let lighter2 = new Item("Lighter","now usable, has 'Emergency fire starter' engraved on it.")

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
