import { SiteConfig } from "./types";

export const config: SiteConfig = {
  profile: {
    name: "Binary Ash",
    title: "Full-Stack Developer & Data Scientist",
    avatar: "/image.png",
    email: "binaryash@hotmail.com",
    bio: `
Hi, I'm a full-stack web developer specializing in **Django**. I also have expertise in the **MERN stack**, **FastAPI**, **Machine Learning** and **Data Analysis**.

I focus on delivering high-quality, user-centric solutions that meet business goals and enhance user experience. My work spans web development, data science, machine learning, graphic design, and embedded systems.

When I'm not optimizing web apps, you can find me tackling pointers and memory leaks in **C++** —because low-level control has its own thrill.
    `,
    skills: [
      "Python",
      "Django",
      "React.js",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "Machine Learning",
      "C++",
      "Data Analysis",
      "Web Sockets",
      "Redis",
      "Express.js",
    ],
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/binaryash",
        icon: "Github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/ash-c-7b3113291",
        icon: "Linkedin",
      },
    ],
  },
  projects: [
    {
      id: "college-management-system",
      title: "College Management System",
      shortDescription:
        "Full-stack college management platform with Django backend and React frontend.",
      coverImage: "https://picsum.photos/800/600?random=1",
      date: "2024",
      featured: true,
      tags: ["Django", "React.js", "Python"],
      markdownContent: `
## Overview

A comprehensive college management platform built with Django backend and React frontend. This system streamlines administrative tasks and provides an intuitive interface for managing academic operations.

### Key Features

*   **Student & Faculty Profiles**: Complete profile management with role-based access.
*   **Course Management**: Create, update, and manage courses and enrollments.
*   **Access Control**: Robust role-based permissions for administrators, faculty, and students.
*   **Responsive UI**: Modern interface optimized for desktop and mobile devices.

### Technical Stack

Built using modern technologies focused on scalability and performance:

*   Backend: Django, Django REST Framework, Python
*   Frontend: React.js, Modern JavaScript
*   Database: PostgreSQL/SQLite
*   Authentication: JWT-based auth system

### Implementation Highlights

The system features a RESTful API architecture that separates concerns between frontend and backend. Implemented comprehensive validation and error handling to ensure data integrity across all operations.
      `,
      links: {
        demo: "https://college-frontend-liard.vercel.app/",
        repo: "https://github.com/binaryash/college-management-system",
      },
    },
    {
      id: "realtime-chat-app",
      title: "Real-Time Chat Application",
      shortDescription:
        "Real-time chat application using Django Channels and WebSockets.",
      coverImage: "https://picsum.photos/800/600?random=2",
      date: "2024",
      featured: true,
      tags: ["Django", "Django Channels", "WebSockets"],
      markdownContent: `
## The Concept

A modern real-time chat application leveraging Django Channels and WebSockets for instant messaging capabilities. Designed for scalability and low latency communication.

### Core Features

1.  **Multiple Chat Rooms**: Support for numerous concurrent chat rooms.
2.  **Live Messaging**: Instant message delivery using WebSocket connections.
3.  **Presence Indicators**: Real-time user online/offline status.
4.  **Message Broadcasting**: Efficient message distribution to all room participants.

### Technical Architecture

Built on Django Channels with Redis as the channel layer backend. The async architecture ensures optimal performance even under high load.

> "Real-time communication requires a fundamental shift in how we think about web applications."

### Challenges Overcome

Implementing connection management and ensuring message delivery reliability across disconnections were key challenges solved through careful state management and reconnection strategies.
      `,
      links: {
        repo: "https://github.com/binaryash/django-chat-app",
      },
    },
    {
      id: "event-management-mern",
      title: "Event Management Application",
      shortDescription:
        "MERN-stack event management app for creating and managing events.",
      coverImage: "https://picsum.photos/800/600?random=3",
      date: "2023",
      featured: true,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      markdownContent: `
## Project Overview

Full-featured event management platform built with the MERN stack. Enables organizers to create events and attendees to discover and register for events.

### Key Capabilities

*   **Event CRUD**: Complete create, read, update, delete operations for events.
*   **User Authentication**: Secure login and registration system.
*   **Ticketing System**: Integrated event registration and ticketing.
*   **Search & Filter**: Advanced search functionality with multiple filter options.

### Implementation Details

The application uses JWT for authentication, MongoDB for flexible data storage, and React for a responsive, interactive user interface. Express.js handles the RESTful API endpoints efficiently.

### User Experience

Designed with both event organizers and attendees in mind, providing intuitive interfaces for creating events and browsing upcoming opportunities.
      `,
      links: {
        repo: "https://github.com/binaryash/event-management-application",
      },
    },
    {
      id: "rag-project",
      title: "RAG Project",
      shortDescription:
        "Retrieval-Augmented Generation pipeline with MiniLM and GPT-2.",
      coverImage: "https://picsum.photos/800/600?random=4",
      date: "2023",
      featured: false,
      tags: ["MiniLM", "GPT-2", "FAISS"],
      markdownContent: `
## Retrieval-Augmented Generation

An advanced RAG pipeline combining MiniLM embeddings, FAISS vector store, and GPT-2 for context-aware text generation.

### Components

1.  **MiniLM Embeddings**: Efficient semantic text embeddings for document indexing.
2.  **FAISS Vector Store**: High-performance similarity search across large document collections.
3.  **GPT-2 Generation**: Context-conditioned text generation for improved responses.

### Workflow

Documents are indexed using MiniLM embeddings and stored in FAISS. User queries retrieve relevant context, which is then fed to GPT-2 for generating informed responses.

### Applications

This approach significantly improves response quality by grounding generation in retrieved factual information, reducing hallucinations common in pure language models.
      `,
      links: {
        repo: "https://github.com/binaryash/ml/blob/main/unnamed/RAG_Project.ipynb",
      },
    },
    {
      id: "movie-recommendation",
      title: "Movie Recommendation System",
      shortDescription:
        "Hybrid movie recommender with neural networks and collaborative filtering.",
      coverImage: "https://picsum.photos/800/600?random=5",
      date: "2023",
      featured: false,
      tags: ["Neural Networks", "Hybrid Filtering"],
      markdownContent: `
## Recommendation Engine

A sophisticated hybrid recommendation system combining collaborative filtering, content-based filtering, and neural network models for personalized movie suggestions.

### Approach

The system leverages user behavior data along with movie metadata to generate recommendations. Neural networks learn complex user-item interaction patterns.

### Features

*   **Hybrid Filtering**: Combines multiple recommendation strategies for better accuracy.
*   **Feature Engineering**: Extracts meaningful features from movie metadata.
*   **Evaluation Metrics**: Comprehensive performance assessment using standard metrics.

### Performance

The hybrid approach outperforms single-method systems by capturing both user preferences and content similarities.
      `,
      links: {
        repo: "https://github.com/binaryash/ml/blob/main/unnamed/movie_recommendation.ipynb",
      },
    },
    {
      id: "invoice-generator",
      title: "Invoice Generator",
      shortDescription:
        "Clean, responsive invoice generator built with React and Ant Design.",
      coverImage: "https://picsum.photos/800/600?random=6",
      date: "2023",
      featured: false,
      tags: ["React.js", "Vite", "Ant Design"],
      markdownContent: `
## Streamlined Invoicing

A modern, user-friendly invoice generation tool built with React, Vite, and Ant Design. Create professional invoices in minutes.

### Features

*   **PDF Export**: Generate and download invoices as PDF documents.
*   **Client Management**: Maintain a database of clients and their information.
*   **Item Lists**: Reusable item catalog for quick invoice creation.
*   **Templates**: Pre-configured templates for common invoice types.

### Design Philosophy

Focus on simplicity and speed. The interface guides users through invoice creation with minimal clicks while maintaining professional output quality.
      `,
      links: {
        demo: "https://invoice-generator-theta-one.vercel.app/",
      },
    },
    {
      id: "async-task-manager",
      title: "Asynchronous Task Manager",
      shortDescription:
        "Django-based task manager with Celery and Redis for background processing.",
      coverImage: "https://picsum.photos/800/600?random=7",
      date: "2022",
      featured: false,
      tags: ["Celery", "Redis", "Django"],
      markdownContent: `
## Background Job Processing

A robust asynchronous task management system utilizing Django, Celery, and Redis for handling background jobs efficiently.

### Capabilities

*   **Task Scheduling**: Schedule tasks for future execution.
*   **Progress Tracking**: Monitor task execution status in real-time.
*   **Retry Policies**: Automatic retry with configurable backoff strategies.
*   **Dashboard**: Web interface for monitoring and managing tasks.

### Architecture

Celery workers process tasks asynchronously while Redis serves as the message broker. Django provides the web interface and task definition framework.

### Use Cases

Perfect for handling time-consuming operations like email sending, report generation, data processing, and API integrations without blocking the main application.
      `,
      links: {
        repo: "https://github.com/binaryash/taskmanager",
      },
    },
    {
      id: "shopify-mern",
      title: "Shopify MERN App",
      shortDescription:
        "MERN application showcasing Shopify-like product catalog functionality.",
      coverImage: "https://picsum.photos/800/600?random=8",
      date: "2022",
      featured: false,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      markdownContent: `
## E-Commerce Platform

A Shopify-inspired product showcase application demonstrating e-commerce functionality using the MERN stack.

### Features

*   **Product Catalog**: Browse and display product listings with details.
*   **Search & Filter**: Advanced product search with multiple filtering options.
*   **Product Details**: Comprehensive product pages with images and descriptions.
*   **Inventory Management**: Backend system for managing product data.

### Technical Implementation

Built with a modular architecture that separates concerns between product display, inventory management, and user interactions. MongoDB provides flexible schema for product data.
      `,
      links: {
        repo: "https://github.com/binaryash/shopify_product_showcase",
      },
    },
  ],
  blog: [
    {
      id: "web-development-journey",
      title: "My Journey Through Full-Stack Development",
      excerpt:
        "From Django to MERN: exploring different tech stacks and finding what works best.",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      tags: ["Web Development", "Django", "MERN"],
      markdownContent: `
## The Evolution of a Developer

Starting with Django introduced me to the power of batteries-included frameworks. The admin panel, ORM, and built-in authentication made rapid development possible.

### Why Django First?

Django's "don't repeat yourself" philosophy and comprehensive documentation made it an excellent starting point. The framework handles many common web development challenges out of the box.

### Expanding to MERN

Learning the MERN stack opened new possibilities for building modern, reactive applications. The JavaScript ecosystem's flexibility complements Django's structure beautifully.

> "The best developers aren't married to a single technology—they choose the right tool for each job."

### Key Takeaways

*   **Framework Agnostic**: Understanding core concepts matters more than specific tools.
*   **Full-Stack Thinking**: Knowing both frontend and backend creates better solutions.
*   **Continuous Learning**: The tech landscape evolves; adaptability is essential.
      `,
    },
    {
      id: "machine-learning-web-dev",
      title: "Integrating Machine Learning into Web Applications",
      excerpt:
        "Practical approaches to bringing ML models from notebooks to production web apps.",
      date: "Oct 28, 2024",
      readTime: "6 min read",
      tags: ["Machine Learning", "FastAPI", "Production"],
      markdownContent: `
## From Jupyter to Production

Building ML models in notebooks is one thing; deploying them in production web applications is another challenge entirely.

### The Deployment Gap

Many data scientists struggle with the transition from experimentation to deployment. FastAPI bridges this gap beautifully.

\`\`\`python
from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
async def predict(features: dict):
    prediction = model.predict([features])
    return {"prediction": prediction.tolist()}
\`\`\`

### Best Practices

1.  **Model Versioning**: Track model versions alongside code.
2.  **API Design**: Create intuitive endpoints for model inference.
3.  **Error Handling**: Gracefully handle invalid inputs and edge cases.
4.  **Performance**: Optimize inference time for production workloads.

### Tools and Technologies

FastAPI, Docker, and modern MLOps tools make deployment manageable. The key is planning for production from the start.
      `,
    },
    {
      id: "low-level-programming",
      title: "Why C++ Still Matters for Web Developers",
      excerpt:
        "Understanding memory management and performance optimization through low-level programming.",
      date: "Sep 22, 2024",
      readTime: "4 min read",
      tags: ["C++", "Performance", "Optimization"],
      markdownContent: `
## The Value of Low-Level Knowledge

Working with C++ and manual memory management provides insights that make you a better developer in any language.

### Understanding the Machine

High-level languages abstract away complexity, but understanding what happens underneath makes you write more efficient code.

### Performance Matters

When optimizing web applications, knowledge of memory allocation, cache efficiency, and algorithmic complexity becomes crucial.

> "Learning C++ is like learning to drive a manual transmission—it gives you better control and deeper understanding."

### Practical Applications

*   **Algorithm Design**: Better understanding of time and space complexity.
*   **Debugging**: Identifying memory leaks and performance bottlenecks.
*   **System Thinking**: Appreciating how high-level abstractions work under the hood.
      `,
    },
  ],
};
