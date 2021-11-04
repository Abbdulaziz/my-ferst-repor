const button =document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

button.addEventListener("click", getJoke);

 async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}

// const button = document.querySelector(".container button");
// const jokeDiv = document.querySelector(".container .joke p");

// document.addEventListener("DOMContentLoaded", getJock);

// button.addEventListener("click", getJock);

// async function getJock() {
//   const jokeData = await fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json"
//     }
//   });
//   const jokeObj = await jokeData.json();
//   jokeDiv.innerHTML = jokeObj.joke;
//   console.log(jokeData);
// }