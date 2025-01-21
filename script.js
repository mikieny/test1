const progressRing = document.getElementById('progress-ring');
const valueInput = document.getElementById('value');
const animateToggle = document.getElementById('animate-toggle');
const hideToggle = document.getElementById('hide-toggle');
const progressCircleContainer = document.getElementById('progress-circle-container');


function updateProgress(value) {
    const maxDashArray = 439.6; 
    const dashOffset = maxDashArray - (maxDashArray * value) / 100;
    progressRing.style.strokeDashoffset = dashOffset;
}


valueInput.addEventListener('input', (event) => {
    const value = Math.min(100, Math.max(0, event.target.value));
    updateProgress(value);
});


animateToggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        progressCircleContainer.style.animation = 'rotate 2s linear infinite';
    } else {
        progressCircleContainer.style.animation = 'none';
    }
});


hideToggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        progressCircleContainer.classList.add('hidden');
    } else {
        progressCircleContainer.classList.remove('hidden');
    }
});
