"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Define external link
// const extLink = "https://localhost/codereview";
const extLink = "http://thomas.ariadne.at";
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
// Function to fetch JSON data using fetch API and create Project instances
function fetchProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./js/projects.json');
            if (!response.ok) {
                throw new Error('Failed to fetch projects data');
            }
            const projectsData = yield response.json();
            renderProjects(projectsData);
        }
        catch (error) {
            console.error(error);
        }
    });
}
// Function to render projects to HTML
function renderProjects(projectsData) {
    const resultcards = document.getElementById("ProjectCards");
    const resultbuttons = document.getElementById("ProjectButtons");
    resultcards.innerHTML = ''; // Clear existing content
    resultbuttons.innerHTML = ''; // Clear existing content
    projectsData.forEach((data) => {
        const project = new Project(data.name, data.technics, data.description_short, data.description_detail, data.image, data.link);
        resultcards.innerHTML += project.createCard();
        resultbuttons.innerHTML += project.createButton();
    });
}
// Fetch projects data when the page loads
window.onload = function () {
    fetchProjects();
};
