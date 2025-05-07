// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Eli-Fig', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Eli-Fig/Microbiome-Assignment', 'Eli-Fig/Genome-Assembly-and-Annotation-Section-Report'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Prehistoric Planet Episode 1 Analysis Presentation',
          description:
            'This presentation looks at how far our knowledge of prehistoric organisms has evolved by looking at the documentary Prehistoric Planet. It dives into the science of prehistoric creatures such as the tuarangisaurus and the t-rex.',
          imageUrl:
            'https://github.com/Eli-Fig/Eli-Fig.github.io/raw/main/Screenshot%20(163).png',
          link: 'https://github.com/Eli-Fig/Eli-Fig.github.io/raw/main/Prehistoric%20Planet%20(2)_compressed.pdf',
        },
        {
          title: 'Yersinia pestis Disease Paper',
          description:
            'This paper takes an expansive look at the bacteria Yersinia pestis including that it causes plague.',
          imageUrl:
            'https://github.com/Eli-Fig/Eli-Fig.github.io/raw/main/Screenshot%20(164).png',
          link: 'https://github.com/Eli-Fig/Eli-Fig.github.io/raw/main/Disease%20Paper%20-%20Yersinia%20pestis%20-%20Final%20(1).pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Figueiredo Projects',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    instagram: '@bsa_csustan',
    phone: '',
    email: 'efigueiredo@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/Eli-Fig/Eli-Fig.github.io/raw/main/Eli%20Fig%20CV%20Final%20(1).pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SPAdes',
    'Abyss',
    'Ubuntu',
    'R',
    'R Studio',
    'Image J',
    'Prokka',
    'Qiime',
    'Git',
    'Dfast',
    'RAST',
    'Blast',
    'barrnap',
    'QUAST',
  ],
  experiences: [
    {
      company: 'CSU Stanislaus Career Center',
      position: 'Lead Student Assistant',
      from: 'September 2021',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Undergraduate Research, Dr. Jeffrey Scales, CSU Stanislaus',
      position: 'Student Researcher',
      from: 'January 2024',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'CSU Stanislaus',
      degree: 'BS Biological Sciences',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Genome Sequence of Maricaulis maris DSM 4734 Isolated from Filtered Polluted Seawater ',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcement',
      authors: 'Chioma Chibuko, Elias Figueiredo, Sebastian Lepe, Melanie Rivera, Joseph Sada, Tricia A. Van Laar',
      link: 'https://github.com/Eli-Fig/Eli-Fig.github.io/raw/main/MRA_template_prokaryotic-eukaryotic_genome.pdf',
      description:
        'Here, we report the genome of Maricaulis maris DSM 4734 isolated from filtered polluted seawater. The whole genome was 3568848 bp long, with a GC content of 63.14%, and resistance to 12 antibiotics. This is a manuscript in submission. ',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Lemonade',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
