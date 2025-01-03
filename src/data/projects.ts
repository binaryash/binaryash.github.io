export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "College Management System",
    techs: ["django", "react.js", "python"],
    link: "https://college-frontend-liard.vercel.app/",
  },
  {
    title: "Real Time Chat Applicaton",
    techs: ["django", "django channels", "web sockets"],
    link: "https://github.com/binaryash/django-chat-app",
  },
  {
    title: "Event Management Application - MERN Stack",
    techs: ["mongodb", "express.js", "react.js", "node.js"],
    link: "https://github.com/binaryash/event-management-application",
  },
  {
    title: "RAG Project",
    techs: ["minilm", "gpt-2", "faiss"],
    link: "https://github.com/binaryash/ml/blob/main/unnamed/RAG_Project.ipynb",
  },
  {
    title: "Movie Recommendation System",
    techs: ["neural networks", "hybrid filtering"],
    link: "https://github.com/binaryash/ml/blob/main/unnamed/movie_recommendation.ipynb",
  },
  {
    title: "Invoice Generator",
    techs: ["react.js", "vite", "antdesign"],
    link: "https://invoice-generator-theta-one.vercel.app/",
  },
  {
    title: "Asynchronous Task Manager",
    techs: ["celery", "redis", "django"],
    link: "https://github.com/binaryash/taskmanager",
  },
  {
    title: "Shopify MERN App",
    techs: ["mongodb", "express.js", "react.js", "node.js"],
    link: "https://github.com/binaryash/shopify_product_showcase",
  },

  {
    title: "Attendance Management Application",
    techs: ["django", "htmx"],
    link: "https://github.com/binaryash/attendance_calculator",
    isComingSoon: true,
  },
];

export default projects;
