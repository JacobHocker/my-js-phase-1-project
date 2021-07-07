const URL = 'https://api.adviceslip.com/advice';


function getAdvice() {
    return fetch(URL, {
       headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
};




