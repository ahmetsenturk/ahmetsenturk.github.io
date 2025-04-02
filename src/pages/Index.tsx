
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">hi, i'm janik|</h1>
          <p className="text-muted-foreground">
            cs grad student @ <a href="https://tum.de" className="hover:text-primary transition-colors">tum</a> | 
            member @ <a href="https://tum.ai" className="hover:text-primary transition-colors">tum.ai</a> | 
            ex-content creator @ <a href="https://youtube.com" className="hover:text-primary transition-colors">youtube</a>
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <SectionTitle title="projects" />
          
          <ProjectItem
            title="CIAYN (tacto hackathon track winner @ {tech europe})"
            links={[
              { label: "link", url: "#" },
              { label: "github", url: "https://github.com" },
              { label: "demo", url: "#" }
            ]}
          />
          
          <ProjectItem
            title="Edupin (ebl hackathon winner @ entrepreneurs first)"
            links={[
              { label: "github", url: "https://github.com" }
            ]}
          />
          
          <ProjectItem
            title="ecoflows - ai-powered construction site management"
            links={[
              { label: "view success story", url: "#" }
            ]}
          />
          
          <ProjectItem
            title="multi-agent LLM system"
            links={[
              { label: "github", url: "https://github.com" }
            ]}
          />
        </div>

        {/* Currently Building Section */}
        <div className="mb-12">
          <SectionTitle title="currently building" />
          <ProjectItem title="driploy.com" />
        </div>

        {/* Research Section */}
        <div className="mb-12">
          <SectionTitle title="research" />
          
          <ProjectItem
            title="Retro-rank-in: a ranking-based approach for inorganic materials synthesis planning"
            description="(arXiv)"
            links={[
              { label: "arXiv", url: "https://arxiv.org" }
            ]}
          />
          
          <ProjectItem
            title="Bachelor's thesis: Spatial constraints on human motion diffusion models @"
            links={[
              { label: "rvh group", url: "#" }
            ]}
          />
        </div>

        {/* Writings Section */}
        <div className="mb-12">
          <SectionTitle title="writings" />
          <ProjectItem title="Evaluating and measuring general intelligence" />
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
