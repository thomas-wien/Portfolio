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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./js/projects.ts\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills */ \"./js/skills.ts\");\n\n\nwindow.onload = function () {\n    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.fetchProjects)();\n    (0,_skills__WEBPACK_IMPORTED_MODULE_1__.fetchSkills)();\n};\n\n\n//# sourceURL=webpack:///./js/index.ts?");

/***/ }),

/***/ "./js/projects.ts":
/*!************************!*\
  !*** ./js/projects.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects),\n/* harmony export */   fetchProjects: () => (/* binding */ fetchProjects)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n// Define external link\n// const extLink = \"https://localhost/codereview\";\nvar extLink = \"http://thomas.ariadne.at\";\n// Define a class representing a single project\nvar Project = /** @class */ (function () {\n    function Project(name, technics, description_short, description_detail, image, link) {\n        this.name = name;\n        this.technics = technics;\n        this.description_short = description_short;\n        this.description_detail = description_detail;\n        this.image = image;\n        this.link = link;\n        this.image = \"./images/\".concat(image);\n        this.link = \"\".concat(extLink, \"/\").concat(link);\n    }\n    // Automatically push the projects to the array \n    Project.addProject = function (project) {\n        Project.allProjects.push(project);\n    };\n    // Create the project card\n    Project.createProjectCard = function (project) {\n        return \"\\n      <div class=\\\"col-lg-4\\\">\\n        <div class=\\\"card\\\">\\n          <a href=\\\"\".concat(project.link, \"\\\" target=\\\"content\\\" rel=\\\"noopener noreferrer\\\" title=\\\"Click to open the page in the IFrame below\\\">\\n            <div class=\\\"face front-face\\\">\\n              <img src=\\\"\").concat(project.image, \"\\\" alt=\\\"\\\" class=\\\"profile\\\">\\n              <div class=\\\"pt-3 text-uppercase name\\\">\").concat(project.name, \"</div>\\n              <div class=\\\"technics\\\">\").concat(project.technics, \"</div>\\n            </div>\\n            <div class=\\\"face back-face\\\">\\n              <strong>\").concat(project.description_short, \"</strong><br>\").concat(project.description_detail, \"\\n            </div>\\n          </a>\\n        </div>\\n      </div>\");\n    };\n    // Create the project button\n    Project.createProjectButton = function (project) {\n        return \"\\n      <a class=\\\"btn btn-outline-dark text-secondary btn-floating m-1 btnShadow\\\" href=\\\"\".concat(project.link, \"\\\" role=\\\"button\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">\\n      \").concat(project.name, \"</a>\");\n    };\n    // Define an array to hold the projects\n    Project.allProjects = [];\n    return Project;\n}());\n\n// Fetch projects from JSON file\nfunction fetchProjects() {\n    return __awaiter(this, void 0, void 0, function () {\n        var response, projectsData, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 3, , 4]);\n                    return [4 /*yield*/, fetch('./js/projects.json')];\n                case 1:\n                    response = _a.sent();\n                    if (!response.ok) {\n                        throw new Error('Failed to fetch projects data');\n                    }\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    projectsData = _a.sent();\n                    projectsData.forEach(function (projectData) {\n                        var project = new Project(projectData.name, projectData.technics, projectData.description_short, projectData.description_detail, projectData.image, projectData.link);\n                        Project.addProject(project);\n                    });\n                    displayProjects();\n                    return [3 /*break*/, 4];\n                case 3:\n                    error_1 = _a.sent();\n                    console.error('Error fetching projects data:', error_1);\n                    alert('An error occurred while fetching the projects data. Please try again later.');\n                    return [3 /*break*/, 4];\n                case 4: return [2 /*return*/];\n            }\n        });\n    });\n}\n// Generate the web content\nfunction displayProjects() {\n    var resultcards = document.getElementById(\"ProjectCards\");\n    var resultbuttons = document.getElementById(\"ProjectButtons\");\n    if (!resultcards || !resultbuttons) {\n        console.error(\"The elements to display projects are not found.\");\n        return;\n    }\n    var cardsHtml = ''; // Collect all cards HTML\n    var buttonsHtml = ''; // Collect all buttons HTML\n    Project.allProjects.forEach(function (project) {\n        cardsHtml += Project.createProjectCard(project);\n        buttonsHtml += Project.createProjectButton(project);\n    });\n    resultcards.innerHTML = cardsHtml; // Assign all cards at once\n    resultbuttons.innerHTML = buttonsHtml; // Assign all buttons at once\n}\n// Fetch and display projects when the page loads\nwindow.onload = function () {\n    fetchProjects();\n};\n\n\n//# sourceURL=webpack:///./js/projects.ts?");

/***/ }),

/***/ "./js/skills.ts":
/*!**********************!*\
  !*** ./js/skills.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Skill: () => (/* binding */ Skill),\n/* harmony export */   displaySkills: () => (/* binding */ displaySkills),\n/* harmony export */   fetchSkills: () => (/* binding */ fetchSkills)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n// Define the place in the HTML document where the skills will be shown\nvar resultskills = document.getElementById(\"SkillsProgressCircles\");\n// Define the Skill class\nvar Skill = /** @class */ (function () {\n    function Skill(name, cssname, hardOrSoft, skillType) {\n        this.name = name;\n        this.cssname = cssname;\n        this.hardOrSoft = hardOrSoft;\n        this.skillType = skillType;\n    }\n    // Automatically push the skills to the array \n    Skill.addSkill = function (skill) {\n        Skill.allSkills.push(skill);\n    };\n    // Filter the skills by type (frontend, backend, soft skills)\n    Skill.getSkillsByType = function (type) {\n        return Skill.allSkills.filter(function (skill) { return skill.skillType === type; });\n    };\n    // Create the Skill Group Head depending on the SkillType \n    Skill.createSkillGroupHead = function (skillType) {\n        return \"<h3 class=\\\"bg-dark text-success w-100 text-center\\\"><strong>\".concat(skillType, \"</strong></h3>\");\n    };\n    // Create the skill progress circle\n    Skill.createSkillCircle = function (skill) {\n        return \"\\n      <div class=\\\"progressbar mx-auto\\\">\\n        <svg class=\\\"progressbar__svg\\\">\\n          <circle cx=\\\"80\\\" cy=\\\"80\\\" r=\\\"70\\\" class=\\\"progressbar__svg-circle circle-\".concat(skill.cssname, \" shadow-\").concat(skill.cssname, \"\\\"></circle>\\n        </svg>\\n        <span class=\\\"progressbar__text shadow-\").concat(skill.cssname, \"\\\">\").concat(skill.name, \"</span>\\n      </div>\\n    \");\n    };\n    // Define an array to hold the skills\n    Skill.allSkills = [];\n    return Skill;\n}());\n\n// Fetch skills from JSON file\nfunction fetchSkills() {\n    return __awaiter(this, void 0, void 0, function () {\n        var response, skillsData, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 3, , 4]);\n                    return [4 /*yield*/, fetch('./js/skills.json')];\n                case 1:\n                    response = _a.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Failed to fetch skills data: \".concat(response.statusText));\n                    }\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    skillsData = _a.sent();\n                    skillsData.forEach(function (skillData) {\n                        var skill = new Skill(skillData.name, skillData.cssname, skillData.hardOrSoft, skillData.skillType);\n                        Skill.addSkill(skill);\n                    });\n                    displaySkills();\n                    return [3 /*break*/, 4];\n                case 3:\n                    error_1 = _a.sent();\n                    console.error('Error fetching skills:', error_1);\n                    alert('An error occurred while fetching the skills data. Please try again later.');\n                    return [3 /*break*/, 4];\n                case 4: return [2 /*return*/];\n            }\n        });\n    });\n}\n// Generate the web content\nfunction displaySkills() {\n    if (!resultskills) {\n        console.error(\"The element to display skills is not found.\");\n        return;\n    }\n    var skillHtml = [];\n    [\"FrontEnd WebDev Skill\", \"BackEnd WebDev Skill\", \"Softskill\"].forEach(function (type) {\n        var skillGroupHead = Skill.createSkillGroupHead(type);\n        skillHtml.push(skillGroupHead);\n        var filteredSkills = Skill.getSkillsByType(type);\n        filteredSkills.forEach(function (val) {\n            skillHtml.push(Skill.createSkillCircle(val));\n        });\n    });\n    resultskills.innerHTML = skillHtml.join('');\n}\n// Fetch and display skills when the page loads\nwindow.onload = function () {\n    fetchSkills();\n};\n\n\n//# sourceURL=webpack:///./js/skills.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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