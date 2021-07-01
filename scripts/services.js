const URL = 'https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=boolean'

function getTriviaQuestion() {
    return fetch(URL, {
        headers: {
           'Accepts': 'application/json' 
        }
    })
    .then(res => res.json())
};

