export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  coverImage: string;
  tags: string[];
  contentFile: string; // Path to markdown file in /content/projects/
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
  contentFile: string; // Path to markdown file in /content/blog/
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface Profile {
  name: string;
  title: string;
  bioFile: string; // Path to markdown file in /content/profile/
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