"use strict";
const resultcards = document.getElementById("ProjectCards"); // Define where project cards should be displayed
const resultbuttons = document.getElementById("ProjectButtons"); // Define where project buttons should be displayed
const extLink = "http://localhost/codereview"; // External address for links
// Define a class representing a project
class Project {
    constructor(name, technics, description_short, description_detail, image, link) {
        this.name = name;
        this.technics = technics;
        this.description_short = description_short;
        this.description_detail = description_detail;
        this.image = image;
        this.link = link;
        this.image = `./images/${this.image}`; // Add "./images/" prefix to the image property
        this.link = `${extLink}/${this.link}`; // Add "./ExtLink/" prefix to the link property to change provider def line 4 to 6
    }
    static addCard(card) {
        Project.allCards.push(card); // Add a project card to the array
    }
    static createCard(card) {
        return `
    <div class="col-lg-4">
      <div class="card">
        <a href="${card.link}" target="content" rel="noopener noreferrer" title="Click to open the page in the IFrame below">
          <div class="face front-face">
            <img src="${card.image}" alt="" class="profile">
            <div class="pt-3 text-uppercase name">${card.name}</div>
            <div class="technics">${card.technics}</div>
          </div>
          <div class="face back-face">
            <strong>${card.description_short}</strong><br>${card.description_detail}
          </div>
        </a>
      </div>
    </div>`;
    }
    static createButton(card) {
        return `
    <a class="btn btn-outline-dark text-secondary btn-floating m-1 btnShadow" href="${card.link}" role="button" target="_blank" rel="noopener noreferrer">
    ${card.name}</a>`;
    }
}
Project.allCards = []; // Static array to hold all project cards
// Function to fetch JSON data using AJAX
function fetchProjects() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const projectsData = JSON.parse(xhr.responseText);
                projectsData.forEach((data) => {
                    const project = new Project(data.name, data.technics, data.description_short, data.description_detail, data.image, data.link);
                    Project.addCard(project);
                });
                renderProjects(); // Render projects after fetching data
            }
            else {
                console.error('Failed to fetch projects data');
            }
        }
    };
    xhr.open('GET', 'js/projects.json');
    xhr.send();
}
// Function to render projects to HTML
function renderProjects() {
    const resultcards = document.getElementById("ProjectCards");
    const resultbuttons = document.getElementById("ProjectButtons");
    resultcards.innerHTML = ''; // Clear existing content
    resultbuttons.innerHTML = ''; // Clear existing content
    Project.allCards.forEach((card) => {
        const cardHtml = Project.createCard(card);
        resultcards.innerHTML += cardHtml;
        const buttonHtml = Project.createButton(card);
        resultbuttons.innerHTML += buttonHtml;
    });
}
// Fetch projects data when the page loads
window.onload = function () {
    fetchProjects();
};
