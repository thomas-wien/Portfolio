// Define external link
// const extLink = "https://localhost/codereview";
const extLink = "http://thomas.ariadne.at";

// Define an interface for project properties
interface IProject {
  name: string;
  technics: string;
  description_short: string;
  description_detail: string;
  image: string;
  link: string;
}

// Define a class representing a single project
class Project implements IProject {
  constructor(
    public name: string,
    public technics: string,
    public description_short: string,
    public description_detail: string,
    public image: string,
    public link: string
  ) {
    this.image = `./images/${this.image}`;
    this.link = `${extLink}/${this.link}`;
  }

  // Method to create HTML card for a project
  createCard(): string {
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
  createButton(): string {
    return `
    <a class="btn btn-outline-dark text-secondary btn-floating m-1 btnShadow" href="${this.link}" role="button" target="_blank" rel="noopener noreferrer">
    ${this.name}</a>`;
  }
}

// Function to fetch JSON data using fetch API and create Project instances
async function fetchProjects(): Promise<void> {
  try {
    const response = await fetch('./js/projects.json');
    if (!response.ok) {
      throw new Error('Failed to fetch projects data');
    }
    const projectsData: IProject[] = await response.json();
    renderProjects(projectsData);
  } catch (error) {
    console.error(error);
  }
}

// Function to render projects to HTML
function renderProjects(projectsData: IProject[]): void {
  const resultcards = document.getElementById("ProjectCards") as HTMLElement;
  const resultbuttons = document.getElementById("ProjectButtons") as HTMLElement;

  resultcards.innerHTML = ''; // Clear existing content
  resultbuttons.innerHTML = ''; // Clear existing content

  projectsData.forEach((data: IProject) => {
    const project = new Project(data.name, data.technics, data.description_short, data.description_detail, data.image, data.link);

    resultcards.innerHTML += project.createCard();
    resultbuttons.innerHTML += project.createButton();
  });
}

// Fetch projects data when the page loads
window.onload = function () {
  fetchProjects();
};
