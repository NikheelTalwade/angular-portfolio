
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/angular-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/angular-portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/angular-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/angular-portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/angular-portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/angular-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/angular-portfolio/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21303, hash: 'c23d05729a627b27871470338ffb3838195c48774f5d9c9e447d9cf44938c9a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17275, hash: '3e38efe2e2968003e58b9f4ba4f2ec2032b375b009e6f4c28f4c132124e191e5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
