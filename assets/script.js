
const itemDetails = {
    
    cat: { name: "Cat", folder: "cat", details: "A small domesticated carnivorous mammal.", carousel: ["cat.png", "cat1.jpg", "cat2.jpg"], icon: "cat3.png", soundFile: "catsound.wav" },
    dog: { name: "Dog", folder: "dog", details: "A domesticated descendant of the wolf.", carousel: ["dg1.jpg", "dg2.jpg", "dg3.jpg"], icon: "dog.png", soundFile: "dogsound.wav" },
    cow: { name: "Cow", folder: "cow", details: "Commonly raised as livestock for meat and milk.", carousel: ["cow1.jpg", "cow2.jpg", "cow3.jpg"], icon: "cow.jpg", soundFile: "cowsound.wav" },
    ox: { name: "Ox", folder: "ox", details: "A bovine trained to work.", carousel: ["ox.png", "ox1.png", "ox2.png"], icon: "ox.png", soundFile: "oxsound.mp3" },
    rat: { name: "Rat", folder: "rat", details: "Rodents with sharp front teeth.", carousel: ["rat.png", "rat1.png", "rat2.png"], icon: "rat.png", soundFile: "ratsound.mp3" },
    pig: { name: "Pig", folder: "pig", details: "Stout-bodied, short-legged omnivorous mammals.", carousel: ["pig.png", "pig1.png", "pig2.png"], icon: "pig.png", soundFile: "pigsound.mp3" },
    goat: { name: "Goat", folder: "goat", details: "Known for their milk, meat, and wool production.", carousel: ["goat.png", "goat1.png", "goat2.png"], icon: "goat.png", soundFile: "goatsound.mp3" },
    yak: { name: "Yak", folder: "yak", details: "A large, long-haired bovine from Central Asia.", carousel: ["yak.png", "yak1.png", "yak2.png"], icon: "yak.png", soundFile: "yaksound.mp3" },
    rabbit: { name: "Rabbit", folder: "rabbit", details: "Furry mammals with long ears and powerful hind legs.", carousel: ["rabbit.png", "rabbit1.png", "rabbit2.png"], icon: "rabbit.png", soundFile: "rabbitsound.mp3" },
    monkey: { name: "Monkey", folder: "monkey", details: "Known for their intelligence, agility, and social behavior.", carousel: ["monkey.png", "monkey1.png", "monkey2.png"], icon: "monkey.png", soundFile: "monkeysound.mp3" },
    donkey: { name: "Donkey", folder: "donkey", details: "Domesticated mammals of the horse family.", carousel: ["donkey.png", "donkey1.png", "donkey2.png"], icon: "donkey.png", soundFile: "donkeysound.mp3" },
    sheep: { name: "Sheep", folder: "sheep", details: "Domesticated ruminant mammals, known for wool.", carousel: ["sheep.png", "sheep1.png", "sheep2.png"], icon: "sheep.png", soundFile: "sheepsound.mp3" },
    horse: { name: "Horse", folder: "horse", details: "Large, strong mammals with a single hoofed toe.", carousel: ["horse.png", "horse1.png", "horse2.png"], icon: "horse.png", soundFile: "horsesound.mp3" },
    camel: { name: "Camel", folder: "camel", details: "Large, long-necked animals with humps.", carousel: ["camel.png", "camel1.png", "camel2.png"], icon: "camel.png", soundFile: "camelsound.mp3" },
    hamster: { name: "Hamster", folder: "hamster", details: "Small rodents known for their cheek pouches.", carousel: ["hamster.png", "hamster1.png", "hamster2.png"], icon: "hamster.png", soundFile: "hamstersound.mp3" },
    buffalo: { name: "Buffalo", folder: "buffalo", details: "Large domesticated animals used for work and milk.", carousel: ["buffalo.png", "buffalo1.png", "buffalo2.png"], icon: "buffalo.png", soundFile: "buffalosound.mp3" },
    tortoise: { name: "Tortoise", folder: "tortoise", details: "Land-dwelling reptiles with protective shells.", carousel: ["tortoise.png", "tortoise1.png", "tortoise2.png"], icon: "tortoise.png", soundFile: "tortoisesound.mp3" },
    squirrel: { name: "Squirrel", folder: "squirrel", details: "Small rodents known for their bushy tails.", carousel: ["squirrel.png", "squirrel1.png", "squirrel2.png"], icon: "squirrel.png", soundFile: "squirrelsound.mp3" },
    
    
    lion: { name: "Lion", folder: "lion", details: "Known as the king of the jungle.", carousel: ["lion.png", "lion1.png", "Lion2.jpg"], icon: "lion.png", soundFile: "lionsound.mp3" },
    wolf: { name: "Wolf", folder: "wolf", details: "Highly social pack hunters.", carousel: ["wolf.jpg", "wolf1.jpg", "wolf2.jpg"], icon: "wolf.jpg", soundFile: "wolfsound.mp3" },
    bear: { name: "Bear", folder: "bear", details: "Powerful omnivores with excellent fishing abilities.", carousel: ["bear.png", "bear1.png", "bear2.png"], icon: "bear.png", soundFile: "bearsound.mp3" },
    tiger: { name: "Tiger", folder: "tiger", details: "Largest living cat species.", carousel: ["tiger.png", "tiger1.png", "tiger2.png"], icon: "tiger.png", soundFile: "tigersound.mp3" },
    zebra: { name: "Zebra", folder: "zebra", details: "Known for their distinctive black and white striped coats.", carousel: ["zebra.png", "zebra1.png", "zebra2.png"], icon: "zebra.png", soundFile: "zebrasound.mp3" },
    deer: { name: "Deer", folder: "deer", details: "Graceful animals found in forests and grassland.", carousel: ["deer.png", "deer1.png", "deer2.png"], icon: "deer.png", soundFile: "deersound.mp3" },
    panda: { name: "Panda", folder: "panda", details: "Iconic bears that eat almost exclusively bamboo.", carousel: ["panda.png", "panda1.png", "panda2.png"], icon: "panda.png", soundFile: "pandasound.mp3" },
    elephant: { name: "Elephant", folder: "elephant", details: "The largest existing land animals.", carousel: ["elel1.png", "elel2.png", "elel3.jpg"], icon: "elephant.jpg", soundFile: "elephantsound.mp3" },
    dolphin: { name: "Dolphin", folder: "dolphin", details: "Intelligent marine mammals known for echolocation.", carousel: ["dolphin.png", "dolphin1.png", "dolphin2.png"], icon: "dolphin.png", soundFile: "dolphinsound.mp3" },
    leopard: { name: "Leopard", folder: "leopard", details: "Elusive cats with fur and exceptional jumping ability.", carousel: ["leopard.png", "leopard1.png", "leopard2.png"], icon: "leopard.png", soundFile: "leopardsound.mp3" },
    cheetah: { name: "Cheetah", folder: "cheetah", details: "Fastest land animal, reaching speeds up to 120 km/h.", carousel: ["cheetah.png", "cheetah1.png", "cheetah2.png"], icon: "cheetah.png", soundFile: "cheetahsound.mp3" },
    gorilla: { name: "Gorilla", folder: "gorilla", details: "Gentle giants with complex social structures.", carousel: ["gorilla.png", "gorilla1.png", "gorilla2.png"], icon: "gorilla.png", soundFile: "gorillasound.mp3" },
    kangaroo: { name: "Kangaroo", folder: "kangaroo", details: "Largest marsupials, capable of high-speed hopping.", carousel: ["kangaroo.png", "kangaroo1.png", "kangaroo2.png"], icon: "kangaroo.png", soundFile: "kangaroosound.mp3" },
    penguin: { name: "Penguin", folder: "penguin", details: "Tallest penguins that endure harsh Antarctic winters.", carousel: ["penguin.png", "penguin1.png", "penguin2.png"], icon: "penguin.png", soundFile: "penguinsound.mp3" },
    coyote: { name: "Coyote", folder: "coyote", details: "Adaptable canines known for their cleverness and howls.", carousel: ["coyote.png", "coyote1.png", "coyote2.png"], icon: "coyote.png", soundFile: "coyotesound.mp3" },
    raccoon: { name: "Raccoon", folder: "raccoon", details: "Known for their distinctive black masks and ringed tails.", carousel: ["raccoon.png", "raccoon1.png", "raccoon2.png"], icon: "raccoon.png", soundFile: "raccoonsound.mp3" },
    otter: { name: "Otter", folder: "otter", details: "Semi-aquatic mammals known for their playful nature.", carousel: ["otter.png", "otter1.png", "otter2.png"], icon: "otter.png", soundFile: "ottersound.mp3" },
    rhino: { name: "Rhino", folder: "rhino", details: "Also known as Rhinoceros, a large herbivorous mammal.", carousel: ["rhino1.jpg", "rhino2.jpg", "rhino3.jpg"], icon: "rhino.jpg", soundFile: "rhinosound.mp3" },
    giraffe: { name: "Giraffe", folder: "giraffe", details: "Tallest mammals with distinctive net-like coat patterns.", carousel: ["giraffe.png", "giraffe1.png", "giraffe2.png"], icon: "giraffe.png", soundFile: "giraffesound.mp3" },
    hippopotamus: { name: "Hippopotamus", folder: "hippopotamus", details: "Large, semi-aquatic mammals.", carousel: ["hippopotamus.png", "hippopotamus1.png", "hippopotamus2.png"], icon: "hippopotamus.png", soundFile: "hippopotamussound.mp3" },
    chimpanzee: { name: "Chimpanzee", folder: "chimpanzee", details: "Highly intelligent apes that use tools.", carousel: ["chimpanzee.png", "chimpanzee1.png", "chimpanzee2.png"], icon: "chimpanzee.png", soundFile: "chimpanzeesound.mp3" },
    orangutan: { name: "Orangutan", folder: "orangutan", details: "Arboreal apes with exceptional intelligence.", carousel: ["orangutan.png", "orangutan1.png", "orangutan2.png"], icon: "orangutan.png", soundFile: "orangutansound.mp3" },
    porcupine: { name: "Porcupine", folder: "porcupine", details: "Large rodents with a coat of sharp spines, or quills.", carousel: ["porcupine.png", "porcupine1.png", "porcupine2.png"], icon: "porcupine.png", soundFile: "porcupinesound.mp3" },
    crocodile: { name: "Crocodile", folder: "crocodile", details: "Large amphibious reptiles with powerful jaws.", carousel: ["crocodile.png", "crocodile1.png", "crocodile2.png"], icon: "crocodile.png", soundFile: "crocodilesound.mp3" },
    
    
    corn: { name: "Corn", folder: "corn", details: "Also known as maize.", carousel: ["corn.png", "corn1.png", "corn2.png"], icon: "corn.png", soundFile: "corn.mp3" },
    peas: { name: "Peas", folder: "peas", details: "A cool-season crop with edible seeds.", carousel: ["peas.png", "peas1.png", "peas2.png"], icon: "peas.png", soundFile: "peas.mp3" },
    mint: { name: "Mint", folder: "mint", details: "A versatile and aromatic herb.", carousel: ["mint.png", "mint1.png", "mint2.png"], icon: "mint.png", soundFile: "mint.mp3" },
    onion: { name: "Onion", folder: "onion", details: "Known for their layered bulbs and pungent flavor.", carousel: ["onion.png", "onion1.png", "onion2.png"], icon: "onion.png", soundFile: "onion.mp3" },
    beans: { name: "Beans", folder: "beans", details: "Edible seeds from the legume family.", carousel: ["beans.png", "beans1.png", "beans2.png"], icon: "beans.png", soundFile: "beans.mp3" },
    tomato: { name: "Tomato", folder: "tomato", details: "A fruit often treated as a vegetable.", carousel: ["tomato.png", "tomato1.png", "tomato3.png"], icon: "tomato2.jpg", soundFile: "tomato.mp3" },
    cabbage: { name: "Cabbage", folder: "cabbage", details: "A leafy vegetable with a dense, rounded head.", carousel: ["cabbage.png", "cabbage1.png", "cabbage2.png"], icon: "cabbage.png", soundFile: "cabbage.mp3" },
    potato: { name: "Potato", folder: "potato", details: "A starchy tuberous crop.", carousel: ["potato.png", "potato1.png", "potato2.png"], icon: "potato.png", soundFile: "potato.mp3" },
    carrot: { name: "Carrot", folder: "carrot", details: "Root vegetables with a sweet flavor.", carousel: ["carrot.png", "carrot1.png", "carrot2.png"], icon: "carrot.png", soundFile: "carrot.mp3" },
    garlic: { name: "Garlic", folder: "garlic", details: "A bulbous herb used in cooking.", carousel: ["garlic.png", "garlic1.png", "garlic2.png"], icon: "garlic.png", soundFile: "garlic.mp3" },
    turnip: { name: "Turnip", folder: "turnip", details: "A root vegetable with white flesh.", carousel: ["turnip.png", "turnip1.png", "turnip2.png"], icon: "turnip.png", soundFile: "turnip.mp3" },
    spinach: { name: "Spinach", folder: "spinach", details: "A leafy green vegetable packed with nutrients.", carousel: ["spinach.png", "spinach1.png", "spinach2.png"], icon: "spinach.png", soundFile: "spinach.mp3" },
    pumpkin: { name: "Pumpkin", folder: "pumpkin", details: "A large, round, orange vegetable.", carousel: ["pumpkin.png", "pumpkin1.png", "pumpkin2.png"], icon: "pumpkin.png", soundFile: "pumpkin.mp3" },
    cauliflower: { name: "Cauliflower", folder: "cauliflower", details: "Related to broccoli, cabbage, and kale.", carousel: ["cauliflower.png", "cauliflower1.png", "cauliflower2.png"], icon: "cauliflower.png", soundFile: "cauliflower.mp3" },
    broccoli: { name: "Broccoli", folder: "broccoli", details: "A green, flowering vegetable.", carousel: ["broccoli.png", "broccoli1.png", "broccoli2.png"], icon: "broccoli.png", soundFile: "broccoli.mp3" },
    eggplant: { name: "Eggplant", folder: "eggplant", details: "Also known as aubergine or brinjal.", carousel: ["eggplant.png", "eggplant1.png", "eggplant2.png"], icon: "eggplant.png", soundFile: "eggplant.mp3" },
    capsicum: { name: "Capsicum", folder: "capsicum", details: "Also known as bell pepper.", carousel: ["capsicum.png", "capsicum1.png", "capsicum2.png"], icon: "capsicum.png", soundFile: "capsicum.mp3" },
    ladyfinger: { name: "Ladyfinger", folder: "ladyfinger", details: "Also known as okra or bhindi.", carousel: ["ladyfinger.png", "ladyfinger1.png", "ladyfinger2.png"], icon: "ladyfinger.png", soundFile: "ladyfinger.mp3" },
    mushroom: { name: "Mushroom", folder: "mushroom", details: "The fleshy, spore-bearing fruiting bodies of fungi.", carousel: ["mushroom.png", "mushroom1.png", "mushroom2.png"], icon: "mushroom.png", soundFile: "mushroom.mp3" },
    beetroot: { name: "Beetroot", folder: "beetroot", details: "A root vegetable with a deep red-purple color.", carousel: ["beetroot.png", "beetroot1.png", "beetroot2.png"], icon: "beetroot.png", soundFile: "beetroot.mp3" },
    sweetpotato: { name: "Sweetpotato", folder: "sweetpotato", details: "Starchy, sweet-tasting tuberous roots.", carousel: ["sweetpotato.png", "sweetpotato1.png", "sweetpotato2.png"], icon: "sweetpotato.png", soundFile: "sweetpotato.mp3" },
    cucumber: { name: "Cucumber", folder: "cucumber", details: "A widely cultivated, creeping vine plant.", carousel: ["cucumber.png", "cucumber1.png", "cucumber2.png"], icon: "cucumber.png", soundFile: "cucumber.mp3" },
    bottlegourd: { name: "Bottlegourd", folder: "bottlegourd", details: "Also known as calabash.", carousel: ["bottlegourd.png", "bottlegourd1.png", "bottlegourd2.png"], icon: "bottlegourd.png", soundFile: "bottlegourd.mp3" },
    bittergourd: { name: "Bittergourd", folder: "bittergourd", details: "A tropical vine known for its bitter fruit.", carousel: ["bittergourd.png", "bittergourd1.png", "bittergourd2.png"], icon: "bittergourd.png", soundFile: "bittergourd.mp3" },
    coriander: { name: "Coriander", folder: "coriander", details: "Also known as cilantro.", carousel: ["coriander.png", "coriander1.png", "coriander2.png"], icon: "coriander.png", soundFile: "coriander.mp3" },
    
    
    duck: { name: "Duck", folder: "duck", details: "Birds also referred to as waterfowls.", carousel: ["duck.png", "duck1.png", "duck2.png"], icon: "duck.png", soundFile: "ducksound.mp3" },
    crow: { name: "Crow", folder: "crow", details: "Intelligent, adaptable, and social birds.", carousel: ["crow.png", "crow1.png", "crow2.png"], icon: "crow.png", soundFile: "crowsound.mp3" },
    goose: { name: "Goose", folder: "goose", details: "Large, social waterfowl known for honking calls.", carousel: ["goose.png", "goose1.png", "goose2.png"], icon: "goose.png", soundFile: "goosesound.mp3" },
    owl: { name: "Owl", folder: "owl", details: "Birds of prey, primarily nocturnal.", carousel: ["owl.png", "owl1.png", "owl2.png"], icon: "owl.png", soundFile: "owlsound.mp3" },
    dove: { name: "Dove", folder: "dove", details: "Small to medium-sized birds of the pigeon family.", carousel: ["dove.png", "dove1.png", "dove2.png"], icon: "dove.png", soundFile: "dovesound.mp3" },
    emu: { name: "Emu", folder: "emu", details: "A large, flightless bird native to Australia.", carousel: ["emu.png", "emu1.png", "emu2.png"], icon: "emu.png", soundFile: "emusound.mp3" },
    hen: { name: "Hen", folder: "hen", details: "A mature female chicken, known for laying eggs.", carousel: ["hen.png", "hen1.png", "hen2.png"], icon: "hen.png", soundFile: "hensound.mp3" },
    swan: { name: "Swan", folder: "swan", details: "Large, graceful, long-necked birds.", carousel: ["swan.png", "swan1.png", "swan2.png"], icon: "swan.png", soundFile: "swansound.mp3" },
    eagle: { name: "Eagle", folder: "eagle", details: "Large, powerful birds of prey.", carousel: ["eagle.png", "eagle1.png", "eagle2.png"], icon: "eagle.png", soundFile: "eaglesound.mp3" },
    crane: { name: "Crane", folder: "crane", details: "Large, long-legged, and long-necked birds.", carousel: ["crane.png", "crane1.png", "crane2.png"], icon: "crane.png", soundFile: "cranesound.mp3" },
    vulture: { name: "Vulture", folder: "vulture", details: "Large birds of prey known for feeding on carrion.", carousel: ["vulture.png", "vulture1.png", "vulture2.png"], icon: "vulture.png", soundFile: "vulturesound.mp3" },
    macaw: { name: "Macaw", folder: "macaw", details: "Large, vibrant, and intelligent parrots.", carousel: ["macaw.png", "macaw1.png", "macaw2.png"], icon: "macaw.png", soundFile: "macawsound.mp3" },
    pigeon: { name: "Pigeon", folder: "pigeon", details: "Gentle, plump, small-billed birds.", carousel: ["pigeon.png", "pigeon1.png", "pigeon2.png"], icon: "pigeon.png", soundFile: "pigeonsound.mp3" },
    toucan: { name: "Toucan", folder: "toucan", details: "Colorful, tropical birds with large bills.", carousel: ["toucan.png", "toucan1.png", "toucan2.png"], icon: "toucan.png", soundFile: "toucansound.mp3" },
    sparrow: { name: "Sparrow", folder: "sparrow", details: "Small, generally brown or grey birds.", carousel: ["sparrow.png", "sparrow1.png", "sparrow2.png"], icon: "sparrow.png", soundFile: "sparrowsound.mp3" },
    robin: { name: "Robin", folder: "robin", details: "A small bird with a distinctive red or orange breast.", carousel: ["robin.png", "robin1.png", "robin2.png"], icon: "robin.png", soundFile: "robinsound.mp3" },
    hawk: { name: "Hawk", folder: "hawk", details: "Medium-sized birds of prey.", carousel: ["hawk.png", "hawk1.png", "hawk2.png"], icon: "hawk.png", soundFile: "hawksound.mp3" },
    parrot: { name: "Parrot", folder: "parrot", details: "A diverse group of colorful, intelligent birds.", carousel: ["parrot.png", "parrot1.png", "parrot2.png"], icon: "parrot.png", soundFile: "parrotsound.mp3" },
    pelican: { name: "Pelican", folder: "pelican", details: "A large water bird with a distinctive throat pouch.", carousel: ["pelican.png", "pelican1.png", "pelican2.png"], icon: "pelican.png", soundFile: "pelicansound.mp3" },
    seagull: { name: "Seagull", folder: "seagull", details: "Also known as gulls, they are adaptable seabirds.", carousel: ["seagull.png", "seagull1.png", "seagull2.png"], icon: "seagull.png", soundFile: "seagullsound.mp3" },
    peacock: { name: "Peacock", folder: "peacock", details: "Known for their colorful feathers and loud calls.", carousel: ["peacock2.jpg", "peacock1.jpg", "peacock3.jpg"], icon: "peacock.jpg", soundFile: "peacock.mp3" },
    ostrich: { name: "Ostrich", folder: "ostrich", details: "A large, flightless bird native to Africa.", carousel: ["ostrich.png", "ostrich1.png", "ostrich2.png"], icon: "ostrich.png", soundFile: "ostrichsound.mp3" },
    flamingo: { name: "Flamingo", folder: "flamingo", details: "Tall, pink wading birds with long legs and necks.", carousel: ["flamingo.png", "flamingo1.png", "flamingo2.png"], icon: "flamingo.png", soundFile: "flamingosound.mp3" },
    woodpecker: { name: "Woodpecker", folder: "woodpecker", details: "Known for pecking at trees to find insects.", carousel: ["woodpecker.png", "woodpecker1.png", "woodpecker2.png"], icon: "woodpecker.png", soundFile: "woodpeckersound.mp3" },
    hummingbird: { name: "Hummingbird", folder: "hummingbird", details: "Small, vibrant birds with incredible flying abilities.", carousel: ["hummingbird.png", "hummingbird1.png", "hummingbird2.png"], icon: "hummingbird.png", soundFile: "hummingbirdsound.mp3" },
    kingfisher: { name: "Kingfisher", folder: "kingfisher", details: "Small to medium-sized, brightly colored birds.", carousel: ["kingfisher.png", "kingfisher1.png", "kingfisher2.png"], icon: "kingfisher.png", soundFile: "kingfishersound.mp3" }
};


const gameDataByCategory = {
    petanimal: {
        easy: ['cat', 'dog', 'cow', 'ox', 'rat', 'pig', 'goat', ],
        medium: ['rabbit', 'monkey', 'donkey', 'sheep', 'horse', 'camel', 'hamster'],
        hard: ['buffalo', 'tortoise', 'squirrel','yak']
    },
    wildanimal: {
        easy: ['lion', 'wolf', 'bear', 'tiger', 'zebra', 'deer', 'panda'],
        medium: ['elephant', 'dolphin', 'leopard', 'cheetah', 'gorilla', 'kangaroo', 'penguin', 'coyote', 'raccoon', 'otter'],
        hard: ['rhino', 'giraffe', 'hippopotamus', 'chimpanzee', 'orangutan', 'porcupine', 'crocodile']
    },
    vegetables: {
        easy: ['corn', 'peas', 'mint', 'onion', 'beans'],
        medium: ['tomato', 'cabbage', 'potato', 'carrot', 'garlic', 'turnip', 'spinach', 'pumpkin'],
        hard: ['cauliflower', 'broccoli', 'eggplant', 'capsicum', 'ladyfinger', 'mushroom', 'beetroot', 'sweetpotato', 'cucumber', 'bottlegourd', 'bittergourd', 'coriander']
    },
    birds: {
        easy: ['duck', 'crow', 'goose', 'owl', 'dove', 'emu', 'hen', 'swan'],
        medium: ['eagle', 'crane', 'vulture', 'macaw', 'pigeon', 'toucan', 'sparrow', 'robin', 'hawk', 'parrot', 'pelican', 'seagull'],
        hard: ['peacock', 'ostrich', 'flamingo', 'woodpecker', 'hummingbird', 'kingfisher']
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
    imgElement.src = "assets/img/placeholder.png";
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
        feedbackSounds.correct.play();
        document.getElementById("C_flip").classList.add("flipped");

        
        animalSound.src = `assets/img/${currentItem.details.folder}/${currentItem.details.soundFile}`;
        const textToSpeak = currentItem.details.details;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        utterance.onend = () => loadRandomItem();
        utterance.onerror = (e) => {
            console.error("Speech error:", e);
            loadRandomItem(); 
        };

        animalSound.onended = () => {
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        };
        animalSound.onerror = (e) => {
            console.error("Animal sound error:", e);
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        };
        
        setTimeout(() => {
            animalSound.play();
        }, 500);

    } else {
        totalWrong++;
        updateScoreDisplay();
        introSound.pause();
        feedbackSounds.wrong.play().finally(() => introSound.play().catch(e => {}));
        inputField.classList.add("is-invalid");
        setTimeout(() => inputField.classList.remove("is-invalid"), 1000);
    }
}
function playMyAudio() {
    if (!currentItem) return;
    
    animalSound.src = `assets/img/${currentItem.details.folder}/${currentItem.details.soundFile}`;
    introSound.pause();
    animalSound.play().catch(e => console.error("Error playing sound:", e));
    animalSound.onended = () => introSound.play().catch(e => {});
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
            introSound.pause();
            const textToSpeak = document.getElementById("text").value;
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.onend = () => introSound.play().catch(e => {});
            utterance.onerror = (event) => {
                console.error("Speech synthesis error:", event.error);
                introSound.play().catch(e => {});
            };
            window.speechSynthesis.speak(utterance);
        }
    });

    document.body.addEventListener("click", () => introSound.play().catch(e => {}), { once: true });
    loadRandomItem();
    updateScoreDisplay();
}


window.onload = function() {
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
            link.addEventListener('click', function(event) {
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