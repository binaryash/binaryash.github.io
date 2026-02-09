import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewProps {
  content: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({ content }) => {
  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-normal prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-strong:font-medium prose-blockquote:border-l-accent prose-blockquote:bg-neutral-100 dark:prose-blockquote:bg-neutral-900 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r-lg transition-colors">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl font-medium tracking-tight mt-8 mb-4 dark:text-neutral-100" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-medium tracking-tight mt-8 mb-4 dark:text-neutral-200" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-medium tracking-tight mt-6 mb-3 dark:text-neutral-200" {...props} />,
          p: ({node, ...props}) => <p className="text-neutral-600 dark:text-neutral-400 leading-7 mb-4" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-4 space-y-1 text-neutral-600 dark:text-neutral-400" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-4 space-y-1 text-neutral-600 dark:text-neutral-400" {...props} />,
          li: ({node, ...props}) => <li className="pl-1" {...props} />,
          table: ({node, ...props}) => (
            <div className="overflow-x-auto mb-8 my-6">
              <table className="w-full text-left border-collapse text-sm" {...props} />
            </div>
          ),
          thead: ({node, ...props}) => <thead className="border-b-2 border-neutral-200 dark:border-neutral-800" {...props} />,
          th: ({node, ...props}) => <th className="py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-100 bg-neutral-50/50 dark:bg-neutral-900/50" {...props} />,
          td: ({node, ...props}) => <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-900" {...props} />,
          code: ({node, className, children, ...props}) => { 
            const isInline = !String(children).includes('\n');
            return isInline ? (
              <code className="bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 rounded px-1.5 py-0.5 text-sm font-mono font-medium" {...props}>
                {children}
              </code>
            ) : (
              <pre className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono border border-neutral-200 dark:border-neutral-800">
                <code className="text-neutral-900 dark:text-neutral-50" {...props}>
                  {children}
                </code>
              </pre>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};