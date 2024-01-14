// Code your solutions in this file
function writeCards(names, event) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  function countDown(startingNumber) {
    let count = startingNumber;
  
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  module.exports = { writeCards, countDown };
  