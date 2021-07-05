console.log('Welcome to Fun Factual Madness', 'color: red');

const factPTag = document.querySelector('#fact');

getFunFacts()
.then(data => {
    const facts = data.question;
    factPTag.innerText = facts;
});
