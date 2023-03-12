// This code defines an array of skills and displays them in the form of progress circles
// The skills are filtered and grouped by type (frontend, backend, soft skills)

// the perecents of the skills are defined in _skill.scss

// Define the Place in the HTML Document where the Skills will be shown
const resultskills = document.getElementById("SkillsProgressCircles") as HTMLHtmlElement;

// Define the skill interface
interface ISkill {
  name: string;
  cssname: string;
  hardOrSoft: boolean; // Hardskill = true
  skillType: string; // personal professional backend frontend ...
}

// Define the Skill class
class Skill implements ISkill {
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
      <div class="progressbar mx-auto"  style="border: solid 1px red;" >
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-${skill.cssname} shadow-${skill.cssname}"> </circle>
        </svg>
        <span class="progressbar__text shadow-${skill.cssname}">${skill.name}</span>
      </div>
    `;
  }
}

// Create an array of skills
const skills = [
  new Skill("HTML", "html", true, "FrontEnd WebDev Skill"),
  new Skill("CSS", "css", true, "FrontEnd WebDev Skill"),
  new Skill("SCSS", "scss", true, "FrontEnd WebDev Skill"),
  new Skill("JavaScript", "js", true, "FrontEnd WebDev Skill"),
  new Skill("TypeScript", "ts", true, "FrontEnd WebDev Skill"),
  new Skill("Angular", "angular", true, "FrontEnd WebDev Skill"),
  new Skill("MySQL", "mysql", true, "BackEnd WebDev Skill"),
  new Skill("PHP", "php", true, "BackEnd WebDev Skill"),
  new Skill("Symfony", "symfony", true, "BackEnd WebDev Skill"),
  new Skill("communication", "communication", false, "Softskill"),
  new Skill("teamwork", "teamwork", false, "Softskill"),
  new Skill("cooperation", "cooperation", false, "Softskill"),
  new Skill("empathy", "empathy", false, "Softskill"),
  new Skill("listening", "listening", false, "Softskill"),
  new Skill("problem solving", "problem", false, "Softskill"),
];

// Add each skill to the array
skills.forEach(skill => Skill.addSkill(skill));

// Generate the web content
function skill(type: string = "") {
  // create the Skill Group Head depending on the SkillType
  function createSkillGroupHead(skillType: string): string {
    return `<h3 class="bg-dark text-success w-100 text-center"><strong>${skillType}</strong></h3>`;
  }

  // Display the Group Head
  if (type === "FrontEnd WebDev Skill") {
    resultskills.innerHTML += createSkillGroupHead("Frontend WebDev Skills");
  } else if (type === "BackEnd WebDev Skill") {
    resultskills.innerHTML += createSkillGroupHead("Backend WebDev Skills");
  } else if (type === "Softskill") {
    resultskills.innerHTML += createSkillGroupHead("My Social Skills");
  }

  const filteredSkills = Skill.getSkillsByType(type);

  // create the skill progress circle
  filteredSkills.forEach(val => {
    resultskills.innerHTML += Skill.createSkillCircle(val);
  });
}

skill("FrontEnd WebDev Skill");
// skill("BackEnd WebDev Skill");
skill("Softskill");