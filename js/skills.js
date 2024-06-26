"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displaySkills = exports.fetchSkills = exports.Skill = void 0;
// Define the place in the HTML document where the skills will be shown
const resultskills = document.getElementById("SkillsProgressCircles");
/**
 * Represents a skill with its properties and functionalities.
 */
class Skill {
    /**
     * Creates a new instance of the Skill class.
     *
     * @param {string} name - The name of the skill.
     * @param {string} cssname - The CSS name of the skill.
     * @param {boolean} hardOrSoft - Indicates whether the skill is a hard skill or a soft skill.
     * @param {SkillType} skillType - The type of the skill.
     */
    constructor(name, cssname, hardOrSoft, skillType) {
        this.name = name;
        this.cssname = cssname;
        this.hardOrSoft = hardOrSoft;
        this.skillType = skillType;
    }
    /**
   * Adds a new skill to the array of all skills.
   * @param {Skill} skill - The skill instance to be added.
   */
    static addSkill(skill) {
        Skill.allSkills.push(skill);
    }
    /**
     * Retrieves skills filtered by their type (frontend, backend, soft skills).
     * @param {SkillType} type - The type of skills to retrieve.
     * @returns {Skill[]} An array of skills filtered by the specified type.
     */
    static getSkillsByType(type) {
        return Skill.allSkills.filter(skill => skill.skillType === type);
    }
    /**
     * Create the Skill Group Head depending on the SkillType
     * @param {SkillType} skillType - The type of skill for the group head.
     * @returns {string} HTML markup for the skill group head.
     */
    static createSkillGroupHead(skillType) {
        return `<h3 class="bg-dark text-success w-100 text-center"><strong>${skillType}</strong></h3>`;
    }
    /**
     * Creates HTML markup for a skill progress circle.
     * @param {Skill} skill - The skill instance.
     * @returns {string} HTML markup for the skill progress circle.
     */
    static createSkillCircle(skill) {
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
exports.Skill = Skill;
/** An array to hold all skills. */
Skill.allSkills = [];
/**
 * Fetches skills data from a JSON file and displays it on the webpage.
 * If an error occurs during fetching, an alert is displayed.
 */
function fetchSkills() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./js/skills.json');
            if (!response.ok) {
                throw new Error(`Failed to fetch skills data: ${response.statusText}`);
            }
            const skillsData = yield response.json();
            // Type check for JSON data
            if (!Array.isArray(skillsData)) {
                throw new Error('Skills data is not an array');
            }
            skillsData.forEach(skillData => {
                if (isValidSkill(skillData)) {
                    const skill = new Skill(skillData.name, skillData.cssname, skillData.hardOrSoft, skillData.skillType);
                    Skill.addSkill(skill);
                }
                else {
                    console.warn('Invalid skill data:', skillData);
                }
            });
            displaySkills();
        }
        catch (error) {
            console.error('Error fetching skills:', error);
            alert('An error occurred while fetching the skills data. Please try again later.');
        }
    });
}
exports.fetchSkills = fetchSkills;
/**
 * Checks if the provided data object is a valid skill.
 * @param {any} data - The data object to be validated.
 * @returns {boolean} True if the data object is a valid skill, otherwise false.
 */
function isValidSkill(data) {
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
function displaySkills() {
    if (!resultskills) {
        console.error("The element to display skills is not found.");
        return;
    }
    const skillHtml = [];
    ["FrontEnd WebDev Skill", "BackEnd WebDev Skill", "Softskill"].forEach(type => {
        const skillGroupHead = Skill.createSkillGroupHead(type);
        skillHtml.push(skillGroupHead);
        const filteredSkills = Skill.getSkillsByType(type);
        filteredSkills.forEach((val) => {
            skillHtml.push(Skill.createSkillCircle(val));
        });
    });
    resultskills.innerHTML = skillHtml.join('');
}
exports.displaySkills = displaySkills;
/** Fetch and display skills when the page loads */
window.onload = function () {
    fetchSkills();
};
