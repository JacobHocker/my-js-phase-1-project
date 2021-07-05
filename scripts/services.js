const URL = 'https://api.adviceslip.com/advice'

function getAdvice() {
    return fetch(URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
};

function postAdvice(body) {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    });
};



