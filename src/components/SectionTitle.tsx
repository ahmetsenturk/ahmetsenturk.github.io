
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <h2 className="text-foreground font-mono font-bold text-lg tracking-wide">{title}:</h2>
    </div>
  );
};

export default SectionTitle;
