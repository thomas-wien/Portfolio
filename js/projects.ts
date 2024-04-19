// const extLink = "http://localhost/codereview"; // External address for links
const extLink = "http://thomas.ariadne.at"; // External address for links

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

// Function to fetch JSON data using AJAX
function fetchProjects(): void {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const projectsData = JSON.parse(xhr.responseText);
        projectsData.forEach((data: IProjects) => {
          const project = new Project(data.name, data.technics, data.description_short, data.description_detail, data.image, data.link);
          Project.addCard(project);
        });
        renderProjects(); // Render projects after fetching data
      } else {
        console.error('Failed to fetch projects data');
      }
    }
  };
  xhr.open('GET', 'js/projects.json');
  xhr.send();
}

// Function to render projects to HTML
function renderProjects(): void {
  const resultcards = document.getElementById("ProjectCards") as HTMLHtmlElement;
  const resultbuttons = document.getElementById("ProjectButtons") as HTMLHtmlElement;

  resultcards.innerHTML = ''; // Clear existing content
  resultbuttons.innerHTML = ''; // Clear existing content

  Project.allCards.forEach((card: Project) => {
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
