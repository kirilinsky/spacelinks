import React from "react";
import SectionHeader from "../../components/SectionHeader";
import SimpleImageSlider from "react-simple-image-slider";
import "./style.scss";

import { projects } from "./data";
const Projects = () => {
  return (
    <section className="section projects">
      <SectionHeader />
      <div className="section-body">
        <div className="projects-gallery">
          {projects.map((project) => (
            <div className="projects-gallery-item">
              <div className="projects-gallery-item__side">
                <SimpleImageSlider
                  width={"100%"}
                  height={"100%"}
                  showBullets
                  images={project.imgs}
                />
              </div>
              <div className="projects-gallery-item__side">
                <div className="projects-gallery-item__title">
                  <a href={project.demo}>{project.title}</a>
                </div>
                <div className="projects-gallery-item__description">
                  {project.description}
                </div>
                {project.tech && (
                  <div className="projects-gallery-item__tech">
                    {project.tech.map((t) => (
                      <div className="projects-gallery-item__tech-tag">{t}</div>
                    ))}
                  </div>
                )}
                <div className="projects-gallery-item__hl"></div>
                {project.links && (
                  <div className="projects-gallery-item__links">
                    {project.links.map((t) => t)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
