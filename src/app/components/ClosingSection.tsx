"use client";

import React, { useState } from "react";

export default function ClosingSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("himanshusah6162@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <section className="cs-section" aria-label="Closing Note">
      <div className="cs-container">
        {/* Eyebrow */}
        <span className="cs-eyebrow">One Last Thought</span>

        {/* Quote */}
        <blockquote className="cs-quote">
          "As a student, I did not wait for experience—I built it through real projects, real clients, and real work."
        </blockquote>

        {/* Understated action line */}
        <p className="cs-action-text">Let’s build something meaningful.</p>

        {/* Links Row */}
        <div className="cs-links">
          <a
            href="https://www.linkedin.com/in/himanshu-raj-74323237a/"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-link"
          >
            LinkedIn
          </a>

          <div className="cs-email-wrapper">
            <a href="mailto:himanshusah6162@gmail.com" className="cs-link">
              Email
            </a>
            <button onClick={copyEmail} className="cs-copy-btn" aria-label="Copy email address">
              {copied ? (
                <span className="cs-copied-text">Copied!</span>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cs-copy-icon">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
            </button>
          </div>

          <a
            href="https://www.instagram.com/himanshuohk/"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-link"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="cs-copyright">
          © {new Date().getFullYear()} Himanshu Raj. Built with Next.js.
        </div>
      </div>
    </section>
  );
}
