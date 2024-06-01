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
  public image: string;
  public link: string;

  constructor(
    public name: string,
    public technics: string,
    public description_short: string,
    public description_detail: string,
    image: string,
    link: string
  ) {
    this.image = Project.constructImageUrl(image);
    this.link = Project.constructLinkUrl(link);
  }

  // Static method to construct the image URL
  static constructImageUrl(image: string): string {
    return `./images/${image}`;
  }

  // Static method to construct the link URL
  static constructLinkUrl(link: string): string {
    return `${extLink}/${link}`;
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
              <img src="${project.image}" alt="${project.name} image" class="profile">
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

    // Type check for JSON data
    if (!Array.isArray(projectsData)) {
      throw new Error('Projects data is not an array');
    }

    projectsData.forEach(projectData => {
      if (isValidProject(projectData)) {
        const project = new Project(
          projectData.name,
          projectData.technics,
          projectData.description_short,
          projectData.description_detail,
          projectData.image,
          projectData.link
        );
        Project.addProject(project);
      } else {
        console.warn('Invalid project data:', projectData);
      }
    });

    displayProjects();
  } catch (error) {
    console.error('Error fetching projects data:', error);
    alert('An error occurred while fetching the projects data. Please try again later.');
  }
}

// Validate project data
function isValidProject(data: any): data is IProject {
  return typeof data.name === 'string' &&
    typeof data.technics === 'string' &&
    typeof data.description_short === 'string' &&
    typeof data.description_detail === 'string' &&
    typeof data.image === 'string' &&
    typeof data.link === 'string';
}

// Generate the web content
export function displayProjects(): void {
  const resultcards = document.getElementById("ProjectCards") as HTMLElement | null;
  const resultbuttons = document.getElementById("ProjectButtons") as HTMLElement | null;

  if (!resultcards || !resultbuttons) {
    console.error("The elements to display projects are not found.");
    return;
  }

  const cardsHtml = Project.allProjects.map(project => Project.createProjectCard(project)).join('');
  const buttonsHtml = Project.allProjects.map(project => Project.createProjectButton(project)).join('');

  resultcards.innerHTML = cardsHtml;
  resultbuttons.innerHTML = buttonsHtml;
}

// Fetch and display projects when the page loads
window.onload = function (): void {
  fetchProjects();
};
