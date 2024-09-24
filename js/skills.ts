// Define the place in the HTML document where the skills will be shown
const resultskills = document.getElementById("SkillsProgressCircles") as HTMLElement | null;

// Define a type for skill categories
type SkillType = "FrontEnd WebDev Skill" | "BackEnd WebDev Skill" | "Softskill";

/**
 * Represents the properties of a skill.
 */
export interface ISkill {
  name: string;
  cssname: string;
  hardOrSoft: boolean; // Hardskill = true
  skillType: SkillType;
}

/**
 * Represents a skill with its properties and functionalities.
 */
export class Skill implements ISkill {
  constructor(
    public name: string,
    public cssname: string,
    public hardOrSoft: boolean,
    public skillType: SkillType
  ) { }

  /** An array to hold all skills. */
  static allSkills: Skill[] = [];

  /**
   * Adds a new skill to the array of all skills.
   */
  static addSkill(skill: Skill): void {
    Skill.allSkills.push(skill);
  }

  /**
   * Retrieves skills filtered by their type.
   */
  static getSkillsByType(type: SkillType): Skill[] {
    return Skill.allSkills.filter(skill => skill.skillType === type);
  }

  /**
   * Creates the skill group header based on skill type.
   */
  static createSkillGroupHead(skillType: SkillType): string {
    return `<h3 class="bg-dark text-success w-100 text-center"><strong>${skillType}</strong></h3>`;
  }

  /**
   * Creates HTML markup for a skill progress circle.
   */
  static createSkillCircle(skill: Skill): string {
    return `
      <div class="progressbar mx-auto">
        <svg class="progressbar__svg">
          <circle cx="80" cy "80" r="70" class="progressbar__svg-circle circle-${skill.cssname} shadow-${skill.cssname}"></circle>
        </svg>
        <span class="progressbar__text shadow-${skill.cssname}">${skill.name}</span>
      </div>
    `;
  }
}

/**
 * Safe async function to handle errors and responses gracefully.
 */
async function safeAsync<T>(promise: Promise<T>): Promise<[Error | null, T | null]> {
  try {
    const result = await promise;
    return [null, result];
  } catch (error) {
    return [error as Error, null];
  }
}

/**
 * Fetches skills data from a JSON file and displays it on the webpage.
 */
export async function fetchSkills(): Promise<void> {
  const [error, response] = await safeAsync(fetch('./js/skills.json'));

  if (error || !response?.ok) {
    console.error('Failed to fetch skills data:', error || response?.statusText);
    alert('An error occurred while fetching the skills data. Please try again later.');
    return;
  }

  const [parseError, skillsData] = await safeAsync(response.json());
  if (parseError || !Array.isArray(skillsData)) {
    console.error('Skills data is invalid:', parseError);
    alert('Skills data is not valid.');
    return;
  }

  skillsData.forEach(skillData => {
    if (isValidSkill(skillData)) {
      const skill = new Skill(skillData.name, skillData.cssname, skillData.hardOrSoft, skillData.skillType);
      Skill.addSkill(skill);
    } else {
      console.warn('Invalid skill data:', skillData);
    }
  });

  displaySkills();
}

/**
 * Checks if the provided data object is a valid skill.
 */
function isValidSkill(data: any): data is ISkill {
  return typeof data.name === 'string' &&
    typeof data.cssname === 'string' &&
    typeof data.hardOrSoft === 'boolean' &&
    (data.skillType === "FrontEnd WebDev Skill" ||
      data.skillType === "BackEnd WebDev Skill" ||
      data.skillType === "Softskill");
}

/**
 * Displays the fetched skills on the webpage.
 */
export function displaySkills(): void {
  if (!resultskills) {
    console.error("The element to display skills is not found.");
    return;
  }

  const skillHtml: string[] = [];

  ["FrontEnd WebDev Skill", "BackEnd WebDev Skill", "Softskill"].forEach(type => {
    const skillGroupHead = Skill.createSkillGroupHead(type as SkillType);
    skillHtml.push(skillGroupHead);

    const filteredSkills = Skill.getSkillsByType(type as SkillType);
    filteredSkills.forEach(val => {
      skillHtml.push(Skill.createSkillCircle(val));
    });
  });

  resultskills.innerHTML = skillHtml.join('');
}

/** Fetch and display skills when the page loads */
window.onload = function (): void {
  fetchSkills();
};
