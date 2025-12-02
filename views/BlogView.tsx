import React from 'react';
import { config } from '../config';
import { BlogCard } from '../components/BlogCard';

export const BlogView: React.FC<{ onPostClick: (id: string) => void }> = ({ onPostClick }) => {
  return (
    <div className="animate-in fade-in duration-700 py-12 md:py-20 max-w-2xl">
      <div className="flex items-center gap-4 mb-12">
        <h1 className="text-4xl font-serif font-medium text-neutral-900 dark:text-neutral-100">Notes</h1>
        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mt-2"></div>
      </div>
      <div className="flex flex-col">
        {config.blog.map(post => (
          <BlogCard 
            key={post.id} 
            post={post} 
            onClick={onPostClick} 
          />
        ))}
      </div>
    </div>
  );
};