import React, { useState, useEffect } from 'react';
import { MarkdownView } from './MarkdownView';

interface MarkdownContentProps {
  contentFile: string;
  className?: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ contentFile, className }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(contentFile)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load content: ${res.statusText}`);
        return res.text();
      })
      .then((text) => {
        if (isMounted) {
          setContent(text);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [contentFile]);

  if (loading) {
    return <div className="animate-pulse h-24 bg-neutral-100 dark:bg-neutral-900 rounded-lg"></div>;
  }

  if (error) {
    return <div className="text-red-500 text-sm italic">Error: {error}</div>;
  }

  return <MarkdownView content={content} className={className} />;
};