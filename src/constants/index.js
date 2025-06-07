import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    cpp,
    vivaldi,
    unity,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "cpp",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
    title: "Frontend Developer (Project)",
    company_name: "Personal Portfolio Website",
    icon: react, // use a React logo or your custom icon
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Designed and developed a 3D interactive portfolio using React Three Fiber and Tailwind CSS.",
      "Implemented reusable components and responsive layouts for desktop and mobile.",
      "Deployed the website using Vite and GitHub Pages.",
    ],
    },
        {
        title: "MERN Stack Developer (Academic Project)",
        company_name: "ShareSphere Web App",
        icon: nodejs, // or use something related like MongoDB or a generic icon
        iconBg: "#D9E7FF",
        date: "Feb 2025 - April 2025",
        points: [
        "Built a full-stack file sharing platform using MERN stack and Firebase Authentication.",
        "Implemented GridFS file storage, credit-based download system, and file previews (PDF, audio, video).",
        "Collaborated with a small team and followed agile principles for weekly milestones.",
        ],
    },

        {
        title: "Contributor (Customization & Community Help)",
        company_name: "Vivaldi Browser",
        icon: vivaldi, // or a globe icon or something relevant
        iconBg: "#d1c4e9",
        date: "May 2025 - Present",
        points: [
            "Customized the Vivaldi browser using advanced CSS and JavaScript for features like auto-hide side panels and smooth UI transitions.",
            "Shared solutions and code snippets with the Vivaldi community to enhance browser productivity and appearance.",
            "Explored the Vivaldi application structure for DOM injection, theme overrides, and experimental settings.",
        ],
        },


      {
    title: "Python Libraries Workshop (NumPy, Pandas, etc.)",
    company_name: "IIT Hyderabad",
    icon: python, // keep your existing Python icon
    iconBg: "#ffeaa7",
    date: "Completed in March 2024",
    points: [
        "Participated in a 3-day hands-on workshop focused on essential Python libraries such as NumPy, Pandas, and Matplotlib.",
        "Learned practical data analysis techniques and scripting using real-world datasets.",
        "Improved foundational skills for data handling and automation using Python.",
    ],
}



];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    
    {
        iconUrl: unity, // Use a 3D/AR icon if available
        theme: 'btn-back-green',
        name: '3D AR Application',
        description: 'Developed an Augmented Reality (AR) application using Unity, blending digital content with the real world to create an interactive 3D experience.',
        link: '#', // Add GitHub or demo link if available
    },
    {
        iconUrl: react,
        theme: 'bg-blue-300',
        name: 'Sharesphere',
        description: 'Built a MERN stack-based collaborative platform enabling users to securely share files, manage credits, and preview content directly in-browser.',
        link: 'https://github.com/SumitBagate/ShareSphere', // Add actual GitHub or deployment link
    },

      {
    iconUrl: estate,
    theme: 'btn-back-green',
    name: 'ToDo App',
    description: 'Designed a responsive ToDo application with task creation, deletion to help users manage daily tasks effectively.',
    link: 'https://github.com/SumitBagate/ToDoBLOG', // Add GitHub/demo link
    },

     {
  iconUrl: vivaldi, // Or a browser icon if available
  theme: 'btn-back-orange',
  name: 'Vivaldi Browser UI Enhancement',
  description: 'Customized the Vivaldi browser using CSS and JavaScript to create a smooth auto-hide side panel that works seamlessly in fullscreen and windowed modes. Improved multitasking and user experience with a minimalist design approach.',
  link: 'https://forum.vivaldi.net/topic/108251/rounded-tabs-auto-hide-side-panel-in-vivaldi-custom-css-all-window-sizes-supported?_=1749271182758://github.com/your-username/vivaldi-custom-css', // Optional: Replace with actual repo or leave as '' if private
   }
     
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];