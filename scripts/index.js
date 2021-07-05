console.log('Welcome to Advice For You!', 'color: red');

const advicePTag = document.querySelector('#advice');

getAdvice()
.then(data => {
    const advice = data.advice;
    advicePTag.innerText = advice;
});

