// Define external link
// const extLink: string = "https://localhost/codereview";
const extLink: string = "http://thomas.ariadne.at";

/**
 * This interface represents the properties of a project.
 */
export interface IProject {
  /** The name of the project. */
  name: string;

  /** The technologies used in the project. */
  technics: string;

  /** A brief description of the project. */
  description_short: string;

  /** A detailed description of the project. */
  description_detail: string;

  /** The URL or file path of the project's image. */
  image: string;

  /** The URL or file path where the project can be accessed or details can be found. */
  link: string;
}

/**
 * This class represents a single project and its properties.
 * It implements the IProject interface.
 */
export class Project implements IProject {

  /**
   * Constructs a new Project instance with the given parameters.
   *
   * @param {string} name - The name of the project.
   * @param {string} technics - The technologies used in the project.
   * @param {string} description_short - A short description of the project.
   * @param {string} description_detail - A detailed description of the project.
   * @param {string} image - The URL or file path of the project image.
   * @param {string} link - The URL or file path of the project link.
   */
  constructor(
    public name: string,
    public technics: string,
    public description_short: string,
    public description_detail: string,
    public image: string,
    public link: string
  ) {
    this.image = Project.constructImageUrl(image);
    this.link = Project.constructLinkUrl(link);
  }

  /**
   * Constructs the image URL for a project.
   * @param {string} image - The base path or filename of the project's image.
   * @returns {string} The full URL of the image.
   */
  static constructImageUrl(image: string): string {
    return `./images/${image}`;
  }

  /**
   * Constructs the link URL for a project.
   * @param {string} link - The base path or filename of the project's link.
   * @returns {string} The full URL of the link.
   */
  static constructLinkUrl(link: string): string {
    return `${extLink}/${link}`;
  }

  /** An array to store all projects. */
  static allProjects: Project[] = [];

  /**
   * Adds a new project to the array of all projects.
   * @param {Project} project - The project instance to be added.
   */
  static addProject(project: Project): void {
    Project.allProjects.push(project);
  }

  /**
   * Creates HTML markup for a project card.
   * @param {Project} project - The project instance.
   * @returns {string} HTML markup for the project card.
   */
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

  /**
   * Creates HTML markup for a project button.
   * @param {Project} project - The project instance.
   * @returns {string} HTML markup for the project button.
   */
  static createProjectButton(project: Project): string {
    return `
      <a class="btn btn-outline-dark text-secondary btn-floating m-1 btnShadow" href="${project.link}" role="button" target="_blank" rel="noopener noreferrer">
      ${project.name}</a>`;
  }
}

/**
 * Fetches project data from a JSON file and displays it on the webpage.
 * If an error occurs during fetching, an alert is displayed.
 */
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

/**
 * Checks if the provided data object is a valid project.
 * @param {any} data - The data object to be validated.
 * @returns {boolean} True if the data object is a valid project, otherwise false.
 */
function isValidProject(data: any): data is IProject {
  return typeof data.name === 'string' &&
    typeof data.technics === 'string' &&
    typeof data.description_short === 'string' &&
    typeof data.description_detail === 'string' &&
    typeof data.image === 'string' &&
    typeof data.link === 'string';
}

/**
 * Displays the fetched projects on the webpage.
 * If the necessary elements are not found, an error is logged.
 */
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

/** Fetch and display projects when the page loads */
window.onload = function (): void {
  fetchProjects();
};
