const API_URL = 'https://dog.ceo/api/breeds/image/random/1';
const randomDogsElement = document.querySelector('.random-dogs');
var breed = document.getElementById("breedInput");
var API_Breed = 'https://dog.ceo/api/breed/'+breed+'/images/random'


// Por culpa de la api no se puede realizar busquedas normales de manera sencilla puesto que ofrece la informacion de la raza dentro de la url


async function breedFunction(){
  // la funcion funciona (valga la redundancia) pero hay un bloqueo de corbs, por ejemplo al probar con la raza akita, aparece la url en la consola, pero no la puee poner en la imagen.
  breed = document.getElementById("breedInput").value;
  API_Breed = 'https://dog.ceo/api/breed/'+breed+'/images/random'
  const response = await fetch(API_Breed);
  const json = await response.json();
  console.log(json.message);
  document.getElementById('breed').src=API_Breed;
};



async function getRandomDogs() {
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.message);
  json.message.forEach(dogImage => {
    randomDogsElement.innerHTML += `
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="${dogImage}">
          </figure>
        </div>
      </div>
    </div>
    `;
  });

};



getRandomDogs();

async function refreshRandomDogs() {
  randomDogsElement.innerHTML = '';
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.message);
  json.message.forEach(dogImage => {
    randomDogsElement.innerHTML += `
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="${dogImage}">
          </figure>
        </div>
      </div>
    </div>
    `;
  });

};