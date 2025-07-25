
const feedbackSounds = {
  correct: new Audio("assets/sound/GoodJob.mp3"),
  wrong: new Audio("assets/sound/fail-buzzer.mp3")
};


const introSound = new Audio("assets/sound/kids.mp3");
introSound.volume = 1.0;
introSound.loop = true;


let attempts = 0;
let totalCorrect = 0;
let totalWrong = 0;
let totalAttempts = 0;

function updateScoreDisplay() {
  document.getElementById('correct-count').textContent = totalCorrect;
  document.getElementById('wrong-count').textContent = totalWrong;
  document.getElementById('attempt-count').textContent = attempts;
  
 
  const avgAttempts = totalCorrect > 0 ? (totalAttempts / totalCorrect).toFixed(1) : 0;
  document.getElementById('avg-attempts').textContent = avgAttempts;
}

document.body.addEventListener("click", () => {
  introSound.play().catch(e => console.log("Intro sound autoplay error:", e));
}, { once: true });

const category = document.body.dataset.category || "petanimal";
const basePath = `assets/img/${category}`;

const allAnimals = {
  petanimal: [
    {
      name: "Cat",
      folder: "cat",
      details: "The cat is a small carnivorous mammal. It is the only domesticated species in the family Felidae.",
      carousel: ["cat.png", "cat1.jpg", "cat2.jpg"],
      icon: "cat3.png",
      soundFile: "catsound.wav"
    },
    {
      name: "Dog",
      folder: "dog",
      details: "The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct gray wolves.",
      carousel: ["dg1.jpg", "dg2.jpg", "dg3.jpg"],
      icon: "dog.png",
      soundFile: "dogsound.wav"
    },
    {
      name: "Cow",
      folder: "cow",
      details: "Cows are domesticated mammals commonly raised as livestock for meat, milk, and leather.",
      carousel: ["cow1.jpg", "cow2.jpg", "cow3.jpg"],
      icon: "cow.jpg",
      soundFile: "cowsound.wav"
    },{
      name: "ox",
      folder: "ox",
      details: "An ox is a bovine, usually a castrated male (steer), that has been trained to work.",
      carousel: ["ox.png", "ox1.png", "ox2.png", "ox3.png"],
      icon: "ox.png",
      soundFile: "oxsound.mp3"
    },
    {
      name: "buffalo",
      folder: "buffalo",
      details: "large domesticated animals widely used for agricultural work and milk production in many parts of the world.",
      carousel: ["buffalo.png", "buffalo1.png", "buffalo2.png", "buffalo3.png"],
      icon: "buffalo.png",
      soundFile: "buffalosound.mp3"
    },
    {
      name: "rat",
      folder: "rat",
      details: "Rats are rodents, which are small animals with sharp front teeth that gnaw.",
      carousel: ["rat.png", "rat1.png", "rat2.png", "rat3.png"],
      icon: "rat.png",
      soundFile: "ratsound.mp3"
    },
    {
      name: "rabbit",
      folder: "rabbit",
      details: "small, furry mammals with long ears, short tails, and powerful hind legs, known for their hopping and digging abilities.",
      carousel: ["rabbit.png", "rabbit1.png", "rabbit2.png", "rat3.png"],
      icon: "rabbit.png",
      soundFile: "rabbitsound.mp3"
    },
    {
      name: "monkey",
      folder: "monkey",
      details: "Monkeys are a diverse group of mammals known for their intelligence, agility, and social behavior.",
      carousel: ["monkey.png", "monkey1.png", "monkey2.png", "monkey3.png"],
      icon: "monkey.png",
      soundFile: "monkeysound.mp3"
    },
    {
      name: "tortoise",
      folder: "tortoise",
      details: "Tortoises are land-dwelling reptiles characterized by their protective shells and slow movement.",
      carousel: ["tortoise.png", "tortoise1.png", "tortoise2.png", "tortoise3.png"],
      icon: "tortoise.png",
      soundFile: "tortoisesound.mp3"
    },
    {
      name: "pig",
      folder: "pig",
      details: "Pigs are stout-bodied, short-legged, omnivorous mammals with thick skin and bristly hair.",
      carousel: ["pig.png", "pig1.png", "pig2.png", "pig3.png"],
      icon: "pig.png",
      soundFile: "pigsound.mp3"
    },
    {
      name: "donkey",
      folder: "donkey",
      details: "Donkeys, also known as asses or burros, are domesticated mammals of the horse family (Equidae), descended from the African wild ass.",
      carousel: ["donkey.png", "donkey1.png", "donkey2.png", "donkey3.png"],
      icon: "donkey.png",
      soundFile: "donkeysound.mp3"
    },
    {
      name: "squirrel",
      folder: "squirrel",
      details: "Squirrels are small to medium-sized rodents known for their bushy tails and often playful nature.",
      carousel: ["squirrel.png", "squirrel1.png", "squirrel2.png", "squirrel3.png"],
      icon: "squirrel.png",
      soundFile: "squirrelsound.mp3"
    },
    {
      name: "goat",
      folder: "goat",
      details: "Goats are domesticated mammals known for their milk, meat, and wool production.",
      carousel: ["goat.png", "goat1.png", "goat2.png", "goat3.png"],
      icon: "goat.png",
      soundFile: "goatsound.mp3"
    },
    {
      name: "sheep",
      folder: "sheep",
      details: "Sheep are domesticated ruminant mammals, primarily known for their wool, meat (lamb and mutton), and milk.",
      carousel: ["sheep.png", "sheep1.png", "sheep2.png", "sheep3.png"],
      icon: "sheep.png",
      soundFile: "sheepsound.mp3"
    },
    {
      name: "horse",
      folder: "horse",
      details: "Horses are large, strong, herbivorous mammals belonging to the Equus genus, characterized by their single hoofed toe on each foot.",
      carousel: ["horse.png", "horse1.png", "horse2.png", "horse3.png"],
      icon: "horse.png",
      soundFile: "horsesound.mp3"
    },
    {
      name: "camel",
      folder: "camel",
      details: "Camels are large, long-necked ungulates with slender legs and cushioned feet, known for their humps.",
      carousel: ["camel.png", "camel1.png", "camel2.png", "camel3.png"],
      icon: "camel.png",
      soundFile: "camelsound.mp3"
    },
    {
      name: "yak",
      folder: "yak",
      details: "A yak is a large, long-haired bovine animal native to the high-altitude regions of Central Asia, particularly Tibet.",
      carousel: ["yak.png", "yak1.png", "yak2.png", "yak3.png"],
      icon: "yak.png",
      soundFile: "yaksound.mp3"
    },
    {
      name: "hamster",
      folder: "hamster",
      details: "Hamsters are small, nocturnal rodents known for their cheek pouches, which they use to store food, and their burrowing habits.",
      carousel: ["hamster.png", "hamster1.png", "hamster2.png", "hamster3.png"],
      icon: "hamster.png",
      soundFile: "hamstersound.mp3"
    },

  ],
  wildanimal: [
    {
      name: "Elephant",
      folder: "elephant",
      details: "Elephants are the largest existing land animals. They are characterized by their long trunk, columnar legs, and huge head with temporal glands and wide, flat ears.",
      carousel: ["elel1.png", "elel2.png", "elel3.jpg"],
      icon: "elephant.jpg",
      soundFile: "elephantsound.mp3"
    },
    {
      name: "Rhino",
      folder: "rhino",
      details: "rhino are ferocious animal kids u should better say far away from them ",
      carousel: ["rhino1.jpg", "rhino2.jpg", "rhino3.jpg"],
      icon: "rhino.jpg",
      soundFile: "rhinosound.mp3"
    },
    {
      name: "Lion",
      folder: "llon",
      details: "The lion is one of the largest wild cats. Known as the king of the jungle, lions are fierce and majestic animals.",
      carousel: ["lion.png", "lion1.png", "Lion2.jpg", "Lion3.jpg"],
      icon: "lion.png",
      soundFile: "lionsound.mp3"
    },
    {
      name: "wolf",
      folder: "wolf",
      details: "Highly social pack hunters with complex communication systems.",
      carousel: ["wolf.jpg", "wolf1.jpg", "wolf2.jpg", "wolf3.jpg"],
      icon: "wolf.jpg",
      habitat: "Forests, tundra, grasslands",
    diet: "Carnivore",
    lifespan: "6-8 years",
    weight: "25-40 kg",
    conservation: "Least Concern",
      soundFile: "wolfsound.mp3"
      },
      {
      name: "dolphin",
      folder: "dolphin",
      details: "Intelligent marine mammals known for echolocation and playful behavior.",
      carousel: ["dolphin.png", "dolphin1.png", "dolphin2.png", "dolphin3.png"],
      icon: "dolphin.png",
      habitat: "Warm coastal waters worldwide",
    diet: "Carnivore",
    lifespan: "20-45 years",
    weight: "150-650 kg",
    conservation: "Least Concern",
      soundFile: "dolphinsound.mp3"
      },
      {
      name: "bear",
      folder: "bear",
      details: "Powerful omnivores with excellent fishing and foraging abilities.",
      carousel: ["bear.png", "bear1.png", "bear2.png", "bear3.png"],
      icon: "bear.png",
      habitat: "North American forests, mountains",
    diet: "Omnivore",
    lifespan: "20-25 years",
    weight: "180-360 kg",
    conservation: "Least Concern",
      soundFile: "bearsound.mp3"
      },
      {
      name: "monkey",
      folder: "monkey",
      details: "Loudest land animals with calls that can be heard 5 km away.",
      carousel: ["monkey.png", "monkey1.png", "monkey2.png", "monkey3.png"],
      icon: "monkey.png",
      habitat: "Central and South American rainforests",
    diet: "Herbivore",
    lifespan: "15-20 years",
    weight: "4-10 kg",
    conservation: "Least Concern",
      soundFile: "monkeysound.mp3"
      },
      {
      name: "tiger",
      folder: "tiger",
      details: "Largest living cat species adapted to all climates.",
      carousel: ["tiger.png", "tiger1.png", "tiger2.png", "tiger3.png"],
      icon: "tiger.png",
      habitat: "forests",
    diet: "Carnivore",
    lifespan: "10-15 years",
    weight: "180-306 kg",
    conservation: "Endangered",
      soundFile: "tigersound.mp3"
      },
      {
      name: "leopard",
      folder: "leopard",
      details: "Elusive cats with fur and exceptional jumping ability.",
      carousel: ["leopard.png", "leopard1.png", "leopard2.png", "leopard3.png"],
      icon: "leopard.png",
    habitat: "Central Asian mountains",
    diet: "Carnivore",
    lifespan: "10-12 years",
    weight: "22-55 kg",
    conservation: "Vulnerable",
      soundFile: "leopardsound.mp3"
      },
      {
      name: "cheetah",
      folder: "cheetah",
      details: "Fastest land animal reaching speeds up to 120 km/h.",
      carousel: ["cheetah.png", "cheetah1.png", "cheetah2.png", "cheetah3.png"],
      icon: "cheetah.png",
    habitat: "African savannas, grasslands",
    diet: "Carnivore",
    lifespan: "8-12 years",
    weight: "21-72 kg",
    conservation: "Vulnerable",
      soundFile: "cheetahsound.mp3"
      },
      {
      name: "giraffe",
      folder: "giraffe",
      details: "Tallest mammals with distinctive net-like coat patterns.",
      carousel: ["giraffe.png", "giraffe1.png", "giraffe2.png", "giraffe3.png"],
      icon: "giraffe.png",
    habitat: "East African savannas",
    diet: "Herbivore",
    lifespan: "20-25 years",
    weight: "800-1200 kg",
    conservation: "Endangered",
      soundFile: "giraffesound.mp3"
      },
      {
      name: "hippopotamus",
      folder: "hippopotamus",
      details: "Semi-aquatic mammals that are surprisingly aggressive and territorial.",
      carousel: ["hippopotamus.png", "hippopotamus1.png", "hippopotamus2.png", "hippopotamus3.png"],
      icon: "hippopotamus.png",
    habitat: "Sub-Saharan African rivers",
    diet: "Herbivore",
    lifespan: "40-50 years",
    weight: "1500-3000 kg",
    conservation: "Vulnerable",
      soundFile: "hippopotamussound.mp3"
      },
      {
      name: "gorilla",
      folder: "gorilla",
      details: "Gentle giants with complex social structures and human-like behaviors.",
      carousel: ["gorilla.png", "gorilla1.png", "gorilla2.png", "gorilla3.png"],
      icon: "gorilla.png",
    habitat: "Central African mountain forests",
    diet: "Herbivore",
    lifespan: "35-40 years",
    weight: "70-200 kg",
    conservation: "Critically Endangered",
      soundFile: "gorillasound.mp3"
      },
      {
      name: "chimpanzee",
      folder: "chimpanzee",
      details: "Highly intelligent apes that use tools and have complex social behaviors.",
      carousel: ["chimpanzee.png", "chimpanzee1.png", "chimpanzee2.png", "chimpanzee3.png"],
      icon: "chimpanzee.png",
    habitat: "African tropical forests",
    diet: "Omnivore",
    lifespan: "40-50 years",
    weight: "32-60 kg",
    conservation: "Endangered",
      soundFile: "chimpanzeesound.mp3"
      },
      {
      name: "orangutan",
      folder: "orangutan",
      details: "Arboreal apes with exceptional intelligence and tool-making abilities.",
      carousel: ["orangutan.png", "orangutan1.png", "orangutan2.png", "orangutan3.png"],
      icon: "orangutan.png",
    habitat: "Borneo rainforests",
    diet: "Omnivore",
    lifespan: "30-40 years",
    weight: "30-90 kg",
    conservation: "Critically Endangered",
      soundFile: "orangutansound.mp3"
      },
      { 
      name: "kangaroo",
      folder: "kangaroo",
      details: "Largest marsupials capable of hopping at speeds up to 60 km/h.",
      carousel: ["kangaroo.png", "kangaroo1.png", "kangaroo2.png", "kangaroo3.png"],
      icon: "kangaroo.png",
    habitat: "Australian grasslands, deserts",
    diet: "Herbivore",
    lifespan: "12-18 years",
    weight: "55-90 kg",
    conservation: "Least Concern",
      soundFile: "Kangaroosound.mp3"
      },
      { 
      name: "koala",
      folder: "koala",
      details: "Marsupials that sleep 20 hours daily and eat only eucalyptus leaves.",
      carousel: ["koala.png", "koala1.png", "koala2.png", "koala3.png"],
      icon: "koala.png",
    habitat: "Eastern Australian eucalyptus forests",
    diet: "Herbivore",
    lifespan: "10-15 years",
    weight: "4-15 kg",
    conservation: "Vulnerable",
      soundFile: "koalasound.mp3"
      },
      { 
      name: "panda",
      folder: "panda",
      details: "Iconic bears that eat almost exclusively bamboo and are symbols of conservation.",
      carousel: ["panda.png", "panda1.png", "panda2.png", "panda3.png"],
      icon: "panda.png",
    habitat: "Chinese bamboo forests",
    diet: "Herbivore",
    lifespan: "20-30 years",
    weight: "70-120 kg",
    conservation: "Vulnerable",
      soundFile: "pandasound.mp3"
      },
      { 
      name: "penguin",
      folder: "penguin",
      details: "Tallest penguins that endure harsh Antarctic winters to breed.",
      carousel: ["penguin.png", "penguin1.png", "penguin2.png", "penguin3.png"],
      icon: "penguin.png",
    habitat: "Antarctic ice sheets",
    diet: "Carnivore",
    lifespan: "15-20 years",
    weight: "22-45 kg",
    conservation: "Near Threatened",
      soundFile: "penguinsound.mp3"
      },
      { 
      name: "deer",
      folder: "deer",
      details: "Deer are graceful animals found in forests and grassland.",
      carousel: ["deer.png", "deer1.png", "deer2.png", "deer3.png"],
      icon: "deer.png",
    habitat: "woodland and forest habitats",
    diet: "Herbivored",
    lifespan: "0-10years",
    weight: "68-136 kg",
    conservation: "Not Extinct",
      soundFile: "deersound.mp3"
      },
      { 
      name: "coyote",
      folder: "coyote",
      details: "coyote are adaptable, medium-sized canines native to North America, known for their cleverness and nighttime howls.",
      carousel: ["coyote.png", "coyote1.png", "coyote2.png", "coyote3.png"],
      icon: "coyote.png",
    habitat: "forests, grasslands, deserts, and even urban areas",
    diet: "scavengers",
    lifespan: "14-16years",
    weight: "6.8-21 kg",
    conservation: "Least Concern",
      soundFile: "coyotesound.mp3"
     },
     { 
      name: "mangoose",
      folder: "mangoose",
      details: "mangoose are small, carnivorous mammals known for their slender bodies, pointed snouts, small ears, short legs, and bushy tails.",
      carousel: ["mangoose.png", "mangoose1.png", "mangoose2.png", "mangoose3.png"],
      icon: "mangoose.png",
    habitat: "savannas, grasslands, scrublands, forests, and even deserts, with some mongooses inhabiting wetlands, marshes, and swamps.",
    diet: "carnivorous",
    lifespan: "10-17years",
    weight: "2.5-5.5 kg",
    conservation: "Not Extinct",
      soundFile: "mangoosesound.mp3"
     },
     { 
      name: "porcupine",
      folder: "porcupine",
      details: "Porcupines are large, quill-covered rodents known for their unique defense mechanism.",
      carousel: ["porcupine.png", "porcupine1.png", "porcupine2.png", "porcupine3.png"],
      icon: "porcupine.png",
    habitat: "forests, grasslands, and rocky areas",
    diet: "herbivores",
    lifespan: "18-20years",
    weight: "10-20 kg",
    conservation: "Least Concern",
      soundFile: "porcupinesound.mp3"
     },
     { 
      name: "zebra",
      folder: "zebra",
      details: "Zebras are mammals known for their distinctive black and white striped coats and are members of the horse family.",
      carousel: ["zebra.png", "zebra1.png", "zebra2.png", "zebra3.png"],
      icon: "zebra.png",
    habitat: "grasslands and savannas of eastern and southern Africa",
    diet: "herbivores",
    lifespan: "20-40years",
    weight: "175-385 kg",
    conservation: "Least Concern",
      soundFile: "zebrasound.mp3"
     },
     { 
      name: "raccoon",
      folder: "raccoon",
      details: "Raccoons are medium-sized mammals known for their distinctive black masks and ringed tails.",
      carousel: ["raccoon.png", "raccoon1.png", "raccoon2.png", "raccoon3.png"],
      icon: "raccoon.png",
    habitat: "urban areas, wetlands, and mountainous regions",
    diet: "Opportunistic and omnivorous",
    lifespan: "5-6years",
    weight: "5-12 kg",
    conservation: "Least Concern",
      soundFile: "raccoonsound.mp3"
     },
     { 
      name: "hyena",
      folder: "hyena",
      details: "Hyenas are carnivorous mammals known for their dog-like appearance and unique social structures.",
      carousel: ["hyena.png", "hyena1.png", "hyena2.png", "hyena3.png"],
      icon: "hyena.png",
    habitat: "grasslands, savannas, woodlands, and even sub-deserts",
    diet: "carnivorous",
    lifespan: "3-12years",
    weight: "44-64 kg",
    conservation: "Least Concern",
      soundFile: "hyenasound.mp3"
     },
     { 
      name: "meerkat",
      folder: "meerkat",
      details: "Meerkats are small, social mongooses native to southern Africa.",
      carousel: ["meerkat.png", "meerkat1.png", "meerkat2.png", "meerkat3.png"],
      icon: "meerkat.png",
    habitat: "arid and semi-arid regions of southern Africa, including deserts, savannas, and grasslands",
    diet: "omnivores",
    lifespan: "12-14years",
    weight: "730g-1 kg",
    conservation: "Least Concern",
      soundFile: "meerkatsound.mp3"
     },
     { 
      name: "crocodile",
      folder: "crocodile",
      details: "Crocodiles are large, amphibious reptiles with powerful jaws, sharp teeth, and a streamlined body built for both aquatic and terrestrial life.",
      carousel: ["crocodile.png", "crocodile1.png", "crocodile2.png", "crocodile3.png"],
      icon: "crocodile.png",
    habitat: "warm, tropical, and subtropical regions, thriving in a variety of freshwater and saltwater environments",
    diet: "carnivores",
    lifespan: "70-100years",
    weight: "200g-1100 kg",
    conservation: "Critically Endangered",
      soundFile: "crocodilesound.mp3"
     },
     { 
      name: "otter",
      folder: "otter",
      details: "Otters are semi-aquatic mammals known for their playful nature and sleek, slender bodies.",
      carousel: ["otter.png", "otter1.png", "otter2.png", "otter3.png"],
      icon: "otter.png",
    habitat: "streams, rivers, lakes, ponds and marshes",
    diet: "carnivores",
    lifespan: "10-25years",
    weight: "7-12 kg",
    conservation: "endangered",
      soundFile: "ottersound.mp3"
     },
  ],
  vegitables: [
    {
      name: "Tomato",
      folder: "tomato",
      details: "Tomatoes are yummy fruits that are often treated as vegetables in cooking. They are usually red, but can also be yellow or green.",
      carousel: ["tomato.png", "tomato1.png", "tomato3.png"],
      icon: "tomato2.jpg",
      soundFile: "tomato.mp3"
    },
     {
      name: "cauliflower",
      folder: "cauliflower",
      details: "Cauliflower is a versatile and nutritious vegetable belonging to the cruciferous family, related to broccoli, cabbage, and kale.",
      carousel: ["cauliflower.png", "cauliflower1.png", "cauliflower2.png", "cauliflower3.png"],
      icon: "cauliflower.png",
      soundFile: "cauliflower.mp3"
    },
    {
      name: "broccoli",
      folder: "broccoli",
      details: "Broccoli is a green, flowering vegetable in the same family as cabbage and cauliflower.",
      carousel: ["broccoli.png", "broccoli1.png", "broccoli2.png", "broccoli3.png"],
      icon: "broccoli.png",
      soundFile: "broccoli.mp3"
    },
    {
      name: "cabbage",
      folder: "cabbage",
      details: "Cabbage is a leafy green, purple, or white vegetable with a dense, rounded head formed by tightly packed leaves.",
      carousel: ["cabbage.png", "cabbage1.png", "cabbage2.png", "cabbage3.png"],
      icon: "cabbage.png",
      soundFile: "cabbage.mp3"
    },
    {
      name: "potato",
      folder: "potato",
      details: "The potato (Solanum tuberosum) is a starchy tuberous crop belonging to the nightshade family.",
      carousel: ["potato.png", "potato1.png", "potato2.png", "potato3.png"],
      icon: "potato.png",
      soundFile: "potato.mp3"
    },
    {
      name: "eggplant",
      folder: "eggplant",
      details: "Eggplant, also known as aubergine or brinjal, is a warm-weather vegetable cultivated worldwide. It's a nutrient-rich berry with a glossy, deep purple skin (though other colors exist) and a spongy, meaty texture.",
      carousel: ["eggplant.png", "eggplant1.png", "eggplant2.png", "eggplant3.png"],
      icon: "eggplant.png",
      soundFile: "eggplant.mp3"
    },
    {
      name: "capsicum",
      folder: "capsicum",
      details: "Capsicum, also known as bell pepper or Shimla Mirch, is a popular vegetable grown worldwide, belonging to the nightshade family.",
      carousel: ["capsicum.png", "capsicum1.png", "capsicum2.png", "capsicum3.png"],
      icon: "capsicum.png",
      soundFile: "capsicum.mp3"
    },
    {
      name: "chillies",
      folder: "chillies",
      details: "Chillies, the dried ripe fruit of the Capsicum genus, are a widely used spice, known for their pungency and flavor.",
      carousel: ["chillies.png", "chillies1.png", "chillies2.png", "chillies3.png"],
      icon: "chillies.png",
      soundFile: "chillies.mp3"
    },
    {
      name: "radish",
      folder: "radish",
      details: "Radishes are a versatile and nutritious root vegetable, belonging to the Brassicaceae family.",
      carousel: ["radish.png", "radish1.png", "radish2.png", "radish3.png"],
      icon: "radish.png",
      soundFile: "radish.mp3"
    },
    {
      name: "corn",
      folder: "corn",
      details: "Corn, also known as maize, is a cereal grain domesticated from wild teosinte in southern Mexico thousands of years ago.",
      carousel: ["corn.png", "corn1.png", "corn2.png", "corn3.png"],
      icon: "corn.png",
      soundFile: "corn.mp3"
    },
    {
      name: "ginger",
      folder: "ginger",
      details: "Ginger is a herbaceous perennial plant, primarily cultivated for its aromatic and pungent rhizome (underground stem) which is used as a spice and in traditional medicine.",
      carousel: ["ginger.png", "ginger1.png", "ginger2.png", "ginger3.png"],
      icon: "ginger.png",
      soundFile: "ginger.mp3"
    },
    {
      name: "ladyfinger",
      folder: "ladyfinger",
      details: "Lady finger, also known as okra or bhindi, is a flowering plant with edible green pods. It's a popular vegetable known for its mild, slightly grassy flavor and unique, mucilaginous (slimy) texture when cooked.",
      carousel: ["ladyfinger.png", "ladyfinger1.png", "ladyfinger2.png", "ladyfinger3.png"],
      icon: "ladyfinger.png",
      soundFile: "ladyfinger.mp3"
    },
    {
      name: "peas",
      folder: "peas",
      details: "Peas (Pisum sativum) are a cool-season crop, grown for their edible seeds and pods.",
      carousel: ["peas.png", "peas1.png", "peas2.png", "peas3.png"],
      icon: "peas.png",
      soundFile: "peas.mp3"
    },
    {
      name: "carrot",
      folder: "carrot",
      details: "Carrots are root vegetables, known for their characteristic orange color and sweet flavor, belonging to the Apiaceae family.",
      carousel: ["carrot.png", "carrot1.png", "carrot2.png", "carrot3.png"],
      icon: "carrot.png",
      soundFile: "carrot.mp3"
    },
    {
      name: "garlic",
      folder: "garlic",
      details: "Garlic (Allium sativum) is a bulbous herb widely used in cooking and traditional medicine.",
      carousel: ["garlic.png", "garlic1.png", "garlic2.png", "garlic3.png"],
      icon: "garlic.png",
      soundFile: "garlic.mp3"
    },
    {
      name: "onion",
      folder: "onion",
      details: "Onions (Allium cepa) are a common vegetable known for their layered bulbs and pungent flavor.",
      carousel: ["onion.png", "onion1.png", "onion2.png", "onion3.png"],
      icon: "onion.png",
      soundFile: "onion.mp3"
    },
    {
      name: "mushroom",
      folder: "mushroom",
      details: "Mushrooms are the fleshy, spore-bearing fruiting bodies of fungi, typically found above ground.",
      carousel: ["mushroom.png", "mushroom1.png", "mushroom2.png", "mushroom3.png"],
      icon: "mushroom.png",
      soundFile: "mushroom.mp3"
    },
    {
      name: "turnip",
      folder: "turnip",
      details: "Turnips are a root vegetable with a white flesh and a purple-tinged white skin.",
      carousel: ["turnip.png", "turnip1.png", "turnip2.png", "turnip3.png"],
      icon: "turnip.png",
      soundFile: "turnip.mp3"
    },
    {
      name: "beetroot",
      folder: "beetroot",
      details: "Beetroot, also known as red beet or garden beet, is a root vegetable with a distinctive deep red-purple color.",
      carousel: ["beetroot.png", "beetroot1.png", "beetroot2.png", "beetroot3.png"],
      icon: "beetroot.png",
      soundFile: "beetroot.mp3"
    },
    {
      name: "sweetpotato",
      folder: "sweetpotato",
      details: "Sweet potatoes (Ipomoea batatas) are starchy, sweet-tasting tuberous roots, and are a nutritious vegetable with a wide range of uses.",
      carousel: ["sweetpotato.png", "sweetpotato1.png", "sweetpotato2.png", "sweetpotato3.png"],
      icon: "sweetpotato.png",
      soundFile: "sweetpotato.mp3"
    },
    
    {
      name: "beans",
      folder: "beans",
      details: "Beans are edible seeds or seed pods from plants in the legume family (Fabaceae) and are a versatile food source, enjoyed both fresh and dried.",
      carousel: ["beans.png", "beans1.png", "beans2.png", "beans3.png"],
      icon: "beans.png",
      soundFile: "beans.mp3"
    },
    {
      name: "cucumber",
      folder: "cucumber",
      details: "Cucumbers (Cucumis sativus) are a widely cultivated, creeping vine plant in the gourd family (Cucurbitaceae) known for their cylindrical, edible fruits.",
      carousel: ["cucumber.png", "cucumber1.png", "cucumber2.png", "cucumber3.png"],
      icon: "cucumber.png",
      soundFile: "cucumber.mp3"
    },
    {
      name: "bottlegourd",
      folder: "bottlegourd",
      details: "Bottle gourd (aka calabash) is an annual, vining member of the squash family that is widely cultivated for its interestingly shaped fruits.",
      carousel: ["bottlegourd.png", "bottlegourd1.png", "bottlegourd2.png", "bottlegourd3.png"],
      icon: "bottlegourd.png",
      soundFile: "bottlegourd.mp3"
    },
    {
      name: "bittergourd",
      folder: "bittergourd",
      details: "Cucumbers (Cucumis sativus) are a widely cultivated, creeping vine plant in the gourd family (Cucurbitaceae) known for their cylindrical, edible fruits.",
      carousel: ["bittergourd.png", "bittergourd1.png", "bittergourd2.png", "bittergourd3.png"],
      icon: "bittergourd.png",
      soundFile: "bittergourd.mp3"
    },
    {
      name: "mint",
      folder: "mint",
      details: "Mint, belonging to the genus Mentha, is a versatile and aromatic herb known for its refreshing flavor and various uses.",
      carousel: ["mint.png", "mint1.png", "mint2.png", "mint3.png"],
      icon: "mint.png",
      soundFile: "mint.mp3"
    },
    {
      name: "spinach",
      folder: "spinach",
      details: "Spinach is a leafy green vegetable packed with nutrients, known for its vibrant green color and mild, slightly sweet, and earthy flavor.",
      carousel: ["spinach.png", "spinach1.png", "spinach2.png", "spinach3.png"],
      icon: "spinach.png",
      soundFile: "spinach.mp3"
    },
    {
      name: "coriander",
      folder: "coriander",
      details: "Coriander, also known as cilantro when referring to the leaves, is an annual herb in the Apiaceae family. Both the leaves and seeds are used in cooking and traditional medicine.",
      carousel: ["coriander.png", "coriander1.png", "coriander2.png", "coriander3.png"],
      icon: "coriander.png",
      soundFile: "coriander.mp3"
    },
    {
      name: "pumpkin",
      folder: "pumpkin",
      details: "Pumpkins are large, round, orange vegetables (though they can also be other colors like green, white, or red) that are a type of winter squash.",
      carousel: ["pumpkin.png", "pumpkin1.png", "pumpkin2.png", "pumpkin3.png"],
      icon: "pumpkin.png",
      soundFile: "pumpkin.mp3"
    },
  ],
  birds: [
    {
      name: "peacock",
      folder: "peacock",
      details: "Peacocks are known for their colorful feathers and loud calls. They often spread their tail in a beautiful fan shape to attract attention.",
      carousel: ["peacock2.jpg", "peacock1.jpg", "peacock3.jpg"],
      icon: "peacock.jpg",
      soundFile: "peacock.mp3"
    }, {
      name: "eagle",
      folder: "eagle",
      details: "Eagles are large, powerful birds of prey known for their strength, sharp talons, and keen eyesight.",
      carousel: ["eagle.png", "eagle1.png", "eagle2.png", "eagle3.png"],
      icon: "eagle.png",
      soundFile: "eaglesound.mp3"
    },
    {
      name: "duck",
      folder: "duck",
      details: "Ducks are birds that are also referred to as waterfowls because they are usually found in places like marshes, oceans, rivers, ponds, and lakes that have water.",
      carousel: ["duck.png", "duck1.png", "duck2.png", "duck3.png"],
      icon: "duck.png",
      soundFile: "ducksound.mp3"
    },
    {
      name: "crow",
      folder: "crow",
      details: "Crows are intelligent, adaptable, and social birds belonging to the genus Corvus.",
      carousel: ["crow.png", "crow1.png", "crow2.png", "crow3.png"],
      icon: "crow.png",
      soundFile: "crowsound.mp3"
    },
    {
      name: "goose",
      folder: "goose",
      details: "Goose are large, social waterfowl known for their honking calls and V-formation flights.",
      carousel: ["goose.png", "goose1.png", "goose2.png", "goose3.png"],
      icon: "goose.png",
      soundFile: "goosesound.mp3"
    },
    {
      name: "owl",
      folder: "owl",
      details: "Owls are birds of prey, primarily nocturnal, and belong to the order Strigiformes. They are characterized by their large, forward-facing eyes, sharp talons, hooked beaks, and soft, often mottled feathers.",
      carousel: ["owl.png", "owl1.png", "owl2.png", "owl3.png"],
      icon: "owl.png",
      soundFile: "owlsound.mp3"
    },
    {
      name: "ostrich",
      folder: "ostrich",
      details: "The ostrich is a large, flightless bird native to Africa, known for being the largest and heaviest living bird.",
      carousel: ["ostrich.png", "ostrich1.png", "ostrich2.png", "ostrich3.png"],
      icon: "ostrich.png",
      soundFile: "ostrichsound.mp3"
    },
    {
      name: "crane",
      folder: "crane",
      details: "Cranes are large, long-legged, and long-necked birds, belonging to the family Gruidae. They are known for their distinctive calls, elaborate mating dances, and unique nesting habits.",
      carousel: ["crane.png", "crane1.png", "crane2.png", "crane3.png"],
      icon: "crane.png",
      soundFile: "cranesound.mp3"
    },
    {
      name: "flamingo",
      folder: "flamingo",
      details: "Flamingos are tall, pink wading birds with long legs and necks, and a distinctive curved beak. They are known for their vibrant pink or reddish-pink plumage, which comes from pigments in their diet.",
      carousel: ["flamingo.png", "flamingo1.png", "flamingo2.png", "flamingo3.png"],
      icon: "flamingo.png",
      soundFile: "flamingosound.mp3"
    },
    {
      name: "woodpecker",
      folder: "woodpecker",
      details: "Woodpeckers are a diverse family of birds (Picidae) known for their unique ability to peck at trees to find insects and create nesting cavities.",
      carousel: ["woodpecker.png", "woodpecker1.png", "woodpecker2.png", "woodpecker3.png"],
      icon: "woodpecker.png",
      soundFile: "woodpeckersound.mp3"
    },
    {
      name: "vulture",
      folder: "vulture",
      details: "Vultures are large birds of prey known for feeding on carrion, which is dead or dying animals. They are scavengers that play a vital role in the ecosystem by cleaning up carcasses and preventing the spread of disease.",
      carousel: ["woodpecker.png", "woodpecker1.png", "woodpecker2.png", "woodpecker3.png"],
      icon: "vulture.png",
      soundFile: "vulturesound.mp3"
    },
    {
      name: "macaw",
      folder: "macaw",
      details: "Macaws are large, vibrant, and intelligent New World parrots, known for their long tails and powerful beaks.",
      carousel: ["macaw.png", "macaw1.png", "macaw2.png", "macaw3.png"],
      icon: "macaw.png",
      soundFile: "macawsound.mp3"
    },
    {
      name: "pigeon",
      folder: "pigeon",
      details: "Pigeons are gentle, plump, small-billed birds with a skin saddle (cere) between the bill and forehead.",
      carousel: ["pigeon.png", "pigeon1.png", "pigeon2.png", "pigeon3.png"],
      icon: "pigeon.png",
      soundFile: "pigeonsound.mp3"
    },
    {
      name: "toucan",
      folder: "toucan",
      details: "Toucans are colorful, tropical birds known for their large, distinctive bills. They are found in Central and South America and are typically seen in small flocks in rainforests.",
      carousel: ["toucan.png", "toucan1.png", "toucan2.png", "toucan3.png"],
      icon: "toucan.png",
      soundFile: "toucansound.mp3"
    },
    {
      name: "sparrow",
      folder: "sparrow",
      details: "Sparrows are small, generally brown or grey birds known for their short tails and strong, conical beaks, well-suited for eating seeds and insects.",
      carousel: ["sparrow.png", "sparrow1.png", "sparrow2.png", "sparrow3.png"],
      icon: "sparrow.png",
      soundFile: "sparrowsound.mp3"
    },
    {
      name: "robin",
      folder: "robin",
      details: "A robin generally refers to a small, plump bird with a distinctive red or orange breast.",
      carousel: ["robin.png", "robin1.png", "robin2.png", "sparrow3.png"],
      icon: "robin.png",
      soundFile: "robinsound.mp3"
    },
    {
      name: "robin",
      folder: "robin",
      details: "A robin generally refers to a small, plump bird with a distinctive red or orange breast.",
      carousel: ["robin.png", "robin1.png", "robin2.png", "sparrow3.png"],
      icon: "robin.png",
      soundFile: "robinsound.mp3"
    },
    {
      name: "hawk",
      folder: "hawk",
      details: "Hawks are medium-sized birds of prey, known for their sharp talons, hooked beaks, and powerful eyesight.",
      carousel: ["hawk.png", "hawk1.png", "hawk2.png", "hawk3.png"],
      icon: "hawk.png",
      soundFile: "hawksound.mp3"
    },
    {
      name: "dove",
      folder: "dove",
      details: "Doves are small to medium-sized birds belonging to the family Columbidae, which also includes pigeons.",
      carousel: ["dove.png", "dove1.png", "dove2.png", "dove3.png"],
      icon: "dove.png",
      soundFile: "dovesound.mp3"
    },
    {
      name: "emu",
      folder: "emu",
      details: "The emu, scientifically known as Dromaius novaehollandiae, is a large, flightless bird native to Australia.",
      carousel: ["emu.png", "emu1.png", "emu2.png", "emu3.png"],
      icon: "emu.png",
      soundFile: "emusound.mp3"
    },
    {
      name: "hen",
      folder: "hen",
      details: "A hen is a mature female chicken, primarily known for laying eggs.",
      carousel: ["hen.png", "hen1.png", "hen2.png", "hen3.png"],
      icon: "hen.png",
      soundFile: "hensound.mp3"
    },
    {
      name: "hummingbird",
      folder: "hummingbird",
      details: "Hummingbirds are small, vibrant, and unique birds known for their incredible flying abilities.",
      carousel: ["hummingbird.png", "hummingbird1.png", "hummingbird2.png", "hummingbird3.png"],
      icon: "hummingbird.png",
      soundFile: "hummingbirdsound.mp3"
    },
    {
      name: "kingfisher",
      folder: "kingfisher",
      details: "Kingfishers are a family of small to medium-sized, brightly colored birds known for their vibrant plumage and hunting prowess, particularly their ability to catch fish.",
      carousel: ["kingfisher.png", "kingfisher1.png", "kingfisher2.png", "kingfisher3.png"],
      icon: "kingfisher.png",
      soundFile: "kingfishersound.mp3"
    },
    {
      name: "parrot",
      folder: "parrot",
      details: "Parrots are a diverse group of colorful, intelligent birds known for their curved beaks, strong feet, and ability to mimic sounds.",
      carousel: ["parrot.png", "parrot1.png", "parrot2.png", "parrot3.png"],
      icon: "parrot.png",
      soundFile: "parrotsound.mp3"
    },
    {
      name: "pelican",
      folder: "pelican",
      details: "Parrots are a diverse group of colorful, intelligent birds known for their curved beaks, strong feet, and ability to mimic sounds.",
      carousel: ["pelican.png", "pelican1.png", "pelican2.png", "pelican3.png"],
      icon: "pelican.png",
      soundFile: "pelicansound.mp3"
    },
    {
      name: "seagull",
      folder: "seagull",
      details: "Seagulls, also known as gulls, are medium to large seabirds with a global distribution, known for their adaptability and opportunistic feeding habits.",
      carousel: ["seagull.png", "seagull1.png", "seagull2.png", "seagull3.png"],
      icon: "seagull.png",
      soundFile: "seagullsound.mp3"
    },
    {
      name: "swan",
      folder: "swan",
      details: "Swans are large, graceful, long-necked birds known for their elegance and beauty.",
      carousel: ["swan.png", "swan1.png", "swan2.png", "swan3.png"],
      icon: "swan.png",
      soundFile: "swansound.mp3"
    },
  ]
};

const selectedAnimalData = allAnimals[category] || [];

const animals = selectedAnimalData.map(animal => ({
  brandName: animal.name,
  iconSrc: `${basePath}/${animal.folder}/${animal.icon}`,
  sound: `${basePath}/${animal.folder}/${animal.soundFile}`,
  details: animal.details,
  carouselImages: animal.carousel.map(img => `${basePath}/${animal.folder}/${img}`)
}));

let currentAnimal = null;

function handleImageError(imgElement) {
  console.error("Failed to load image:", imgElement.src);
  imgElement.src = "assets/img/placeholder.png";
  imgElement.alt = "Image not available";
}

window.onload = function () {
  loadRandomAnimal();
  updateScoreDisplay(); 
  feedbackSounds.correct.load().catch(e => console.log("Preload error (correct sound):", e));
  feedbackSounds.wrong.load().catch(e => console.log("Preload error (wrong sound):", e));
};

function loadRandomAnimal() {
  if (animals.length === 0) return;

  attempts = 0; 
  updateScoreDisplay();

  const randomIndex = Math.floor(Math.random() * animals.length);
  currentAnimal = animals[randomIndex];

  document.getElementById("animal-image").src = currentAnimal.iconSrc;
  document.getElementById("animal-image").onerror = function () {
    handleImageError(this);
  };

  document.getElementById("sound").src = currentAnimal.sound;

  document.getElementById("animal-input").value = "";
  document.getElementById("text").value = currentAnimal.details;
  document.getElementById("animal-name").textContent = currentAnimal.brandName.toUpperCase();

  const carouselInner = document.getElementById("carousel-inner");
  carouselInner.innerHTML = "";

  currentAnimal.carouselImages.forEach((img, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item ${index === 0 ? "active" : ""}`;

    const image = document.createElement("img");
    image.src = img;
    image.className = "d-block w-100";
    image.onerror = function () {
      handleImageError(this);
    };

    item.appendChild(image);
    carouselInner.appendChild(item);
  });

  document.getElementById("C_flip").classList.remove("flipped");
}

function flip() {
  const userInput = document.getElementById("animal-input").value.trim().toLowerCase();
  const inputField = document.getElementById("animal-input");

  if (!userInput) {
    inputField.classList.add("is-invalid");
    inputField.placeholder = "Please enter an animal name!";
    setTimeout(() => {
      inputField.classList.remove("is-invalid");
      inputField.placeholder = "Enter Name";
    }, 2000);
    return;
  }

  attempts++;
  totalAttempts++;
  updateScoreDisplay();

  if (userInput === currentAnimal.brandName.toLowerCase()) {
    totalCorrect++;
    updateScoreDisplay();
    
    introSound.pause();
    feedbackSounds.correct.currentTime = 0;
    feedbackSounds.correct.play().then(() => {
      feedbackSounds.correct.onended = () => {
        introSound.play().catch(e => console.log("Intro resume error:", e));
      };
    });
    document.getElementById("C_flip").classList.add("flipped");
  } else {
    totalWrong++;
    updateScoreDisplay();
    
    introSound.pause();
    feedbackSounds.wrong.currentTime = 0;
    feedbackSounds.wrong.play().then(() => {
      feedbackSounds.wrong.onended = () => {
        introSound.play().catch(e => console.log("Intro resume error:", e));
      };
    });
    inputField.classList.add("is-invalid");
    setTimeout(() => {
      inputField.classList.remove("is-invalid");
    }, 1000);
  }
}

function playMyAudio() {
  if (!currentAnimal) return;

  introSound.pause();
  const audio = new Audio(currentAnimal.sound);
  audio.volume = 1.0;
  audio.play().then(() => {
    audio.onended = () => {
      introSound.play().catch(e => console.log("Intro resume error:", e));
    };
  });
}

document.getElementById("speak-button").addEventListener("click", () => {
  const text = document.getElementById("text").value;
  if ('speechSynthesis' in window) {
    introSound.pause();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
      introSound.play().catch(e => console.log("Intro resume error:", e));
    };
    utterance.onerror = () => {
      introSound.play().catch(e => console.log("Intro resume error (TTS):", e));
    };
    window.speechSynthesis.speak(utterance);
  }
});

document.querySelector(".btn-warning").addEventListener("click", loadRandomAnimal);
document.getElementById("animal-input").addEventListener("keypress", e => {
  if (e.key === "Enter") flip();
});