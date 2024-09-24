// Define external link
const extLink: string = "http://thomas.ariadne.at";
// const extLink: string = "https://localhost/codereview";

// Interface for project data
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

// Localization class
class Localization {
  private static loadedTexts: { [key: string]: string } = {};

  static async loadTexts(lang: string): Promise<void> {
    const [error, response] = await safeAsync(fetch(`./js/texts_${lang}.json`));
    if (error || !response || !response.ok) {
      console.warn(`Failed to load texts for language ${lang}`);
      this.loadedTexts = {};
      return;
    }
    this.loadedTexts = await response.json();
  }

  static getCurrentLanguage(): string {
    return document.documentElement.lang || 'en';
  }

  static getText(key: keyof typeof Localization.loadedTexts): string {
    return this.loadedTexts[key] || '';
  }
}

// Utility function to safely handle async functions
async function safeAsync<T>(promise: Promise<T>): Promise<[Error | null, T | null]> {
  try {
    const result = await promise;
    return [null, result];
  } catch (error) {
    return [error as Error, null];
  }
}

// Project class
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
    const title = Localization.getText('cardTitle');
    return `
      <div class="col-lg-4">
        <div class="card">
          <a href="${project.link}" target="content" rel="noopener noreferrer" title="${title}">
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
      <a class="btn btn-outline-secondary text-secondary btn-floating m-1 shadow" href="${project.link}" role="button" target="_blank" rel="noopener noreferrer">
      ${project.name}</a>`;
  }
}

// Fetch and display projects
export async function fetchProjects(): Promise<void> {
  const [fetchError, response] = await safeAsync(fetch('./js/projects.json'));

  if (fetchError || !response || !response.ok) {
    console.error('Failed to fetch projects data');
    alert(Localization.getText('fetchError'));
    return;
  }

  const [jsonError, projectsData] = await safeAsync(response.json());
  if (jsonError || !Array.isArray(projectsData)) {
    console.error('Projects data is not an array');
    alert(Localization.getText('notArray'));
    return;
  }

  const lang = Localization.getCurrentLanguage();
  await Localization.loadTexts(lang);

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
}

// Display projects
function displayProjects(): void {
  const resultcards = document.getElementById("ProjectCards");
  const resultbuttons = document.getElementById("ProjectButtons");

  if (!resultcards || !resultbuttons) {
    console.error('Project cards or buttons container not found');
    return;
  }

  const cardsHtml = Project.allProjects.map(project => Project.createProjectCard(project)).join('');
  const buttonsHtml = Project.allProjects.map(project => Project.createProjectButton(project)).join('');

  resultcards.innerHTML = cardsHtml;
  resultbuttons.innerHTML = buttonsHtml;
}

// Fetch and display projects when the page loads
window.onload = async function (): Promise<void> {
  await fetchProjects();
};
