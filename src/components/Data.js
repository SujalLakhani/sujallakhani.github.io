const ListData = [
  {
    id: 1,
    liHref: "#home",
    liClass: "nav__link active-link",
    iClass: "uil uil-estate nav__icon",
    name: "Home",
  },
  {
    id: 2,
    liHref: "#about",
    liClass: "nav__link",
    iClass: "uil uil-user nav__icon",
    name: "About",
  },
  {
    id: 3,
    liHref: "#skills",
    liClass: "nav__link",
    iClass: "uil uil-file-alt nav__icon",
    name: "Skills",
  },
  {
    id: 4,
    liHref: "#services",
    liClass: "nav__link",
    iClass: "uil uil-briefcase-alt nav__icon",
    name: "Services",
  },
  {
    id: 5,
    liHref: "#projects",
    liClass: "nav__link",
    iClass: "uil uil-scenery nav__icon",
    name: "Projects",
  },
  {
    id: 6,
    liHref: "#contact",
    liClass: "nav__link",
    iClass: "uil uil-message nav__icon",
    name: "Contact",
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
    id: 3,
    link: "https://www.instagram.com/sujal_lakhani_01/",
    class: "uil uil-instagram",
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
    subtitle: "G. H. Patel College of Engineering & Technology - Anand",
    marks: "8.88 CGPI",
    duration: "2019 - 2023",
    rounder: "qualification__rounder",
    line: "qualification__line",
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    subtitle: "Sigma Education Network - Porbandar",
    marks: "80.61 %",
    duration: "2018 - 2019",
    rounder: "qualification__rounder",
    line: "qualification__line",
  },
  {
    id: 3,
    title: "Secondary Education",
    subtitle: "Sigma Education Network - Porbandar",
    marks: "86.66 %",
    duration: "2016 - 2017",
    rounder: "qualification__rounder",
  },
];

const LinkData = [
  {
    liid: 1,
    lihref: "#services",
    lidata: "Experience",
  },
  {
    liid: 2,
    lihref: "#projects",
    lidata: "Projects",
  },
  // {
  //   liid: 3,
  //   lihref: "#contact",
  //   lidata: "ContactMe",
  // },
];

const ProjectData = [
  {
    id: 1,
    title: "Stylish - a clothing site",
    desc: "It is a shopping site for clothes in which user can buy product, with complete transaction process. Currently I am working on this project.",
    src: require("../assets/img/project_1.webp"),
    href: "https://github.com/SujalLakhani/E-Commerce",
  },
  {
    id: 2,
    title: "Ethereum Wallet",
    desc: "It is an android app which can transfer test Ethereum from one account to another account and also shows the updated balance of user account.",
    src: require("../assets/img/project_2.webp"),
    href: "https://github.com/SujalLakhani/Ethereum-Wallet",
  },
  {
    id: 3,
    title: "Loan Status Predictor",
    desc: "It is a Machine Learning project which predicts that person is aligible to get the loan or not based the information given by the user.",
    src: require("../assets/img/project_3.webp"),
    href: "https://github.com/SujalLakhani/Loan-Status-Predictor",
  },
];

const DomainData = [
  {
    id: 1,
    title: "Frontend developer",
    subtitle: "Decent level of Frontend development expertise.",
    class: "uil uil-brackets-curly skills__icon",
    dataset: [
      {
        id: 1,
        name: "HTML",
        num: "90%",
        class: "skills__percentage skills__html",
      },
      {
        id: 2,
        name: "CSS",
        num: "80%",
        class: "skills__percentage skills__css",
      },
      {
        id: 3,
        name: "JavaScript",
        num: "80%",
        class: "skills__percentage skills__js",
      },
      {
        id: 4,
        name: "React.js",
        num: "70%",
        class: "skills__percentage skills__react",
      },
      {
        id: 5,
        name: "Angular",
        num: "90%",
        class: "skills__percentage skills__angular",
      },
    ],
  },
  {
    id: 2,
    title: "Backend developer",
    subtitle:
      "Wide range of experience in Backend development and Database Management System.",
    class: "uil uil-server skills__icon",
    dataset: [
      {
        id: 1,
        name: "Node.js",
        num: "70%",
        class: "skills__percentage skills__node",
      },
      {
        id: 2,
        name: "Express.js",
        num: "70%",
        class: "skills__percentage skills__express",
      },
      {
        id: 3,
        name: "MongoDB",
        num: "60%",
        class: "skills__percentage skills__mongodb",
      },
      {
        id: 4,
        name: "SQL",
        num: "60",
        class: "skills__percentage skills__sql",
      },
      {
        id: 5,
        name: "Firebase",
        num: "60%",
        class: "skills__percentage skills__firebase",
      },
    ],
  },
  {
    id: 3,
    title: "Mobile App developer",
    subtitle:
      "Extensive experience in Android Native App and Cross Platform App development.",
    class: "uil uil-mobile-android skills__icon",
    dataset: [
      {
        id: 1,
        name: "Java for Android",
        num: "90%",
        class: "skills__percentage skills__java",
      },
      {
        id: 2,
        name: "Android Studio",
        num: "80%",
        class: "skills__percentage skills__android__studio",
      },
      {
        id: 3,
        name: "React Native",
        num: "60%",
        class: "skills__percentage skills__react__native",
      },
    ],
  },
  {
    id: 4,
    title: "Competitive Coding",
    subtitle:
      "More than 200+ problems solved using different languages. also participated in different competitive coding contest.",
    class: "uil uil-desktop skills__icon",
    dataset: [
      {
        id: 1,
        name: "Core Java",
        num: "90%",
        class: "skills__percentage skills__java",
      },
      {
        id: 2,
        name: "Python",
        num: "70%",
        class: "skills__percentage skills__python",
      },
      {
        id: 3,
        name: "C/C++",
        num: "70%",
        class: "skills__percentage skills__cpp",
      },
    ],
  },
];

const ServicesData = [
  {
    id: 3,
    name: "Rapidops Inc.",
    position: "Jr. Software Engineer",
    duration: "08/2023 - Present",
    data: [
      {
        id: 1,
        line: "Currently I am working as a Front-end developer specialized in Angular, my current focus lies within the Salesmate CRM, an ongoing project operated by Rapidops Inc.",
      },
      {
        id: 2,
        line: "As a Jr. Software Developer, my primary responsibility involves the identification and resolution of existing bugs within the Salesmate CRM. This role emphasizes ensuring the platform's smooth and efficient operation.",
      },
      {
        id: 3,
        line: "Furthermore, I actively contribute to the enhancement of Salesmate CRM by developing new components or features. This aspect of my work aims to continually improve and innovate the functionalities offered within the platform.",
      },
    ],
  },
  {
    id: 2,
    name: "Rapidops Inc.",
    position: "Software Engineer Intern",
    duration: "02/2023 - 08/2023",
    data: [
      {
        id: 1,
        line: "Throughout this internship, I acquired comprehensive knowledge spanning various technologies such as Angular, TypeScript, JavaScript, Git/GitHub, and several others. This learning process provided me with a broad understanding of diverse tech tools and frameworks.",
      },
      {
        id: 2,
        line: "Applying the acquired knowledge, I successfully utilized these technologies in the creation of several small-scale projects. This practical application allowed me to gain hands-on experience and deepen my understanding of their functionalities.",
      },
      {
        id: 3,
        line: "As a Software Engineer Intern, I actively contributed to the Salesmate CRM, a live project managed by Rapidops Inc. This involvement included developing essential components and effectively resolving existing bugs, thereby directly impacting the project's advancement and functionality.",
      },
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

module.exports = {
  ListData,
  SocialData,
  EduData,
  LinkData,
  ProjectData,
  DomainData,
  ServicesData,
};
