import React, { useState, useEffect } from 'react';
import { config } from './config';
import { Header, ViewState } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ProjectsView } from './views/ProjectsView';
import { BlogView } from './views/BlogView';
import { AboutView } from './views/AboutView';
import { ProjectDetail } from './views/ProjectDetail';
import { BlogPostDetail } from './views/BlogPostDetail';

const App: React.FC = () => {
  // Theme State
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Navigation State
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Theme Side Effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const activeProject = selectedProjectId 
    ? config.projects.find(p => p.id === selectedProjectId) 
    : null;

  const activePost = selectedPostId
    ? config.blog.find(p => p.id === selectedPostId)
    : null;

  const handleNavigate = (view: ViewState) => {
    setSelectedProjectId(null);
    setSelectedPostId(null);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
  };

  const handlePostClick = (id: string) => {
    setSelectedPostId(id);
  };

  // Derived state to determine what to render
  const renderContent = () => {
    if (activeProject) {
      return (
        <ProjectDetail 
          project={activeProject} 
          onBack={() => {
            setSelectedProjectId(null);
            if (currentView === 'home' || currentView === 'about') setCurrentView('projects');
          }}
        />
      );
    }

    if (activePost) {
      return (
        <BlogPostDetail 
          post={activePost} 
          onBack={() => {
            setSelectedPostId(null);
            setCurrentView('blog');
          }}
        />
      );
    }

    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} onProjectClick={handleProjectClick} />;
      case 'projects':
        return <ProjectsView onProjectClick={handleProjectClick} />;
      case 'blog':
        return <BlogView onPostClick={handlePostClick} />;
      case 'about':
        return <AboutView />;
      default:
        return <HomeView onNavigate={handleNavigate} onProjectClick={handleProjectClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      <Header 
        onNavigate={handleNavigate} 
        currentView={currentView}
        isHome={!activeProject && !activePost} 
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      
      <main className="max-w-4xl mx-auto px-6 pt-16">
        {renderContent()}
        {!activeProject && !activePost && <Footer />}
      </main>
    </div>
  );
};

export default App;