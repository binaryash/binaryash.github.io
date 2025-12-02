export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  coverImage: string;
  tags: string[];
  markdownContent: string;
  links?: {
    demo?: string;
    repo?: string;
  };
  date: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  markdownContent: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface Profile {
  name: string;
  title: string;
  bio: string; // Markdown supported
  skills: string[];
  avatar: string;
  email: string;
  socials: SocialLink[];
}

export interface SiteConfig {
  profile: Profile;
  projects: Project[];
  blog: BlogPost[];
}