// Define the place in the HTML document where the skills will be shown
const resultskills = document.getElementById("SkillsProgressCircles") as HTMLElement | null;

// Define the skill interface
export interface ISkill {
  name: string;
  cssname: string;
  hardOrSoft: boolean; // Hardskill = true
  skillType: string; // personal, professional, backend, frontend ...
}

// Define the Skill class
export class Skill implements ISkill {
  constructor(
    public name: string,
    public cssname: string,
    public hardOrSoft: boolean,
    public skillType: string
  ) { }

  // Define an array to hold the skills
  static allSkills: Skill[] = [];

  // Automatically push the skills to the array 
  static addSkill(skill: Skill): void {
    Skill.allSkills.push(skill);
  }

  // Filter the skills by type (frontend, backend, soft skills)
  static getSkillsByType(type: string): Skill[] {
    return Skill.allSkills.filter(skill => skill.skillType === type);
  }

  // Create the Skill Group Head depending on the SkillType 
  static createSkillGroupHead(skillType: string): string {
    return `<h3 class="bg-dark text-success w-100 text-center"><strong>${skillType}</strong></h3>`;
  }

  // Create the skill progress circle
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

// Fetch skills from JSON file
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

// Validate skill data
function isValidSkill(data: any): data is ISkill {
  return typeof data.name === 'string' &&
    typeof data.cssname === 'string' &&
    typeof data.hardOrSoft === 'boolean' &&
    typeof data.skillType === 'string';
}

// Generate the web content
export function displaySkills(): void {
  if (!resultskills) {
    console.error("The element to display skills is not found.");
    return;
  }

  const skillHtml: string[] = [];

  ["FrontEnd WebDev Skill", "BackEnd WebDev Skill", "Softskill"].forEach(type => {
    const skillGroupHead: string = Skill.createSkillGroupHead(type);
    skillHtml.push(skillGroupHead);

    const filteredSkills: Skill[] = Skill.getSkillsByType(type);
    filteredSkills.forEach((val: Skill) => {
      skillHtml.push(Skill.createSkillCircle(val));
    });
  });

  resultskills.innerHTML = skillHtml.join('');
}

// Fetch and display skills when the page loads
window.onload = function (): void {
  fetchSkills();
};
