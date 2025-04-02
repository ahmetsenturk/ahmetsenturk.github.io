
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-6 pt-6">
      <a 
        href="https://github.com/ahmetsenturk" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a 
        href="https://www.linkedin.com/in/ahmetibrahimsenturk/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
