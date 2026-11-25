export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  apis: string[];
  status: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Somemarkkinointi",
    category: "Web-sovellus",
    description:
      "Moderni verkkosovellus sosiaalisen median markkinoinnin hallintaan, sisällön suunnitteluun ja kampanjoiden toteutukseen.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Neon"],
    apis: ["Gemini API"],
    status: "Julkaistu",
    githubUrl: "https://github.com/Miskaab/Somemarkkinointi.git",
    liveUrl: "https://somemarkkinointi.vercel.app/",
  },
  {
    number: "02",
    name: "Chevrolet Marketplace",
    category: "Web-sovellus",
    description:
      "Chevrolet merkkisille autoille tehty nettikauppa.",
    technologies: ["JavaScript", "React", "Supabase", "Node.js", "Vite"],
    apis: ["Oma Backend REST API"],
    status: "Ei ole julkaistu",
    githubUrl: "https://github.com/Miskaab/chevrolet-marketplace.git",
    liveUrl: "",
  },
    {
    number: "03",
    name: "Treeni Ohjelma",
    category: "Web-sovellus",
    description:
      "Treenien lisäämiseen ja hallintaan tarkoitettu web-sovellus.",
    technologies: ["JavaScript", "React", "Supabase", "Node.js", "Vite"],
    apis: ["Oma Backend REST API", "Gemini API"],
    status: "Julkaistu (Ryhmätyö)",
    githubUrl: "https://github.com/Antonnbb/Treeni-ohjelma.git",
    liveUrl: "https://treeni-ohjelma.onrender.com/",
  },
];

export const skills: string[] = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React",
  "Svelte",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "Neon",
];