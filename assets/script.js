// Sound effects
const feedbackSounds = {
  correct: new Audio("assets/sound/GoodJob.mp3"),
  wrong: new Audio("assets/sound/fail-buzzer.mp3")
};

// Background music
const introSound = new Audio("assets/sound/kids.mp3");
introSound.volume = 1.0;
introSound.loop = true;

// Game statistics variables
let attempts = 0;
let totalCorrect = 0;
let totalWrong = 0;
let totalAttempts = 0;

// Update score display
function updateScoreDisplay() {
  document.getElementById('correct-count').textContent = totalCorrect;
  document.getElementById('wrong-count').textContent = totalWrong;
  document.getElementById('attempt-count').textContent = attempts;
  
  // Calculate average attempts per correct answer
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
    }
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
    }
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
  ],
  birds: [
    {
      name: "peacock",
      folder: "peacock",
      details: "Peacocks are known for their colorful feathers and loud calls. They often spread their tail in a beautiful fan shape to attract attention.",
      carousel: ["peacock2.jpg", "peacock1.jpg", "peacock3.jpg"],
      icon: "peacock.jpg",
      soundFile: "peacock.mp3"
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
  updateScoreDisplay(); // Initialize score display

  feedbackSounds.correct.load().catch(e => console.log("Preload error (correct sound):", e));
  feedbackSounds.wrong.load().catch(e => console.log("Preload error (wrong sound):", e));
};

function loadRandomAnimal() {
  if (animals.length === 0) return;

  attempts = 0; // Reset attempts for new animal
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