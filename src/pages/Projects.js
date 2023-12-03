import React from "react";
import { ProjectData } from "../components/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// const newProjectItems = (props) => {
//   return (
//     <ProjectItems
//       key={props.id}
//       title={props.title}
//       desc={props.desc}
//       src={props.src}
//       href={props.href}
//     />
//   );
// };

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="projects__container container swiper-container">
        <div className="swiper-wrapper">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {ProjectData.map((props) => {
              return (
                <SwiperSlide key={props.id}>
                  <div className="projects__content grid swiper-slide">
                    <img src={props.src} alt="" className="projects__img" />
                    <div className="projects__data">
                      <h3 className="projects__title">{props.title}</h3>
                      <p className="projects__description">{props.desc}</p>
                      <a
                        href={props.href}
                        className="button button--flex button--small projects__button"
                      >
                        More Info
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Projects;
