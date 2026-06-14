"use client";

import React, { useEffect } from "react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling behind drawer
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cd-backdrop ${isOpen ? "cd-backdrop-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet Drawer */}
      <div className={`cd-drawer ${isOpen ? "cd-drawer-open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="cd-title">
        {/* Close Button */}
        <button className="cd-close-btn" onClick={onClose} aria-label="Close contact panel">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Header */}
        <div className="cd-header">
          <h2 id="cd-title" className="cd-title">Let's Connect</h2>
          <p className="cd-subtitle">
            Feel free to reach out for collaborations, opportunities, projects, or conversations.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="cd-grid">
          {/* Card 01: LinkedIn */}
          <div className="cd-card">
            <div className="cd-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="cd-card-content">
              <span className="cd-platform">LinkedIn</span>
              <span className="cd-handle">Himanshu Raj</span>
            </div>
            <a
              href="https://www.linkedin.com/in/himanshu-raj-74323237a/"
              target="_blank"
              rel="noopener noreferrer"
              className="cd-card-btn"
            >
              Open LinkedIn
            </a>
          </div>

          {/* Card 02: Email */}
          <div className="cd-card">
            <div className="cd-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="cd-card-content">
              <span className="cd-platform">Email</span>
              <span className="cd-handle">himanshusah6162@gmail.com</span>
            </div>
            <a href="mailto:himanshusah6162@gmail.com" className="cd-card-btn cd-btn-primary">
              Send Email
            </a>
          </div>

          {/* Card 03: Instagram */}
          <div className="cd-card">
            <div className="cd-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="cd-card-content">
              <span className="cd-platform">Instagram</span>
              <span className="cd-handle">@himanshuohk</span>
            </div>
            <a
              href="https://www.instagram.com/himanshuohk/"
              target="_blank"
              rel="noopener noreferrer"
              className="cd-card-btn"
            >
              Open Instagram
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="cd-footer">
          <p>Typically responds within 24–48 hours.</p>
        </div>
      </div>
    </>
  );
}
