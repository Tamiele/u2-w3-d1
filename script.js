class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  confrontoEtà(User) {
    if (personOne.age > User.age) {
      return personOne.firstName + " è più anziano di " + User.firstName;
    } else if (personOne.age < User.age) {
      return personOne.firstName + " è più giovane di " + User.firstName;
    } else {
      return personOne.firstName + " ha la stessa età di " + User.firstName;
    }
  }
}

const personOne = new User("Mario", "Giordano", 25, "Roma");
const personeTwo = new User("Giovanni", "Rossi", 27, "Firenze");

console.log(personOne.confrontoEtà(personeTwo));

//esempio con array
// let registroPersone = [];

// let etaPiuAnzina = 0;
// let nomePiuAnziano = "";

// class SchedaPersona {
//   constructor(_firstName, _lastName, _age, _address, _email) {
//     this.firstName = _firstName;
//     this.lastName = _lastName;
//     this.age = Number(_age);
//     this.address = _address;
//     this.email = _email;
//   }
//   anzianita(altraPersona) {
//     for (let i = 0; i < altraPersona.length; i++) {
//       if (altraPersona[i].age > etaPiuAnzina) {
//         etaPiuAnzina = altraPersona[i].age;
//         nomePiuAnziano = altraPersona[i].firstName;
//       }
//     }

//     console.log(L'utente più anziano è  ${nomePiuAnziano} con età ${etaPiuAnzina} .);
//   }
// }

// const persona1 = new SchedaPersona("luigi", "Manzi", "20", "Via Ponte", "Mario@gmail.com");
// console.log(persona1);

// const persona2 = new SchedaPersona("Paolo", "Ferrari", "30", "Via Ponte", "Mario@gmail.com");

// const persona3 = new SchedaPersona("Marco", "Ferrari", "50", "Via Ponte", "Mario@gmail.com");

// const persona4 = new SchedaPersona("Giovanni", "Ferrari", "79", "Via Ponte", "Mario@gmail.com");

// registroPersone.push(persona1, persona2, persona3, persona4);
// console.log(registroPersone);

// persona1.anzianita(registroPersone);

/////////////////////////////////////////////////////
//secondo esercizio
class Pet {
  constructor(_petName, _ownerName, _spacies, _bread) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.spacies = _spacies;
    this.bread = _bread;
  }
  // Metodo per confrontare se due animali hanno lo stesso proprietario
  hasTheSameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  } //in questo caso otherPet riceve il parametro grazie al secondo forEach nella funzione generatePetList
}

const arrayPet = [];
const generatePetList = function () {
  let lista = document.querySelector(".lista");
  lista.innerHTML = ""; //svuota la lista cosi da non ricopiare elementi gia creati
  arrayPet.forEach((pet, index) => {
    let listLi = document.createElement("li");
    listLi.innerText =
      pet.ownerName +
      " è il proprietario di " +
      pet.petName +
      " che è un " +
      pet.spacies +
      " " +
      pet.bread;
    arrayPet.forEach((otherPet, otherIndex) => {
      //otherPet è l'animale corrente su cui il ciclo sta iterando.
      //otherIndex è l'indice di quell'animale all'interno dell'array arrayPet.
      //Ogni volta che il secondo forEach viene eseguito, otherPet riceve un valore da arrayPet

      if (index !== otherIndex && pet.hasTheSameOwner(otherPet)) {
        // Se l'index è diverso (per evitare di confrontare lo stesso animale) e il proprietario è lo stesso
        listLi.style.color = "green"; // Se trova un animale con lo stesso proprietario, cambia il colore del testo a verde
      }
    });

    // Aggiunge l'elemento <li> generato alla lista HTML
    lista.appendChild(listLi);
  });
};

let form = document.querySelector("form");
let nomeAnimale = document.querySelector(".nomeAnimale");
let proprietario = document.querySelector(".proprietario");
let specieAnimale = document.querySelector(".specieAnimale");
let razzaAnimale = document.querySelector(".razzaAnimale");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Crea un nuovo oggetto `Pet` usando i valori inseriti nel form
  const createdPet = new Pet(
    nomeAnimale.value,
    proprietario.value,
    specieAnimale.value,
    razzaAnimale.value
  );
  arrayPet.push(createdPet);
  form.reset(); // Resetta i campi del form una volta inviato
  generatePetList(); // Rigenera la lista degli animali, incluso l'ultimo appena aggiunto
});
