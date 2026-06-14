"use client";

import React, { useState } from "react";
import Image from "next/image";
import Portrait from "./components/Portrait";
import CoreCapabilities from "./components/CoreCapabilities";
import AchievementsMilestones from "./components/AchievementsMilestones";
import JourneyTimeline from "./components/JourneyTimeline";
import AIExploration from "./components/AIExploration";
import ContactDrawer from "./components/ContactDrawer";
import ClosingSection from "./components/ClosingSection";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="container header-container animate-fade-in">
          <div className="logo">
            Himanshu Raj
          </div>
          <nav className="nav-links">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(true);
              }}
            >
              Contact
            </a>
            <a href="#resume" className="nav-link-btn">Resume</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container flex-grow">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Left Column (55%) */}
          <div className="hero-left animate-slide-up">
            <span className="eyebrow">Operations • Growth Systems • Workflow Automation</span>
            <h1 className="headline">
              Learning Business by Building Real Projects
            </h1>
            <p className="description">
              During my gap year, I worked with international clients, built website systems,
              coordinated content operations, and explored workflow automation. Today, I'm
              pursuing a BBA while continuing to learn through real projects, startup experimentation,
              and business execution.
            </p>
            <div className="btn-group">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDrawerOpen(true);
                }}
              >
                Let's Connect
              </a>
            </div>

            {/* Credibility Strip */}
            <div className="credibility-strip">
              <span className="pill-tag">International Clients</span>
              <span className="pill-tag">Website Projects</span>
              <span className="pill-tag">Content Operations</span>
              <span className="pill-tag">Workflow Automation</span>
              <span className="pill-tag">Startup Exploration</span>
            </div>
          </div>

          {/* Right Column (45%) */}
          <div className="hero-right animate-fade-in">
            <Portrait />
          </div>
        </section>

        {/* Core Capabilities Section */}
        <CoreCapabilities />

        {/* Achievements & Milestones Section */}
        <AchievementsMilestones />

        {/* Journey Timeline Section */}
        <JourneyTimeline />

        {/* AI Exploration Section */}
        <AIExploration />
      </main>

      {/* Closing Section (replaces generic footer) */}
      <ClosingSection />

      {/* Contact Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
