const resultcards = document.getElementById("ProjectCards") as HTMLHtmlElement; // Define where project cards should be displayed
const resultbuttons = document.getElementById("ProjectButtons") as HTMLHtmlElement; // Define where project buttons should be displayed
// const extLink = "http://localhost/codereview"; // External address for links
const extLink = "http://thomas.ariadne.at"; // External address for links
// const extLink = "https://netusil.codefactory.live"; // external adress ariadne or codefactory

// Define an interface for project properties
interface IProjects {
  name: string;
  technics: string;
  description_short: string;
  description_detail: string;
  image: string;
  link: string;
}

// Define a class representing a project
class Project implements IProjects {
  constructor(
    public name: string,
    public technics: string,
    public description_short: string,
    public description_detail: string,
    public image: string,
    public link: string
  ) {
    this.image = `./images/${this.image}`; // Add "./images/" prefix to the image property
    this.link = `${extLink}/${this.link}`; // Add "./ExtLink/" prefix to the link property to change provider def line 4 to 6
  }

  static allCards: Project[] = []; // Static array to hold all project cards

  static addCard(card: Project): void {
    Project.allCards.push(card); // Add a project card to the array
  }

  static createCard(card: Project): string {
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

  static createButton(card: Project): string {
    return `
    <a class="btn btn-outline-dark text-secondary btn-floating m-1 btnShadow" href="${card.link}" role="button" target="_blank" rel="noopener noreferrer">
    ${card.name}</a>`;
  }
}

// Array of project objects
const projects: Project[] = [
  new Project("Foodblock", "HTML / SCSS", "Project description:", 'You will create a mobile-friendly website for one of the most popular food blogs out there, fittingly named “Food blog”.<br><br>,Focus on how the pictures are positioned: 3 columns layout for the desktop vs. 1 column layout in the mobile version.', "veaganFoodBlock.png", "FE18-CR1-NetusilThomas/"),
  new Project("Weekly Planner", "HTML / SCSS / JSON / TypeScript", "Project description:", "In this Code Review, your job is to create a list of Tasks for a “My Weekly Planner” website. Information about the tasks should be stored in a JSON file.<br>Every time the “Importance” button is clicked the Importance should increases by one and the color should change", "weeklyPlanner.png", "FE18-CR2-NetusilThomas/"),
  new Project("Take Away Restaurtant", "Angular / SCSS", "", "Create at least 7 pages / components: ... The NavBar will be always showing, the same for the Footer. Home and About Us should have static content. Menu will hold dynamic content created from objects. On clicking on the Details button it should lead to the details page ...", "ristoranteOnlineShop.png", "FE18-CR3-NetusilThomas/"),
  new Project("Alumni website", "Groupwork / Angular / SCSS", "What we need", "The alumni website should consist of five sections: Home page, Alumni directory, Stories, Careers and Events. The purpose of the website is to give all necessary information about alumni", "frontEndProject.png", "front-end-project/"),
  new Project("Web Library", "PHP / MySQL", "Task:", "As a Full Stack Web Developer you got your first full-stack project, the Big Library web application. The customer wants you to create a big list of all media available in the library (books, CDs, DVDs) and make it available over the web", "theLibrary.png", "BE18-CR4-NetusilThomas/"),
  new Project("Adopt a Pet", "PHP / MySQL", "Task:", "Create an animal adoption platform to connect users and animals. All users must introduce their first_name and last_name, email, phone_number, address, picture and password in order to register", "adoptAPet.png", "BE18-CR5-NetusilThomas/"),
];

// Add each project to the static allCards array of the Project class
projects.forEach((project: Project) => {
  Project.addCard(project);
});

// Create HTML for each Card
for (let card of Project.allCards) {
  const cardHtml = Project.createCard(card);
  resultcards.innerHTML += cardHtml;

  const buttonHtml = Project.createButton(card);
  resultbuttons.innerHTML += buttonHtml;
}
