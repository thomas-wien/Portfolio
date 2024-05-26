import { fetchProjects } from './projects';
import { fetchSkills } from './skills';
window.onload = function () {
    fetchProjects();
    fetchSkills();
};
