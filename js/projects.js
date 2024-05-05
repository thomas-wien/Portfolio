"use strict";
// const extLink = "https://localhost/codereview"; // External address for links
const extLink = "http://thomas.ariadne.at"; // External address for links
// Define a class representing a single project
class Project {
    constructor(name, technics, description_short, description_detail, image, link) {
        this.name = name;
        this.technics = technics;
        this.description_short = description_short;
        this.description_detail = description_detail;
        this.image = image;
        this.link = link;
        this.image = `./images/${this.image}`;
        this.link = `${extLink}/${this.link}`;
    }
    // Method to create HTML card for a project
    createCard() {
        return `
    <div class="col-lg-4">
      <div class="card">
        <a href="${this.link}" target="content" rel="noopener noreferrer" title="Click to open the page in the IFrame below">
          <div class="face front-face">
            <img src="${this.image}" alt="" class="profile">
            <div class="pt-3 text-uppercase name">${this.name}</div>
            <div class="technics">${this.technics}</div>
          </div>
          <div class="face back-face">
            <strong>${this.description_short}</strong><br>${this.description_detail}
          </div>
        </a>
      </div>
    </div>`;
    }
    // Method to create HTML button for a project
    createButton() {
        return `
    <a class="btn btn-outline-dark text-secondary btn-floating m-1 btnShadow" href="${this.link}" role="button" target="_blank" rel="noopener noreferrer">
    ${this.name}</a>`;
    }
}
// Function to fetch JSON data using AJAX and create Project instances
function fetchProjects() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const projectsData = JSON.parse(xhr.responseText);
                renderProjects(projectsData); // Pass projects data to render function
            }
            else {
                console.error('Failed to fetch projects data');
            }
        }
    };
    xhr.open('GET', './js/projects.json');
    xhr.send();
}
// Function to render projects to HTML
function renderProjects(projectsData) {
    const resultcards = document.getElementById("ProjectCards");
    const resultbuttons = document.getElementById("ProjectButtons");
    resultcards.innerHTML = ''; // Clear existing content
    resultbuttons.innerHTML = ''; // Clear existing content
    projectsData.forEach((data) => {
        const project = new Project(data.name, data.technics, data.description_short, data.description_detail, data.image, data.link);
        const cardHtml = project.createCard();
        resultcards.innerHTML += cardHtml;
        const buttonHtml = project.createButton();
        resultbuttons.innerHTML += buttonHtml;
    });
}
// Fetch projects data when the page loads
window.onload = function () {
    fetchProjects();
};
