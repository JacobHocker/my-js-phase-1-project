console.log('Welcome to Advice For You!', 'color: red');

const adviceTag = document.querySelector('#advice');
const refreshButton = document.querySelector('#reload');

refreshButton.addEventListener('click', () => {
     getAdvice()
});

getAdvice()
.then(data => {
    const advice = data.slip.advice
    adviceTag.innerHTML = advice
});

