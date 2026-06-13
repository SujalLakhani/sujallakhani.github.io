import project1 from "../assets/img/project_1.webp";
import project2 from "../assets/img/project_2.webp";
import project3 from "../assets/img/project_3.webp";

const ListData = [
  {
    id: 1,
    liHref: "#home",
    iClass: "uil uil-estate nav__icon",
    name: "Home",
  },
  {
    id: 2,
    liHref: "#about",
    iClass: "uil uil-user nav__icon",
    name: "About",
  },
  {
    id: 3,
    liHref: "#skills",
    iClass: "uil uil-file-alt nav__icon",
    name: "Skills",
  },
  {
    id: 4,
    liHref: "#services",
    iClass: "uil uil-briefcase-alt nav__icon",
    name: "Experience",
  },
  {
    id: 5,
    liHref: "#projects",
    iClass: "uil uil-scenery nav__icon",
    name: "Projects",
  },
];

const SocialData = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/sujal-lakhani-31473b1aa",
    class: "uil uil-linkedin-alt",
  },
  {
    id: 2,
    link: "https://github.com/SujalLakhani",
    class: "uil uil-github-alt",
  },
  {
    id: 4,
    link: "mailto:sujallakhani98@gmail.com",
    class: "uil uil-envelope-alt",
  }
];

const EduData = [
  {
    id: 1,
    title: "Information Technology",
    subtitle: "Gujarat Technological University - Ahmedabad",
    marks: "8.88 CGPI",
    duration: "2019 - 2023",
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    subtitle: "Sigma Education Network - Porbandar",
    marks: "80.61 %",
    duration: "2018 - 2019",
  },
  {
    id: 3,
    title: "Secondary Education",
    subtitle: "Sigma Education Network - Porbandar",
    marks: "86.66 %",
    duration: "2016 - 2017",
  },
];



const ProjectData = [
  {
    id: 1,
    title: "Stylish - a clothing site",
    desc: "It is a shopping site for clothes in which user can buy product, with complete transaction process. Currently I am working on this project.",
    src: project1,
    href: "https://github.com/SujalLakhani/E-Commerce",
    tags: ["React", "Node.js", "Express", "MongoDB", "CSS3"]
  },
  {
    id: 2,
    title: "Ethereum Wallet",
    desc: "It is an android app which can transfer test Ethereum from one account to another account and also shows the updated balance of user account.",
    src: project2,
    href: "https://github.com/SujalLakhani/Ethereum-Wallet",
    tags: ["Android", "Java", "SQLite", "XML"]
  },
  {
    id: 3,
    title: "Loan Status Predictor",
    desc: "It is a Machine Learning project which predicts that person is aligible to get the loan or not based the information given by the user.",
    src: project3,
    href: "https://github.com/SujalLakhani/Loan-Status-Predictor",
    tags: ["Python", "Flask", "Scikit-Learn", "Machine Learning"]
  },
];

const DomainData = [
  {
    id: 1,
    title: "Frontend developer",
    subtitle: "Decent level of Frontend development expertise.",
    dataset: [
      {
        id: 5,
        name: "Angular",
        num: "90"
      },
      {
        id: 4,
        name: "React.js",
        num: "90"
      },
      {
        id: 3,
        name: "JavaScript",
        num: "90"
      },
      {
        id: 6,
        name: "TypeScript",
        num: "90"
      },
      {
        id: 1,
        name: "HTML",
        num: "90"
      },
      {
        id: 2,
        name: "CSS",
        num: "80"
      },

    ],
  },
  {
    id: 2,
    title: "Backend developer",
    subtitle:
      "Wide range of experience in Backend development and Database Management System.",
    dataset: [
      {
        id: 1,
        name: "Node.js",
        num: "90"
      },
      {
        id: 2,
        name: "Express.js",
        num: "90"
      },
      {
        id: 3,
        name: "MongoDB",
        num: "80"
      },
      {
        id: 4,
        name: "Spring Boot",
        num: "80"
      },
      {
        id: 5,
        name: "MySQL",
        num: "80"
      },
      {
        id: 6,
        name: "PostgreSQL",
        num: "80"
      }
    ],
  },
  {
    id: 3,
    title: "Competitive Coding",
    subtitle:
      "More than 250+ problems solved using different languages. also participated in different competitive coding contest.",
    dataset: [
      {
        id: 3,
        name: "JavaScript",
        num: "90"
      },
      {
        id: 1,
        name: "Core Java",
        num: "80"
      },
      {
        id: 2,
        name: "Python",
        num: "70"
      }
    ],
  },
];

const ServicesData = [
  {
    id: 3,
    name: "Aerolens India Pvt. Ltd.",
    position: "Software Engineer",
    duration: "01/2026 - Present",
    data: [
      {
        id: 1,
        line: "Developing and enhancing features for a Global FinTech platform, delivering scalable and user-centric solutions."
      },
      {
        id: 2,
        line: "Leveraging Agentic AI to develop intelligent product features and streamline user workflows."
      },
      {
        id: 3,
        line: "Building and integrating Micro-Frontend modules to improve application scalability and maintainability."
      },
      {
        id: 4,
        line: "Designing and consuming GraphQL APIs for efficient data exchange and seamless frontend-backend communication."
      },
      {
        id: 5,
        line: "Working with React.js, Redux, Node.js, GraphQL, and MySQL in an Agile/Scrum development environment."
      }
    ]
  }
  ,
  {
    id: 2,
    name: "Rapidops Inc.",
    position: "Software Engineer",
    duration: "02/2023 - 12/2025",
    data: [
      {
        id: 1,
        line: "Developing and optimizing CRM features including Dashboard Filters, Reports, Goal Management, Real-time Chat, and Document/Email Template Builder, improving usability and performance. ",
      },
      {
        id: 2,
        line: "Enhanced product reliability by resolving bugs, managing feature enhancements, and implementing pipeline-level permissions for secure access. ",
      },
      {
        id: 3,
        line: "Implemented AI-driven features (Intent & Entity extraction, Smartflow dialogs) enabling intelligent automation.",
      },
      {
        id: 4,
        line: "Acquired comprehensive knowledge spanning Angular 2+, React.js, Node.js, Express.js, MongoDB, TypeScript, JavaScript, SQL, Git/GitHub, and Ubuntu, applying them to develop and innovate CRM functionalities.",
      },
      {
        id: 5,
        line: "Collaborated in an Agile/Scrum environment, improving delivery efficiency."
      }
    ],
  },
  {
    id: 1,
    name: "The Sparks Foundation",
    position: "Android Developer Intern",
    duration: "09/2021 - 10/2021",
    data: [
      {
        id: 1,
        line: "As an Android Developer Intern, I gained practical experience in utilizing essential technologies such as Android Studio, Java, and SQLite to create functional applications.",
      },
      {
        id: 2,
        line: "I successfully completed a project centered on a Basic Banking System Android App, wherein my task was to create functionality for money transfers between accounts leveraging SQLite database.",
      },
      {
        id: 3,
        line: "A significant aspect of my learning involved mastering the implementation of CRUD (Create, Read, Update, Delete) operations using the SQLite database within the Android Studio environment.",
      },
    ],
  },
];

export {
  ListData,
  SocialData,
  EduData,
  ProjectData,
  DomainData,
  ServicesData,
};
