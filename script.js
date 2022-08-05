let quoteSec = document.getElementById("#quote");
let animeSec = document.getElementById("#anime");
let characterSec = document.getElementById("#character");
const quote_button = document.querySelector("#new_quote");
const search_button = document.querySelector("#search_anime")

quoteSec = "Click the button to generate a quote";

const updateBody = () => {
  quote.innerHTML = quoteSec;
  anime.innerHTML = animeSec;
  character.innerHTML = characterSec;
};
updateBody();

//Get Quote
const generateQuote = async () => {
  const quote_response = await fetch("https://animechan.vercel.app/api/random");
  const data = await quote_response.json();
  console.log(data);
  animeSec = data.anime;
  quoteSec = data.quote;
  characterSec = data.character;
  
  
  // Display quote on screen!
  updateBody();
};
quote_button.addEventListener("click", generateQuote);



fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json())
      .then(anime => console.log(anime))