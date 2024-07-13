import React from "react";
import { downloadPDF } from "../utils/pdf";
import "./Light2.css";

export default function Light2() {
  return (
    <div className="light2-container">
      {/* Content Section */}
      <div className="light2-content">
        <h1 className="light2-section-title">Exploring Light: A Colorful Journey</h1>

        {/* History of Study on Light */}
        <div className="light2-history-section">
          <h2 className="light2-subsection-title">History of Study on Light</h2>
          <div className="flex flex-wrap">
            {/* Left-aligned paragraph */}
            <div className="light2-history-text light2-left">
              <p>
                The study of light dates back to ancient civilizations, where philosophers like
                Aristotle (384–322 BC) proposed theories on light and vision, though they
                primarily viewed light as emitted from the eye rather than an external source.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Right-aligned paragraph */}
            <div className="light2-history-text light2-right">
              <p>
                In the Islamic Golden Age, scholars like Ibn al-Haytham (965–1040 AD) made
                significant advancements in optics. Known as the father of optics, he wrote the
                influential Book of Optics, explaining the nature of light and vision through
                experimentation and observation.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Center-aligned paragraph */}
            <div className="light2-history-text light2-center">
              <p>
                During the Renaissance, European thinkers such as Sir Isaac Newton (1643–1727)
                conducted experiments with prisms, discovering that white light is composed of
                different colors. This breakthrough laid the foundation for the modern understanding
                of the spectrum of light and color.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Left-aligned paragraph */}
            <div className="light2-history-text light2-left">
              <p>
                In the 19th and 20th centuries, Albert Einstein (1879–1955) proposed the theory of
                relativity, which transformed our understanding of light by describing it as both
                waves and particles, fundamentally influencing fields from physics to astronomy.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Right-aligned paragraph */}
            <div className="light2-history-text light2-right">
              <p>
                The wave theory of light was further developed by Thomas Young (1773–1829), an
                English scientist who conducted the famous double-slit experiment, providing
                evidence for light's wave-like nature and contributing significantly to optics.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Center-aligned paragraph */}
            <div className="light2-history-text light2-center">
              <p>
                James Clerk Maxwell (1831–1879) formulated the electromagnetic theory of light,
                linking electricity and magnetism. His equations unified the understanding of
                light, paving the way for technologies such as radio waves and modern optics.
              </p>
            </div>
          </div>
        </div>

        {/* Notable Figures */}
        <div className="light2-notable-figures">
          <div className="light2-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sir_Isaac_Newton%2C_PRS.jpg/800px-Sir_Isaac_Newton%2C_PRS.jpg"
              alt="Sir Isaac Newton"
              className="light2-figure-image"
            />
            <div className="light2-figure-caption">
              <p className="light2-figure-name">Sir Isaac Newton</p>
              <p className="light2-figure-description">
                Discovered that white light is composed of different colors.
              </p>
            </div>
          </div>

          <div className="light2-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg"
              alt="Albert Einstein"
              className="light2-figure-image"
            />
            <div className="light2-figure-caption">
              <p className="light2-figure-name">Albert Einstein</p>
              <p className="light2-figure-description">
                Proposed the theory of relativity, which impacts our understanding of light.
              </p>
            </div>
          </div>

          <div className="light2-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Thomas_Young_%28scientist%29.jpg/800px-Thomas_Young_%28scientist%29.jpg"
              alt="Thomas Young"
              className="light2-figure-image"
            />
            <div className="light2-figure-caption">
              <p className="light2-figure-name">Thomas Young</p>
              <p className="light2-figure-description">
                Introduced the wave theory of light and made significant contributions to optics.
              </p>
            </div>
          </div>

          <div className="light2-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/James_Clerk_Maxwell.png/800px-James_Clerk_Maxwell.png"
              alt="James Clerk Maxwell"
              className="light2-figure-image"
            />
            <div className="light2-figure-caption">
              <p className="light2-figure-name">James Clerk Maxwell</p>
              <p className="light2-figure-description">
                Formulated the electromagnetic theory of light, linking electricity and magnetism.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-4 left-4">
          <button onClick={downloadPDF} className="light2-download-button">
            Download
          </button>
        </div>
        <div className="absolute bottom-4 right-4">
            <button className="next-page-button" onClick={() => (window.location.href = "/light3")}>
          Next Page
        
        
          </button>
        </div>
      </div>
    </div>
  );
}
