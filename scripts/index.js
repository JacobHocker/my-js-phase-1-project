console.log('Welcome to Trivia!', 'color: red');

const adviceTag = document.querySelector('#advice');
const refreshButton = document.querySelector('#reload');

refreshButton.addEventListener('click', () => {
    getAdvice()
     .then(data => {
       const advice = data.slip.advice
       adviceTag.innerHTML = advice
    });
});

getAdvice()
.then(data => {
   const advice = data.slip.advice 
   adviceTag.innerHTML = advice
})



    


