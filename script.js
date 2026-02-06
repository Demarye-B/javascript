alert("Welcome!");
let name = prompt("What is your name?");
let message = `Hello, ${name}! Thanks for visiting my page.`;

document.body.innerHTML += `<p>${message}</p>`;