"use strict";
let resultcards = document.getElementById("ProjectCards"); // defining the place in index.html where the cards should be displayed
let resultbuttons = document.getElementById("ProjectButtons"); // defining the place in index.html where the buttons should be displayed
let cards = []; // creates an array witch will be filled automaticly by cards.push(this) in the constuctor
class project {
    constructor(name, technics, description_short, description_detail, image, link) {
        this.name = name;
        this.technics = technics;
        this.description_short = description_short;
        this.description_detail = description_detail;
        this.image = "./images/" + image;
        this.link = link;
        cards.push(this);
    }
}
let projects = [
    new project("Foodblock", "HTML / SCSS", "Project description:", 'You will create a mobile-friendly website for one of the most popular food blogs out there, fittingly named “Food blog”.<br><br>,Focus on how the pictures are positioned: 3 columns layout for the desktop vs. 1 column layout in the mobile version.', "veaganFoodBlock.png", "https://netusil.codefactory.live/FE18-CR1-NetusilThomas/"),
    new project("Weekly Planner", "HTML / SCSS / JSON / TypeScript", "Project description:", "In this Code Review, your job is to create a list of Tasks for a “My Weekly Planner” website. Information about the tasks should be stored in a JSON file.<br>Every time the “Importance” button is clicked the Importance should increases by one and the color should change", "weeklyPlanner.png", "https://netusil.codefactory.live/FE18-CR2-NetusilThomas/"),
    new project("Take Away Restaurtant", "Angular / SCSS", "", "Create at least 7 pages / components: ... The NavBar will be always showing, the same for the Footer. Home and About Us should have static content. Menu will hold dynamic content created from objects. On clicking on the Details button it should lead to the details page ...", "ristoranteOnlineShop.png", "https://netusil.codefactory.live/FE18-CR3-NetusilThomas/"),
    new project("Alumni website", "Groupwork / Angular / SCSS", "What we need", "The alumni website should consist of five sections: Home page, Alumni directory, Stories, Careers and Events. The purpose of the website is to give all necessary information about alumni", "frontEndProject.png", "https://netusil.codefactory.live/front-end-project/"),
];
// Loop for create the rotating cards
for (let i = 0; i < project.length; i++) { // Loop as many times projects containing content
    // create the rotating cards
    resultcards.innerHTML += `
    <div class="col-lg-4">
      <div class="card">
        <a href="${cards[i].link}" target="content" rel="noopener noreferrer" title="Click to open the page in the IFrame below">
          <div class="face front-face">
            <img src="${cards[i].image}" alt="" class="profile">
            <div class="pt-3 text-uppercase name">
              ${cards[i].name}
            </div>
            <div class="technics">${cards[i].technics}</div>
          </div>
          <div class="face back-face">
              <strong>${cards[i].description_short}</strong><br>
              ${cards[i].description_detail}
          </div>
        </a>
      </div>
    </div>`;
    resultbuttons.innerHTML += `
    <a class="btn btn-outline-dark text-secondary btn-floating m-1 btnShadow" href="${cards[i].link}" role="button" target="_blank" rel="noopener noreferrer">
    ${cards[i].name}</a>`;
}
