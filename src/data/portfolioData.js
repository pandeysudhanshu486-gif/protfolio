import { personalData } from './personal';
import { skillsData } from './skills';
import { projectsData, projectCategories } from './projects';
import { experienceData } from './experience';
import { educationData } from './education';
import { achievementsData } from './achievements';
import { certificationsData } from './certifications';
import { codingProfilesData } from './profiles';
import { researchData } from './research';
import { servicesData } from './services';

export {
  personalData,
  skillsData,
  projectsData,
  projectCategories,
  experienceData,
  educationData,
  achievementsData,
  certificationsData,
  codingProfilesData,
  researchData,
  servicesData
};

const portfolioData = {
  personal: personalData,
  skills: skillsData,
  projects: projectsData,
  categories: projectCategories,
  experience: experienceData,
  education: educationData,
  achievements: achievementsData,
  certifications: certificationsData,
  profiles: codingProfilesData,
  research: researchData,
  services: servicesData
};

export default portfolioData;
