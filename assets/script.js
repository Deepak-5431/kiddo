const itemDetails = {
    aeroplane: { name: "Aeroplane", folder: "aeroplane", details: "A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.", carousel: ["aeroplane.png", "aeroplane1.png", "aeroplane2.png", "aeroplane3.png"], icon: "aeroplane.png", soundFile: "aeroplane.mp3" },
    ant: { name: "Ant", folder: "ant", details: "A social insect known for living in organized colonies.", carousel: ["ant.png", "ant2.png", "ant3.png", "ant1.png"], icon: "ant.png", soundFile: "antsound.mp3" },
    arm: { name: "Arm", folder: "arm", details: "One of the upper limbs of the human body, used for reaching, lifting, and touching.", carousel: ["arm.png", "arm1.png", "arm2.png", "arm3.png"], icon: "arm.png", soundFile: "armsound.mp3" },
    asteroid: { name: "Asteroid", folder: "asteroid", details: "A small rocky body orbiting the Sun.", carousel: ["asteroid1.jpeg", "asteroid2.jpeg", "asteroid3.jpeg", "asteroid4.jpeg"], icon: "asteroid1.jpeg", soundFile: "asteroidsound.mp3" },
    astronaut: { name: "Astronaut", folder: "astronaut", details: "A person trained to travel and work in space.", carousel: ["astronaut.png", "astronaut1.png", "astronaut2.png", "astronaut3.png"], icon: "astronaut.png", soundFile: "astronautsound.mp3" },
    beans: { name: "Beans", folder: "beans", details: "Edible seeds from the legume family.", carousel: ["beans.png", "beans1.png", "beans2.png"], icon: "beans.png", soundFile: "beans.mp3" },
    bear: { name: "Bear", folder: "bear", details: "Powerful omnivores with excellent fishing abilities.", carousel: ["bear.png", "bear1.png", "bear2.png"], icon: "bear.png", soundFile: "bearsound.mp3" },
    bedbug: { name: "Bed Bug", folder: "bedbug", details: "Small, reddish-brown parasitic insects that feed on blood.", carousel: ["bedbug.png", "bedbug1.png", "bedbug2.png"], icon: "bedbug1.png", soundFile: "bedbugsound.mp3" },
    beetle: { name: "Beetle", folder: "beetle", details: "A large group of insects known for their hard, shell-like front wings.", carousel: ["beetle.png", "beetle1.png", "beetle2.png"], icon: "beetle1.png", soundFile: "beetlesound.mp3" },
    beetroot: { name: "Beetroot", folder: "beetroot", details: "A root vegetable with a deep red-purple color.", carousel: ["beetroot.png", "beetroot1.png", "beetroot2.png"], icon: "beetroot.png", soundFile: "beetroot.mp3" },
    bicycle: { name: "Bicycle", folder: "bicycle", details: "A human-powered vehicle with two wheels arranged in tandem, propelled by pedals.", carousel: ["bicycle.png", "bicycle1.png", "bicycle2.png", "bicycle3.png"], icon: "bicycle.png", soundFile: "bicycle.mp3" },
    bittergourd: { name: "Bittergourd", folder: "bittergourd", details: "A tropical vine known for its bitter fruit.", carousel: ["bittergourd.png", "bittergourd1.png", "bittergourd2.png"], icon: "bittergourd.png", soundFile: "bittergourd.mp3" },
    bladder: { name: "Bladder", folder: "bladder", details: "An organ in the pelvis that stores urine from the kidneys.", carousel: ["bladder.png", "bladder1.png", "bladder2.png", "bladder3.png"], icon: "bladder.png", soundFile: "bladdersound.mp3" },
    boat: { name: "Boat", folder: "boat", details: "A small vessel for traveling on water, propelled by oars, sails, or an engine.", carousel: ["boat.png", "boat1.png", "boat2.png", "boat3.png"], icon: "boat.png", soundFile: "boat.mp3" },
    bottlegourd: { name: "Bottlegourd", folder: "bottlegourd", details: "Also known as calabash.", carousel: ["bottlegourd.png", "bottlegourd1.png", "bottlegourd2.png"], icon: "bottlegourd.png", soundFile: "bottlegourd.mp3" },
    brain: { name: "Brain", folder: "brain", details: "The control center of the nervous system, responsible for thought and controlling the body.", carousel: ["brain.png", "brain1.png", "brain2.png", "brain3.png"], icon: "brain.png", soundFile: "brainsound.mp3" },
    broccoli: { name: "Broccoli", folder: "broccoli", details: "A green, flowering vegetable.", carousel: ["broccoli.png", "broccoli1.png", "broccoli2.png"], icon: "broccoli.png", soundFile: "broccoli.mp3" },
    buffalo: { name: "Buffalo", folder: "buffalo", details: "Large domesticated animals used for work and milk.", carousel: ["buffalo.png", "buffalo1.png", "buffalo2.png"], icon: "buffalo.png", soundFile: "buffalosound.mp3" },
    bus: { name: "Bus", folder: "bus", details: "A large motor vehicle carrying passengers by road, typically operating on a fixed route.", carousel: ["bus.png", "bus1.png", "bus2.png", "bus3.png"], icon: "bus.png", soundFile: "bus.mp3" },
    butterfly: { name: "Butterfly", folder: "butterfly", details: "An insect with large, often brightly colored wings.", carousel: ["butterfly.png", "butterfly2.png", "butterfly3.png", "butterfly1.png"], icon: "butterfly.png", soundFile: "butterflysound.mp3" },
    cabbage: { name: "Cabbage", folder: "cabbage", details: "A leafy vegetable with a dense, rounded head.", carousel: ["cabbage.png", "cabbage1.png", "cabbage2.png"], icon: "cabbage.png", soundFile: "cabbage.mp3" },
    camel: { name: "Camel", folder: "camel", details: "Large, long-necked animals with humps.", carousel: ["camel.png", "camel1.png", "camel2.png"], icon: "camel.png", soundFile: "camelsound.mp3" },
    capsicum: { name: "Capsicum", folder: "capsicum", details: "Also known as bell pepper.", carousel: ["capsicum.png", "capsicum1.png", "capsicum2.png"], icon: "capsicum.png", soundFile: "capsicum.mp3" },
    car: { name: "Car", folder: "car", details: "A four-wheeled road vehicle powered by an engine and able to carry a small number of people.", carousel: ["car.png", "car1.png", "car2.png", "car3.png"], icon: "car.png", soundFile: "car.mp3" },
    carrot: { name: "Carrot", folder: "carrot", details: "Root vegetables with a sweet flavor.", carousel: ["carrot.png", "carrot1.png", "carrot2.png"], icon: "carrot.png", soundFile: "carrot.mp3" },
    cart: { name: "Cart", folder: "cart", details: "A vehicle with either two or four wheels, pulled by a horse or other animal, used for carrying goods.", carousel: ["cart.png", "cart1.png", "cart2.png", "cart3.png"], icon: "cart.png", soundFile: "cart.mp3" },
    cat: { name: "Cat", folder: "cat", details: "A small domesticated carnivorous mammal.", carousel: ["cat.png", "cat1.jpg", "cat2.jpg"], icon: "cat3.png", soundFile: "catsound.wav" },
    caterpillar: { name: "Caterpillar", folder: "caterpillar", details: "The larval stage of a butterfly or moth, before it transforms.", carousel: ["caterpillar.png", "caterpillar1.png", "caterpillar2.png"], icon: "caterpillar1.png", soundFile: "caterpillarsound.mp3" },
    cauliflower: { name: "Cauliflower", folder: "cauliflower", details: "Related to broccoli, cabbage, and kale.", carousel: ["cauliflower.png", "cauliflower1.png", "cauliflower2.png"], icon: "cauliflower.png", soundFile: "cauliflower.mp3" },
    centipede: { name: "Centipede", folder: "centipede", details: "Long-bodied arthropods with many pairs of legs.", carousel: ["centipede.png", "centipede1.png", "centipede2.png"], icon: "centipede1.png", soundFile: "centipedesound.mp3" },
    cheetah: { name: "Cheetah", folder: "cheetah", details: "Fastest land animal, reaching speeds up to 120 km/h.", carousel: ["cheetah.png", "cheetah1.png", "cheetah2.png"], icon: "cheetah.png", soundFile: "cheetahsound.mp3" },
    cherryBlossom: { name: "Cherry Blossom", folder: "cherryblossom", details: "Symbolic flowers of spring, known for their transient beauty and delicate pink and white hues.", carousel: ["cherryblossom.png", "cherryblossom1.png", "cherryblossom2.png", "cherryblossom3.png"], icon: "cherryblossom.png", soundFile: "cherryblossomsound.mp3" },
    chimpanzee: { name: "Chimpanzee", folder: "chimpanzee", details: "Highly intelligent apes that use tools.", carousel: ["chimpanzee.png", "chimpanzee1.png", "chimpanzee2.png"], icon: "chimpanzee.png", soundFile: "chimpanzeesound.mp3" },
    chin: { name: "Chin", folder: "chin", details: "The protruding part of the face below the mouth, formed by the apex of the lower jaw.", carousel: ["chin.png", "chin1.png", "chin2.png", "chin3.png"], icon: "chin.png", soundFile: "chinsound.mp3" },
    cicada: { name: "Cicada", folder: "cicada", details: "Stout-bodied insects known for their loud, buzzing summer song.", carousel: ["cicada.png", "cicada1.png", "cicada2.png"], icon: "cicada1.png", soundFile: "cicadasound.mp3" },
    cockroach: { name: "Cockroach", folder: "cockroach", details: "A resilient insect with a flattened body, known for inhabiting human dwellings.", carousel: ["cockroach.png", "cockroach2.png", "cockroach3.png", "cockroach.png"], icon: "cockroach.png", soundFile: "cockroachsound.mp3" },
    comet: { name: "Comet", folder: "comet", details: "A celestial object of ice and dust that has a long tail of gas when near the sun.", carousel: ["comet.png", "comet1.png", "comet2.png", "comet3.png"], icon: "comet.png", soundFile: "cometsound.mp3" },
    coriander: { name: "Coriander", folder: "coriander", details: "Also known as cilantro.", carousel: ["coriander.png", "coriander1.png", "coriander2.png"], icon: "coriander.png", soundFile: "coriander.mp3" },
    corn: { name: "Corn", folder: "corn", details: "Also known as maize.", carousel: ["corn.png", "corn1.png", "corn2.png"], icon: "corn.png", soundFile: "corn.mp3" },
    cow: { name: "Cow", folder: "cow", details: "Commonly raised as livestock for meat and milk.", carousel: ["cow1.jpg", "cow2.jpg", "cow3.jpg"], icon: "cow.jpg", soundFile: "cowsound.wav" },
    coyote: { name: "Coyote", folder: "coyote", details: "Adaptable canines known for their cleverness and howls.", carousel: ["coyote.png", "coyote1.png", "coyote2.png"], icon: "coyote.png", soundFile: "coyotesound.mp3" },
    crane: { name: "Crane", folder: "crane", details: "Large, long-legged, and long-necked birds.", carousel: ["crane.png", "crane1.png", "crane2.png"], icon: "crane.png", soundFile: "cranesound.mp3" },
    crocodile: { name: "Crocodile", folder: "crocodile", details: "Large amphibious reptiles with powerful jaws.", carousel: ["crocodile.png", "crocodile1.png", "crocodile2.png"], icon: "crocodile.png", soundFile: "crocodilesound.mp3" },
    crow: { name: "Crow", folder: "crow", details: "Intelligent, adaptable, and social birds.", carousel: ["crow.png", "crow1.png", "crow2.png"], icon: "crow.png", soundFile: "crowsound.mp3" },
    cucumber: { name: "Cucumber", folder: "cucumber", details: "A widely cultivated, creeping vine plant.", carousel: ["cucumber.png", "cucumber1.png", "cucumber2.png"], icon: "cucumber.png", soundFile: "cucumber.mp3" },
    daisy: { name: "Daisy", folder: "daisy", details: "Common flowers with white petals and a yellow center, often symbolizing innocence and purity.", carousel: ["daisy.png", "daisy1.png", "daisy2.png", "daisy3.png"], icon: "daisy.png", soundFile: "daisysound.mp3" },
    deer: { name: "Deer", folder: "deer", details: "Graceful animals found in forests and grassland.", carousel: ["deer.png", "deer1.png", "deer2.png"], icon: "deer.png", soundFile: "deersound.mp3" },
    dog: { name: "Dog", folder: "dog", details: "A domesticated descendant of the wolf.", carousel: ["dg1.jpg", "dg2.jpg", "dg3.jpg"], icon: "dog.png", soundFile: "dogsound.wav" },
    dolphin: { name: "Dolphin", folder: "dolphin", details: "Intelligent marine mammals known for echolocation.", carousel: ["dolphin.png", "dolphin1.png", "dolphin2.png"], icon: "dolphin.png", soundFile: "dolphinsound.mp3" },
    donkey: { name: "Donkey", folder: "donkey", details: "Domesticated mammals of the horse family.", carousel: ["donkey.png", "donkey1.png", "donkey2.png"], icon: "donkey.png", soundFile: "donkeysound.mp3" },
    dove: { name: "Dove", folder: "dove", details: "Small to medium-sized birds of the pigeon family.", carousel: ["dove.png", "dove1.png", "dove2.png"], icon: "dove.png", soundFile: "dovesound.mp3" },
    dragonfly: { name: "Dragonfly", folder: "dragonfly", details: "Fast-flying insects with two pairs of large, transparent wings.", carousel: ["dragonfly.png", "dragonfly1.png", "dragonfly2.png"], icon: "dragonfly1.png", soundFile: "dragonflysound.mp3" },
    duck: { name: "Duck", folder: "duck", details: "Birds also referred to as waterfowls.", carousel: ["duck.png", "duck1.png", "duck2.png"], icon: "duck.png", soundFile: "ducksound.mp3" },
    eagle: { name: "Eagle", folder: "eagle", details: "Large, powerful birds of prey.", carousel: ["eagle.png", "eagle1.png", "eagle2.png"], icon: "eagle.png", soundFile: "eaglesound.mp3" },
    ear: { name: "Ear", folder: "ear", details: "The organ of hearing and balance in humans and other vertebrates.", carousel: ["ear.png", "ear1.png", "ear2.png", "ear3.png"], icon: "ear.png", soundFile: "earsound.mp3" },
    earth: { name: "Earth", folder: "earth", details: "The third planet from the Sun, the only place known to harbor life.", carousel: ["earth.png", "earth1.png", "earth2.png", "earth3.png"], icon: "earth.png", soundFile: "earthsound.mp3" },
    earthworm: { name: "Earthworm", folder: "earthworm", details: "A tube-shaped, segmented worm that lives in the soil.", carousel: ["earthworm.png", "earthworm1.png", "earthworm2.png"], icon: "earthworm1.png", soundFile: "earthwormsound.mp3" },
    eggplant: { name: "Eggplant", folder: "eggplant", details: "Also known as aubergine or brinjal.", carousel: ["eggplant.png", "eggplant1.png", "eggplant2.png"], icon: "eggplant.png", soundFile: "eggplant.mp3" },
    elephant: { name: "Elephant", folder: "elephant", details: "The largest existing land animals.", carousel: ["elel1.png", "elel2.png", "elel3.jpg"], icon: "elephant.jpg", soundFile: "elephantsound.mp3" },
    emu: { name: "Emu", folder: "emu", details: "A large, flightless bird native to Australia.", carousel: ["emu.png", "emu1.png", "emu2.png"], icon: "emu.png", soundFile: "emusound.mp3" },
    eye: { name: "Eye", folder: "eye", details: "The organ of sight, which detects light and converts it into signals that are sent to the brain.", carousel: ["eye.png", "eye1.png", "eye2.png", "eye3.png"], icon: "eye.png", soundFile: "eyesound.mp3" },
    eyebrow: { name: "Eyebrow", folder: "eyebrow", details: "A strip of hair growing on the ridge above the eye socket, which helps keep sweat out of the eyes.", carousel: ["eyebrow.png", "eyebrow1.png", "eyebrow2.png", "eyebrow3.png"], icon: "eyebrow.png", soundFile: "eyebrowsound.mp3" },
    ferry: { name: "Ferry", folder: "ferry", details: "A boat or ship for conveying passengers and goods, especially over a relatively short distance.", carousel: ["ferry.png", "ferry1.png", "ferry2.png", "ferry3.png"], icon: "ferry.png", soundFile: "ferry.mp3" },
    fingers: { name: "Fingers", folder: "fingers", details: "The five digits at the end of the human hand, used for touching and gripping objects.", carousel: ["fingers.png", "fingers1.png", "fingers2.png", "fingers3.png"], icon: "fingers.png", soundFile: "fingerssound.mp3" },
    firefly: { name: "Firefly", folder: "firefly", details: "A winged beetle known for using bioluminescence to attract mates.", carousel: ["firefly1.jpeg", "firefly2.jpeg", "firefly3.jpeg", "firefly1.jpeg"], icon: "firefly1.jpeg", soundFile: "fireflysound.mp3" },
    flamingo: { name: "Flamingo", folder: "flamingo", details: "Tall, pink wading birds with long legs and necks.", carousel: ["flamingo.png", "flamingo1.png", "flamingo2.png"], icon: "flamingo.png", soundFile: "flamingosound.mp3" },
    foot: { name: "Foot", folder: "foot", details: "The part of the leg below the ankle, on which a person stands and walks.", carousel: ["foot.png", "foot1.png", "foot2.png", "foot3.png"], icon: "foot.png", soundFile: "footsound.mp3" },
    garlic: { name: "Garlic", folder: "garlic", details: "A bulbous herb used in cooking.", carousel: ["garlic.png", "garlic1.png", "garlic2.png"], icon: "garlic.png", soundFile: "garlic.mp3" },
    giraffe: { name: "Giraffe", folder: "giraffe", details: "Tallest mammals with distinctive net-like coat patterns.", carousel: ["giraffe.png", "giraffe1.png", "giraffe2.png"], icon: "giraffe.png", soundFile: "giraffesound.mp3" },
    goat: { name: "Goat", folder: "goat", details: "Known for their milk, meat, and wool production.", carousel: ["goat.png", "goat1.png", "goat2.png"], icon: "goat.png", soundFile: "goatsound.mp3" },
    goose: { name: "Goose", folder: "goose", details: "Large, social waterfowl known for honking calls.", carousel: ["goose.png", "goose1.png", "goose2.png"], icon: "goose.png", soundFile: "goosesound.mp3" },
    gorilla: { name: "Gorilla", folder: "gorilla", details: "Gentle giants with complex social structures.", carousel: ["gorilla.png", "gorilla1.png", "gorilla2.png"], icon: "gorilla.png", soundFile: "gorillasound.mp3" },
    grasshopper: { name: "Grasshopper", folder: "grasshopper", details: "Insects known for their powerful hind legs, which they use for jumping.", carousel: ["grasshopper1.jpeg", "grasshopper2.jpeg", "grasshopper3.jpeg", "grasshopper1.jpeg"], icon: "grasshopper1.jpeg", soundFile: "grasshoppersound.mp3" },
    hair: { name: "Hair", folder: "hair", details: "Fine threadlike strands growing from the skin of humans, mammals, and some other animals.", carousel: ["hair.png", "hair1.png", "hair2.png", "hair3.png"], icon: "hair.png", soundFile: "hairsound.mp3" },
    hamster: { name: "Hamster", folder: "hamster", details: "Small rodents known for their cheek pouches.", carousel: ["hamster.png", "hamster1.png", "hamster2.png"], icon: "hamster.png", soundFile: "hamstersound.mp3" },
    hand: { name: "Hand", folder: "hand", details: "The part of a person's arm beyond the wrist, including the palm, fingers, and thumb.", carousel: ["hand.png", "hand1.png", "hand2.png", "hand3.png"], icon: "hand.png", soundFile: "handsound.mp3" },
    hawk: { name: "Hawk", folder: "hawk", details: "Medium-sized birds of prey.", carousel: ["hawk.png", "hawk1.png", "hawk2.png"], icon: "hawk.png", soundFile: "hawksound.mp3" },
    head: { name: "Head", folder: "head", details: "The upper part of the human body, containing the brain, mouth, and sense organs.", carousel: ["head.png", "head1.png", "head2.png", "head3.png"], icon: "head.png", soundFile: "headsound.mp3" },
    heart: { name: "Heart", folder: "heart", details: "A muscular organ that pumps blood through the circulatory system by contraction and dilation.", carousel: ["heart.png", "heart1.png", "heart2.png", "heart3.png"], icon: "heart.png", soundFile: "heartsound.mp3" },
    helicopter: { name: "Helicopter", folder: "helicopter", details: "A type of aircraft that derives both lift and propulsion from horizontally rotating overhead blades.", carousel: ["helicopter.png", "helicopter1.png", "helicopter2.png", "helicopter3.png"], icon: "helicopter.png", soundFile: "helicopter.mp3" },
    hen: { name: "Hen", folder: "hen", details: "A mature female chicken, known for laying eggs.", carousel: ["hen.png", "hen1.png", "hen2.png"], icon: "hen.png", soundFile: "hensound.mp3" },
    hibiscus: { name: "Hibiscus", folder: "hibiscus", details: "Large, trumpet-shaped flowers with prominent stamens, found in warm, tropical climates.", carousel: ["hibiscus.png", "hibiscus1.png", "hibiscus2.png", "hibiscus3.png"], icon: "hibiscus.png", soundFile: "hibiscussound.mp3" },
    hippopotamus: { name: "Hippopotamus", folder: "hippopotamus", details: "Large, semi-aquatic mammals.", carousel: ["hippopotamus.png", "hippopotamus1.png", "hippopotamus2.png"], icon: "hippopotamus.png", soundFile: "hippopotamussound.mp3" },
    hollyhock: { name: "Hollyhock", folder: "hollyhock", details: "A tall, stately plant with large, colorful flowers that grow along its main stem.", carousel: ["hollyhock.png", "hollyhock1.png", "hollyhock2.png", "hollyhock3.png"], icon: "hollyhock.png", soundFile: "hollyhocksound.mp3" },
    honeyBee: { name: "Honey Bee", folder: "honeybee", details: "Flying insects known for producing honey and pollinating flowers.", carousel: ["honeybee1.png", "honeybee2.png", "honeybee3.png", "honeybee1.png"], icon: "honeybee1.png", soundFile: "honeybeesound.mp3" },
    hornet: { name: "Hornet", folder: "hornet", details: "The largest type of wasp, known for building large paper nests.", carousel: ["hornet.png", "hornet1.png", "hornet2.png"], icon: "hornet1.png", soundFile: "hornetsound.mp3" },
    horse: { name: "Horse", folder: "horse", details: "Large, strong mammals with a single hoofed toe.", carousel: ["horse.png", "horse1.png", "horse2.png"], icon: "horse.png", soundFile: "horsesound.mp3" },
    hotAirBalloon: { name: "Hot Air Balloon", folder: "hotair-ballon", details: "A large bag filled with hot air or gas to make it rise in the air, with a basket for passengers.", carousel: ["hotair-ballon.png", "hotair-ballon1.png", "hotair-ballon2.png", "hotair-ballon3.png"], icon: "hotair-ballon.png", soundFile: "hotair-ballon.mp3" },
    housefly: { name: "Housefly", folder: "housefly", details: "A very common fly species found all over the world.", carousel: ["housefly.png", "housefly1.png", "housefly2.png"], icon: "housefly1.png", soundFile: "houseflysound.mp3" },
    hummingbird: { name: "Hummingbird", folder: "hummingbird", details: "Small, vibrant birds with incredible flying abilities.", carousel: ["hummingbird.png", "hummingbird1.png", "hummingbird2.png"], icon: "hummingbird.png", soundFile: "hummingbirdsound.mp3" },
    intestine: { name: "Intestine", folder: "intestine", details: "The long, tube-like organ in the abdomen that completes the process of digestion.", carousel: ["intestine.png", "intestine1.png", "intestine2.png", "intestine3.png"], icon: "intestine.png", soundFile: "intestinesound.mp3" },
    iris: { name: "Iris", folder: "iris", details: "Distinctive flowers with three large, drooping outer petals and three inner, upright petals.", carousel: ["iris.png", "iris1.png", "iris2.png", "iris3.png"], icon: "iris.png", soundFile: "irissound.mp3" },
    jeep: { name: "Jeep", folder: "jeep", details: "A rugged, four-wheel drive vehicle, especially used by the military or for off-road travel.", carousel: ["jeep.png", "jeep1.png", "jeep2.png", "jeep3.png"], icon: "jeep.png", soundFile: "jeep.mp3" },
    jupiter: { name: "Jupiter", folder: "jupiter", details: "The largest planet in our solar system, known for its Great Red Spot.", carousel: ["jupiter.png", "jupiter1.png", "jupiter2.png", "jupiter3.png"], icon: "jupiter.png", soundFile: "jupitersound.mp3" },
    kangaroo: { name: "Kangaroo", folder: "kangaroo", details: "Largest marsupials, capable of high-speed hopping.", carousel: ["kangaroo.png", "kangaroo1.png", "kangaroo2.png"], icon: "kangaroo.png", soundFile: "kangaroosound.mp3" },
    kidney: { name: "Kidney", folder: "kidney", details: "A pair of organs that filter waste products from the blood and produce urine.", carousel: ["kidney.png", "kidney1.png", "kidney2.png", "kidney3.png"], icon: "kidney.png", soundFile: "kidneysound.mp3" },
    kingfisher: { name: "Kingfisher", folder: "kingfisher", details: "Small to medium-sized, brightly colored birds.", carousel: ["kingfisher.png", "kingfisher1.png", "kingfisher2.png"], icon: "kingfisher.png", soundFile: "kingfishersound.mp3" },
    ladybug: { name: "Ladybug", folder: "ladybug", details: "Small beetles, easily recognized by their colorful, often spotted, shell-like wings.", carousel: ["ladybug1.png", "ladybug2.png", "ladybug3.png", "ladybug1.png"], icon: "ladybug1.png", soundFile: "ladybugsound.mp3" },
    ladyfinger: { name: "Ladyfinger", folder: "ladyfinger", details: "Also known as okra or bhindi.", carousel: ["ladyfinger.png", "ladyfinger1.png", "ladyfinger2.png"], icon: "ladyfinger.png", soundFile: "ladyfinger.mp3" },
    lavender: { name: "Lavender", folder: "lavender", details: "Aromatic purple flowers grown in long spikes, widely used for their calming scent and essential oils.", carousel: ["lavender.png", "lavender1.png", "lavender2.png", "lavender3.png"], icon: "lavender.png", soundFile: "lavendersound.mp3" },
    leg: { name: "Leg", folder: "leg", details: "One of the limbs on which a person or animal walks and stands.", carousel: ["leg.png", "leg1.png", "leg2.png", "leg3.png"], icon: "leg.png", soundFile: "legsound.mp3" },
    leopard: { name: "Leopard", folder: "leopard", details: "Elusive cats with fur and exceptional jumping ability.", carousel: ["leopard.png", "leopard1.png", "leopard2.png"], icon: "leopard.png", soundFile: "leopardsound.mp3" },
    lion: { name: "Lion", folder: "lion", details: "Known as the king of the jungle.", carousel: ["lion.png", "lion1.png", "Lion2.jpg"], icon: "lion.png", soundFile: "lionsound.mp3" },
    lip: { name: "Lip", folder: "lip", details: "The two fleshy parts that form the upper and lower edges of the opening of the mouth.", carousel: ["lip.png", "lip1.png", "lip2.png", "lip3.png"], icon: "lip.png", soundFile: "lipsound.mp3" },
    liver: { name: "Liver", folder: "liver", details: "A large organ in the abdomen that performs many vital functions, including filtering toxins from the blood.", carousel: ["liver.png", "liver1.png", "liver2.png", "liver3.png"], icon: "liver.png", soundFile: "liversound.mp3" },
    lotus: { name: "Lotus", folder: "lotus", details: "An aquatic flower symbolizing purity, enlightenment, and rebirth in many cultures.", carousel: ["lotus.png", "lotus1.png", "lotus2.png", "lotus3.png"], icon: "lotus.png", soundFile: "lotussound.mp3" },
    lungs: { name: "Lungs", folder: "lungs", details: "A pair of organs in the chest that supply the body with oxygen and remove carbon dioxide.", carousel: ["lungs.png", "lungs1.png", "lungs2.png", "lungs3.png"], icon: "lungs.png", soundFile: "lungssound.mp3" },
    macaw: { name: "Macaw", folder: "macaw", details: "Large, vibrant, and intelligent parrots.", carousel: ["macaw.png", "macaw1.png", "macaw2.png"], icon: "macaw.png", soundFile: "macawsound.mp3" },
    mantis: { name: "Mantis", folder: "mantis", details: "Predatory insects recognized by their 'praying' front legs.", carousel: ["mantis.png", "mantis1.png", "mantis2.png"], icon: "mantis1.png", soundFile: "mantissound.mp3" },
    marigold: { name: "Marigold", folder: "marigold", details: "Brightly colored flowers, typically yellow and orange, often used in gardens and festivals.", carousel: ["marigold.png", "marigold1.png", "marigold2.png", "marigold3.png"], icon: "marigold.png", soundFile: "marigoldsound.mp3" },
    mars: { name: "Mars", folder: "mars", details: "The fourth planet from the Sun, often called the 'Red Planet' due to its reddish appearance.", carousel: ["mars.png", "mars1.png", "mars2.png", "mars3.png"], icon: "mars.png", soundFile: "marssound.mp3" },
    mercury: { name: "Mercury", folder: "mercury", details: "The smallest planet in our solar system and nearest to the Sun.", carousel: ["mercury.png", "mercury1.png", "mercury2.png", "mercury3.png"], icon: "mercury.png", soundFile: "mercurysound.mp3" },
    mint: { name: "Mint", folder: "mint", details: "A versatile and aromatic herb.", carousel: ["mint.png", "mint1.png", "mint2.png"], icon: "mint.png", soundFile: "mint.mp3" },
    monkey: { name: "Monkey", folder: "monkey", details: "Known for their intelligence, agility, and social behavior.", carousel: ["monkey.png", "monkey1.png", "monkey2.png"], icon: "monkey.png", soundFile: "monkeysound.mp3" },
    moon: { name: "Moon", folder: "moon", details: "Earth's only natural satellite, which orbits our planet.", carousel: ["moon.png", "moon1.png", "moon2.png", "moon3.png"], icon: "moon.png", soundFile: "moonsound.mp3" },
    mosquito: { name: "Mosquito", folder: "mosquito", details: "A small flying insect, the females of which are known for biting.", carousel: ["mosquito1.jpeg", "mosquito2.png", "mosquito3.jpeg", "mosquito1.jpeg"], icon: "mosquito1.jpeg", soundFile: "mosquitosound.mp3" },
    motorcycle: { name: "Motorcycle", folder: "motorcycle", details: "A two-wheeled vehicle that is powered by a motor and has no pedals.", carousel: ["motocycle.png", "motocycle1.png", "motocycle2.png", "motocycle3.png"], icon: "motocycle.png", soundFile: "motocycle.mp3" },
    mouth: { name: "Mouth", folder: "mouth", details: "The opening in the lower part of the face through which food is taken in and sounds are emitted.", carousel: ["mouth.png", "mouth1.png", "mouth2.png", "mouth3.png"], icon: "mouth.png", soundFile: "mouthsound.mp3" },
    mushroom: { name: "Mushroom", folder: "mushroom", details: "The fleshy, spore-bearing fruiting bodies of fungi.", carousel: ["mushroom.png", "mushroom1.png", "mushroom2.png"], icon: "mushroom.png", soundFile: "mushroom.mp3" },
    neptune: { name: "Neptune", folder: "neptune", details: "The eighth and farthest-known planet from the Sun, known for its deep blue color.", carousel: ["neptune.png", "neptune1.png", "neptune2.png", "neptune3.png"], icon: "neptune.png", soundFile: "neptunesound.mp3" },
    nose: { name: "Nose", folder: "nose", details: "The part of the face that contains the nostrils and is involved in breathing and smelling.", carousel: ["nose.png", "nose1.png", "nose2.png", "nose3.png"], icon: "nose.png", soundFile: "nosesound.mp3" },
    onion: { name: "Onion", folder: "onion", details: "Known for their layered bulbs and pungent flavor.", carousel: ["onion.png", "onion1.png", "onion2.png"], icon: "onion.png", soundFile: "onion.mp3" },
    orangutan: { name: "Orangutan", folder: "orangutan", details: "Arboreal apes with exceptional intelligence.", carousel: ["orangutan.png", "orangutan1.png", "orangutan2.png"], icon: "orangutan.png", soundFile: "orangutansound.mp3" },
    orchid: { name: "Orchid", folder: "orchid", details: "A diverse family of flowering plants with colorful, fragrant, and often intricate blooms.", carousel: ["orchid.png", "orchid1.png", "orchid2.png", "orchid3.png"], icon: "orchid.png", soundFile: "orchidsound.mp3" },
    ostrich: { name: "Ostrich", folder: "ostrich", details: "A large, flightless bird native to Africa.", carousel: ["ostrich.png", "ostrich1.png", "ostrich2.png"], icon: "ostrich.png", soundFile: "ostrichsound.mp3" },
    otter: { name: "Otter", folder: "otter", details: "Semi-aquatic mammals known for their playful nature.", carousel: ["otter.png", "otter1.png", "otter2.png"], icon: "otter.png", soundFile: "ottersound.mp3" },
    owl: { name: "Owl", folder: "owl", details: "Birds of prey, primarily nocturnal.", carousel: ["owl.png", "owl1.png", "owl2.png"], icon: "owl.png", soundFile: "owlsound.mp3" },
    ox: { name: "Ox", folder: "ox", details: "A bovine trained to work.", carousel: ["ox.png", "ox1.png", "ox2.png"], icon: "ox.png", soundFile: "oxsound.mp3" },
    panda: { name: "Panda", folder: "panda", details: "Iconic bears that eat almost exclusively bamboo.", carousel: ["panda.png", "panda1.png", "panda2.png"], icon: "panda.png", soundFile: "pandasound.mp3" },
    pancreas: { name: "Pancreas", folder: "pancreas", details: "An organ located behind the stomach that produces enzymes for digestion and the hormone insulin.", carousel: ["pancreas.png", "pancreas1.png", "pancreas2.png", "pancreas3.png"], icon: "pancreas.png", soundFile: "pancreassound.mp3" },
    parrot: { name: "Parrot", folder: "parrot", details: "A diverse group of colorful, intelligent birds.", carousel: ["parrot.png", "parrot1.png", "parrot2.png"], icon: "parrot.png", soundFile: "parrotsound.mp3" },
    peacock: { name: "Peacock", folder: "peacock", details: "Known for their colorful feathers and loud calls.", carousel: ["peacock2.jpg", "peacock1.jpg", "peacock3.jpg"], icon: "peacock.jpg", soundFile: "peacock.mp3" },
    peas: { name: "Peas", folder: "peas", details: "A cool-season crop with edible seeds.", carousel: ["peas.png", "peas1.png", "peas2.png"], icon: "peas.png", soundFile: "peas.mp3" },
    pelican: { name: "Pelican", folder: "pelican", details: "A large water bird with a distinctive throat pouch.", carousel: ["pelican.png", "pelican1.png", "pelican2.png"], icon: "pelican.png", soundFile: "pelicansound.mp3" },
    pen: { name: "Pen", folder: "pen", details: "A common writing instrument used to apply ink to a surface.", carousel: ["pen1.jpeg", "pen2.jpeg", "pen3.jpeg", "pen4.jpeg"], icon: "pen1.jpeg", soundFile: "pensound.mp3" },
    penguin: { name: "Penguin", folder: "penguin", details: "Tallest penguins that endure harsh Antarctic winters.", carousel: ["penguin.png", "penguin1.png", "penguin2.png"], icon: "penguin.png", soundFile: "penguinsound.mp3" },
    periwinkle: { name: "Periwinkle", folder: "periwinkle", details: "A flowering plant with glossy green leaves and delicate, five-petaled flowers.", carousel: ["periwinkle.png", "periwinkle1.png", "periwinkle2.png", "periwinkle3.png"], icon: "periwinkle.png", soundFile: "periwinklesound.mp3" },
    pig: { name: "Pig", folder: "pig", details: "Stout-bodied, short-legged omnivorous mammals.", carousel: ["pig.png", "pig1.png", "pig2.png"], icon: "pig.png", soundFile: "pigsound.mp3" },
    pigeon: { name: "Pigeon", folder: "pigeon", details: "Gentle, plump, small-billed birds.", carousel: ["pigeon.png", "pigeon1.png", "pigeon2.png"], icon: "pigeon.png", soundFile: "pigeonsound.mp3" },
    plumeria: { name: "Plumeria", folder: "plumeria", details: "Also known as Frangipani, these tropical flowers have a strong, sweet fragrance.", carousel: ["plumeria.png", "plumeria1.png", "plumeria2.png", "plumeria3.png"], icon: "plumeria.png", soundFile: "plumeriasound.mp3" },
    pluto: { name: "Pluto", folder: "pluto", details: "A dwarf planet in the Kuiper Belt, a region of icy bodies beyond Neptune.", carousel: ["pluto.png", "pluto1.png", "pluto2.png", "pluto3.png"], icon: "pluto.png", soundFile: "plutosound.mp3" },
    porcupine: { name: "Porcupine", folder: "porcupine", details: "Large rodents with a coat of sharp spines, or quills.", carousel: ["porcupine.png", "porcupine1.png", "porcupine2.png"], icon: "porcupine.png", soundFile: "porcupinesound.mp3" },
    potato: { name: "Potato", folder: "potato", details: "A starchy tuberous crop.", carousel: ["potato.png", "potato1.png", "potato2.png"], icon: "potato.png", soundFile: "potato.mp3" },
    pumpkin: { name: "Pumpkin", folder: "pumpkin", details: "A large, round, orange vegetable.", carousel: ["pumpkin.png", "pumpkin1.png", "pumpkin2.png"], icon: "pumpkin.png", soundFile: "pumpkin.mp3" },
    rabbit: { name: "Rabbit", folder: "rabbit", details: "Furry mammals with long ears and powerful hind legs.", carousel: ["rabbit.png", "rabbit1.png", "rabbit2.png"], icon: "rabbit.png", soundFile: "rabbitsound.mp3" },
    raccoon: { name: "Raccoon", folder: "raccoon", details: "Known for their distinctive black masks and ringed tails.", carousel: ["raccoon.png", "raccoon1.png", "raccoon2.png"], icon: "raccoon.png", soundFile: "raccoonsound.mp3" },
    rat: { name: "Rat", folder: "rat", details: "Rodents with sharp front teeth.", carousel: ["rat.png", "rat1.png", "rat2.png"], icon: "rat.png", soundFile: "ratsound.mp3" },
    rhino: { name: "Rhino", folder: "rhino", details: "Also known as Rhinoceros, a large herbivorous mammal.", carousel: ["rhino1.jpg", "rhino2.jpg", "rhino3.jpg"], icon: "rhino.jpg", soundFile: "rhinosound.mp3" },
    robin: { name: "Robin", folder: "robin", details: "A small bird with a distinctive red or orange breast.", carousel: ["robin.png", "robin1.png", "robin2.png"], icon: "robin.png", soundFile: "robinsound.mp3" },
    rocket: { name: "Rocket", folder: "rocket", details: "A spacecraft propelled by a rocket engine, used to travel to space.", carousel: ["rocket.png", "rocket1.png", "rocket2.png", "rocket3.png"], icon: "rocket.png", soundFile: "rocketsound.mp3" },
    rose: { name: "Rose", folder: "rose", details: "A woody perennial flowering plant known for its beautiful and fragrant flowers.", carousel: ["rose.png", "rose1.png", "rose2.png", "rose3.png"], icon: "rose.png", soundFile: "rosesound.mp3" },
    satellite: { name: "Satellite", folder: "satellite", details: "An artificial object placed into orbit around the Earth or another planet to collect information.", carousel: ["satellite.png", "satellite1.png", "satellite2.png", "satellite3.png"], icon: "satellite.png", soundFile: "satellitesound.mp3" },
    saturn: { name: "Saturn", folder: "saturn", details: "The sixth planet from the Sun, famous for its extensive and beautiful ring system.", carousel: ["saturn.png", "saturn1.png", "saturn2.png", "saturn3.png"], icon: "saturn.png", soundFile: "saturnsound.mp3" },
    scooter: { name: "Scooter", folder: "scooter", details: "A light two-wheeled vehicle with a small motor and a step-through frame.", carousel: ["scooter.png", "scooter1.png", "scooter2.png", "scooter3.png"], icon: "scooter.png", soundFile: "scooter.mp3" },
    seagull: { name: "Seagull", folder: "seagull", details: "Also known as gulls, they are adaptable seabirds.", carousel: ["seagull.png", "seagull1.png", "seagull2.png"], icon: "seagull.png", soundFile: "seagullsound.mp3" },
    sheep: { name: "Sheep", folder: "sheep", details: "Domesticated ruminant mammals, known for wool.", carousel: ["sheep.png", "sheep1.png", "sheep2.png"], icon: "sheep.png", soundFile: "sheepsound.mp3" },
    ship: { name: "Ship", folder: "ship", details: "A large watercraft that travels the world's oceans and other deep waterways.", carousel: ["ship.png", "ship1.png", "ship2.png", "ship3.png"], icon: "ship.png", soundFile: "ship.mp3" },
    silverfish: { name: "Silverfish", folder: "silverfish", details: "Small, wingless insects with a silvery, fish-like appearance.", carousel: ["silverfish.png", "silverfish1.png", "silverfish2.png"], icon: "silverfish1.png", soundFile: "silverfishsound.mp3" },
    skateboard: { name: "Skateboard", folder: "skateboard", details: "A short narrow board with small wheels at each end, ridden standing up.", carousel: ["skateboard.png", "skateboard1.png", "skateboard2.png", "skateboard3.png"], icon: "skateboard.png", soundFile: "skateboard.mp3" },
    snail: { name: "Snail", folder: "snail", details: "Slow-moving molluscs that carry a coiled shell on their back.", carousel: ["snail.png", "snail1.png", "snail2.png"], icon: "snail1.png", soundFile: "snailsound.mp3" },
    sparrow: { name: "Sparrow", folder: "sparrow", details: "Small, generally brown or grey birds.", carousel: ["sparrow.png", "sparrow1.png", "sparrow2.png"], icon: "sparrow.png", soundFile: "sparrowsound.mp3" },
    spider: { name: "Spider", folder: "spider", details: "Arachnids known for spinning intricate webs to catch prey.", carousel: ["spider1.jpeg", "spider2.jpeg", "spider3.jpeg", "spider1.jpeg"], icon: "spider1.jpeg", soundFile: "spidersound.mp3" },
    spinach: { name: "Spinach", folder: "spinach", details: "A leafy green vegetable packed with nutrients.", carousel: ["spinach.png", "spinach1.png", "spinach2.png"], icon: "spinach.png", soundFile: "spinach.mp3" },
    squirrel: { name: "Squirrel", folder: "squirrel", details: "Small rodents known for their bushy tails.", carousel: ["squirrel.png", "squirrel1.png", "squirrel2.png"], icon: "squirrel.png", soundFile: "squirrelsound.mp3" },
    star: { name: "Star", folder: "star", details: "A luminous sphere of plasma held together by its own gravity.", carousel: ["star.jpeg", "star2.jpeg", "star3.jpeg", "star4.jpeg"], icon: "star1.jpeg", soundFile: "starsound.mp3" },
    stomach: { name: "Stomach", folder: "stomach", details: "The internal organ where the major part of the digestion of food occurs.", carousel: ["stomach.png", "stomach1.png", "stomach2.png", "stomach3.png"], icon: "stomach.png", soundFile: "stomach.mp3" },
    submarine: { name: "Submarine", folder: "submarine", details: "A watercraft capable of independent operation underwater.", carousel: ["submarine.png", "submarine1.png", "submarine2.png", "submarine3.png"], icon: "submarine.png", soundFile: "submarine.mp3" },
    sun: { name: "Sun", folder: "sun", details: "The star at the center of our solar system, which provides light and heat.", carousel: ["sun.png", "sun1.png", "sun2.png", "sun3.png"], icon: "sun.png", soundFile: "sunsound.mp3" },
    sunflower: { name: "Sunflower", folder: "sunflower", details: "A tall plant known for its large, bright yellow flower head that tracks the sun.", carousel: ["sunflower.png", "sunflower1.png", "sunflower2.png", "sunflower3.png"], icon: "sunflower.png", soundFile: "sunflowersound.mp3" },
    swan: { name: "Swan", folder: "swan", details: "Large, graceful, long-necked birds.", carousel: ["swan.png", "swan1.png", "swan2.png"], icon: "swan.png", soundFile: "swansound.mp3" },
    sweetpotato: { name: "Sweetpotato", folder: "sweetpotato", details: "Starchy, sweet-tasting tuberous roots.", carousel: ["sweetpotato.png", "sweetpotato1.png", "sweetpotato2.png"], icon: "sweetpotato.png", soundFile: "sweetpotato.mp3" },
    taxi: { name: "Taxi", folder: "taxi", details: "A car licensed to transport passengers in return for payment of a fare.", carousel: ["taxi.png", "taxi1.png", "taxi2.png", "taxi3.png"], icon: "taxi.png", soundFile: "taxi.mp3" },
    tiger: { name: "Tiger", folder: "tiger", details: "Largest living cat species.", carousel: ["tiger.png", "tiger1.png", "tiger2.png"], icon: "tiger.png", soundFile: "tigersound.mp3" },
    toe: { name: "Toe", folder: "toe", details: "Any of the five digits at the end of the human foot.", carousel: ["toe.png", "toe1.png", "toe2.png", "toe3.png"], icon: "toe.png", soundFile: "toesound.mp3" },
    tomato: { name: "Tomato", folder: "tomato", details: "A fruit often treated as a vegetable.", carousel: ["tomato.png", "tomato1.png", "tomato3.png"], icon: "tomato2.jpg", soundFile: "tomato.mp3" },
    tongue: { name: "Tongue", folder: "tongue", details: "The fleshy muscular organ in the mouth used for tasting, licking, swallowing, and articulating speech.", carousel: ["tongue.png", "tongue1.png", "tongue2.png", "tongue3.png"], icon: "tongue.png", soundFile: "tonguesound.mp3" },
    tortoise: { name: "Tortoise", folder: "tortoise", details: "Land-dwelling reptiles with protective shells.", carousel: ["tortoise.png", "tortoise1.png", "tortoise2.png"], icon: "tortoise.png", soundFile: "tortoisesound.mp3" },
    toucan: { name: "Toucan", folder: "toucan", details: "Colorful, tropical birds with large bills.", carousel: ["toucan.png", "toucan1.png", "toucan2.png"], icon: "toucan.png", soundFile: "toucansound.mp3" },
    tractor: { name: "Tractor", folder: "tractor", details: "A heavy motor vehicle used in farming for pulling trailers or other machinery.", carousel: ["tractor.png", "tractor1.png", "tractor2.png", "tractor3.png"], icon: "tractor.png", soundFile: "tracter.mp3" },
    train: { name: "Train", folder: "train", details: "A series of connected vehicles that run along a railway track and transport people or goods.", carousel: ["train.png", "train1.png", "train2.png", "train3.png"], icon: "train.png", soundFile: "train.mp3" },
    tram: { name: "Tram", folder: "tram", details: "A rail vehicle that runs on tracks along public urban streets.", carousel: ["tram.png", "tram1.png", "tram2.png", "tram3.png"], icon: "tram.png", soundFile: "tram.mp3" },
    truck: { name: "Truck", folder: "truck", details: "A large, heavy motor vehicle used for transporting goods or troops.", carousel: ["truck.png", "truck1.png", "truck2.png", "truck3.png"], icon: "truck.png", soundFile: "truck.mp3" },
    tulip: { name: "Tulip", folder: "tulip", details: "Brightly colored, cup-shaped flowers on a stem that are popular in spring gardens.", carousel: ["tulip.png", "tulip1.png", "tulip2.png", "tulip3.png"], icon: "tulip.png", soundFile: "tulipsound.mp3" },
    turnip: { name: "Turnip", folder: "turnip", details: "A root vegetable with white flesh.", carousel: ["turnip.png", "turnip1.png", "turnip2.png"], icon: "turnip.png", soundFile: "turnip.mp3" },
    uranus: { name: "Uranus", folder: "uranus", details: "The seventh planet from the Sun, known for rotating on its side.", carousel: ["uranus.png", "uranus1.png", "uranus2.png", "uranus3.png"], icon: "uranus.png", soundFile: "uranussound.mp3" },
    van: { name: "Van", folder: "van", details: "A medium-sized motor vehicle, typically box-shaped, used for transporting goods or people.", carousel: ["van.png", "van1.png", "van2.png", "van3.png"], icon: "van.png", soundFile: "van.mp3" },
    venus: { name: "Venus", folder: "venus", details: "The second planet from the Sun, it's the hottest planet in our solar system.", carousel: ["venus.png", "venus1.png", "venus2.png", "venus3.png"], icon: "venus.png", soundFile: "venussound.mp3" },
    vulture: { name: "Vulture", folder: "vulture", details: "Large birds of prey known for feeding on carrion.", carousel: ["vulture.png", "vulture1.png", "vulture2.png"], icon: "vulture.png", soundFile: "vulturesound.mp3" },
    watch: { name: "Watch", folder: "watch", details: "A portable timepiece intended to be carried or worn by a person.", carousel: ["watch1.jpeg", "watch2.jpeg", "watch3.jpeg", "watch4.jpeg"], icon: "watch1.jpeg", soundFile: "watchsound.mp3" },
    wolf: { name: "Wolf", folder: "wolf", details: "Highly social pack hunters.", carousel: ["wolf.jpg", "wolf1.jpg", "wolf2.jpg"], icon: "wolf.jpg", soundFile: "wolfsound.mp3" },
    woodpecker: { name: "Woodpecker", folder: "woodpecker", details: "Known for pecking at trees to find insects.", carousel: ["woodpecker.png", "woodpecker1.png", "woodpecker2.png"], icon: "woodpecker.png", soundFile: "woodpeckersound.mp3" },
    yak: { name: "Yak", folder: "yak", details: "A large, long-haired bovine from Central Asia.", carousel: ["yak.png", "yak1.png", "yak2.png"], icon: "yak.png", soundFile: "yaksound.mp3" },
    zebra: { name: "Zebra", folder: "zebra", details: "Known for their distinctive black and white striped coats.", carousel: ["zebra.png", "zebra1.png", "zebra2.png"], icon: "zebra.png", soundFile: "zebrasound.mp3" }
};

const gameDataByCategory = {
    petanimal: {
        easy: ['cat', 'cow', 'dog', 'goat', 'hen', 'ox', 'pig', 'rat'],
        medium: ['camel', 'donkey', 'hamster', 'horse', 'monkey', 'rabbit', 'sheep', 'squirrel'],
        hard: ['buffalo', 'tortoise', 'yak']
    },
    wildanimal: {
        easy: ['bear', 'deer', 'lion', 'panda', 'tiger', 'wolf', 'zebra'],
        medium: ['cheetah', 'coyote', 'crocodile', 'dolphin', 'elephant', 'gorilla', 'kangaroo', 'leopard', 'otter', 'penguin', 'raccoon'],
        hard: ['chimpanzee', 'giraffe', 'hippopotamus', 'orangutan', 'porcupine', 'rhino']
    },
    birds: {
        easy: ['crow', 'dove', 'duck', 'goose', 'hen', 'owl', 'pigeon', 'robin', 'sparrow', 'swan'],
        medium: ['crane', 'eagle', 'hawk', 'macaw', 'parrot', 'pelican', 'seagull', 'toucan', 'vulture'],
        hard: ['emu', 'flamingo', 'hummingbird', 'kingfisher', 'ostrich', 'peacock', 'woodpecker']
    },
    vegetables: {
        easy: ['beans', 'cabbage', 'corn', 'mint', 'onion', 'peas', 'potato', 'spinach', 'tomato'],
        medium: ['beetroot', 'broccoli', 'carrot', 'cauliflower', 'cucumber', 'garlic', 'mushroom', 'pumpkin', 'turnip'],
        hard: ['bittergourd', 'bottlegourd', 'capsicum', 'coriander', 'eggplant', 'ladyfinger', 'sweetpotato']
    },
    insects: {
        easy: ['ant', 'beetle', 'butterfly', 'caterpillar', 'cockroach', 'earthworm', 'grasshopper', 'honeyBee', 'housefly', 'ladybug', 'snail'],
        medium: ['bedbug', 'cicada', 'dragonfly', 'firefly', 'hornet', 'mantis', 'mosquito', 'spider'],
        hard: ['centipede', 'silverfish']
    },
    flowers: {
        easy: ['daisy', 'hibiscus', 'lotus', 'marigold', 'rose', 'sunflower', 'tulip'],
        medium: ['cherryBlossom', 'iris', 'lavender', 'orchid', 'plumeria'],
        hard: ['hollyhock', 'periwinkle']
    },
    plants: {
        easy: ['beans', 'cabbage', 'corn', 'mint', 'onion', 'peas', 'potato', 'rose', 'spinach', 'sunflower', 'tomato'],
        medium: ['beetroot', 'broccoli', 'carrot', 'cauliflower', 'cucumber', 'garlic', 'lotus', 'mushroom', 'orchid', 'pumpkin', 'turnip'],
        hard: ['bittergourd', 'bottlegourd', 'capsicum', 'coriander', 'eggplant', 'ladyfinger', 'sweetpotato']
    },
    modesoftransport: {
        easy: ['bicycle', 'bus', 'car', 'cart', 'jeep', 'scooter', 'skateboard', 'taxi', 'tractor', 'train', 'tram', 'truck', 'van'],
        medium: ['aeroplane', 'boat', 'ferry', 'motorcycle', 'ship'],
        hard: ['helicopter', 'hotAirBalloon', 'rocket', 'submarine']
    },
    humanbodyparts: {
        easy: ['arm', 'chin', 'ear', 'eye', 'eyebrow', 'fingers', 'foot', 'hair', 'hand', 'head', 'leg', 'lip', 'mouth', 'nose', 'toe', 'tongue'],
        medium: ['brain', 'heart', 'intestine', 'kidney', 'liver', 'lungs', 'stomach'],
        hard: ['bladder', 'pancreas']
    },
    celestial: {
        easy: ['earth', 'sun', 'rocket', 'satellite', 'comet'],
        medium: ['mars', 'venus', 'mercury', 'astronaut'],
        hard: ['jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
    }
};



const feedbackSounds = {
    correct: new Audio("assets/sound/GoodJob.mp3"),
    wrong: new Audio("assets/sound/fail-buzzer.mp3")
};
const introSound = new Audio("assets/sound/kids.mp3");
introSound.volume = 1.0;
introSound.loop = true;


let animalSound = new Audio();
let attempts = 0, totalCorrect = 0, totalWrong = 0, totalAttempts = 0;
let currentItem = null;
let unansweredItems = [];

let userInteracted = false;
function markUserInteracted() {
	if (userInteracted) return;
	userInteracted = true;
	playIntroIfAllowed();
}

function isAudioPlaying(audio) {
	try {
		return !!audio && !audio.paused && !audio.ended && audio.currentTime > 0;
	} catch (e) {
		return false;
	}
}

function playIntroIfAllowed() {
	if (!userInteracted) return;
	if (!isAudioPlaying(animalSound) && !window.speechSynthesis.speaking) {
		introSound.play().catch(() => {});
	}
}

animalSound.onplay = () => { try { introSound.pause(); } catch (e) {} };
animalSound.onpause = () => playIntroIfAllowed();
animalSound.onended = () => playIntroIfAllowed();
animalSound.onerror = () => playIntroIfAllowed();


function updateScoreDisplay() {
    document.getElementById('correct-count').textContent = totalCorrect;
    document.getElementById('wrong-count').textContent = totalWrong;
    document.getElementById('attempt-count').textContent = attempts;
    const avgAttempts = totalCorrect > 0 ? (totalAttempts / totalCorrect).toFixed(1) : 0;
    document.getElementById('avg-attempts').textContent = avgAttempts;
    document.getElementById('dropdown-correct').textContent = totalCorrect;
    document.getElementById('dropdown-wrong').textContent = totalWrong;
    document.getElementById('dropdown-attempts').textContent = attempts;
    document.getElementById('dropdown-avg').textContent = avgAttempts;
}

function handleImageError(imgElement) {
    console.error("Failed to load image:", imgElement.src);
    imgElement.alt = "Image not available";
}



function showEyeControl(show) {
	const container = document.getElementById('eye-container');
	if (!container) return;
	container.style.display = show ? 'flex' : 'none';
	const dd = document.getElementById('eye-dropdown');
	if (dd) dd.classList.remove('active');
}

function updateEyeDropdown() {
	const dd = document.getElementById('eye-dropdown');
	if (!dd || !currentItem) {
		if (dd) dd.classList.remove('active');
		return;
	}

	let activeIndex = 0;
	const carouselEl = document.getElementById('demo');
	if (carouselEl) {
		const active = carouselEl.querySelector('.carousel-item.active');
		if (active) {
			activeIndex = Array.prototype.indexOf.call(carouselEl.querySelectorAll('.carousel-item'), active);
			if (activeIndex < 0) activeIndex = 0;
		}
	}

	const images = currentItem.details?.carousel || [];
	const currentImageFile = images[activeIndex] || 'No image';
	
	const fileNameWithoutExtension = currentImageFile.replace(/\.[^/.]+$/, '');

	dd.innerHTML = `
	  <div class="stats-dropdown-content" style="text-align:center; padding:15px; max-width:520px;">
		<div style="font-weight:600; margin-bottom:8px; color:#fff; font-size:1.1rem;">Current Image</div>
		<div class="eye-single-name" style="font-size:1rem;">${fileNameWithoutExtension}</div>
	  </div>
	`;
	dd.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
	
	const difficultyBoxes = document.querySelectorAll('.difficulty-box');
	const difficultySelector = document.getElementById('difficulty-selector');
	const gameLinks = document.querySelectorAll('.game-link');
	const activitiesWrapper = document.getElementById('activities-wrapper');

	if (activitiesWrapper) activitiesWrapper.classList.add('d-none');

	function setActiveDifficulty(diff) {
		difficultyBoxes.forEach(b => b.classList.toggle('active', b.dataset.difficulty === diff));
		if (difficultySelector) difficultySelector.value = diff;
		gameLinks.forEach(link => {
			try {
				const url = new URL(link.href, window.location.origin);
				url.searchParams.set('difficulty', diff);
				link.href = url.toString();
			} catch (e) {
			}
		});
	}

	difficultyBoxes.forEach(box => {
		box.addEventListener('click', () => {
			const diff = box.dataset.difficulty || 'easy';
			setActiveDifficulty(diff);

			if (activitiesWrapper) {
				activitiesWrapper.classList.remove('d-none');
				activitiesWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}

			
			if (document.body.classList.contains('menu-active')) {
				const urlParams = new URLSearchParams(window.location.search);
				const categoryFromUrl = urlParams.get('category');
				const currentCategory = categoryFromUrl || (document.getElementById('current-category')?.dataset.category) || 'petanimal';
				const limit = '10'; 

				const menuScreen = document.getElementById('menu-screen');
				const gameScreen = document.getElementById('game-screen');
				menuScreen.style.display = 'none';
				gameScreen.style.display = 'block';
				document.body.classList.remove('menu-active');
				initializeGame(currentCategory, limit, diff);

				const href = `index.html?category=${encodeURIComponent(currentCategory)}&difficulty=${encodeURIComponent(diff)}&limit=${encodeURIComponent(limit)}`;
				history.pushState(null, '', href);
			}
		});
	});

	if (difficultySelector && difficultySelector.value) {
		setActiveDifficulty(difficultySelector.value);
	} else {
		setActiveDifficulty('easy');
	}
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        const categoryData = {
            'petanimal': { emoji: '🐶', name: 'Pet Animals' },
            'wildanimal': { emoji: '🦁', name: 'Wild Animals' },
            'birds': { emoji: '🦜', name: 'Birds' },
            'fruits': { emoji: '🍎', name: 'Fruits' },
            'vegetables': { emoji: '🥕', name: 'Vegetables' },
            'flowers': { emoji: '🌸', name: 'Flowers' }
        };
        
        if (categoryData[categoryParam]) {
            const categoryCard = document.getElementById('current-category');
            const categoryEmoji = document.getElementById('category-emoji');
            const categoryName = document.getElementById('category-name');
            
            if (categoryCard && categoryEmoji && categoryName) {
                categoryCard.dataset.category = categoryParam;
                categoryEmoji.textContent = categoryData[categoryParam].emoji;
                categoryName.textContent = categoryData[categoryParam].name;
            }
        }
    }
});

function updateScoreDisplay() {
    document.getElementById('correct-count').textContent = totalCorrect;
    document.getElementById('wrong-count').textContent = totalWrong;
    document.getElementById('attempt-count').textContent = attempts;
    const avgAttempts = totalCorrect > 0 ? (totalAttempts / totalCorrect).toFixed(1) : 0;
    document.getElementById('avg-attempts').textContent = avgAttempts;
    document.getElementById('dropdown-correct').textContent = totalCorrect;
    document.getElementById('dropdown-wrong').textContent = totalWrong;
    document.getElementById('dropdown-attempts').textContent = attempts;
    document.getElementById('dropdown-avg').textContent = avgAttempts;
}

function handleImageError(imgElement) {
    console.error("Failed to load image:", imgElement.src);
    imgElement.alt = "Image not available";
}


function loadRandomItem() {
    window.speechSynthesis.cancel();
    animalSound.pause();
    animalSound.currentTime = 0;

    if (unansweredItems.length === 0) {
        alert("🎉 Congratulations! You've answered all questions correctly. You will now be returned to the menu.");
        setTimeout(() => { window.location.href = 'index.html'; }, 2000);
        return;
    }
    attempts = 0;
    updateScoreDisplay();
    const randomIndex = Math.floor(Math.random() * unansweredItems.length);
    currentItem = unansweredItems[randomIndex];
    const details = currentItem.details;
    document.getElementById("animal-image").src = `assets/img/${details.folder}/${details.icon}`;
    document.getElementById("animal-name").textContent = currentItem.name.toUpperCase();
    document.getElementById("text").value = details.details;
    document.getElementById("animal-input").value = "";
    document.getElementById("animal-input").classList.remove("is-invalid");
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.innerHTML = "";
    details.carousel.forEach((img, index) => {
        const item = document.createElement("div");
        item.className = `carousel-item ${index === 0 ? "active" : ""}`;
               const image = document.createElement("img");
        image.src = `assets/img/${details.folder}/${img}`;
        image.className = "d-block w-100";
        image.onerror = () => handleImageError(image);
        item.appendChild(image);
        carouselInner.appendChild(item);
    });
    document.getElementById("C_flip").classList.remove("flipped");
    document.getElementById("animal-input").focus();

	playIntroIfAllowed();

	showEyeControl(true);

	updateEyeDropdown();

	const iconEl = document.getElementById('eye-button');
	const ddEl = document.getElementById('eye-dropdown');

	if (iconEl && ddEl && !iconEl._eyeClickHandlerSet) {
		iconEl._eyeClickHandlerSet = true;
		
		iconEl.addEventListener('click', (e) => {
			e.stopPropagation();
			updateEyeDropdown(); 
			ddEl.classList.toggle('active');
		});

		document.addEventListener('click', (ev) => {
			if (!iconEl.contains(ev.target) && !ddEl.contains(ev.target)) {
				ddEl.classList.remove('active');
			}
		});
	}

	const carouselEl = document.getElementById('demo');
	if (carouselEl && !carouselEl._eyeCarouselListenerSet) {
		carouselEl._eyeCarouselListenerSet = true;
		carouselEl.addEventListener('slid.bs.carousel', () => {
			updateEyeDropdown();
		});
	}
}

function flip() {
    const userInput = document.getElementById("animal-input").value.trim().toLowerCase();
    const inputField = document.getElementById("animal-input");

    if (!userInput) {
        inputField.classList.add("is-invalid");
        setTimeout(() => inputField.classList.remove("is-invalid"), 2000);
        return;
    }

    attempts++;
    totalAttempts++;

    if (userInput === currentItem.name.toLowerCase()) {
        totalCorrect++;
        updateScoreDisplay();
        introSound.pause(); 
        unansweredItems = unansweredItems.filter(item => item.id !== currentItem.id);

        const resumeAfterSpeech = () => {
            playIntroIfAllowed();
            const nextBtn = document.querySelector("#game-screen .btn-warning");
            if (nextBtn) nextBtn.focus();
        };

        feedbackSounds.correct.play();
        document.getElementById("C_flip").classList.add("flipped");

        showEyeControl(false);
        updateEyeDropdown();

        setTimeout(() => {
            const carouselElement = document.getElementById('demo');
            if (carouselElement) {
                bootstrap.Carousel.getOrCreateInstance(carouselElement).to(0);
            }
        }, 10);

        animalSound.src = `assets/img/${currentItem.details.folder}/${currentItem.details.soundFile}`;
        animalSound.loop = true;

        setTimeout(() => {
            animalSound.play().catch(e => {
                console.error("Error playing animal sound:", e);
                playIntroIfAllowed();
            });
        }, 500);

    } else {
        totalWrong++;
        updateScoreDisplay();
        introSound.pause();
        feedbackSounds.wrong.play();
        feedbackSounds.wrong.onended = () => {
            playIntroIfAllowed();
        };
        inputField.classList.add("is-invalid");
        setTimeout(() => inputField.classList.remove("is-invalid"), 1000);
    }
}
function playMyAudio() {
    if (!currentItem) return;

    animalSound.src = `assets/img/${currentItem.details.folder}/${currentItem.details.soundFile}`;
    introSound.pause();
    animalSound.play().catch(e => console.error("Error playing sound:", e));
    animalSound.onended = () => playIntroIfAllowed();
}
function toggleStatsDropdown() {
    document.getElementById("stats-dropdown").classList.toggle("active");
}

function initializeGame(category, limit, difficulty) {
    const idList = gameDataByCategory[category]?.[difficulty];
    if (!idList) {
        alert("The requested category or difficulty is not available.");
        window.location.href = "index.html";
        return;
    }

    const shuffled = idList.sort(() => 0.5 - Math.random());
    const selectedIds = shuffled.slice(0, parseInt(limit, 10));

    const gameItems = selectedIds.map(id => {
        const details = itemDetails[id];
        return { id: id, name: details.name, details: details };
    });

    unansweredItems = [...gameItems];

    if (unansweredItems.length === 0) {
        alert("Error: No items found for this selection. Returning to menu.");
        window.location.href = 'index.html';
        return;
    }

    document.querySelector("#game-screen .btn-warning").addEventListener("click", loadRandomItem);
    document.getElementById("animal-input").addEventListener("keypress", e => { if (e.key === "Enter") flip(); });

    document.getElementById("speak-button").addEventListener("click", () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            try { animalSound.pause(); } catch (e) {}
            introSound.pause();

            const textToSpeak = document.getElementById("text").value;
            const utterance = new SpeechSynthesisUtterance(textToSpeak);

            const resumeAll = () => {
                playIntroIfAllowed();
                if (animalSound && animalSound.src) {
                    animalSound.play().catch(() => {});
                }
                const nextBtn = document.querySelector("#game-screen .btn-warning");
                if (nextBtn) nextBtn.focus();
            };

            utterance.onend = resumeAll;
            utterance.onerror = (event) => {
                console.error("Speech synthesis error:", event.error);
                resumeAll();
            };
            
            window.speechSynthesis.speak(utterance);
        }
    });

    document.addEventListener("click", markUserInteracted, { once: true });
    document.addEventListener("touchstart", markUserInteracted, { once: true });
    document.addEventListener("keydown", markUserInteracted, { once: true });

    loadRandomItem();
    updateScoreDisplay();
}


window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const limit = urlParams.get('limit');
    const difficulty = urlParams.get('difficulty');
    const menuScreen = document.getElementById('menu-screen');
    const gameScreen = document.getElementById('game-screen');

    if (category && limit && difficulty) {
        menuScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        document.body.classList.remove('menu-active');
        initializeGame(category, limit, difficulty);
    } else {
        menuScreen.style.display = 'block';
        gameScreen.style.display = 'none';
        document.body.classList.add('menu-active');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const classSelector = document.getElementById('class-selector');
    const difficultySelector = document.getElementById('difficulty-selector');
    const gameLinks = document.querySelectorAll('.game-link');

    if (classSelector && difficultySelector && gameLinks.length) {
        gameLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const selectedLimit = classSelector.value;
                const selectedDifficulty = difficultySelector.value;
                const url = new URL(this.href);
                url.searchParams.set('limit', selectedLimit);

                url.searchParams.set('difficulty', selectedDifficulty);
                window.location.href = url.toString();
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    
    const classSelector = document.getElementById('class-selector');
    const difficultySelector = document.getElementById('difficulty-selector');
    const gameLinks = document.querySelectorAll('.game-link');

    if (classSelector && difficultySelector && gameLinks.length) {
        gameLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const selectedLimit = classSelector.value;
                const selectedDifficulty = difficultySelector.value;
                const url = new URL(this.href);
                url.searchParams.set('limit', selectedLimit);
                url.searchParams.set('difficulty', selectedDifficulty);
                window.location.href = url.toString();
            });
        });
    }


    const statsDropdown = document.getElementById('stats-dropdown');
    const statsToggleButton = document.querySelector('.stats-toggle-btn');


    window.addEventListener('click', function (event) {

        if (statsDropdown && statsToggleButton) {

            if (!statsDropdown.contains(event.target) && !statsToggleButton.contains(event.target)) {

                statsDropdown.classList.remove('active');
            }
        }
    });

});

window.onpopstate = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const limit = urlParams.get('limit');
    const difficulty = urlParams.get('difficulty');
    const menuScreen = document.getElementById('menu-screen');
    const gameScreen = document.getElementById('game-screen');

    if (category && limit && difficulty) {
        menuScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        document.body.classList.remove('menu-active');
        initializeGame(category, limit, difficulty);
    } else {
        menuScreen.style.display = 'block';
        gameScreen.style.display = 'none';
        document.body.classList.add('menu-active');
    }
};