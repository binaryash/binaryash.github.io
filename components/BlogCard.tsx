import React from 'react';
import { BlogPost } from '../types';

export const BlogCard: React.FC<{ post: BlogPost; onClick: (id: string) => void }> = ({ post, onClick }) => {
  return (
    <div 
      onClick={() => onClick(post.id)}
      className="group cursor-pointer py-6 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500 font-mono mb-1">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex gap-2 mt-2">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs text-neutral-400 dark:text-neutral-600">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};