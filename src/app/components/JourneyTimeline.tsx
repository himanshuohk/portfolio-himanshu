import React from "react";

/* ─── Timeline facts ────────────────────────────────────────────────────── */
const journeyEvents = [
  {
    year: "2022",
    title: "Class 10",
    description: "Completed Class 10 (CBSE) with 84%.",
  },
  {
    year: "2024",
    title: "Class 12",
    description: "Completed Class 12 in Science stream with Physics, Chemistry, and Mathematics and scored 71%.",
  },
  {
    year: "2024–2025",
    title: "Gap Year",
    description: "Used this time for self-development, digital skills, freelancing, content creation, and practical online business work.",
  },
  {
    year: "2024–2025",
    title: "Digital Marketing and Websites",
    description: "Explored digital marketing, online promotion, digital products, customer acquisition, and website development.",
  },
  {
    year: "2024–2025",
    title: "Content Operations and YouTube",
    description: "Created and managed YouTube channels and worked on a knowledge-based YouTube project with content writing, editor coordination, and task assignment.",
  },
  {
    year: "2024–2025",
    title: "Freelancing and Client Work",
    description: "Worked with Indian and international clients on websites, landing pages, plugins, integrations, and related digital services.",
  },
  {
    year: "2025",
    title: "BBA at JBIT",
    description: "Joined BBA at JBIT, Dehradun to understand business operations, management, organizational functioning, and entrepreneurship.",
  },
  {
    year: "Current",
    title: "AI and Startup Interest",
    description: "Continuing to explore AI tools, workflow automation, startup ideas, and practical business systems while studying BBA.",
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function JourneyTimeline() {
  return (
    <section className="jt-section" id="journey" aria-label="Journey Timeline">
      <div className="jt-header">
        <span className="jt-eyebrow">My Journey</span>
        <h2 className="jt-title">Journey Timeline</h2>
        <p className="jt-subtitle">
          A simple timeline of the experiences that shaped my path through learning, freelancing,
          content work, websites, AI tools, and business exploration.
        </p>
      </div>

      <div className="jt-timeline">
        {journeyEvents.map(({ year, title, description }, index) => {
          // Alternating side placement for desktop
          const isEven = index % 2 === 0;
          return (
            <div className={`jt-item ${isEven ? "jt-left" : "jt-right"}`} key={index}>
              {/* Timeline Center Node Dot */}
              <div className="jt-node" aria-hidden="true">
                <div className="jt-dot"></div>
              </div>

              {/* Content Box */}
              <div className="jt-content">
                <span className="jt-year">{year}</span>
                <h3 className="jt-event-title">{title}</h3>
                <p className="jt-event-desc">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
