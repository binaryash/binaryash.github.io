import React from 'react';
import { config } from '../config';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsView: React.FC<{ onProjectClick: (id: string) => void }> = ({ onProjectClick }) => {
  return (
    <div className="animate-in fade-in duration-700 py-12 md:py-20">
       <div className="flex items-center gap-4 mb-12">
        <h1 className="text-4xl font-serif font-medium text-neutral-900 dark:text-neutral-100">All Projects</h1>
        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {config.projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={onProjectClick} 
          />
        ))}
      </div>
    </div>
  );
};