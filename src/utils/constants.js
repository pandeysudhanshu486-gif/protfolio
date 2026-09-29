export const OS_NAV_ITEMS = [
  { num: '01', label: 'Home', path: '/', id: 'home' },
  { num: '02', label: 'About', path: '/about', id: 'about' },
  { num: '03', label: 'Skills', path: '/skills', id: 'skills' },
  { num: '04', label: 'Projects', path: '/projects', id: 'projects' },
  { num: '05', label: 'Experience', path: '/experience', id: 'experience' },
  { num: '06', label: 'Achievements', path: '/achievements', id: 'achievements' },
  { num: '07', label: 'Education', path: '/education', id: 'education' },
  { num: '08', label: 'Coding', path: '/coding', id: 'coding' },
  { num: '09', label: 'Research', path: '/research', id: 'research' },
  { num: '10', label: 'Contact', path: '/contact', id: 'contact' },
];

export const NAV_ITEMS = OS_NAV_ITEMS;
export const SECTION_IDS = OS_NAV_ITEMS.map(item => item.id);
