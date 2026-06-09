export const PERSONAL_INFO = {
  name: "Kodari Akhil",
  title: "UI/UX & Frontend Developer",
  email: "akhilkodari708@gmail.com",
  phone: "+91-9603537587",
  linkedin: "https://www.linkedin.com/in/kodari-akhil-5b625325a",
  summary: "I build fast, scalable, and type-safe digital experiences. Specializing in the React ecosystem (React.js, React Native, Next.js) and TypeScript, I take complete ownership of frontend architectures—from crafting user-facing web apps for international e-commerce to building cross-platform mobile solutions. I also have hands-on experience ensuring seamless frontend-to-backend integrations with robust systems like Spring Boot."
};

export const EXPERIENCE = [
  {
    id: 1,
    company: "Anasol Consultancy Services",
    role: "Associate Software Engineer (Frontend)",
    startDate: "May 26, 2025",
    endDate: "Present",
    location: "Hyderabad, India",
    points: [
      "Driving the frontend architecture for large-scale web and mobile applications using React.js and React Native.",
      "Working closely with backend teams for seamless Spring Boot integrations, ensuring data flows efficiently into dynamic, user-centric interfaces.",
      "Prioritizing code scalability and type safety across all company projects by enforcing strict TypeScript standards."
    ]
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "B.Tech, Computer Science & Engineering (AI & ML)",
    institution: "Vaagdevi College of Engineering",
    score: "7.6 CGPA",
    year: "2024"
  },
  {
    id: 2,
    degree: "Senior Secondary (MPC)",
    institution: "Narayana Junior College",
    score: "92.4%",
    year: "2020"
  },
  {
    id: 3,
    degree: "Class X (CBSE)",
    institution: "Ekashila High School",
    score: "82.4%",
    year: "2018"
  }
];

export const PROJECTS = [
  {
    id: 1,
    name: "Zufeto Web Application",
    status: "Active Project",
    link: "https://www.zufeto.in/",
    tech: ["React.js", "Tailwind CSS", "Razorpay"],
    problem: "International B2B and B2C e-commerce platforms require a unified, scalable interface with complex payment/shipment workflows.",
    built: "Engineered a comprehensive frontend architecture supporting nearest store location logic and a custom HTTP-based B2B chat system.",
    result: "Delivered a seamless shopping experience, successfully integrating Razorpay and Cash on Delivery (COD) workflows for efficient checkout."
  },
  {
    id: 2,
    name: "Ritual Elements",
    status: "Completed",
    link: "https://www.ritualelements.in",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OAuth"],
    problem: "Administrators and users needed a unified, secure platform with distinct access levels and a frictionless product browsing and checkout experience.",
    built: "A responsive e-commerce platform featuring role-based access control (RBAC), OAuth login, and dynamic online cart management workflows.",
    result: "Streamlined the purchasing funnel through direct 'buy now' flows and optimized deployment by successfully converting from SSR to a fully static export."
  },
  {
    id: 3,
    name: "JJR Organics",
    status: "Completed",
    link: "https://app.jjrorganics.com",
    tech: ["React Native", "TypeScript", "Web", "iOS", "Android"],
    problem: "The client required a consistent, high-performance application available across Web, Android, and iOS without maintaining three separate UI codebases.",
    built: "An end-to-end multi-platform application utilizing React Native and TypeScript for shared business logic, components, and custom StyleSheets.",
    result: "Achieved complete mobile responsiveness and type safety, successfully delivering a near-complete robust architecture ready for final client customizations."
  },
  {
    id: 4,
    name: "Techlife Chat",
    status: "Completed",
    link: "https://techlife.anasolconsultancyservices.com",
    tech: ["React.js", "React Native", "WebSockets"],
    problem: "The platform needed an intuitive, real-time communication module synchronized seamlessly across both web and mobile devices.",
    built: "A real-time chat module using WebSockets, supporting group/individual messaging and advanced interactions like pinning, forwarding, and replying.",
    result: "Ensured instant message synchronization and a smooth cross-platform user experience, enhancing overall platform engagement."
  }
];

export const SKILLS = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  frameworks: ["React.js", "React Native", "Next.js", "Tailwind CSS"],
  integrations: ["Spring Boot (Backend Integration)", "WebSockets", "REST APIs", "OAuth", "Razorpay"],
  tools: ["Git", "GitHub Actions", "VS Code", "Postman"]
};