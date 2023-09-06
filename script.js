document.addEventListener('DOMContentLoaded', function() {
    const wordElement = document.getElementById('animatedWord');
    
    wordElement.addEventListener('mouseover', function() {
        const letters = wordElement.querySelectorAll('.letter');
        
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.transform = 'scaleY(1)';
            }, 200 * index);
        });
    });
});
