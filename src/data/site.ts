export const site = {
  name: 'Nittany Rover Team',
  target: '2027–28 academic year',
  applicationUrl: '',
  contactEmail: '',
  applicationsOpen: false,
  rulesYear: 2027,
  verified: 'September 24, 2026',
  urc: 'https://urc.marssociety.org/',
  rules: 'https://urc.marssociety.org/home/requirements-guidelines',
  rulesDownload: 'https://drive.google.com/uc?id=1rsKkkrWkLyB8JmJG5VgD8T7EQ4WewH5A&export=download',
  qa: 'https://urc.marssociety.org/home/requirements-guidelines/qa',
};
export const nav = [['', 'Home'], ['projects', 'Projects'], ['urc', 'URC'], ['our-team', 'The Team'], ['support', 'Support Us'], ['join', 'Join']];
export const href = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path ? path.replace(/^\/|\/$/g, '') + '/' : ''}`;
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
export const sources = {
  history: 'https://gantnews.com/2007/10/22/mars-society-at-penn-state-competes-in-university-rover-competitions/',
  naming: 'https://www.collectspace.com/ubb/Forum33/HTML/000481.html',
  namingNASA: 'https://www.jpl.nasa.gov/news/online-poll-for-nasas-mars-rover-naming-contest-opens-march-23/',
  curiosity: 'https://www.jpl.nasa.gov/news/nasa-selects-students-entry-as-new-mars-rover-name/',
  overview: 'https://urc.marssociety.org/home/about-urc',
  missions: 'https://urc.marssociety.org/home/urc-news',
  photo: 'https://www.marssociety.org/topics/rover-challenge/',
};
