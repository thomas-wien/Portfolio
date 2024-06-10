// Define the place in the HTML document where the skills will be shown
const resultskills = document.getElementById("SkillsProgressCircles") as HTMLElement | null;

// Define a type for skill categories
type SkillType = "FrontEnd WebDev Skill" | "BackEnd WebDev Skill" | "Softskill";

/**
 * Represents the properties of a skill.
 */
export interface ISkill {
  /** The name of the skill. */
  name: string;

  /** The CSS name of the skill. */
  cssname: string;

  /** Indicates whether the skill is a hard skill (true) or a soft skill (false). */
  hardOrSoft: boolean; // Hardskill = true

  /** The type of the skill. */
  skillType: SkillType;
}

/**
 * Represents a skill with its properties and functionalities.
 */
export class Skill implements ISkill {
  /**
   * Creates a new instance of the Skill class.
   *
   * @param {string} name - The name of the skill.
   * @param {string} cssname - The CSS name of the skill.
   * @param {boolean} hardOrSoft - Indicates whether the skill is a hard skill or a soft skill.
   * @param {SkillType} skillType - The type of the skill.
   */
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
 * @param {Skill} skill - The skill instance to be added.
 */
  static addSkill(skill: Skill): void {
    Skill.allSkills.push(skill);
  }

  /**
   * Retrieves skills filtered by their type (frontend, backend, soft skills).
   * @param {SkillType} type - The type of skills to retrieve.
   * @returns {Skill[]} An array of skills filtered by the specified type.
   */
  static getSkillsByType(type: SkillType): Skill[] {
    return Skill.allSkills.filter(skill => skill.skillType === type);
  }

  /**
   * Create the Skill Group Head depending on the SkillType 
   * @param {SkillType} skillType - The type of skill for the group head.
   * @returns {string} HTML markup for the skill group head.
   */
  static createSkillGroupHead(skillType: SkillType): string {
    return `<h3 class="bg-dark text-success w-100 text-center"><strong>${skillType}</strong></h3>`;
  }

  /**
   * Creates HTML markup for a skill progress circle.
   * @param {Skill} skill - The skill instance.
   * @returns {string} HTML markup for the skill progress circle.
   */
  static createSkillCircle(skill: Skill): string {
    return `
      <div class="progressbar mx-auto">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-${skill.cssname} shadow-${skill.cssname}"></circle>
        </svg>
        <span class="progressbar__text shadow-${skill.cssname}">${skill.name}</span>
      </div>
    `;
  }
}

/**
 * Fetches skills data from a JSON file and displays it on the webpage.
 * If an error occurs during fetching, an alert is displayed.
 */
export async function fetchSkills(): Promise<void> {
  try {
    const response = await fetch('./js/skills.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch skills data: ${response.statusText}`);
    }
    const skillsData: ISkill[] = await response.json();

    // Type check for JSON data
    if (!Array.isArray(skillsData)) {
      throw new Error('Skills data is not an array');
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
  } catch (error) {
    console.error('Error fetching skills:', error);
    alert('An error occurred while fetching the skills data. Please try again later.');
  }
}

/**
 * Checks if the provided data object is a valid skill.
 * @param {any} data - The data object to be validated.
 * @returns {boolean} True if the data object is a valid skill, otherwise false.
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
 * If the necessary element is not found, an error is logged.
 */
export function displaySkills(): void {
  if (!resultskills) {
    console.error("The element to display skills is not found.");
    return;
  }

  const skillHtml: string[] = [];

  ["FrontEnd WebDev Skill", "BackEnd WebDev Skill", "Softskill"].forEach(type => {
    const skillGroupHead: string = Skill.createSkillGroupHead(type as SkillType);
    skillHtml.push(skillGroupHead);

    const filteredSkills: Skill[] = Skill.getSkillsByType(type as SkillType);
    filteredSkills.forEach((val: Skill) => {
      skillHtml.push(Skill.createSkillCircle(val));
    });
  });

  resultskills.innerHTML = skillHtml.join('');
}

/** Fetch and display skills when the page loads */
window.onload = function (): void {
  fetchSkills();
};
