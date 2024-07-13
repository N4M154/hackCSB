import React, { useState } from 'react';
import { downloadPDF } from '../utils/pdf';
import './Light4.css';
import Calculator from '../components/Calculator';
import { motion } from 'framer-motion';

export default function Light4() {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false); // Add this line

  const correctAnswer = '390000000'; // The correct answer for the Moon distance calculation.

  const checkAnswer = () => {
    if (userAnswer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white min-h-screen relative p-4">
      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-4 mt-8">
        <h1 className="section-title">Understanding the Speed of Light</h1>

        <motion.div
          className="introduction"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Objectives</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Know how fast light travels.</li>
            <li>Understand how astronomers use the speed of light to describe distances.</li>
          </ul>

          <h2 className="subsection-title">6.3 The Speed of Light</h2>
          <p className="mb-4">
            The speed of light is the fastest speed that there is. Nothing travels faster than light.
            There are many ways to express the speed of light:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>300 million m/s</li>
            <li>300,000,000 m/s</li>
            <li>300,000 km/s</li>
            <li>300,000 thousand km/s</li>
          </ul>
          <p className="mb-4">
            Using the speed of light, astronomers can measure enormous distances. For example:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Earth to the Moon: 384,400 km</li>
            <li>Earth to the Sun: 150,000,000 km</li>
            <li>Earth to Neptune: 4,500,000,000 km</li>
          </ul>
          <p className="mb-4">
            Astronomers use a unit called a "light year" to describe these vast distances:
            A light year is the distance light travels in one year, approximately 9 trillion km.
          </p>
        </motion.div>

        {/* Calculator Toggle Button */}
        <motion.div
          className="calculator-toggle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button 
            className="next-page-button" 
            onClick={() => setShowCalculator(!showCalculator)}
          >
            {showCalculator ? 'Hide Calculator' : 'Show Calculator'}
          </button>
        </motion.div>

        {/* Conditionally Render Calculator */}
        {showCalculator && (
          <motion.div
            className="calculator-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Calculator />
          </motion.div>
        )}
         <motion.div
          className="calculation"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Practicer: Calculate the Distance</h2>
          <p className="mb-4">
            If light travels from the Moon to the Earth in 1.3 seconds, calculate the distance between the Moon and the Earth
            using the speed of light (300,000,000 m/s). What is the distance in meters?
          </p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="answer-input"
            placeholder="Your answer in meters"
          />
          <button className="check-answer-button" onClick={checkAnswer}>
            Check Answer
          </button>
          {isCorrect !== null && (
            <p className={`mb-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? 'Correct! 🎉' : 'Try Again! ❌'}
            </p>
          )}
        </motion.div>

        {/* Animations */}
        <motion.div
          className="space-animation-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="animation-container">
            <div className="sun">
              <div className="earth-orbit">
                <div className="earth">
                  <div className="moon-orbit"><div className="moon"></div></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

       

        <motion.div
          className="explanation"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Explanation of the Animation</h2>
          <p className="mb-4">
            The animation above shows the Sun, Earth, and Moon. The Earth orbits around the Sun, and the Moon orbits around the Earth.
            This is a simplified model of how objects in our solar system move. The light from the Sun travels through space to reach the Earth,
            and the Earth’s gravity keeps the Moon in orbit.
          </p>
        </motion.div>

        <motion.div
          className="space-facts"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Fun Facts About Light</h2>
          <ul className="list-disc list-inside mb-4">
            <li>It takes light 8 minutes to travel from the Sun to the Earth.</li>
            <li>The nearest star to Earth is Proxima Centauri, located about 4.1 light years away.</li>
            <li>The Milky Way galaxy has a diameter of about 100,000 light years.</li>
          </ul>
        </motion.div>

        <motion.div
          className="questions"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Questions to Think About</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. Why do astronomers use light years instead of kilometers for measuring distances in space?</li>
            <li>2. How long does it take light to travel from the Sun to the Earth?</li>
            <li>3. How far is Proxima Centauri from Earth in light years?</li>
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
        <button className="next-page-button" onClick={() => alert('Next Page!')}>
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
