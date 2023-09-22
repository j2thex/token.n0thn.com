const stickman = document.getElementById("stickman");

document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const stickman = document.getElementById("sliding-stickman");
    const leftArm = document.getElementById("left-arm");
    let direction = 1;
    let angle = 0;

    function wave() {
        angle += direction * 5;
        if (angle >= 20 || angle <= -20) {
            direction = -direction;
        }
        leftArm.setAttribute("transform", `rotate(${angle}, 50, 60)`);
        requestAnimationFrame(wave);
    }

    wave(); // Start the waving animation
});

window.addEventListener("DOMContentLoaded", function() {
    initLeftStickmanWave();
});

function initLeftStickmanWave() {
    const rightArm = document.getElementById("right-arm-left");
    let direction = 1;
    let angle = -70;
    let animationFrameId;  

    function wave() {
        angle += direction * 5;
        if (angle >= -50 || angle <= -90) {
            direction = -direction;
        }
        rightArm.setAttribute("transform", `rotate(${angle}, 50, 60)`);
        animationFrameId = requestAnimationFrame(wave);
    }

    wave();
    setTimeout(() => {
        cancelAnimationFrame(animationFrameId);  // Stop the waving after 15 seconds
    }, 15000);
}

function copyToClipboard() {
    var copyText = document.getElementById("contractAddress");
    copyText.select();
    document.execCommand("copy");
}



