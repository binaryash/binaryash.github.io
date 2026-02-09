import { ArrowRight, Download } from 'lucide-react';
import { config } from '../config';
import { SocialButton } from '../components/SocialButton';
import { ProjectCard } from '../components/ProjectCard';
import { ViewState } from '../components/Header';

export const HomeView: React.FC<{ onNavigate: (view: ViewState) => void; onProjectClick: (id: string) => void }> = ({ onNavigate, onProjectClick }) => {
  const selectedProjects = config.projects.filter(project => project.featured).slice(0, 4);

  return (
    <div className="animate-in fade-in duration-700 space-y-24 py-12 md:py-20">
      {/* Short Hero */}
      <section className="space-y-8 max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-neutral-900 dark:text-neutral-100 leading-tight tracking-tight">
            {config.profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-light">
            {config.profile.title}
          </h2>
          <div className="pt-4">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              I architect, build, and deploy end-to-end intelligent systems. Specialized in Full-Stack, AI, and Embedded Engineering—from concept to production.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-3">
             {config.profile.socials.map(social => (
               <SocialButton key={social.platform} social={social} />
             ))}
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('projects')}
              className="w-fit flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-900 dark:border-neutral-100 pb-0.5 hover:text-accent hover:border-accent dark:hover:text-accent dark:hover:border-accent transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section>
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Selected Work</h2>
           <button 
              onClick={() => onNavigate('projects')}
              className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
           >
              All Projects
           </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {selectedProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={onProjectClick} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};