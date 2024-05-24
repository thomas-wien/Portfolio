"use strict";
// This code defines an array of skills and displays them in the form of progress circles
// The skills are filtered and grouped by type (frontend, backend, soft skills)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Define the place in the HTML document where the skills will be shown
const resultskills = document.getElementById("SkillsProgressCircles");
// Define the Skill class
class Skill {
    constructor(name, cssname, hardOrSoft, skillType) {
        this.name = name;
        this.cssname = cssname;
        this.hardOrSoft = hardOrSoft;
        this.skillType = skillType;
    }
    // Automatically push the skills to the array 
    static addSkill(skill) {
        Skill.allSkills.push(skill);
    }
    // Filter the skills by type (frontend, backend, soft skills)
    static getSkillsByType(type) {
        return Skill.allSkills.filter(skill => skill.skillType === type);
    }
    // Create the Skill Group Head depending on the SkillType 
    static createSkillGroupHead(skillType) {
        return `<h3 class="bg-dark text-success w-100 text-center"><strong>${skillType}</strong></h3>`;
    }
    // Create the skill progress circle
    static createSkillCircle(skill) {
        return `
      <div class="progressbar mx-auto">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-${skill.cssname} shadow-${skill.cssname}"> </circle>
        </svg>
        <span class="progressbar__text shadow-${skill.cssname}">${skill.name}</span>
      </div>
    `;
    }
}
// Define an array to hold the skills
Skill.allSkills = [];
// Fetch skills from JSON file
function fetchSkills() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./js/skills.json');
            if (!response.ok) {
                throw new Error(`Failed to fetch skills data: ${response.statusText}`);
            }
            const skillsData = yield response.json();
            skillsData.forEach(skillData => {
                const skill = new Skill(skillData.name, skillData.cssname, skillData.hardOrSoft, skillData.skillType);
                Skill.addSkill(skill);
            });
            displaySkills();
        }
        catch (error) {
            console.error('Error fetching skills:', error);
            alert('An error occurred while fetching the skills data. Please try again later.');
        }
    });
}
// Generate the web content
function displaySkills() {
    if (!resultskills) {
        console.error("The element to display skills is not found.");
        return;
    }
    ["FrontEnd WebDev Skill", "BackEnd WebDev Skill", "Softskill"].forEach(type => {
        const skillGroupHead = Skill.createSkillGroupHead(type);
        resultskills.innerHTML += skillGroupHead;
        const filteredSkills = Skill.getSkillsByType(type);
        filteredSkills.forEach((val) => {
            resultskills.innerHTML += Skill.createSkillCircle(val);
        });
    });
}
// Fetch and display skills when the page loads
window.onload = function () {
    fetchSkills();
};
