var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Define the place in the HTML document where the skills will be shown
var resultskills = document.getElementById("SkillsProgressCircles");
/**
 * Represents a skill with its properties and functionalities.
 */
var Skill = /** @class */ (function () {
    /**
     * Creates a new instance of the Skill class.
     *
     * @param {string} name - The name of the skill.
     * @param {string} cssname - The CSS name of the skill.
     * @param {boolean} hardOrSoft - Indicates whether the skill is a hard skill or a soft skill.
     * @param {SkillType} skillType - The type of the skill.
     */
    function Skill(name, cssname, hardOrSoft, skillType) {
        this.name = name;
        this.cssname = cssname;
        this.hardOrSoft = hardOrSoft;
        this.skillType = skillType;
    }
    /**
   * Adds a new skill to the array of all skills.
   * @param {Skill} skill - The skill instance to be added.
   */
    Skill.addSkill = function (skill) {
        Skill.allSkills.push(skill);
    };
    /**
     * Retrieves skills filtered by their type (frontend, backend, soft skills).
     * @param {SkillType} type - The type of skills to retrieve.
     * @returns {Skill[]} An array of skills filtered by the specified type.
     */
    Skill.getSkillsByType = function (type) {
        return Skill.allSkills.filter(function (skill) { return skill.skillType === type; });
    };
    /**
     * Create the Skill Group Head depending on the SkillType
     * @param {SkillType} skillType - The type of skill for the group head.
     * @returns {string} HTML markup for the skill group head.
     */
    Skill.createSkillGroupHead = function (skillType) {
        return "<h3 class=\"bg-dark text-success w-100 text-center\"><strong>".concat(skillType, "</strong></h3>");
    };
    /**
     * Creates HTML markup for a skill progress circle.
     * @param {Skill} skill - The skill instance.
     * @returns {string} HTML markup for the skill progress circle.
     */
    Skill.createSkillCircle = function (skill) {
        return "\n      <div class=\"progressbar mx-auto\">\n        <svg class=\"progressbar__svg\">\n          <circle cx=\"80\" cy=\"80\" r=\"70\" class=\"progressbar__svg-circle circle-".concat(skill.cssname, " shadow-").concat(skill.cssname, "\"></circle>\n        </svg>\n        <span class=\"progressbar__text shadow-").concat(skill.cssname, "\">").concat(skill.name, "</span>\n      </div>\n    ");
    };
    /** An array to hold all skills. */
    Skill.allSkills = [];
    return Skill;
}());
export { Skill };
/**
 * Fetches skills data from a JSON file and displays it on the webpage.
 * If an error occurs during fetching, an alert is displayed.
 */
export function fetchSkills() {
    return __awaiter(this, void 0, void 0, function () {
        var response, skillsData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('./js/skills.json')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch skills data: ".concat(response.statusText));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    skillsData = _a.sent();
                    // Type check for JSON data
                    if (!Array.isArray(skillsData)) {
                        throw new Error('Skills data is not an array');
                    }
                    skillsData.forEach(function (skillData) {
                        if (isValidSkill(skillData)) {
                            var skill = new Skill(skillData.name, skillData.cssname, skillData.hardOrSoft, skillData.skillType);
                            Skill.addSkill(skill);
                        }
                        else {
                            console.warn('Invalid skill data:', skillData);
                        }
                    });
                    displaySkills();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching skills:', error_1);
                    alert('An error occurred while fetching the skills data. Please try again later.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
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
export function displaySkills() {
    if (!resultskills) {
        console.error("The element to display skills is not found.");
        return;
    }
    var skillHtml = [];
    ["FrontEnd WebDev Skill", "BackEnd WebDev Skill", "Softskill"].forEach(function (type) {
        var skillGroupHead = Skill.createSkillGroupHead(type);
        skillHtml.push(skillGroupHead);
        var filteredSkills = Skill.getSkillsByType(type);
        filteredSkills.forEach(function (val) {
            skillHtml.push(Skill.createSkillCircle(val));
        });
    });
    resultskills.innerHTML = skillHtml.join('');
}
/** Fetch and display skills when the page loads */
window.onload = function () {
    fetchSkills();
};
