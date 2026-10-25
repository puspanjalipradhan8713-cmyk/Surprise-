// 1. Change between website screens
function nextScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 2. YES and NO question
function answer(choice) {
    const message = document.getElementById("answerMessage");
    const nextButton = document.getElementById("questionNext");

    if (choice === "yes") {
        message.textContent =
            "Achha ji, confidence! 😎 Buggu, tum genuinely special ho! 💙";
    } else {
        message.textContent =
            "Buggu, yaad rakhna: tum apne aap mein special ho! 🥹💙";
    }

    nextButton.classList.remove("hidden");
}


// 3. Surprise gift
function openGift() {
    document.getElementById("giftBox").textContent = "💖";

    document.getElementById("giftMessage").textContent =
        "Surprise, Buggu! 🎁 You deserve happiness and lots of good things! 💙";

    document.getElementById("giftNext").classList.remove("hidden");
}


// 4. Mood selection
function selectMood(mood) {
    const message = document.getElementById("moodMessage");

    const replies = {
        gaming: "Game enjoy karo, Buggu! 🎮 Break lena mat bhoolna. 💙",
        chill: "Relax karo aur apne moment ko enjoy karo! ☕✨",
        study: "You got this, Buggu! 💻 One step at a time! 🌟",
        happy: "Keep smiling, Buggu! Tumhari happiness matters! 💙"
    };

    message.textContent = replies[mood] || "Have a wonderful day, Buggu! 💙";

    document.getElementById("moodNext").classList.remove("hidden");
}


// 5. Restart website
function restartWebsite() {
    document.getElementById("giftBox").textContent = "🎁";

    document.getElementById("giftMessage").textContent =
        "Gift box par click karo, Buggu! 💙";

    document.getElementById("giftNext").classList.add("hidden");
    document.getElementById("answerMessage").textContent = "";
    document.getElementById("questionNext").classList.add("hidden");
    document.getElementById("moodMessage").textContent = "";
    document.getElementById("moodNext").classList.add("hidden");

    nextScreen("welcome");
}


// 6. Create glowing stars
const starContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = (1 + Math.random() * 3) + "s";

    starContainer.appendChild(star);
}


// 7. Music player
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {
    musicBtn.addEventListener("click", async function () {
        if (music.paused) {
            try {
                await music.play();
                musicBtn.textContent = "♫ ♪";
            } catch (error) {
                console.error("Music error:", error);
                alert("Music play nahi hua! Song file aur uska path check karo.");
            }
        } else {
            music.pause();
            musicBtn.textContent = "♫";
        }
    });
}