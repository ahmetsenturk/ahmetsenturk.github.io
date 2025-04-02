
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
            member @ <a href="https://masterclass.tum.de/" className="hover:text-primary transition-colors">tum entrepreneurial masterclass</a>
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <SectionTitle title="projects" />
          
          <ProjectItem
            title="lecture streaming application for TUM - best team award @ iPraktikum TUM"
            links={[
              { label: "github", url: "https://github.com/TUM-Dev/gocast_mobile" },
              { label: "project page", url: "https://ase.cit.tum.de/projects/ipraktikum/23w/tum/" }
            ]}
          />
          
          <ProjectItem
            title="personalized trip scheduling application"
            links={[
              { label: "project page", url: "https://ase.cit.tum.de/projects/ipraktikum/23s/iabg/" }
            ]}
          />
          
          <ProjectItem
            title="vehicle to grid incentivization app - track winner @ tech challenge TUM"
            links={[
              { label: "github", url: "https://github.com/ahmetsenturk/Charge2Change" }
            ]}
          />
        </div>

        {/* Currently Building Section */}
        <div className="mb-12">
          <SectionTitle title="currently building" />
          <ProjectItem 
            title="klaro.care - personalized care assistant for caregiving relatives"
            links={[
              { label: "website", url: "https://klaro.care/" }
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
            description="(in progress)"
          />
          
          <ProjectItem
            title="bachelor's thesis: Deep Learning for Smartwatch Based Continuous Authentication"
            links={[
              { label: "project page", url: "https://www.cmpe.boun.edu.tr/content/deep-learning-smartwatch-based-continuous-authentication-0" }
            ]}
          />
        </div>

        {/* Writings Section */}
        <div className="mb-12">
          <SectionTitle title="writings" />
          <ProjectItem 
            title="Sprint Retrospective: Maximizing Team Potential in Agile" 
            links={[
              { label: "medium", url: "https://medium.com/@ahmetsenturk/sprint-retrospective-maximizing-team-potential-in-agile-4c244611976e" }
            ]}
          />
          <ProjectItem 
            title="The Role of Artificial Intelligence in Future Technology" 
            links={[
              { label: "medium", url: "https://medium.com/@ahmetsenturk/the-role-of-artificial-intelligence-in-future-technology-b225658a82dd" }
            ]}
          />
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
