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
exports.Skill = void 0;
exports.fetchSkills = fetchSkills;
exports.displaySkills = displaySkills;
// Define the place in the HTML document where the skills will be shown
const resultskills = document.getElementById("SkillsProgressCircles");
/**
 * Represents a skill with its properties and functionalities.
 */
class Skill {
    constructor(name, cssname, hardOrSoft, skillType) {
        this.name = name;
        this.cssname = cssname;
        this.hardOrSoft = hardOrSoft;
        this.skillType = skillType;
    }
    /**
     * Adds a new skill to the array of all skills.
     */
    static addSkill(skill) {
        Skill.allSkills.push(skill);
    }
    /**
     * Retrieves skills filtered by their type.
     */
    static getSkillsByType(type) {
        return Skill.allSkills.filter(skill => skill.skillType === type);
    }
    /**
     * Creates the skill group header based on skill type.
     */
    static createSkillGroupHead(skillType) {
        return `<h3 class="bg-dark text-success w-100 text-center"><strong>${skillType}</strong></h3>`;
    }
    /**
     * Creates HTML markup for a skill progress circle.
     */
    static createSkillCircle(skill) {
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
exports.Skill = Skill;
/** An array to hold all skills. */
Skill.allSkills = [];
/**
 * Safe async function to handle errors and responses gracefully.
 */
function safeAsync(promise) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield promise;
            return [null, result];
        }
        catch (error) {
            return [error, null];
        }
    });
}
/**
 * Fetches skills data from a JSON file and displays it on the webpage.
 */
function fetchSkills() {
    return __awaiter(this, void 0, void 0, function* () {
        const [error, response] = yield safeAsync(fetch('./js/skills.json'));
        if (error || !(response === null || response === void 0 ? void 0 : response.ok)) {
            console.error('Failed to fetch skills data:', error || (response === null || response === void 0 ? void 0 : response.statusText));
            alert('An error occurred while fetching the skills data. Please try again later.');
            return;
        }
        const [parseError, skillsData] = yield safeAsync(response.json());
        if (parseError || !Array.isArray(skillsData)) {
            console.error('Skills data is invalid:', parseError);
            alert('Skills data is not valid.');
            return;
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
    });
}
/**
 * Checks if the provided data object is a valid skill.
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
        filteredSkills.forEach(val => {
            skillHtml.push(Skill.createSkillCircle(val));
        });
    });
    resultskills.innerHTML = skillHtml.join('');
}
/** Fetch and display skills when the page loads */
window.onload = function () {
    fetchSkills();
};
