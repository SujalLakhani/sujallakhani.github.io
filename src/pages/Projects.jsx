import React from "react";
import { ProjectData } from "../components/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div data-reveal className="projects__container container swiper-container">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {ProjectData.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <div className="projects__card glass-card">
                  <div className="projects__img-wrapper">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="projects__img"
                    />
                  </div>
                  
                  <div className="projects__data">
                    <h3 className="projects__title">{project.title}</h3>
                    
                    {/* Tech stack badges */}
                    <div className="projects__tags">
                      {project.tags &&
                        project.tags.map((tag, idx) => (
                          <span key={idx} className="projects__tag">
                            {tag}
                          </span>
                        ))}
                    </div>

                    <p className="projects__description">{project.desc}</p>
                    
                    <div className="projects__actions">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button--flex button--small"
                      >
                        Code & Info
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
