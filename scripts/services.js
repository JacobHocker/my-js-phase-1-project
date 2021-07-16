const URL = 'https://api.adviceslip.com/advice';
const adviceTag = document.querySelector('#advice');

function getAdvice() {
    return fetch(URL, {
       headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        currentAdvice = data
        const advice = data.slip.advice
        if (advice.includes('the') === true) {
            advice.remove;
        } else {
        adviceTag.innerHTML = advice
        }
     })
};




