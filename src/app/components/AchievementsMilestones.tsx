import React from "react";
import Image from "next/image";

/* ─── Placeholder data for 6 achievements ──────────────────────────────── */
const achievements = [
  {
    id: "achievement-01",
    num: "01",
    year: "2026",
    category: "COMPETITION WINNER",
    title: "Winner — Srijan Startup Presentation Competition",
    description: (
      <>
        Presented a <strong>startup idea</strong> during the Srijan Project Presentation Competition and was selected as the <strong>winner</strong> after evaluation by an <strong>IIT Roorkee professor</strong>. The experience provided valuable feedback on <strong>entrepreneurship</strong>, problem-solving, and building ideas with practical business potential.
      </>
    ),
    image: "/srijan-startup-competition-winner.webp",
    imageAlt: "Himanshu Raj receiving Winner Award at Srijan Startup Project Presentation Competition",
    imageTitle: "Himanshu Raj - Winner of Srijan Startup Presentation Competition",
    link: "#",
  },
  {
    id: "achievement-02",
    num: "02",
    year: "2026",
    category: "STARTUP PRESENTATION",
    title: "Presenting Gaurdeo to UTU Leadership",
    description: (
      <>
        Received the opportunity to present <strong>Gaurdeo</strong> before the Chairman of Uttarakhand Technical University (<strong>UTU Chairman</strong>) during a <strong>startup presentation</strong>. The experience strengthened my confidence in <strong>public speaking</strong>, startup communication, and presenting ideas clearly to academic and leadership audiences.
      </>
    ),
    image: "/gaurdeo-startup-presentation.webp",
    imageAlt: "Himanshu Raj presenting Gaurdeo startup idea before Uttarakhand Technical University leadership",
    imageTitle: "Himanshu Raj presenting Gaurdeo Startup",
    link: "#",
  },
  {
    id: "achievement-03",
    num: "03",
    year: "2025",
    category: "CLIENT WORK",
    title: "Achievement Title Placeholder 03",
    description: "Description Placeholder: A detailed description of the milestone, showcasing meaningful achievements, competitions, projects, leadership experiences, or client milestones that have shaped your professional journey.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: "achievement-04",
    num: "04",
    year: "2024",
    category: "LEADERSHIP",
    title: "Achievement Title Placeholder 04",
    description: "Description Placeholder: A detailed description of the milestone, showcasing meaningful achievements, competitions, projects, leadership experiences, or client milestones that have shaped your professional journey.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: "achievement-05",
    num: "05",
    year: "2024",
    category: "CERTIFICATION",
    title: "Achievement Title Placeholder 05",
    description: "Description Placeholder: A detailed description of the milestone, showcasing meaningful achievements, competitions, projects, leadership experiences, or client milestones that have shaped your professional journey.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: "achievement-06",
    num: "06",
    year: "2023",
    category: "MILESTONE",
    title: "Achievement Title Placeholder 06",
    description: "Description Placeholder: A detailed description of the milestone, showcasing meaningful achievements, competitions, projects, leadership experiences, or client milestones that have shaped your professional journey.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function AchievementsMilestones() {
  return (
    <section className="am-section" id="achievements" aria-label="Achievements & Milestones">
      <div className="am-header">
        <span className="am-eyebrow">Milestones & Achievements</span>
        <h2 className="am-title">Achievements & Milestones</h2>
        <p className="am-subtitle">
          A collection of experiences, projects, competitions, and professional milestones that have
          shaped my journey through business, technology, and execution.
        </p>
      </div>

      <div className="am-timeline-container">
        {achievements.map(({ id, num, year, category, title, description, image, imageAlt, imageTitle, link }, index) => {
          const isEven = index % 2 === 0; // Alternates layout inside the right side card container
          return (
            <div className="am-row" key={id} id={id}>
              {/* Left Side: Timeline Rail, year markers, and node circles */}
              <div className="am-timeline-rail">
                <span className="am-year-marker">{year}</span>
                <div className="am-timeline-node">
                  <span className="am-node-num">{num}</span>
                </div>
              </div>

              {/* Right Side: Content Block (Alternates direction) */}
              <div className="am-content-card">
                <div className={`am-card-inner ${isEven ? "am-layout-normal" : "am-layout-reverse"}`}>
                  {/* Aspect Ratio 4:3 Image Container */}
                  <div className="am-image-container">
                    <div className="am-image-wrapper">
                      <Image
                        src={image}
                        alt={imageAlt || title}
                        title={imageTitle || title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="am-image"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Text Details Container */}
                  <div className="am-text-details">
                    <div className="am-meta-line">
                      <span className="am-year-mobile">{year}</span>
                      <span className="am-category-tag">{category}</span>
                    </div>
                    <h3 className="am-achievement-title">{title}</h3>
                    <p className="am-achievement-desc">{description}</p>
                    
                    <div className="am-actions">
                      <a href={link} className="am-link-btn" target="_blank" rel="noopener noreferrer">
                        View Details
                        <svg className="am-link-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hidden Search Tags and SEO Keyword Arrays */}
      <div style={{ display: "none" }} aria-hidden="true">
        <span>Himanshu Raj</span>
        <span>Himanshu Raj BBA</span>
        <span>Himanshu BBA</span>
        <span>Himanshu Raj JBIT</span>
        <span>Himanshu Raj JB Institute of Technology</span>
        <span>Himanshu Raj Dehradun</span>
        <span>Himanshu Raj UTU</span>
        <span>Himanshu Raj Uttarakhand Technical University</span>
        <span>Himanshu Raj Student Entrepreneur</span>
        <span>Himanshu Raj Startup Founder</span>
        <span>Himanshu Raj Business Operations</span>
        <span>Himanshu Raj AI Workflows</span>
        <span>Himanshu Raj Digital Systems</span>
        <span>Himanshu Raj Entrepreneurship</span>
        <span>Himanshu Raj Startup Presentation</span>
        <span>Himanshu Raj Gaurdeo</span>
        <span>Himanshu Raj Guardeo</span>
        <span>Himanshu Raj VEOMA AI</span>
        <span>Himanshu Raj JBIT Dehradun</span>
        <span>Srijan Competition</span>
        <span>Srijan Project Presentation</span>
        <span>Startup Competition Winner</span>
        <span>IIT Roorkee Professor</span>
        <span>Business Innovation Competition</span>
        <span>Student Startup Competition</span>
        <span>Entrepreneurship Competition</span>
        <span>Project Presentation Winner</span>
        <span>Himanshu Raj IIT Roorkee</span>
        <span>Himanshu Raj Srijan</span>
        <span>Himanshu Raj Winner</span>
        <span>Himanshu Raj Startup Competition</span>
        <span>Himanshu Raj JBIT Winner</span>
        <span>Himanshu Raj BBA Student</span>
        <span>Gaurdeo</span>
        <span>Guardeo</span>
        <span>Gaurdeo Startup</span>
        <span>Startup Pitch</span>
        <span>UTU Chairman</span>
        <span>Uttarakhand Technical University Chairman</span>
        <span>Student Entrepreneurship</span>
        <span>Business Presentation</span>
        <span>Startup Showcase</span>
        <span>Himanshu Raj Public Speaking</span>
      </div>
    </section>
  );
}
