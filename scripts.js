document.addEventListener("DOMContentLoaded", function() {
    const stickman = document.getElementById("stickman");
    const leftArm = document.getElementById("left-arm");
    const rightArm = document.getElementById("right-arm");
    const leftLeg = document.getElementById("left-leg");
    const rightLeg = document.getElementById("right-leg");
    let direction = 1;
    let angle = 0;
    let isRunning = false;
    let movementInterval;
    let animationInterval;
    let animationState = 0; // 0: initial, 1: one state, -1: other state
    let runningDirection = null;

    function wave() {
        if (!isRunning) {
            angle += direction * 5;
            if (angle >= 20 || angle <= -20) {
                direction = -direction;
            }
            leftArm.setAttribute("transform", `rotate(${angle}, 50, 60)`);
        }
        requestAnimationFrame(wave);
    }

    function animateRunning() {
        if (animationState === 0 || animationState === -1) {
            leftArm.setAttribute("transform", "rotate(-30, 50, 60)");
            rightArm.setAttribute("transform", "rotate(30, 50, 60)");
            leftLeg.setAttribute("transform", "rotate(20, 50, 120)");
            rightLeg.setAttribute("transform", "rotate(-20, 50, 120)");
            animationState = 1;
        } else {
            leftArm.setAttribute("transform", "rotate(30, 50, 60)");
            rightArm.setAttribute("transform", "rotate(-30, 50, 60)");
            leftLeg.setAttribute("transform", "rotate(-20, 50, 120)");
            rightLeg.setAttribute("transform", "rotate(20, 50, 120)");
            animationState = -1;
        }
    }

    function moveStickman(direction) {
        if (direction === "right") {
            stickman.style.right = (parseInt(stickman.style.right, 10) - 10) + "px"; // Increased speed
        } else if (direction === "left") {
            stickman.style.right = (parseInt(stickman.style.right, 10) + 10) + "px"; // Increased speed
        }
    }

    function startRunning(event) {
        if (!isRunning) {
            if (event.key === "ArrowRight") {
                isRunning = true;
                runningDirection = "right";
                movementInterval = setInterval(() => moveStickman("right"), 25); // Increased speed
                animationInterval = setInterval(animateRunning, 100);
            } else if (event.key === "ArrowLeft") {
                isRunning = true;
                runningDirection = "left";
                movementInterval = setInterval(() => moveStickman("left"), 25); // Increased speed
                animationInterval = setInterval(animateRunning, 100);
            }
        }
    }

    function stopRunning() {
        clearInterval(movementInterval);
        clearInterval(animationInterval);
        // Sliding effect
        setTimeout(() => {
            moveStickman(runningDirection);
            leftArm.setAttribute("transform", "rotate(0, 50, 60)");
            rightArm.setAttribute("transform", "rotate(0, 50, 60)");
            leftLeg.setAttribute("transform", "rotate(0, 50, 120)");
            rightLeg.setAttribute("transform", "rotate(0, 50, 120)");
            animationState = 0;
            isRunning = false;
        }, 100); // Slides for an additional 100ms
    }

    document.addEventListener("keydown", startRunning);
    document.addEventListener("keyup", stopRunning);

    wave();
});
