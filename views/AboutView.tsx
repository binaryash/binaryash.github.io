import React from 'react';
import { Mail, Download } from 'lucide-react';
import { config } from '../config';
import { SocialButton } from '../components/SocialButton';
import { MarkdownContent } from '../components/MarkdownContent';

export const AboutView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 py-12 md:py-20 max-w-2xl">
      <h1 className="text-4xl font-serif font-medium text-neutral-900 dark:text-neutral-100 mb-8">About</h1>
      
      <div className="prose prose-lg prose-neutral dark:prose-invert text-neutral-500 dark:text-neutral-400 leading-relaxed mb-12">
        <MarkdownContent contentFile={config.profile.bioFile} />
      </div>

      <div className="mb-12">
        <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wider">Skills & Tools</h3>
        <div className="flex flex-wrap gap-2">
            {config.profile.skills.map(skill => (
                <span key={skill} className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-sm border border-neutral-100 dark:border-neutral-800">
                    {skill}
                </span>
            ))}
        </div>
      </div>
      
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
        <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wider">Connect</h3>
        <div className="flex gap-4">
          {config.profile.socials.map(social => (
            <SocialButton key={social.platform} social={social} />
          ))}
          <a 
            href={`mailto:${config.profile.email}`}
            className="p-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent hover:scale-105 transition-all duration-300"
            title="Send Email"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
};