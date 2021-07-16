console.log('Welcome to Advice for You!');

/*const adviceTag = document.querySelector('#advice');*/
const refreshButton = document.querySelector('#reload');
const helpfulButton = document.querySelector('#helpful');
const unhelpfulButton = document.querySelector('#unhelpful');
const helpfulAdviceContainer = document.querySelector('#useful');
const unhelpfulAdviceContainer = document.querySelector('#unuseful');


let currentAdvice = {};
const helpfulAdvice = [];
const unhelpfulAdvice = [];




function savedHelpfulAdvice() {
   helpfulAdvice.push(currentAdvice)
   const helpLi = document.createElement('li')
   helpLi.innerHTML = currentAdvice.slip.advice
   helpfulAdviceContainer.append(helpLi)
   helpLi.addEventListener('click', event => removeHelpfulAdvice(event))
}

function removeHelpfulAdvice(event) {
   event.target.remove()
}

function savedUnhelpfulAdvice() {
   unhelpfulAdvice.push(currentAdvice)
   const unhelpLi = document.createElement('li')
   unhelpLi.innerHTML = currentAdvice.slip.advice
   unhelpfulAdviceContainer.append(unhelpLi)
   unhelpLi.addEventListener('click', event => removeUnhelpfulAdvice(event))
}

function removeUnhelpfulAdvice(event) {
   event.target.remove()
}





refreshButton.addEventListener('click', () => {
   getAdvice()
  /* .then(data => {
      currentAdvice = data
      const advice = data.slip.advice 
      adviceTag.innerHTML = advice
   })*/
});
 
getAdvice()
/*.then(data => {
   currentAdvice = data
   const advice = data.slip.advice 
   adviceTag.innerHTML = advice
});*/




helpfulButton.addEventListener('click', savedHelpfulAdvice)
unhelpfulButton.addEventListener('click', savedUnhelpfulAdvice)



    


