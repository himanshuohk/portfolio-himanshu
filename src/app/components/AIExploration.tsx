import React from "react";

/* ─── AI milestones ────────────────────────────────────────────────────── */
const aiMilestones = [
  {
    stage: "01 · EARLY USE",
    title: "Using AI for Learning and Productivity",
    description: "I started using AI tools regularly for learning, research, productivity, and content creation.",
    tags: ["AI Tools", "Productivity"],
  },
  {
    stage: "02 · EXPERIMENTS",
    title: "Exploring AI Workflows",
    description: "I explored AI automation, AI agents, agentic workflows, and ways AI can help with repetitive work.",
    tags: ["Automation", "AI Workflows", "AI Agents"],
  },
  {
    stage: "03 · BUSINESS USE",
    title: "AI for Real Work",
    description: "I looked at how AI can support websites, content operations, digital work, and business problem-solving.",
    tags: ["Content Operations", "Web Systems"],
  },
  {
    stage: "04 · TECHNICAL",
    title: "Testing Advanced Concepts",
    description: "I explored ideas like LLMs, local AI models, RAG systems, chatbots, personalized assistants, API integrations, and AI product development.",
    tags: ["LLMs", "RAG", "Chatbots", "API Integrations"],
  },
  {
    stage: "05 · CURRENT",
    title: "Building Better Systems",
    description: "I am interested in creating tools that store information, maintain context, organize knowledge, and reduce repetitive work.",
    tags: ["Knowledge Systems", "Context Tools"],
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function AIExploration() {
  return (
    <section className="ae-section" id="ai-exploration" aria-label="AI Exploration">
      <div className="ae-header">
        <span className="ae-eyebrow">AI Journey</span>
        <h2 className="ae-title">AI Exploration</h2>
        <p className="ae-subtitle">
          A simple record of how I have explored AI tools, workflows, and business use cases through
          learning, experimentation, and practical use.
        </p>
      </div>

      <div className="ae-list">
        {aiMilestones.map(({ stage, title, description, tags }, index) => (
          <div className="ae-row" key={index}>
            {/* Left Column: Stage Label */}
            <div className="ae-left-col">
              <span className="ae-stage">{stage}</span>
            </div>

            {/* Right Column: Title, Description, and Tags */}
            <div className="ae-right-col">
              <h3 className="ae-event-title">{title}</h3>
              <p className="ae-event-desc">{description}</p>
              <div className="ae-tags" aria-label={`Tags for ${title}`}>
                {tags.map((tag) => (
                  <span className="ae-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
