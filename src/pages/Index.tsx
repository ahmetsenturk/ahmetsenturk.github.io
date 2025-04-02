
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectItem from '@/components/ProjectItem';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-4 md:p-0">
      <div className="max-w-3xl mx-auto py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">hi, i'm ahmet|</h1>
          <p className="text-muted-foreground">
            cs grad student @ <a href="https://tum.de" className="hover:text-primary transition-colors">tum</a> | 
            member @ <a href="https://www.tum.de/en/studies/during-your-studies/entrepreneurship/entrepreneurial-masterclass" className="hover:text-primary transition-colors">tum entrepreneurial masterclass</a>
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <SectionTitle title="projects" />
          
          <ProjectItem
            title="lecture streaming application for TUM - best team award @ iPraktikum TUM"
            links={[
              { label: "github", url: "https://github.com" }
            ]}
          />
          
          <ProjectItem
            title="personalized trip scheduling application"
            links={[
              { label: "github", url: "https://github.com" }
            ]}
          />
          
          <ProjectItem
            title="vehicle to grid incentivization app - track winner @ tech challenge TUM"
            links={[
              { label: "github", url: "https://github.com" }
            ]}
          />
        </div>

        {/* Currently Building Section */}
        <div className="mb-12">
          <SectionTitle title="currently building" />
          <ProjectItem 
            title="klaro.care - personalized care assistant for caregiving relatives"
            links={[
              { label: "website", url: "#" }
            ]}
          />
        </div>

        {/* Research Section */}
        <div className="mb-12">
          <SectionTitle title="research" />
          
          <ProjectItem
            title="Factors Influence the Success of Communities of Practices in Large Agile Organizations at ICEIS 2025"
            links={[
              { label: "paper", url: "#" }
            ]}
          />
          
          <ProjectItem
            title="bachelor's thesis: Deep Learning for Smartwatch Based Continuous Authentication"
            links={[
              { label: "thesis", url: "#" }
            ]}
          />
        </div>

        {/* Writings Section */}
        <div className="mb-12">
          <SectionTitle title="writings" />
          <ProjectItem title="Sprint Retrospective: Maximizing Team Potential in Agile" />
          <ProjectItem title="The Role of Artificial Intelligence in Future Technology" />
        </div>

        {/* Divider */}
        <div className="border-t border-muted my-8"></div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;
