import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../types';
import { MarkdownView } from '../components/MarkdownView';

export const BlogPostDetail: React.FC<{ 
  post: BlogPost; 
  onBack: () => void;
}> = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Notes
      </button>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
           <div className="flex flex-wrap gap-4 text-sm text-neutral-400 dark:text-neutral-500 font-mono mb-2">
            <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
          </div>
          <h1 className="text-4xl font-serif font-medium text-neutral-900 dark:text-neutral-100 leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="py-4">
          <MarkdownView content={post.markdownContent} />
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-center">
         <button 
            onClick={onBack}
            className="text-neutral-400 hover:text-accent transition-colors font-medium text-sm flex flex-col items-center gap-2"
          >
            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800">
               <ArrowLeft size={20} />
            </div>
            Back to Notes
         </button>
      </div>
    </div>
  );
};