document.addEventListener("DOMContentLoaded", function() {
    const leftArm = document.getElementById("left-arm");
    let direction = 1;
    let angle = 0;

    function wave() {
        angle += direction * 5;
        if (angle >= 45 || angle <= 0) {
            direction = -direction;
        }
        leftArm.setAttribute("transform", `rotate(${angle} 50 60)`);
        requestAnimationFrame(wave);
    }

    wave();
});

