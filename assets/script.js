import { categoryData, gameDataByCategory,itemDetails } from './gameData.js';


function getCombinedItemsByDifficulty(category, difficulty) {
    const categoryData = gameDataByCategory[category];
    if (!categoryData) return [];

    const easy = categoryData.easy || [];
    const medium = categoryData.medium || [];
    const hard = categoryData.hard || [];

    let combinedItems = [];

    switch (difficulty) {
        case 'easy':
            combinedItems = [...easy];
            break;
        case 'medium':
            combinedItems = [...easy, ...medium];
            break;
        case 'hard':
            combinedItems = [...easy, ...medium, ...hard];
            break;
        default:
            combinedItems = [...easy];
    }

    return Array.from(new Set(combinedItems));
}


const feedbackSounds = {
    correct: new Audio("assets/sound/GoodJob.mp3"),
    wrong: new Audio("assets/sound/fail-buzzer.mp3")
};
const introSound = new Audio("assets/sound/kids.mp3");
introSound.volume = 1.0;
introSound.loop = true;


let animalSound = new Audio();
let detailsAudio = new Audio(); // Audio for playing details
let animalSoundLoopCount = 0;
const maxAnimalSoundLoops = 4;
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
    if (!isAudioPlaying(animalSound) && !(window.speechSynthesis?.speaking)) {
		introSound.play().catch(() => {});
	}
}

animalSound.onplay = () => { try { introSound.pause(); } catch (e) {} };
animalSound.onpause = () => playIntroIfAllowed();
animalSound.onended = () => {
    animalSoundLoopCount++;
    if (animalSoundLoopCount < maxAnimalSoundLoops) {
        animalSound.currentTime = 0;
        animalSound.play().catch(e => {
            console.error("Error looping animal sound:", e);
            playIntroIfAllowed();
        });
    } else {
        playIntroIfAllowed();
    }
};
animalSound.onerror = () => playIntroIfAllowed();


// Show or hide the eye/info 
function showEyeControl(show) {
	const container = document.getElementById('eye-container');
	if (!container) return;
	container.style.display = show ? 'flex' : 'none';
	const dd = document.getElementById('eye-dropdown');
	if ( dd) dd.classList.remove('active');
}

// Update the dropdown that shows the current carousel image name
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

// Difficulty selector and menu interactions on the landing screen
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
				const menuScreen = document.getElementById('menu-screen');
				const gameScreen = document.getElementById('game-screen');
				menuScreen.style.display = 'none';
				gameScreen.style.display = 'block';
				document.body.classList.remove('menu-active');
				initializeGame(currentCategory, diff);  

				const href = `index.html?category=${encodeURIComponent(currentCategory)}&difficulty=${encodeURIComponent(diff)}`;
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

// Set the active category card from the URL
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        // Use categoryData from gameData.js
        
        if (categoryData[categoryParam]) {
            const categoryCard = document.getElementById('current-category');
            const categoryEmoji = document.getElementById('category-emoji');
            const categoryName = document.getElementById('category-name');
            
            if (categoryCard && categoryEmoji && categoryName) {
                categoryCard.dataset.category = categoryParam;
                categoryEmoji.innerHTML = categoryData[categoryParam].emoji;
                categoryName.textContent = categoryData[categoryParam].name;
            }
        }
    }
});

// Refresh on‑screen statistics and dropdown stats
function updateScoreDisplay() {
    // causing dropdown issues so only update dropdown stats
    // document.getElementById('correct-count').textContent = totalCorrect;
    // document.getElementById('wrong-count').textContent = totalWrong;
    // document.getElementById('attempt-count').textContent = attempts;
    const avgAttempts = totalCorrect > 0 ? (totalAttempts / totalCorrect).toFixed(1) : 0;
    // document.getElementById('avg-attempts').textContent = avgAttempts;
    document.getElementById('dropdown-correct').textContent = totalCorrect;
    document.getElementById('dropdown-wrong').textContent = totalWrong;
    document.getElementById('dropdown-attempts').textContent = attempts;
    document.getElementById('dropdown-avg').textContent = avgAttempts;
}

function handleImageError(imgElement) {
    console.error("Failed to load image:", imgElement.src);
    imgElement.alt = "Image not available";
}

// Simple slider helpers crowsel images
let sliderIntervalId = null;
const sliderIntervalMs = 3000;

function startSliderAutoplay() {
    stopSliderAutoplay();
    const carouselEl = document.getElementById('demo');
    if (!carouselEl) return;

    const slides = carouselEl.querySelectorAll('.carousel-item');
    if (slides.length <= 1) return;

    sliderIntervalId = setInterval(() => {
        showSlide(1);
    }, sliderIntervalMs);
}

function stopSliderAutoplay() {
    if (sliderIntervalId) {
        clearInterval(sliderIntervalId);
        sliderIntervalId = null;
    }
}

function showSlide(offset) {
    const carouselEl = document.getElementById('demo');
    if (!carouselEl) return;

    const slides = carouselEl.querySelectorAll('.carousel-item');
    if (!slides.length) return;

    let currentIndex = 0;
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
        }
    });

    let newIndex = currentIndex + offset;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    slides[currentIndex].classList.remove('active');
    slides[newIndex].classList.add('active');

    updateEyeDropdown();
}

function resetSliderToFirst() {
    const carouselEl = document.getElementById('demo');
    if (!carouselEl) return;

    const slides = carouselEl.querySelectorAll('.carousel-item');
    if (!slides.length) return;

    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    updateEyeDropdown();
    // start autoplay 
    startSliderAutoplay();
}

// Load the next item into the game card
function loadRandomItem() {
    if (window.speechSynthesis && window.speechSynthesis.cancel) {
        window.speechSynthesis.cancel();
    }
    animalSound.pause();
    animalSound.currentTime = 0;

    if (unansweredItems.length === 0) {
       
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'petanimal';
        const difficulty = urlParams.get('difficulty') || 'easy';
        
        
        totalCorrect = 0;
        totalWrong = 0;
        totalAttempts = 0;
        attempts = 0;
        updateScoreDisplay();
        
        let selectedIds = getCombinedItemsByDifficulty(category, difficulty);
        selectedIds = selectedIds.sort(() => Math.random() - 0.5);

        
        const gameItems = selectedIds.map(id => {
            {/*const details = itemDetails[id];
            return { id: id, name: details.name, details: details };*/}
             const itemData = itemDetails[id];
            return { id: id, name: itemData.name, details: itemData };
        });
        
        unansweredItems = [...gameItems];
        
        setTimeout(() => {
            loadRandomItem();
        }, 1500);
        return;
    }

    // stop autoplay while the front card is shown
    stopSliderAutoplay();
    
    attempts = 0;
    updateScoreDisplay();
    
    const randomIndex = Math.floor(Math.random() * unansweredItems.length);
    currentItem = unansweredItems[randomIndex];

 console.log(`%c LOADING RANDOM ITEM`, 'color: #ffff00; font-weight: bold; font-size: 12px');
    console.log(`Remaining items: ${unansweredItems.length}`);
    console.log(`Random index selected: ${randomIndex}`);
    console.log(`Current item: ${currentItem.name} (ID: ${currentItem.id})`);
    console.log(`Unanswered items queue:`, unansweredItems.map(item => item.name));
    
    unansweredItems.splice(randomIndex, 1);
    
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
    }

    const sliderPrev = document.querySelector('#demo .simple-slider-prev');
    const sliderNext = document.querySelector('#demo .simple-slider-next');

    if (sliderPrev && !sliderPrev._sliderHandlerSet) {
        sliderPrev._sliderHandlerSet = true;
        sliderPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            // reset autoplay on manual interaction
            stopSliderAutoplay();
            showSlide(-1);
            startSliderAutoplay();
        });
    }

    if (sliderNext && !sliderNext._sliderHandlerSet) {
        sliderNext._sliderHandlerSet = true;
        sliderNext.addEventListener('click', (e) => {
            e.stopPropagation();
            // reset autoplay 
            stopSliderAutoplay();
            showSlide(1);
            startSliderAutoplay();
        });
    }
}

// Check the user's answer, flip the card, and play feedback
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
            resetSliderToFirst();
            // start autoplay now 
            startSliderAutoplay();
        }, 10);

        animalSound.src = `assets/img/${currentItem.details.folder}/${currentItem.details.soundFile}`;
        animalSound.loop = false;
        animalSoundLoopCount = 0;

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
// Play the current item's sound effect only
function playMyAudio() {
    if (!currentItem) return;

    animalSound.src = `assets/img/${currentItem.details.folder}/${currentItem.details.soundFile}`;
    animalSound.loop = false;
    animalSoundLoopCount = 0;
    introSound.pause();
    animalSound.play().catch(e => console.error("Error playing sound:", e));
}

// Open/close the stats dropdown
function toggleStatsDropdown() {
    const statsButton = document.getElementById("stats-button");
    const statsDropdown = document.getElementById("stats-dropdown");
    
    if (!statsDropdown) return;
    
    statsDropdown.classList.toggle("active");
}

// Single delegated document click handler to manage global click behaviors
function handleDocumentClick(e) {
    const target = e.target;

   
    markUserInteracted();

    // Back button handling
    const backButton = target.closest('.btn-back');
    if (backButton) {
        e.preventDefault();
        e.stopPropagation();

        const urlParams = new URLSearchParams(window.location.search);
        const currentCategory = urlParams.get('category') || 'petanimal';
        
        if (window.speechSynthesis && window.speechSynthesis.cancel) {
            window.speechSynthesis.cancel();
        }
        if (animalSound) {
            animalSound.pause();
            animalSound.currentTime = 0;
        }
        introSound.pause();
        // stop autoplay when navigating away
        stopSliderAutoplay();
        window.location.href = `index.html?category=${currentCategory}`;
        return;
    }

    // Click-away close for stats dropdown
    const statsButton = document.getElementById('stats-button');
    const statsDropdown = document.getElementById('stats-dropdown');
    if (statsDropdown && statsDropdown.classList.contains('active')) {
        if (!statsButton.contains(target) && !statsDropdown.contains(target)) {
            statsDropdown.classList.remove('active');
        }
    }

    // Click-away close for eye dropdown
    const eyeButton = document.getElementById('eye-button');
    const eyeDropdown = document.getElementById('eye-dropdown');
    if (eyeDropdown && eyeDropdown.classList.contains('active')) {
        if (!eyeButton.contains(target) && !eyeDropdown.contains(target)) {
            eyeDropdown.classList.remove('active');
        }
    }
}

// Set up a new game session for the given category + difficulty
function initializeGame(category, difficulty) {
    let selectedIds = getCombinedItemsByDifficulty(category, difficulty);
    
 

    selectedIds = selectedIds.sort(() => Math.random() - 0.5);

    const gameItems = selectedIds
        .map(id => {
            const details = itemDetails[id];
            if (!details) {
                console.warn("Missing itemDetails for id:", id);
                return null;
            }
            return { id: id, name: details.name, details: details };
        })
        .filter(Boolean);

    unansweredItems = [...gameItems];

    if (unansweredItems.length === 0) {
        alert("Error: No items found for this selection. Returning to menu.");
        window.location.href = 'index.html';
        return;
    }

    const nextBtn = document.querySelector("#game-screen .btn-warning");
    if (nextBtn && !nextBtn._loadHandlerSet) {
        nextBtn.addEventListener("click", loadRandomItem);
        nextBtn._loadHandlerSet = true;
    }

    const animalInput = document.getElementById("animal-input");
    if (animalInput && !animalInput._enterHandlerSet) {
        animalInput.addEventListener("keypress", e => { if (e.key === "Enter") flip(); });
        animalInput._enterHandlerSet = true;
    }

    const speakBtn = document.getElementById("speak-button");
    if (speakBtn && !speakBtn._speakHandlerSet) {
        speakBtn.addEventListener("click", () => {
            // Stop all other audio
            if (window.speechSynthesis && window.speechSynthesis.cancel) {
                window.speechSynthesis.cancel();
            }
            try { animalSound.pause(); } catch (e) {}
            try { detailsAudio.pause(); } catch (e) {}
            introSound.pause();

            // Play the details audio file
            const details = currentItem.details;
            if (details && details.detailsSoundFile && details.folder) {
                detailsAudio.src = `assets/img/${details.folder}/${details.detailsSoundFile}`;
                
                const resumeAll = () => {
                    playIntroIfAllowed();
                    if (animalSound && animalSound.src) {
                        animalSound.play().catch(() => {});
                    }
                    const nextBtn2 = document.querySelector("#game-screen .btn-warning");
                    if (nextBtn2) nextBtn2.focus();
                };

                detailsAudio.onended = resumeAll;
                detailsAudio.onerror = (event) => {
                    console.error("Details audio error:", event);
                    resumeAll();
                };
                
                detailsAudio.play().catch((e) => {
                    console.error("Failed to play details audio:", e);
                    resumeAll();
                });
            }
        });
        speakBtn._speakHandlerSet = true;
    }

    document.addEventListener("click", markUserInteracted, { once: true });
    document.addEventListener("touchstart", markUserInteracted, { once: true });
    document.addEventListener("keydown", markUserInteracted, { once: true });

    loadRandomItem();
    updateScoreDisplay();
}


window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const difficulty = urlParams.get('difficulty');
    const menuScreen = document.getElementById('menu-screen');
    const gameScreen = document.getElementById('game-screen');

    
    if (!document._globalClickHandlerSet) {
        document._globalClickHandlerSet = true;
        document.addEventListener('click', handleDocumentClick);
    }

    const statsButton = document.getElementById('stats-button');
    if (statsButton && !statsButton._handlerSet) {
        statsButton._handlerSet = true;
        statsButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleStatsDropdown();
        });
    }

    const soundIcon = document.getElementById('sound-icon');
    if (soundIcon && !soundIcon._handlerSet) {
        soundIcon._handlerSet = true;
        soundIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            playMyAudio();
        });
    }

    const submitButton = document.getElementById('submit-button');
    if (submitButton && !submitButton._handlerSet) {
        submitButton._handlerSet = true;
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            flip();
        });
    }

    if (category && difficulty) {
        menuScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        document.body.classList.remove('menu-active');
        
        initializeGame(category, difficulty);  
    } else {
        menuScreen.style.display = 'block';
        gameScreen.style.display = 'none';
        document.body.classList.add('menu-active');
    }
};