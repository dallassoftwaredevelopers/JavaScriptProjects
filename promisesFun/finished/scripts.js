//fetch data from https://pokeapi.co/
const listPokeStats = document.querySelector('.pokestats');
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    listPokeStats.innerHTML = data.stats.map(pokestat => `<li>${pokestat.stat.name}: ${pokestat.base_stat}</li>`).join("") //using .join() becuase when we take an array and toString it. It'll join it with commas 
  })
  .catch(error => console.log(error));


// Async Await
// function austinIsCool() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('I\'m way too cool');
//     }, 2000);
//   });
// }

// async function importantMessage() {
//   const myMessage = await austinIsCool();
//   console.log('Message from Austin', myMessage);
// }

// importantMessage(); 


//TODO:
/*
  1.) Refactor the fetch call to use async await
  2.) Buil a better UI to present the data
  3.) Create a form that calls the api after a user submits a pokemon name
  4.) Display the pokemon in an image
  5.) Find an alternative to innerHTML

  Major Bonus
  1.) Add to the collection on the page everytime a user makes a call
  2.) Create a delete button that can delete a pokemon from the UI
  3.) Create a Clear Button

*/