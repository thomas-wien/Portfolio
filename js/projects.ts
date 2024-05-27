// Define external link
// const extLink = "https://localhost/codereview";
const extLink: string = "http://thomas.ariadne.at";

// Define an interface for project properties
export interface IProject {
  name: string;
  technics: string;
  description_short: string;
  description_detail: string;
  image: string;
  link: string;
}

// Define a class representing a single project
export class Project implements IProject {
  constructor(
    public name: string,
    public technics: string,
    public description_short: string,
    public description_detail: string,
    public image: string,
    public link: string
  ) {
    this.image = `./images/${image}`;
    this.link = `${extLink}/${link}`;
  }

  // Define an array to hold the projects
  static allProjects: Project[] = [];

  // Automatically push the projects to the array 
  static addProject(project: Project): void {
    Project.allProjects.push(project);
  }

  // Create the project card
  static createProjectCard(project: Project): string {
    return `
      <div class="col-lg-4">
        <div class="card">
          <a href="${project.link}" target="content" rel="noopener noreferrer" title="Click to open the page in the IFrame below">
            <div class="face front-face">
              <img src="${project.image}" alt="" class="profile">
              <div class="pt-3 text-uppercase name">${project.name}</div>
              <div class="technics">${project.technics}</div>
            </div>
            <div class="face back-face">
              <strong>${project.description_short}</strong><br>${project.description_detail}
            </div>
          </a>
        </div>
      </div>`;
  }

  // Create the project button
  static createProjectButton(project: Project): string {
    return `
      <a class="btn btn-outline-dark text-secondary btn-floating m-1 btnShadow" href="${project.link}" role="button" target="_blank" rel="noopener noreferrer">
      ${project.name}</a>`;
  }
}

// Fetch projects from JSON file
export async function fetchProjects(): Promise<void> {
  try {
    const response = await fetch('./js/projects.json');
    if (!response.ok) {
      throw new Error('Failed to fetch projects data');
    }
    const projectsData: IProject[] = await response.json();
    projectsData.forEach(projectData => {
      const project = new Project(projectData.name, projectData.technics, projectData.description_short, projectData.description_detail, projectData.image, projectData.link);
      Project.addProject(project);
    });
    displayProjects();
  } catch (error) {
    console.error('Error fetching projects data:', error);
    alert('An error occurred while fetching the projects data. Please try again later.');
  }
}

// Generate the web content
export function displayProjects(): void {
  const resultcards = document.getElementById("ProjectCards") as HTMLElement | null;
  const resultbuttons = document.getElementById("ProjectButtons") as HTMLElement | null;

  if (!resultcards || !resultbuttons) {
    console.error("The elements to display projects are not found.");
    return;
  }

  let cardsHtml = ''; // Collect all cards HTML
  let buttonsHtml = ''; // Collect all buttons HTML

  Project.allProjects.forEach((project: Project) => {
    cardsHtml += Project.createProjectCard(project);
    buttonsHtml += Project.createProjectButton(project);
  });

  resultcards.innerHTML = cardsHtml; // Assign all cards at once
  resultbuttons.innerHTML = buttonsHtml; // Assign all buttons at once
}

// Fetch and display projects when the page loads
window.onload = function (): void {
  fetchProjects();
};
