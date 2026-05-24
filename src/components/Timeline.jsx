import React, { useState } from "react";
import { createPortal } from "react-dom";
import { EduData, ServicesData } from "./Data";

const Timeline = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Find the selected experience details
  const currentExp = ServicesData.find((exp) => exp.id === activeModal);

  return (
    <div className="timeline-section-grid">
      
      {/* Experience Section (Top, Full Width) */}
      <div data-reveal className="timeline-column" style={{ marginBottom: "2.5rem" }}>
        <h3 className="timeline-column-title">
          <i className="uil uil-briefcase-alt"></i> Experience
        </h3>
        <div className="timeline-track">
          {ServicesData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-card glass-card">
                <div className="timeline-date">
                  <i className="uil uil-calendar-alt"></i> {exp.duration}
                </div>
                <h4 className="timeline-title">{exp.position}</h4>
                <span className="timeline-subtitle">{exp.name}</span>
                
                {/* Summary (Only show the first bullet point text) */}
                <p style={{ fontSize: "var(--normal-font-size)", margin: "0.5rem 0 1rem", lineHeight: "1.5" }}>
                  {exp.data && exp.data[0] ? exp.data[0].line : ""}
                </p>
                
                {/* Dialog Trigger */}
                <span 
                  className="button button--flex button--small button--link"
                  style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}
                  onClick={() => setActiveModal(exp.id)}
                >
                  View Details <i className="uil uil-arrow-right button__icon"></i>
                </span>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section (Bottom, Full Width) */}
      <div data-reveal className="timeline-column delay-150">
        <h3 className="timeline-column-title">
          <i className="uil uil-graduation-cap"></i> Education
        </h3>
        <div className="timeline-track">
          {EduData.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-card glass-card">
                <div className="timeline-date">
                  <i className="uil uil-calendar-alt"></i> {edu.duration}
                </div>
                <h4 className="timeline-title">{edu.title}</h4>
                <span className="timeline-subtitle">{edu.subtitle}</span>
                {edu.marks && (
                  <div style={{ marginTop: "0.5rem", fontSize: "var(--normal-font-size)", color: "var(--accent-color)", fontWeight: "var(--font-medium)" }}>
                    Result: {edu.marks}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monochromatic Modal Dialog Rendered in Document Body Portal */}
      {currentExp && createPortal(
        <div 
          className={`timeline-modal ${activeModal ? "active-modal" : ""}`}
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="timeline-modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking card contents
          >
            <i 
              className="uil uil-times timeline-modal-close" 
              onClick={() => setActiveModal(null)}
            ></i>
            <h4 className="timeline-modal-title">{currentExp.position}</h4>
            <span className="timeline-modal-subtitle">at {currentExp.name} | {currentExp.duration}</span>
            
            <ul className="timeline-desc-list">
              {currentExp.data.map((bullet) => (
                <li key={bullet.id}>{bullet.line}</li>
              ))}
            </ul>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};

export default Timeline;
