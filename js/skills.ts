// the perecents of the skill are defined in _skill.scss
let resultskills = document.getElementById("SkillsProgressCircles") as HTMLHtmlElement; // defining the place in index.html where the cards should be displayed

interface ISkills {
  name: string;
  cssname: string;
  hardOrSoft: boolean; // Hardskill = true
  skillType: string; // personal professional backend frontend ...
}

let skillsarray: any = []; // creates an array witch will be filled automaticly by cards.push(this) in the constuctor

class skill {
  name: string;
  cssname: string;
  hardOrSoft: boolean;
  skillType: string;


  constructor(name: string, cssname: string, hardOrSoft: boolean, skillType: string) {
    this.name = name;
    this.cssname = cssname;
    this.hardOrSoft = hardOrSoft;
    this.skillType = skillType;
    skillsarray.push(this); // automaticly pushes the skills to the array 
  }
}
let skills = [
  new skill("HTML", "html", true, "FrontEnd WebDev Skill"),
  new skill("CSS", "css", true, "FrontEnd WebDev Skill"),
  new skill("SCSS", "scss", true, "FrontEnd WebDev Skill"),
  new skill("JavaScript", "js", true, "FrontEnd WebDev Skill"),
  new skill("TypeScript", "ts", true, "FrontEnd WebDev Skill"),
  new skill("Angular", "angular", true, "FrontEnd WebDev Skill"),
  new skill("communication", "communication", false, "Softskill"),
  new skill("teamwork", "teamwork", false, "Softskill"),
  new skill("cooperation", "cooperation", false, "Softskill"),
  new skill("empathy", "empathy", false, "Softskill"),
  new skill("listening", "listening", false, "Softskill"),
  new skill("thirsty for knowledge", "knowledge", false, "Softskill"),
]

function Skill(type: string = "") {

  // create the Skill Group Head depanding on the SkillType 
  if (type == "FrontEnd WebDev Skill") {
    resultskills.innerHTML += `<h2 class="bg-dark text-success w-100 text-center"><strong>Frontend WebDev Skills</strong></h2>`
  } else if (type == "Softskill") {
    resultskills.innerHTML += `<h2 class="bg-dark text-success w-100 text-center"><strong>My Social Skills</strong></h2>`
  }

  for (let i = 0; i < skills.length; i++) { // Loop as many times skill containing content

    // create the skill progress circle
    if (skills[i].skillType == type) {
      //if (cards[i].skillType == "Softskill") {
      // <h2 class="bg-dark text-success w-100 text-center"><strong>${cards[i].skillType}</strong></h2>
      resultskills.innerHTML += `
    <div class="progressbar">
      <svg class="progressbar__svg">
        <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-${skills[i].cssname} shadow-${skills[i].cssname}"> </circle>
      </svg>
      <span class="progressbar__text shadow-${skills[i].cssname}">${skills[i].name}</span>
    </div>
   `
    }
  }
}
// generating the Web Content
Skill("FrontEnd WebDev Skill");
Skill("Softskill");