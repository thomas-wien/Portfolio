/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.ts":
/*!*********************!*\
  !*** ./js/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst projects_1 = __webpack_require__(/*! ./projects */ \"./js/projects.ts\");\nconst skills_1 = __webpack_require__(/*! ./skills */ \"./js/skills.ts\");\nwindow.onload = function () {\n    (0, projects_1.fetchProjects)();\n    (0, skills_1.fetchSkills)();\n};\n\n\n//# sourceURL=webpack:///./js/index.ts?");

/***/ }),

/***/ "./js/projects.ts":
/*!************************!*\
  !*** ./js/projects.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fetchProjects = exports.Project = void 0;\n// Define external link\nconst extLink = \"http://thomas.ariadne.at\";\n// Localization class\nclass Localization {\n    static loadTexts(lang) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield fetch(`./js/texts_${lang}.json`);\n                if (!response.ok) {\n                    throw new Error(`Failed to load texts for language ${lang}`);\n                }\n                this.loadedTexts = yield response.json();\n            }\n            catch (error) {\n                console.error('Error loading texts:', error);\n                this.loadedTexts = {};\n            }\n        });\n    }\n    static getCurrentLanguage() {\n        const htmlLang = document.documentElement.lang;\n        return htmlLang || 'en';\n    }\n    static getText(key) {\n        return this.loadedTexts[key] || '';\n    }\n}\nLocalization.loadedTexts = {};\n// Project class\nclass Project {\n    constructor(name, technics, description_short, description_detail, image, link) {\n        this.name = name;\n        this.technics = technics;\n        this.description_short = description_short;\n        this.description_detail = description_detail;\n        this.image = image;\n        this.link = link;\n        fetchProjects;\n        this.image = Project.constructImageUrl(image);\n        this.link = Project.constructLinkUrl(link);\n    }\n    static constructImageUrl(image) {\n        return `./images/${image}`;\n    }\n    static constructLinkUrl(link) {\n        return `${extLink}/${link}`;\n    }\n    static addProject(project) {\n        Project.allProjects.push(project);\n    }\n    static createProjectCard(project) {\n        const title = Localization.getText('cardTitle');\n        return `\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n          <a href=\"${project.link}\" target=\"content\" rel=\"noopener noreferrer\" title=\"${title}\">\r\n            <div class=\"face front-face\">\r\n              <img src=\"${project.image}\" alt=\"${project.name} image\" class=\"profile\">\r\n              <div class=\"pt-3 text-uppercase name\">${project.name}</div>\r\n              <div class=\"technics\">${project.technics}</div>\r\n            </div>\r\n            <div class=\"face back-face\">\r\n              <strong>${project.description_short}</strong><br>${project.description_detail}\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>`;\n    }\n    static createProjectButton(project) {\n        return `\r\n      <a class=\"btn btn-outline-secondary text-secondary btn-floating m-1 shadow\" href=\"${project.link}\" role=\"button\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n      ${project.name}</a>`;\n    }\n}\nexports.Project = Project;\nProject.allProjects = [];\n// Fetch and display projects\nfunction fetchProjects() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const response = yield fetch('./js/projects.json');\n            if (!response.ok) {\n                throw new Error(Localization.getText('fetchFailed'));\n            }\n            const projectsData = yield response.json();\n            if (!Array.isArray(projectsData)) {\n                throw new Error(Localization.getText('notArray'));\n            }\n            const lang = Localization.getCurrentLanguage();\n            yield Localization.loadTexts(lang);\n            const shortDescKey = `description_short_${lang}`;\n            const detailDescKey = `description_detail_${lang}`;\n            projectsData.forEach(projectData => {\n                const project = new Project(projectData.name, projectData.technics, projectData[shortDescKey] || projectData.description_short_en, projectData[detailDescKey] || projectData.description_detail_en, projectData.image, projectData.link);\n                Project.addProject(project);\n            });\n            displayProjects();\n        }\n        catch (error) {\n            console.error('Error fetching projects data:', error);\n            alert(Localization.getText('fetchError'));\n        }\n    });\n}\nexports.fetchProjects = fetchProjects;\n// Display projects\nfunction displayProjects() {\n    const resultcards = document.getElementById(\"ProjectCards\");\n    const resultbuttons = document.getElementById(\"ProjectButtons\");\n    if (!resultcards || !resultbuttons) {\n        console.error(Localization.getText('displayError'));\n        return;\n    }\n    const cardsHtml = Project.allProjects.map(project => Project.createProjectCard(project)).join('');\n    const buttonsHtml = Project.allProjects.map(project => Project.createProjectButton(project)).join('');\n    resultcards.innerHTML = cardsHtml;\n    resultbuttons.innerHTML = buttonsHtml;\n}\n// Fetch and display projects when the page loads\nwindow.onload = function () {\n    return __awaiter(this, void 0, void 0, function* () {\n        yield fetchProjects();\n    });\n};\n\n\n//# sourceURL=webpack:///./js/projects.ts?");

/***/ }),

/***/ "./js/skills.ts":
/*!**********************!*\
  !*** ./js/skills.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.displaySkills = exports.fetchSkills = exports.Skill = void 0;\n// Define the place in the HTML document where the skills will be shown\nconst resultskills = document.getElementById(\"SkillsProgressCircles\");\n/**\n * Represents a skill with its properties and functionalities.\n */\nclass Skill {\n    /**\n     * Creates a new instance of the Skill class.\n     *\n     * @param {string} name - The name of the skill.\n     * @param {string} cssname - The CSS name of the skill.\n     * @param {boolean} hardOrSoft - Indicates whether the skill is a hard skill or a soft skill.\n     * @param {SkillType} skillType - The type of the skill.\n     */\n    constructor(name, cssname, hardOrSoft, skillType) {\n        this.name = name;\n        this.cssname = cssname;\n        this.hardOrSoft = hardOrSoft;\n        this.skillType = skillType;\n    }\n    /**\n   * Adds a new skill to the array of all skills.\n   * @param {Skill} skill - The skill instance to be added.\n   */\n    static addSkill(skill) {\n        Skill.allSkills.push(skill);\n    }\n    /**\n     * Retrieves skills filtered by their type (frontend, backend, soft skills).\n     * @param {SkillType} type - The type of skills to retrieve.\n     * @returns {Skill[]} An array of skills filtered by the specified type.\n     */\n    static getSkillsByType(type) {\n        return Skill.allSkills.filter(skill => skill.skillType === type);\n    }\n    /**\n     * Create the Skill Group Head depending on the SkillType\n     * @param {SkillType} skillType - The type of skill for the group head.\n     * @returns {string} HTML markup for the skill group head.\n     */\n    static createSkillGroupHead(skillType) {\n        return `<h3 class=\"bg-dark text-success w-100 text-center\"><strong>${skillType}</strong></h3>`;\n    }\n    /**\n     * Creates HTML markup for a skill progress circle.\n     * @param {Skill} skill - The skill instance.\n     * @returns {string} HTML markup for the skill progress circle.\n     */\n    static createSkillCircle(skill) {\n        return `\r\n      <div class=\"progressbar mx-auto\">\r\n        <svg class=\"progressbar__svg\">\r\n          <circle cx=\"80\" cy=\"80\" r=\"70\" class=\"progressbar__svg-circle circle-${skill.cssname} shadow-${skill.cssname}\"></circle>\r\n        </svg>\r\n        <span class=\"progressbar__text shadow-${skill.cssname}\">${skill.name}</span>\r\n      </div>\r\n    `;\n    }\n}\nexports.Skill = Skill;\n/** An array to hold all skills. */\nSkill.allSkills = [];\n/**\n * Fetches skills data from a JSON file and displays it on the webpage.\n * If an error occurs during fetching, an alert is displayed.\n */\nfunction fetchSkills() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const response = yield fetch('./js/skills.json');\n            if (!response.ok) {\n                throw new Error(`Failed to fetch skills data: ${response.statusText}`);\n            }\n            const skillsData = yield response.json();\n            // Type check for JSON data\n            if (!Array.isArray(skillsData)) {\n                throw new Error('Skills data is not an array');\n            }\n            skillsData.forEach(skillData => {\n                if (isValidSkill(skillData)) {\n                    const skill = new Skill(skillData.name, skillData.cssname, skillData.hardOrSoft, skillData.skillType);\n                    Skill.addSkill(skill);\n                }\n                else {\n                    console.warn('Invalid skill data:', skillData);\n                }\n            });\n            displaySkills();\n        }\n        catch (error) {\n            console.error('Error fetching skills:', error);\n            alert('An error occurred while fetching the skills data. Please try again later.');\n        }\n    });\n}\nexports.fetchSkills = fetchSkills;\n/**\n * Checks if the provided data object is a valid skill.\n * @param {any} data - The data object to be validated.\n * @returns {boolean} True if the data object is a valid skill, otherwise false.\n */\nfunction isValidSkill(data) {\n    return typeof data.name === 'string' &&\n        typeof data.cssname === 'string' &&\n        typeof data.hardOrSoft === 'boolean' &&\n        (data.skillType === \"FrontEnd WebDev Skill\" ||\n            data.skillType === \"BackEnd WebDev Skill\" ||\n            data.skillType === \"Softskill\");\n}\n/**\n * Displays the fetched skills on the webpage.\n * If the necessary element is not found, an error is logged.\n */\nfunction displaySkills() {\n    if (!resultskills) {\n        console.error(\"The element to display skills is not found.\");\n        return;\n    }\n    const skillHtml = [];\n    [\"FrontEnd WebDev Skill\", \"BackEnd WebDev Skill\", \"Softskill\"].forEach(type => {\n        const skillGroupHead = Skill.createSkillGroupHead(type);\n        skillHtml.push(skillGroupHead);\n        const filteredSkills = Skill.getSkillsByType(type);\n        filteredSkills.forEach((val) => {\n            skillHtml.push(Skill.createSkillCircle(val));\n        });\n    });\n    resultskills.innerHTML = skillHtml.join('');\n}\nexports.displaySkills = displaySkills;\n/** Fetch and display skills when the page loads */\nwindow.onload = function () {\n    fetchSkills();\n};\n\n\n//# sourceURL=webpack:///./js/skills.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.ts");
/******/ 	
/******/ })()
;