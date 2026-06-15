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
    <footer className="cs-section" aria-label="Closing Note">
      <div className="cs-container">
        {/* Quote */}
        <blockquote className="cs-quote">
          "As a student, I did not wait for experience—I built it through real projects, real clients, and real work."
        </blockquote>

        {/* Links Row */}
        <div className="cs-links">
          <a
            href="https://www.linkedin.com/in/himanshu-raj-74323237a/"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-link"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cs-link-icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </a>
          
          <div className="cs-email-wrapper">
            <a href="mailto:himanshusah6162@gmail.com" className="cs-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cs-link-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cs-link-icon">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>
        </div>

        {/* Understated action line */}
        <p className="cs-action-text">Let’s build something meaningful.</p>

        {/* Copyright */}
        <div className="cs-copyright">
          © {new Date().getFullYear()} Himanshu Raj. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
