document.addEventListener("DOMContentLoaded", function() {
    const stickman = document.getElementById("stickman");
    const leftArm = document.getElementById("left-arm");
    const leftLeg = document.getElementById("left-leg");
    const rightLeg = document.getElementById("right-leg");
    let direction = 1;
    let angle = 0;
    let isRunning = false;

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

    function run(event) {
        if (event.key === "ArrowRight") {
            isRunning = true;
            stickman.style.right = (parseInt(stickman.style.right, 10) - 10) + "px";
            leftLeg.setAttribute("transform", "rotate(20, 50, 120)");
            rightLeg.setAttribute("transform", "rotate(-20, 50, 120)");
        } else if (event.key === "ArrowLeft") {
            isRunning = true;
            stickman.style.right = (parseInt(stickman.style.right, 10) + 10) + "px";
            leftLeg.setAttribute("transform", "rotate(-20, 50, 120)");
            rightLeg.setAttribute("transform", "rotate(20, 50, 120)");
        }
    }

    function stopRunning() {
        isRunning = false;
        leftLeg.setAttribute("transform", "rotate(0, 50, 120)");
        rightLeg.setAttribute("transform", "rotate(0, 50, 120)");
    }

    document.addEventListener("keydown", run);
    document.addEventListener("keyup", stopRunning);

    wave();
});
