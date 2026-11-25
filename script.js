
let currentPage = 1;

const totalPages = 5;

function showPage(page) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("page" + page)
        .classList.add("active");

    currentPage = page;

    document.getElementById("pageNumber").textContent =
        String(page).padStart(2, "0") +
        " / " +
        String(totalPages).padStart(2, "0");

}

function nextPage() {

    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }

}

function prevPage() {

    if (currentPage > 1) {
        showPage(currentPage - 1);
    }

}

function goHome() {
    showPage(1);
}


// BOTÓN DE LAS FLORES

const flowerBtn = document.getElementById("flowerBtn");

flowerBtn.addEventListener("click", function() {

    document.getElementById("bouquet")
        .classList.remove("hidden");

    flowerBtn.textContent = "¡Flores entregadas! 🌷";

    flowerBtn.disabled = true;

    document.getElementById("flowerNext")
        .classList.remove("hidden");

    flowerRain();

});


// LLUVIA DE FLORES

function flowerRain() {

    const flowers = ["🌷", "🌸", "🌹", "🌼", "💐"];

    for (let i = 0; i < 35; i++) {

        const flower = document.createElement("span");

        flower.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.position = "fixed";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.top = "-40px";
        flower.style.fontSize = "25px";
        flower.style.zIndex = "9999";
        flower.style.pointerEvents = "none";

        document.body.appendChild(flower);

        const animation = flower.animate([

            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },

            {
                transform: `translateY(110vh) rotate(360deg)`,
                opacity: 0
            }

        ], {

            duration: 2500 + Math.random() * 2000,
            easing: "ease-in"

        });

        animation.onfinish = () => flower.remove();

    }

}


// SORPRESA FINAL

document.getElementById("surpriseBtn")
    .addEventListener("click", function() {

        document.getElementById("surprise")
            .classList.remove("hidden");

        this.textContent = "Sorpresa desbloqueada 💗";

        this.disabled = true;

    });
