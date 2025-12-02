import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { config } from '../config';

export type ViewState = 'home' | 'projects' | 'blog' | 'about';

interface HeaderProps { 
  onNavigate: (view: ViewState) => void; 
  currentView: ViewState;
  isHome: boolean;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView, isHome, isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          onClick={() => onNavigate('home')}
          className="font-medium text-lg tracking-tight cursor-pointer hover:text-accent dark:hover:text-accent transition-colors select-none flex items-center gap-2 shrink-0"
        >
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <span className="hidden sm:block">{config.profile.name}</span>
        </div>
        <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          <button 
            onClick={() => onNavigate('home')}
            className={`transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${currentView === 'home' && isHome ? 'text-neutral-900 dark:text-neutral-100' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('projects')}
            className={`transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${currentView === 'projects' ? 'text-neutral-900 dark:text-neutral-100' : ''}`}
          >
            Work
          </button>
          <button 
            onClick={() => onNavigate('blog')}
            className={`transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${currentView === 'blog' ? 'text-neutral-900 dark:text-neutral-100' : ''}`}
          >
            Notes
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className={`transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${currentView === 'about' ? 'text-neutral-900 dark:text-neutral-100' : ''}`}
          >
            About
          </button>
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
};