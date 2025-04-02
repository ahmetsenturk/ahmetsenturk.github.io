
import React from 'react';

interface Link {
  label: string;
  url: string;
}

interface ProjectItemProps {
  title: string;
  description?: string;
  links?: Link[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, links }) => {
  return (
    <div className="mb-4">
      <div className="flex items-start">
        <span className="text-primary mr-2">&gt;</span>
        <div>
          <p className="text-primary font-medium">{title}</p>
          {description && <p className="text-muted-foreground">{description}</p>}
          {links && links.length > 0 && (
            <div className="mt-1 space-x-4">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
