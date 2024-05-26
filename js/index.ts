import { fetchProjects } from './projects';
import { fetchSkills } from './skills';

window.onload = function (): void {
  fetchProjects();
  fetchSkills();
};
