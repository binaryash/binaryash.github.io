import React from 'react';
import { Project } from '../types';

export const ProjectCard: React.FC<{ project: Project; onClick: (id: string) => void }> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project.id)}
      className="group cursor-pointer flex flex-col gap-4"
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
        <img 
          src={project.coverImage} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500" />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">{project.date}</span>
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="pt-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-sm border border-neutral-100 dark:border-neutral-800">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};