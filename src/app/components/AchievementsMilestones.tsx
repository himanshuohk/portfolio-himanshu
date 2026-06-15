import React from "react";
import Image from "next/image";

/* ─── Placeholder data for 6 achievements ──────────────────────────────── */
const achievements = [
  {
    id: "achievement-01",
    num: "01",
    year: "2026",
    category: "COMPETITION WINNER",
    title: "Srijan Project Winner",
    description: (
      <>
        Presented a project during the <strong>Srijan Project Presentation Competition</strong> and was selected as the <strong>winner</strong> after evaluation by an <strong>IIT Roorkee professor</strong>. The experience provided valuable feedback on <strong>problem-solving</strong>, <strong>innovation</strong>, and building practical solutions with real-world impact.
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
    title: "Gaurdeo Presentation",
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
    year: "2026",
    category: "INVESTOR INTERACTION",
    title: "Meeting Startup Investors",
    description: (
      <>
        Selected for an interaction session with <strong>Sachint Karnatak</strong>, founder of <strong>POCONUT</strong>, a startup valued at over ₹150 crore. Discussed <strong>fundraising</strong>, early-stage startup challenges, team building, and lessons from the entrepreneurial journey. The conversation provided practical insights into building, scaling, and <strong>startup growth</strong>.
      </>
    ),
    image: "/investor-interaction-sachin-karnatak.webp",
    imageAlt: "Himanshu Raj interacting with startup founder Sachint Karnatak during an entrepreneurship and fundraising discussion",
    imageTitle: "Himanshu Raj with POCONUT Founder Sachint Karnatak",
    link: "#",
  },
  {
    id: "achievement-04",
    num: "04",
    year: "2026",
    category: "INNOVATION AWARD",
    title: "Founders Day Winner",
    description: (
      <>
        Received recognition on <strong>Founders Day</strong> for presenting an innovative idea focused on <strong>AI implementation</strong> in business. The project was selected as the <strong>winner</strong> and highlighted practical applications of AI for improving business operations, productivity, decision-making, and driving <strong>business innovation</strong>.
      </>
    ),
    image: "/founders-day-winner.webp",
    imageAlt: "Himanshu Raj receiving Founders Day innovation award for AI implementation in business",
    imageTitle: "Himanshu Raj - Founders Day Winner",
    link: "#",
  },
  {
    id: "achievement-05",
    num: "05",
    year: "2026",
    category: "STARTUP INCUBATION",
    title: "Selected for Incubation",
    description: (
      <>
        My startup idea was selected for <strong>Startup Incubation</strong> support at JB Institute of Technology (<strong>JBIT</strong>). The initiative received recognition from the college leadership, including the Head of Department and <strong>IQAC</strong> leadership, providing access to faculty guidance, mentorship, <strong>institutional support</strong>, and opportunities for further development. The experience marked an important step in transforming ideas into practical ventures while gaining exposure to entrepreneurship within an academic ecosystem.
      </>
    ),
    image: "/startup-incubation-jbit.webp",
    imageAlt: "Himanshu Raj receiving recognition after startup incubation selection at JB Institute of Technology",
    imageTitle: "Himanshu Raj - Startup Incubation Selection at JBIT",
    link: "#",
  },
  {
    id: "achievement-06",
    num: "06",
    year: "2026",
    category: "BUSINESS MILESTONE",
    title: "₹10L+ Revenue Generated",
    description: (
      <>
        Contributed to projects and service delivery efforts that generated over <strong>₹10L+ Revenue</strong> (₹10 lakh) through freelance work and digital solutions. The journey involved working with clients, building websites, coordinating project execution, supporting marketing initiatives, and managing workflows across multiple engagements. This experience provided hands-on exposure to <strong>Business Operations</strong>, client management, and delivering measurable outcomes through <strong>Digital Services</strong> for various <strong>Client Projects</strong>.
      </>
    ),
    image: "/freelancing-revenue-milestone.webp",
    imageAlt: "Himanshu Raj showcasing freelance business milestone of generating over ₹10 lakh in project revenue",
    imageTitle: "Himanshu Raj - ₹10 Lakh Revenue Milestone",
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
        <span>Himanshu Raj Investor Meeting</span>
        <span>Himanshu Raj Startup Founder</span>
        <span>Himanshu Raj Fundraising</span>
        <span>Himanshu Raj Startup Growth</span>
        <span>Sachint Karnatak</span>
        <span>POCONUT</span>
        <span>POCONUT Founder</span>
        <span>Startup Fundraising</span>
        <span>Early Stage Startup</span>
        <span>Entrepreneurship</span>
        <span>Startup Team Building</span>
        <span>Business Leadership</span>
        <span>Himanshu Raj AI</span>
        <span>Himanshu Raj Business Innovation</span>
        <span>Himanshu Raj Founders Day</span>
        <span>Himanshu Raj Award</span>
        <span>Himanshu Raj Winner</span>
        <span>Himanshu Raj Artificial Intelligence</span>
        <span>Himanshu Raj AI Implementation</span>
        <span>AI Implementation in Business</span>
        <span>Business Innovation</span>
        <span>Innovation Award</span>
        <span>Founders Day Competition</span>
        <span>Student Innovation</span>
        <span>Digital Transformation</span>
        <span>Business Operations</span>
        <span>Himanshu Raj Incubation</span>
        <span>Himanshu Raj Startup Incubation</span>
        <span>Himanshu Raj Innovation</span>
        <span>JBIT Incubation</span>
        <span>Startup Incubation Program</span>
        <span>College Startup Incubation</span>
        <span>IQAC</span>
        <span>Innovation and Entrepreneurship</span>
        <span>Academic Entrepreneurship</span>
        <span>Startup Development</span>
        <span>Student Startup</span>
        <span>Entrepreneurship Support</span>
        <span>Himanshu Raj Freelancing</span>
        <span>Himanshu Raj Freelancer</span>
        <span>Himanshu Raj Freelancing Revenue</span>
        <span>Himanshu Raj Client Projects</span>
        <span>Himanshu Raj Revenue Generation</span>
        <span>Himanshu Raj Digital Marketing</span>
        <span>Himanshu Raj Workflow Automation</span>
        <span>Himanshu Raj Project Management</span>
        <span>Freelancing Revenue</span>
        <span>Digital Services</span>
        <span>Client Management</span>
        <span>Website Projects</span>
        <span>Business Growth</span>
        <span>Revenue Milestone</span>
        <span>Project Execution</span>
        <span>Remote Client Work</span>
      </div>
    </section>
  );
}
