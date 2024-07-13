import React from "react";
import { downloadPDF } from "../utils/pdf";
import "./Light3.css";
import { motion } from "framer-motion";

export default function Light3() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-lavender-light to-white min-h-screen relative">
      
      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-4 mt-8">
        <h1 className="section-title">How Do We See Things? A Light Journey</h1>

        <motion.div
          className="light-journey"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">A Light Journey</h2>
          <p className="mb-4">
            Imagine light traveling from a source to your eyes. Here is a simple way to understand how we see things:
          </p>
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Light_Reflection.png/800px-Light_Reflection.png"
            alt="Light Journey Diagram"
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <ul className="list-disc list-inside mb-4">
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <b>Emitted:</b> Light comes from a source, like the Sun or a lamp.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <b>Transmitted:</b> Light passes through an object, like clear glass.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <b>Reflected:</b> Light bounces off an object, like a mirror.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <b>Absorbed:</b> Light is taken in by an object, which can make the object warmer.
            </motion.li>
          </ul>
          <p className="mb-4">
            When light is emitted from a source, it travels and can be transmitted through some materials, reflected off surfaces, or absorbed by objects.
          </p>
        </motion.div>

        <motion.div
          className="light-behavior"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Light Behavior</h2>
          <p className="mb-4">
            Light behaves in different ways:
          </p>
          <ul className="list-disc list-inside mb-4">
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <b>Reflection:</b> Light bouncing off a surface.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <b>Refraction:</b> Light bending as it passes through different materials.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <b>Scattering:</b> Light spreading out in different directions.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <b>Absorption:</b> Light being taken in by a material.
            </motion.li>
          </ul>
          <p className="mb-4">
            For example, when you are in a dark room, it’s harder to see compared to a bright room due to the lower amount of light available.
          </p>
          <p className="mb-4">
            Light spreads out as it moves away from the source, so it appears dimmer from farther away.
          </p>
        </motion.div>

        <motion.div
          className="seeing-things"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Seeing Things</h2>
          <p className="mb-4">
            We see objects because light reflects off them and enters our eyes. For example, the Sun is luminous and emits light, while objects like trees reflect light into our eyes.
          </p>
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Eye_diagram.png/800px-Eye_diagram.png"
            alt="Eye Diagram"
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="mb-4">
            Your eye works like a camera. Light enters through the pupil, is focused by the cornea and lens, and forms an image on the retina. Rods and cones in the retina send signals to the brain through the optic nerve.
          </p>
        </motion.div>

        <motion.div
          className="comparison-table"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Comparing the Eye and a Pinhole Camera</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Eye</th>
                <th>Pinhole Camera</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The pupil lets light in.</td>
                <td>The pinhole lets light in.</td>
              </tr>
              <tr>
                <td>Image is formed on the retina.</td>
                <td>Image is formed on the screen.</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4 mt-4">
            <b>Extension:</b> One way the eye is different from a camera is that the eye can adjust focus and adapt to light changes, while a camera needs different lenses and settings for this.
          </p>
        </motion.div>

        <motion.div
          className="questions"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Questions to Think About</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. Explain the difference between the words ‘emit’ and ‘transmit’.</li>
            <li>2. Is the Moon a luminous or a non-luminous object? Explain your answer.</li>
            <li>3. Why is it harder to see dark-colored cars at night than light-colored ones?</li>
            <li>4. Extension: the eye works in a similar way to the pinhole camera. Complete the table to compare them.</li>
          </ul>
        </motion.div>

      </div>

      {/* Next Page Button */}
      <motion.div
        className="absolute bottom-4 right-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <button
          className="bg-yellow-800 text-white px-4 py-2 rounded-lg shadow-md"
          onClick={() => (window.location.href = "/light4")}
        >
          Next Page
        </button>
      </motion.div>

      {/* Download PDF Button */}
      <motion.div
        className="absolute bottom-4 left-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <button className="download-pdf-button" onClick={downloadPDF}>
          Download PDF
        </button>
      </motion.div>
    </div>
  );
}
