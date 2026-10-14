import letdownImg from './../assets/letdownapp.png';
import bbvaImg from './../assets/bbva.png';
import aeromexicoImg from './../assets/aeromexico.png';
import zunohealth from './../assets/zunohealth.png';
import mcmtelecom from './../assets/mcmtelecom.png';

export const profile = {
  name: 'Luis David',
  lastName: 'Casanova',
  fullName: 'Luis David Casanova Chávez',
  location: 'CDMX, México | Santiago de Queretaro',
  roles: ['Fullstack / Frontend Developer', 'React Native Developer', 'Ingeniero en Sistemas'],
  summary:
    'Ingeniero en Sistemas Computacionales con más de 6 años construyendo aplicaciones web y móviles para banca y aviación. Me especializo en React Native, React, Node.js y Cells/Polymer.',
  about:
    'Soy egresado del Tecnológico de Huichapan como Ingeniero en Sistemas Computacionales. He trabajado en consultoría para clientes de los sectores bancario y de aviación, desarrollando interfaces de alto tráfico e integrándolas con servicios backend y soluciones en la nube. Me caracterizo por ser un profesional proactivo, analítico y orientado a resultados. Disfruto resolver problemas técnicos, aprender nuevas tecnologías y trabajar en equipo, aplicando buenas prácticas de desarrollo para construir soluciones eficientes, escalables y de calidad.',
  cvUrl: 'https://drive.google.com/file/d/1ITHJiJga9vUGnGEGF-rnYRJ-3z_RjOiq/view?usp=sharing',
  email: 'luisdcasanova1995@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luis-david-casanova-chavez-13b304195',
  github: 'https://github.com/DavidCacha/',
  available: true,
};

export const stats = [
  { value: 5, suffix: '+', label: 'años de experiencia' },
  { value: 3, label: 'consultoras' },
  { value: 2, label: 'industrias: banca y aviación' },
];

export const clients = ['BBVA', 'AEROMÉXICO', 'IDS COMERCIAL', 'TIBSMX', 'MCMTELECOM', 'COMPUSOF', 'SOFTTEK'];

export const experience = [
  {
    role: 'Frontend Mobile Developer',
    company: 'BBVA',
    via: 'Vía IDS Comercial',
    period: 'Feb 2026 — Sep 2026',
    current: true,
    description:
      'Desarrollador Frontend especializado en Cells participando en el desarrollo, mantenimiento y evolución de la aplicación de banca móvil de BBVA, trabajando sobre arquitectura Cells/Spherica y aplicaciones multiplataforma iOS y Android.',
    stack: ['Cells', 'Polymer', 'JavaScript', 'CSS', 'Web Components', 'APIs REST', 'Unit Tests', 'GIT', 'CI/CD', 'CleanCode'],
  },
  {
    role: 'Desarrollador Fullstack',
    company: 'Zuno Health',
    via: 'TibsMX',
    period: 'Oct 2025 — Feb 2026',
    description: 'ZunoAI es una plataforma tecnológica enfocada en el sector salud, desarrollada para facilitar y optimizar las consultas médicas mediante inteligencia artificial. El proyecto estaba basado en una arquitectura cloud, integrando soluciones web y móviles para mejorar la atención médica, automatizar procesos y facilitar la gestión de información clínica.',
    stack: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'NestJS',
      'AWS',
      'AWS S3',
      'SonarQube',
      'AWS RDS',
      'AWS Lambda',
      'OpenAI API',
      'PostgreSQL',
      'REST APIs',
      'Git',
      'CI/CD',
      'Docker',
      'Clean Code'
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Aeroméxico',
    via: 'Vía Softtek',
    period: 'Mar 2022 — Oct 2024',
    description: 'En mi rol como Desarrollador Frontend, participé activamente en el desarrollo y mantenimiento de la aplicación móvil de Aeroméxico para iOS y Android, así como del sitio web del cliente, utilizando tecnologías como React Native y ReactJS. La aplicación estaba orientada a facilitar la experiencia de viaje de los usuarios, permitiéndoles consultar y gestionar sus vuelos, realizar reservaciones, acceder a información de sus itinerarios y utilizar diversos servicios relacionados con sus viajes.',
    stack: [
      'React.js',
      'React Native',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Redux',
      'REST APIs',
      'Jest',
      'Unit Tests',
      'Jenkins',
      'SonarQube',
      'Bitrise',
      'Flipper',
      'React Native Debugger',
      'Android Studio',
      'Xcode',
      'Git',
      'GitLab',
      'CI/CD',
      'Scrum',
      'Jira',
      'Clean Code'
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'NotifyHub',
    via: 'Vía MCM Telecom',
    period: 'Sep 2016 — Mar 2019',
    description: 'Diseñé y desarrollé un sistema web interno de alertas masivas en PHP, complementando mis tareas de soporte y gestión de equipos de red para mitigar el impacto ante fallas operativas.',
    stack: [
      'PHP',
      'JavaScript',
      'HTML5',
      'CSS3',
      'MySQL',
      'phpMyAdmin',
      'REST APIs',
      'MCM Telecom',
      'Web Hosting',
      'Server Management',
      'Git'
    ],
  },
];

export const projects = [
  {
    id: 'bbva',
    category: 'movil',
    tag: 'BBVA · IDS Comercial',
    title: 'BBVA',
    description:
      'Desarrollo y mantenimiento de banca digital para iOS y Android, optimizando funcionalidades y flujos bancarios.',
    stack: ['Cells', 'Polymer', 'JavaScript', 'CSS', 'Web Components', 'APIs REST', 'Unit Tests', 'GIT', 'CI/CD', 'CleanCode'],
    image: bbvaImg,
    link: 'https://play.google.com/store/apps/details?id=com.bancomer.mbanking&hl=es_MX',
  },
  {
    id: 'letDown',
    category: 'movil',
    tag: 'Proyecto personal',
    title: 'LetDownApp',
    description:
      'App móvil de bienestar emocional desarrollada en React Native y backend en NestJS e integración AWS.',
    stack: ['React Native', 'Node.js', 'AWS Cognito', 'ECS', 'Docker', 'Spotify API', 'REST APIs',
      'Jenkins',
      'SonarQube'],
    image: letdownImg,
    link: 'https://drive.google.com/file/d/1hbn2Ug9wIje4pYl4loLj0xF1m4-ne5mR/view?usp=drive_link',
    repo: 'https://github.com/DavidCacha/LetDown-Frontend',
  },
  {
    id: 'aeromexico',
    category: 'movil',
    tag: 'Aeroméxico · Softtek',
    title: 'AEROMÉXICO',
    description: 'Desarrollo de aplicaciones móviles y web, para la gestión de vuelos, reservaciones y servicios digitales.',
    stack: ['React.js',
      'React Native',
      'JavaScript',
      'REST APIs',
      'SonarQube',
      'Bitrise',
      'Android Studio',
      'Xcode',
      'Scrum',
    ],
    image: aeromexicoImg,
    link: 'https://play.google.com/store/apps/details?id=com.aeromexico.aeromexico.app&hl=es_MX',
  },
  {
    id: 'NotifyHub',
    category: 'web',
    tag: 'NotifyHub · MCM Telecom',
    title: 'NotifyHub',
    description: 'Plataforma empresarial de notificaciones masivas que automatiza la comunicación, Comercializada por MCM Telecom.',
    stack: ['Desarrollo web', 'PHP',' MySQL', 'HTML5', 'CSS3', 'TWILIO', 'SERVEWR MCM'],
    image: mcmtelecom,
    link: 'https://www.google.com/url?sa=i&source=web&rct=j&url=https://www.mcmtechco.com/&ved=2ahUKEwjT_rGNm7iXAxWUnGoFHYZpGgAQ0YISegoIAggACAAIChAC&opi=89978449&cd&psig=AOvVaw3aXcXLeByv5prWi5BIlEcI&ust=1792022751207000',
  },
  {
    id: 'Zuno Health',
    category: 'web',
    tag: 'Zuno Health · TibsMX',
    title: 'ZUNO HEALTH',
    description: 'Plataforma webde consultas médicas impulsada por inteligencia artificial-',
    stack: ['React.js',
      'JavaScript',
      'Node.js',
      'NestJS',
      'AWS',
      'SonarQube',
      'OpenAI API',
      'PostgreSQL',
      'REST APIs',
      'Git',
      'CI/CD'],
    image: zunohealth,
    link: 'https://www.hizuno.com',
  },
  {
    id: 'MASTERAi',
    category: 'movil',
    tag: 'MASTERAi · Proyecto Personal',
    title: 'MASTERAi',
    description: 'Procimamente',
    stack: ['Proximamente'],
    image: null,
    link: '#',
  },
];

export const skills = [
  { group: 'Frontend Mobile/Web & Lenguajes', items: ['React', 'React Native', 'Cells / Polymer', 'JavaScript', 'TypeScript', 'C#', 'Dart', 'React Native', 'React.js', 'AngularJS', 'Cells', 'Polymer', 'Web Components', 'HTML5', 'CSS3', 'Sass', 
'Bootstrap', 'Redux', 'Zustand' ] },
  { group: 'Backend & APIs:', items: ['Node.js', 'NET Core', 'REST APIs', 'GraphQL', 'Node.js', 'APIs REST', 'OAuth 2.0', 'JWT'] },
  { group: 'DevOps & Control de versiones', items: ['AWS Cognito', 'Amazon ECS · ECR', 'Docker', 'Git', 'GitHub', 'GitLab', 'Jenkins', 'Artifactory', 'Bitrise','CI/CD', 'AWS Services'] },
  { group: 'Base de datos', items: ['MongoDB', 'MySQL', 'PostgreSQL']},
  { group: 'Testing & Herramienta de desarrollo', items: ['Jest',' Unit Testing', 'Postman', 'Xcode', 'CocoaPods', 'Flipper',' React Native Debugger', 'Bower', 'Cells CLI'] },
  { group: 'Integrationes', items: ['OpenAI API', 'Stripe (PaymentIntents, Checkout, Webhooks)', 'PayPal Checkot']},
  { group: 'Metodologias agiles', items: [ 'Scrum', 'Kanban']}
];

export const FORM_ENDPOINT = 'https://formspree.io/f/xwlvndak';
