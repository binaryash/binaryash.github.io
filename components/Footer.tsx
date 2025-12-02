import React from 'react';
import { config } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
        <p>© {new Date().getFullYear()} {config.profile.name}. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with React
          <span className="w-2 h-2 rounded-full bg-accent inline-block ml-1"></span>
        </p>
      </div>
    </footer>
  );
};