console.log('Welcome to Advice For You!', 'color: red');

const adviceTag = document.querySelector('#advice');

getAdvice()
.then(data => {
    const advice = data.slip.advice
    adviceTag.innerHTML = advice
});

