
const progressAPI = {
    value: 0,
    isAnimated: false,
    isHidden: false,

    setValue(newValue) {
        if (newValue < 0 || newValue > 100) {
            console.error('Ошибка');
            return;
        }
        this.value = newValue;
        updateProgress(this.value);
    },

    toggleAnimation() {
        this.isAnimated = !this.isAnimated;
        updateAnimation(this.isAnimated);
    },

    toggleVisibility() {
        this.isHidden = !this.isHidden;
        updateVisibility(this.isHidden);
    }
};

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

function updateAnimation(isAnimated) {
    if (isAnimated) {
        progressCircleContainer.style.animation = 'rotate 2s linear infinite';
    } else {
        progressCircleContainer.style.animation = 'none';
    }
}

function updateVisibility(isHidden) {
    if (isHidden) {
        progressCircleContainer.style.display = 'none';
    } else {
        progressCircleContainer.style.display = 'block';
    }
}


valueInput.addEventListener('input', (event) => {
    const newValue = parseInt(event.target.value, 10);
    progressAPI.setValue(newValue);
});

animateToggle.addEventListener('change', () => {
    progressAPI.toggleAnimation();
});

hideToggle.addEventListener('change', () => {
    progressAPI.toggleVisibility();
});
