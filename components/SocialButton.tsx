import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code, FileText } from 'lucide-react';
import { SocialLink } from '../types';

const IconMap: Record<string, React.FC<any>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  FileText
};

export const SocialButton: React.FC<{ social: SocialLink }> = ({ social }) => {
  const Icon = IconMap[social.icon] || ExternalLink;
  const isResume = social.platform === 'Resume';
  
  return (
    <a 
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 ${isResume ? 'px-4 py-2 rounded-full' : 'w-10 h-10 justify-center rounded-full'} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent hover:scale-105 transition-all duration-300`}
      aria-label={social.platform}
    >
      <Icon size={18} strokeWidth={1.5} />
      {isResume && <span className="text-sm font-medium">Resume</span>}
    </a>
  );
};