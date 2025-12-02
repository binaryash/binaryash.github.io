import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code } from 'lucide-react';
import { SocialLink } from '../types';

const IconMap: Record<string, React.FC<any>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code
};

export const SocialButton: React.FC<{ social: SocialLink }> = ({ social }) => {
  const Icon = IconMap[social.icon] || ExternalLink;
  return (
    <a 
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent hover:scale-105 transition-all duration-300"
      aria-label={social.platform}
    >
      <Icon size={18} strokeWidth={1.5} />
    </a>
  );
};