export type Project = {
  title: string;
  techs: string[];
  link: string;
  desc?: string;
  isComingSoon?: boolean;
  githubLink?:string
};

const projects: Project[] = [
  {
    title: "College Management System",
    techs: ["django", "react.js", "python"],
    link: "https://college-frontend-liard.vercel.app/",
    githubLink: "https://github.com/binaryash/college-management-system",
    desc: "Full-stack college management platform built with Django backend and React frontend. Features student and faculty profiles, course and enrollment management, role-based access control, and responsive UI for administrative tasks and reporting.",
  },
  {
    title: "Real Time Chat Applicaton",
    techs: ["django", "django channels", "web sockets"],
    link: "https://github.com/binaryash/django-chat-app",
    githubLink: "https://github.com/binaryash/django-chat-app",
    desc: "Real-time chat application using Django Channels and WebSockets. Supports multiple chat rooms, live messaging, presence indicators, and message broadcasting with a scalable async architecture.",
  },
  {
    title: "Event Management Application - MERN Stack",
    techs: ["mongodb", "express.js", "react.js", "node.js"],
    link: "https://github.com/binaryash/event-management-application",
    githubLink: "https://github.com/binaryash/event-management-application",
    desc: "MERN-stack event management app for creating, listing and registering events. Includes user authentication, event CRUD, ticketing, search and filtering, and an interactive UI for organizers and attendees.",
  },
  {
    title: "RAG Project",
    techs: ["minilm", "gpt-2", "faiss"],
    link: "https://github.com/binaryash/ml/blob/main/unnamed/RAG_Project.ipynb",
    githubLink: "https://github.com/binaryash/ml/blob/main/unnamed/RAG_Project.ipynb",
    desc: "Retrieval-Augmented Generation pipeline combining MiniLM embeddings, FAISS vector store, and a GPT-2 model for context-aware text generation. Demonstrates document indexing, similarity search, and conditioned generation for improved responses.",
  },
  {
    title: "Movie Recommendation System",
    techs: ["neural networks", "hybrid filtering"],
    link: "https://github.com/binaryash/ml/blob/main/unnamed/movie_recommendation.ipynb",
    desc: "Hybrid movie recommender combining collaborative and content-based filtering with neural network models. Provides personalized recommendations, evaluation metrics, and examples of feature engineering on movie metadata.",
  },
  {
    title: "Invoice Generator",
    techs: ["react.js", "vite", "antdesign"],
    link: "https://invoice-generator-theta-one.vercel.app/",
    desc: "Clean, responsive invoice generator built with React, Vite and Ant Design. Create, edit and export invoices as PDF, manage client and item lists, and use templates for quick invoice creation.",
  },
  {
    title: "Asynchronous Task Manager",
    techs: ["celery", "redis", "django"],
    link: "https://github.com/binaryash/taskmanager",
    desc: "Django-based task manager utilizing Celery and Redis for background job processing. Includes task scheduling, progress tracking, retry policies, and dashboard views for monitoring asynchronous workflows.",
  },
  {
    title: "Shopify MERN App",
    techs: ["mongodb", "express.js", "react.js", "node.js"],
    link: "https://github.com/binaryash/shopify_product_showcase",
    desc: "MERN application showcasing Shopify-like product catalog functionality. Features product listings, search and filtering, product detail pages, and a modular backend for managing inventory and product data.",
  },
  {
    title: "Attendance Management Application",
    techs: ["django", "htmx"],
    link: "https://github.com/binaryash/attendance_calculator",
    isComingSoon: true,
    desc: "Coming soon: Lightweight attendance management tool using Django and HTMX for dynamic, server-driven interactions. Planned features include daily attendance logging, automatic calculations, exportable reports, and an easy-to-use interface.",
  },
];

export default projects;