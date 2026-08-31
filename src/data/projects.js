// Ecobin
import ecoimage1 from "../assets/projects/ecobin/img-1.png";
import ecoimage2 from "../assets/projects/ecobin/img-2.png";
import ecoimage3 from "../assets/projects/ecobin/img-3.png";
import ecoimage4 from "../assets/projects/ecobin/img-4.png";
import ecoimage5 from "../assets/projects/ecobin/img-5.png";
import ecoimage6 from "../assets/projects/ecobin/img-6.png";

//Simon-game
import simonimage1 from "../assets/projects/simon-game/img-1.png";
import simonimage2 from "../assets/projects/simon-game/img-2.png";
import simonimage3 from "../assets/projects/simon-game/img-3.png";
import simonimage4 from "../assets/projects/simon-game/img-3.png";

//Task-manager
import taskimage1 from "../assets/projects/task-manager/img-1.png";
import taskimage2 from "../assets/projects/task-manager/img-2.png";
import taskimage3 from "../assets/projects/task-manager/img-3.png";

//Number-guessing-game
import gameimage1 from "../assets/projects/number-guessing-game/img-1.png";

//Tic-tac-Toe
import tictaktoeimage1 from "../assets/projects/tic-tac-toe/img-1.png";


export const projects = [
  {
    title: "EcoBin - Smart Waste management platform",
    category: "MERN",
    image: ecoimage1,

    images: [ecoimage1, ecoimage2, ecoimage3, ecoimage4, ecoimage5, ecoimage6],
    shortDescription:
       "AI-powered waste management platform for smarter reporting, verification, worker assignment, and collection.",

    description:
      "EcoBin is a full-stack smart waste management platform built to streamline the waste collection process. Users can report waste by uploading images and location details, while Gemini AI helps verify the waste type and quantity. The platform enables admins to manage waste reports, assign tasks to workers, and monitor collection activities, while workers can view and complete their assigned tasks.",

    features: [
      "AI-powered waste type and quantity verification",
      "Waste reporting with image and location",
      "Automatic worker assignment based on availability and workload",
      "Admin dashboard for report and worker management",
      "Worker task tracking and collection management",
      "Cloudinary-based waste image storage",
      "Smart route planning for waste collection",
      "Real-time collection status and updates",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Gemini AI",
      "Cloudinary",
    ],

    github: "https://github.com/Shariq2004/EcoBin",
    live: "https://ecobin-platform.vercel.app/",
    duration: "3 Months",
  },

  {
    title: "Simon Game",
    category: "JavaScript",
    image: simonimage1,

    images: [simonimage1, simonimage2, simonimage3, simonimage4],

    shortDescription:
      "Interactive memory game that challenges players to repeat increasingly complex sequences of colors.",

    description:
      "Simon Game is an interactive browser-based memory game built with HTML, CSS, and JavaScript. Players must remember and repeat an increasingly longer sequence of colored buttons as they progress through each level. The game provides real-time feedback, tracks the current level, and resets the game when an incorrect sequence is entered.",

    features: [
      "Interactive color sequence gameplay",
      "Progressive level-based difficulty",
      "Real-time player input validation",
      "Current level and score tracking",
      "Game over and restart functionality",
      "Responsive and mobile-friendly interface",
      "Touch-friendly gameplay",
    ],

    tech: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/Shariq2004/Simon-Game",
    live: "https://simon-game-3.vercel.app/",
    duration: "1 Week",
  },

  {
    title: "React Task Manager",
    category: "React",
    image: taskimage1,

    images: [taskimage1, taskimage2, taskimage3],

    shortDescription:
      "Modern task management app for creating, tracking, and managing daily tasks with persistent local storage.",

    description:
      "React Task Manager is a modern and responsive task management application built with React and Tailwind CSS. Users can create, complete, and delete tasks while tracking total, completed, and remaining tasks through a visual progress indicator. Tasks are persisted using LocalStorage, ensuring that data remains available even after refreshing or reopening the application.",

    features: [
      "Create and manage daily tasks",
      "Mark tasks as completed or incomplete",
      "Delete existing tasks",
      "Track total, completed, and remaining tasks",
      "Visual task progress indicator",
      "Persistent data storage with LocalStorage",
      "Toast notifications for user actions",
      "Responsive design for mobile, tablet, and desktop",
      "Component-based React architecture",
    ],

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "LocalStorage",
      "React Hot Toast",
      "UUID",
    ],

    github: "https://github.com/Shariq2004/react-task-manager",
    live: "https://task-managerrr-app.netlify.app/",
    duration: "2 Weeks",
  },

  {
    title: "Number Guessing Game",
    category: "JavaScript",
    image: gameimage1,

    images: [gameimage1],

    shortDescription:
      "Interactive guessing game that challenges players to find a randomly generated number with real-time feedback.",

    description:
      "Number Guessing Game is an interactive browser-based game built with HTML, CSS, and JavaScript. The computer generates a random number, and players try to guess it using real-time hints indicating whether their guess is too high or too low. The game tracks attempts, maintains the best score, and allows players to restart with a newly generated number.",

    features: [
      "Random number generation for each game",
      "Real-time feedback for every guess",
      "High and low guess hints",
      "Attempt tracking",
      "Best score tracking",
      "Restart and new game functionality",
      "Responsive user interface",
      "Interactive gameplay experience",
    ],

    tech: ["HTML5", "CSS3", "JavaScript"],

    github: "https://github.com/Shariq2004/number-guessing-game",
    live: "https://number-guessing-gamenine-kappa.vercel.app/",
    duration: "1 Week",
  },

  {
    title: "Tic-Tac-Toe",
    category: "JavaScript",
    image: tictaktoeimage1,

    images: [tictaktoeimage1],

    shortDescription:
      "Interactive two-player Tic-Tac-Toe game with win detection, draw handling, and restart functionality.",

    description:
      "Tic-Tac-Toe is a simple two-player browser game built with HTML, CSS, and JavaScript. Players take turns placing X and O on a 3×3 grid, while the game automatically checks for winning combinations across rows, columns, and diagonals. It also detects draw conditions and provides a restart option for a new game.",

    features: [
      "Two-player X and O gameplay",
      "Automatic win detection",
      "Horizontal, vertical, and diagonal win checking",
      "Draw detection when the board is full",
      "Turn-based gameplay",
      "Restart and new game functionality",
      "Responsive game board",
      "Interactive user experience",
    ],

    tech: ["HTML5", "CSS3", "JavaScript"],

    github: "https://github.com/Shariq2004/Tic-Tac-Toe-game",
    live: "YOUR_LIVE_DEMO_URL",
    duration: "1 Week",
  },
];
