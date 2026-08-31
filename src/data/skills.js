import { Code2, Server, Database, GitBranch } from "lucide-react";

export const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Creating responsive, interactive and modern user interfaces.",
    icon: Code2,
    skills: ["HTML5","CSS3","JavaScript (ES6+)","React.js","Tailwind CSS","Bootstrap"],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Building APIs and reliable server-side applications.",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs","Authentication","JWT",],
  },
  {
    number: "03",
    title: "Database",
    description: "Designing and managing application data efficiently.",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Managing code, assets and deployment workflows.",
    icon: GitBranch,
    skills: ["Git","GitHub","VS Code","Jira","Hoppscotch","Cloudinary","Vercel","Netlify"],
  },
];

export const mernStack = ["MongoDB", "Express", "React", "Node.js"];
