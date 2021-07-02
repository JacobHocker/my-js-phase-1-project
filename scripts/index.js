console.log('Welcome to Trivia Madness', 'color: red');

const questionPTag = document.querySelector('#question');

getTriviaQuestion()
.then(data => {
    const question = data.question;
    questionPTag.innerText = question;
});
