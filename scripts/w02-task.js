/* W02-Task - Profile Home Page */
let fullName = "Betina Paredes";

/* Step 1 - Setup type tasks - no code required */
let currentYear = 2024;

/* Step 2 - Variables */
let profilePicture = "images/personalphoto.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#home img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);


/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'BBQ', 'Lemon Pie']
foodElement.innerHTML += `<br>${favoriteFoods}`;

let anotherFavoriteFood = "Apple Pie";
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




