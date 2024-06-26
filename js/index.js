"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projects_1 = require("./projects");
const skills_1 = require("./skills");
window.onload = function () {
    (0, projects_1.fetchProjects)();
    (0, skills_1.fetchSkills)();
};
