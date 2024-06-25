// Define external link
const extLink: string = "http://thomas.ariadne.at";

/**
 * This interface represents the properties of a project.
 */
export interface IProject {
  name: string;
  technics: string;
  description_short_en: string;
  description_short_de: string;
  description_short_es: string;
  description_detail_en: string;
  description_detail_de: string;
  description_detail_es: string;
  image: string;
  link: string;
}

/**
 * This class represents a single project and its properties.
 * It implements the IProject interface.
 */
export class Project {
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

  static constructImageUrl(image: string): string {
    return `./images/${image}`;
  }

  static constructLinkUrl(link: string): string {
    return `${extLink}/${link}`;
  }

  static allProjects: Project[] = [];

  static addProject(project: Project): void {
    Project.allProjects.push(project);
  }

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

  static createProjectButton(project: Project): string {
    return `
      <a class="btn btn-outline-dark text-secondary btn-floating m-1 btnShadow" href="${project.link}" role="button" target="_blank" rel="noopener noreferrer">
      ${project.name}</a>`;
  }
}

/**
 * Determines the current language setting from the HTML document.
 * @returns {string} The language code (e.g., 'en', 'de', 'es').
 */
function getCurrentLanguage(): string {
  const htmlLang = document.documentElement.lang;
  return htmlLang || 'en';
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

    if (!Array.isArray(projectsData)) {
      throw new Error('Projects data is not an array');
    }

    const lang = getCurrentLanguage();
    const shortDescKey = `description_short_${lang}` as keyof IProject;
    const detailDescKey = `description_detail_${lang}` as keyof IProject;

    projectsData.forEach(projectData => {
      const project = new Project(
        projectData.name,
        projectData.technics,
        projectData[shortDescKey] || projectData.description_short_en,
        projectData[detailDescKey] || projectData.description_detail_en,
        projectData.image,
        projectData.link
      );
      Project.addProject(project);
    });

    displayProjects();
  } catch (error) {
    console.error('Error fetching projects data:', error);
    alert('An error occurred while fetching the projects data. Please try again later.');
  }
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
