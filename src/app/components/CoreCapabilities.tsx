import React from "react";

/* ─── Capability data ───────────────────────────────────────────────────── */
const capabilities = [
  {
    num: "01",
    id: "business-operations",
    title: "Business & Operations",
    description:
      "Understanding business problems, coordinating execution, and organizing systems that help projects move forward.",
    tags: [
      "Business Analysis",
      "Project Coordination",
      "Workflow Design",
      "Content Operations",
      "Client Communication",
      "Team Coordination",
      "Startup Research",
    ],
  },
  {
    num: "02",
    id: "digital-systems",
    title: "Digital Systems",
    description:
      "Building and managing digital systems that support business operations and customer acquisition.",
    tags: [
      "WordPress Development",
      "Landing Pages",
      "E-Commerce Websites",
      "Website Implementation",
      "Digital Infrastructure",
      "Technical Problem Solving",
    ],
  },
  {
    num: "03",
    id: "growth-marketing",
    title: "Growth & Marketing",
    description:
      "Learning how businesses attract customers, distribute content, and create growth through digital channels.",
    tags: [
      "Digital Marketing",
      "Content Strategy",
      "Audience Growth",
      "Lead Generation",
      "Online Promotion",
      "Customer Acquisition",
    ],
  },
  {
    num: "04",
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Exploring how AI can improve productivity, automate repetitive work, and support business decision-making.",
    tags: [
      "AI Workflows",
      "AI Agents",
      "Automation Concepts",
      "LLM Applications",
      "RAG Concepts",
      "AI-Assisted Productivity",
    ],
  },
  {
    num: "05",
    id: "content-media",
    title: "Content & Media Operations",
    description:
      "Managing content pipelines and coordinating contributors to maintain consistent production and delivery.",
    tags: [
      "YouTube Operations",
      "Content Planning",
      "Publishing Workflows",
      "Editor Coordination",
      "Production Management",
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function CoreCapabilities() {
  return (
    <section className="cc-section" id="capabilities" aria-label="Core Capabilities">
      <div className="cc-header">
        <span className="cc-eyebrow">Areas where I operate</span>
        <h2 className="cc-title">Core Capabilities</h2>
        <p className="cc-subtitle">
          My experience sits at the intersection of business operations, digital systems, growth,
          content workflows, and AI-assisted execution. These are the areas where I have spent the
          most time building, learning, and experimenting through real projects.
        </p>
      </div>

      <div className="cc-list">
        {capabilities.map(({ num, id, title, description, tags }) => (
          <article className="cc-item" key={id} id={id}>
            <div className="cc-item-meta">
              <span className="cc-number">{num}</span>
            </div>
            <div className="cc-item-content">
              <h3 className="cc-item-title">{title}</h3>
              <p className="cc-item-desc">{description}</p>
              <div className="cc-tags" aria-label={`${title} capabilities`}>
                {tags.map((tag) => (
                  <span className="cc-tag" key={tag}>
                    <span className="cc-tag-bracket">[</span>
                    <span className="cc-tag-text">{tag}</span>
                    <span className="cc-tag-bracket">]</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
