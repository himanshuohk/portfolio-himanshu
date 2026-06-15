"use client";

import React, { useEffect } from "react";

interface RenovationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RenovationModal({ isOpen, onClose }: RenovationModalProps) {
  // Close on Escape key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop Backdrop Overlay */}
      <div
        className={`rm-backdrop ${isOpen ? "rm-backdrop-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Centered Container */}
      <div
        className={`rm-wrapper ${isOpen ? "rm-wrapper-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rm-title"
      >
        <div className="rm-card">
          {/* Close Icon Button */}
          <button className="rm-close-btn" onClick={onClose} aria-label="Close message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Illustrative Icon */}
          <div className="rm-icon-wrap">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rm-icon">
              {/* Cog / Gear (opacity for layered depth) */}
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" opacity="0.35" />
              {/* Wrench overlay */}
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 id="rm-title" className="rm-title">
            Project Library Under Renovation
          </h2>

          {/* Subheading/Message */}
          <p className="rm-message">
            We are currently polishing our latest client projects, digital systems, and business automation walkthroughs. Please check back soon!
          </p>

          {/* CTA Dismiss Button */}
          <button className="rm-action-btn" onClick={onClose}>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}
