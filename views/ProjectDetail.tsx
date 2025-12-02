import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import { MarkdownView } from '../components/MarkdownView';

export const ProjectDetail: React.FC<{ 
  project: Project; 
  onBack: () => void;
}> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-4xl font-serif font-medium text-neutral-900 dark:text-neutral-100">{project.title}</h1>
            <div className="flex gap-3">
              {project.links?.demo && (
                <a 
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-md text-sm font-medium hover:bg-accent dark:hover:bg-white hover:text-white transition-colors shadow-sm"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
              {project.links?.repo && (
                <a 
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-md text-sm font-medium hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
                >
                  Source <Github size={14} />
                </a>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400 font-mono">
            <span>{project.date}</span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            {project.tags.map(tag => (
              <span key={tag} className="text-neutral-600 dark:text-neutral-300">#{tag}</span>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
           <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto py-8">
          <MarkdownView content={project.markdownContent} />
        </div>
      </div>
      
      {/* Footer Navigation within Project */}
      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-center">
         <button 
            onClick={onBack}
            className="text-neutral-400 hover:text-accent transition-colors font-medium text-sm flex flex-col items-center gap-2"
          >
            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800">
               <ArrowLeft size={20} />
            </div>
            Back to List
         </button>
      </div>
    </div>
  );
};