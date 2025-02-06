// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card
const mainNav = document.getElementById('mainNav');
const divElems = document.getElementsByTagName('div');
const cardElems = document.getElementsByClassName("card");

const queryMainNav = document.querySelector('#mainNav');
const queryDivElems = document.querySelectorAll('div');
const queryCardElems = document.querySelectorAll('.card');

// A- finding across the entire DOM
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle');
const firstCard = document.querySelector('.card:nth-of-type(1)');

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('.card-title');
const subtitleFirstCard = firstCard.querySelector('.card-subtitle');
const textFirstCard = firstCard.querySelector('.card-text');

// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a');
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent));
// C- Turn the collection of links into a real array
const linksArr = Array.from(links);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArr.find(link => link.textContent === "Home")



// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = 'Bloomtech Doggos';
titleFirstCard.textContent = "I'm a dog!";
subtitleFirstCard.textContent = "Feed Me!"
textFirstCard.textContent = "Doggo ipsum long woofer length boy what a nice floof, thicc. You are doing me the shock smol borking doggo with a long snoot for pats h*ck corgo heck, length boy mlem. he made many woofs maximum borkdrive heckin angery woofer";
link2FirstCard.textContent = "Dog Ipsum"

//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.setAttribute("href", "https://pexels.com/search/dog");
link2FirstCard.href = "https://doggoipsum.com/";
imageFirstCard.src = "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
logoTitle.className = "logo heading banana";
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky')
header.classList.remove('sky');
//  B- By manipulating inline styles on the element
header.style.fontSize = '2em';
setInterval(() => header.classList.toggle('sky'), 4000);

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a");
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink);
blogLink.classList.add("menu-item");

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector('.card-group').appendChild(secondCard);
header.remove();
document.body.prepend(header);

const data = {
    "contact": {
        "contact-heading": "Contact",
        "address": "123 Way 456 Somewhere, USA",
        "phone": "1 (888)888-8888",
        "email": "sales@greatidea.io",
    }
};
const contactHeading = document.querySelector('.contact-heading');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

contactHeading.textContent = data['contact']['contact-heading'];
address.textContent = data['contact']['address'];
phone.textContent = data['contact']['phone'];
email.textContent = data['contact']['email'];

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
