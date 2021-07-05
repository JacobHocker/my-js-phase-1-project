const URL = 'https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=boolean'

function getFacts() {
    return fetch(URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
};

function postFacts(body) {
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
}

postFacts({question: "Something"});
