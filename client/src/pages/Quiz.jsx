import React, { useState, useEffect } from "react";
import Calculator from "../components/Calculator";
import { motion } from "framer-motion";

export default function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentSet, setCurrentSet] = useState([]);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes timer
  const [timeExpired, setTimeExpired] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showAnswerSheet, setShowAnswerSheet] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const topics = {
    light: [
      {
        id: 1,
        question: "What is the speed of light in a vacuum?",
        options: [
          { id: 1, text: "3 x 10^8 meters per second" },
          { id: 2, text: "3 x 10^6 meters per second" },
          { id: 3, text: "3 x 10^4 meters per second" },
          { id: 4, text: "3 x 10^2 meters per second" },
        ],
        correctOption: 1,
      },
      {
        id: 2,
        question:
          "Which phenomenon demonstrates that light can behave as a wave?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Refraction" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Absorption" },
        ],
        correctOption: 3,
      },
      {
        id: 3,
        question:
          "What type of electromagnetic wave has the shortest wavelength?",
        options: [
          { id: 1, text: "Radio waves" },
          { id: 2, text: "Infrared waves" },
          { id: 3, text: "Ultraviolet waves" },
          { id: 4, text: "Gamma rays" },
        ],
        correctOption: 4,
      },
      {
        id: 4,
        question:
          "Which scientist is famous for the theory of relativity and the photoelectric effect?",
        options: [
          { id: 1, text: "Isaac Newton" },
          { id: 2, text: "Albert Einstein" },
          { id: 3, text: "Niels Bohr" },
          { id: 4, text: "Max Planck" },
        ],
        correctOption: 2,
      },
      {
        id: 5,
        question: "What happens to light when it passes through a prism?",
        options: [
          { id: 1, text: "It speeds up" },
          { id: 2, text: "It slows down" },
          { id: 3, text: "It splits into different colors" },
          { id: 4, text: "It disappears" },
        ],
        correctOption: 3,
      },
      {
        id: 6,
        question: "Which color of light has the highest frequency?",
        options: [
          { id: 1, text: "Red" },
          { id: 2, text: "Green" },
          { id: 3, text: "Blue" },
          { id: 4, text: "Violet" },
        ],
        correctOption: 4,
      },
      {
        id: 7,
        question: "What is the primary cause of the blue color of the sky?",
        options: [
          { id: 1, text: "Reflection of sunlight" },
          { id: 2, text: "Scattering of sunlight by air molecules" },
          { id: 3, text: "Absorption of sunlight by water vapor" },
          { id: 4, text: "Diffraction of sunlight by dust particles" },
        ],
        correctOption: 2,
      },
      {
        id: 8,
        question:
          "What is the phenomenon where light bends around obstacles called?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Refraction" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Polarization" },
        ],
        correctOption: 3,
      },
      {
        id: 9,
        question: "What is the unit of measurement for the frequency of light?",
        options: [
          { id: 1, text: "Hertz" },
          { id: 2, text: "Joule" },
          { id: 3, text: "Newton" },
          { id: 4, text: "Watt" },
        ],
        correctOption: 1,
      },
      {
        id: 10,
        question: "Which of the following is a property of laser light?",
        options: [
          { id: 1, text: "It is monochromatic" },
          { id: 2, text: "It is incoherent" },
          { id: 3, text: "It is diffuse" },
          { id: 4, text: "It is unpolarized" },
        ],
        correctOption: 1,
      },
      {
        id: 11,
        question:
          "What is the term for the bending of light as it passes from one medium to another?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Refraction" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Interference" },
        ],
        correctOption: 2,
      },
      {
        id: 12,
        question:
          "Which effect demonstrates that light can behave as particles?",
        options: [
          { id: 1, text: "Photoelectric effect" },
          { id: 2, text: "Interference" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Polarization" },
        ],
        correctOption: 1,
      },
      {
        id: 13,
        question: "What is the wavelength range of visible light?",
        options: [
          { id: 1, text: "10-400 nm" },
          { id: 2, text: "400-700 nm" },
          { id: 3, text: "700-1000 nm" },
          { id: 4, text: "1000-1200 nm" },
        ],
        correctOption: 2,
      },
      {
        id: 14,
        question:
          "What is the name of the effect where light is emitted from a material when it absorbs photons?",
        options: [
          { id: 1, text: "Photoelectric effect" },
          { id: 2, text: "Electroluminescence" },
          { id: 3, text: "Photoluminescence" },
          { id: 4, text: "Phosphorescence" },
        ],
        correctOption: 3,
      },
      {
        id: 15,
        question: "What kind of light cannot be seen by the human eye?",
        options: [
          { id: 1, text: "Infrared light" },
          { id: 2, text: "Ultraviolet light" },
          { id: 3, text: "X-rays" },
          { id: 4, text: "All of the above" },
        ],
        correctOption: 4,
      },
      {
        id: 16,
        question:
          "What is the phenomenon called when light changes direction due to a change in its speed?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Refraction" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Dispersion" },
        ],
        correctOption: 2,
      },
      {
        id: 17,
        question:
          "Which principle explains the behavior of light waves when they interfere with each other?",
        options: [
          { id: 1, text: "Huygens' Principle" },
          { id: 2, text: "Pauli Exclusion Principle" },
          { id: 3, text: "Heisenberg Uncertainty Principle" },
          { id: 4, text: "Fermat's Principle" },
        ],
        correctOption: 1,
      },
      {
        id: 18,
        question:
          "Which of the following devices uses the property of total internal reflection?",
        options: [
          { id: 1, text: "Telescope" },
          { id: 2, text: "Microscope" },
          { id: 3, text: "Optical fiber" },
          { id: 4, text: "Spectrometer" },
        ],
        correctOption: 3,
      },
      {
        id: 19,
        question:
          "What is the term for the bending of light as it passes around the edge of an object?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Refraction" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Polarization" },
        ],
        correctOption: 3,
      },
      {
        id: 20,
        question:
          "Which experiment provided evidence for the wave nature of light?",
        options: [
          { id: 1, text: "Photoelectric effect" },
          { id: 2, text: "Double-slit experiment" },
          { id: 3, text: "Rutherford scattering" },
          { id: 4, text: "Millikan oil-drop experiment" },
        ],
        correctOption: 2,
      },
    ],

    force: [
      {
        id: 1,
        question:
          "Which of the following is not a fundamental force in nature?",
        options: [
          { id: 1, text: "Gravity" },
          { id: 2, text: "Electromagnetic force" },
          { id: 3, text: "Nuclear force" },
          { id: 4, text: "Centrifugal force" },
        ],
        correctOption: 4,
      },
      {
        id: 2,
        question:
          "What type of force keeps a satellite in orbit around the Earth?",
        options: [
          { id: 1, text: "Centrifugal force" },
          { id: 2, text: "Electromagnetic force" },
          { id: 3, text: "Gravitational force" },
          { id: 4, text: "Nuclear force" },
        ],
        correctOption: 3,
      },
      {
        id: 3,
        question: "Which scientist formulated the laws of motion?",
        options: [
          { id: 1, text: "Albert Einstein" },
          { id: 2, text: "Isaac Newton" },
          { id: 3, text: "Galileo Galilei" },
          { id: 4, text: "Nikola Tesla" },
        ],
        correctOption: 2,
      },
      {
        id: 4,
        question:
          "What happens to an object when the net force acting on it is zero?",
        options: [
          { id: 1, text: "It accelerates" },
          { id: 2, text: "It decelerates" },
          { id: 3, text: "It moves with constant velocity" },
          { id: 4, text: "It stops moving" },
        ],
        correctOption: 3,
      },
      {
        id: 5,
        question:
          "Which law of motion states that for every action, there is an equal and opposite reaction?",
        options: [
          { id: 1, text: "Newton's First Law" },
          { id: 2, text: "Newton's Second Law" },
          { id: 3, text: "Newton's Third Law" },
          { id: 4, text: "Law of Inertia" },
        ],
        correctOption: 3,
      },
      {
        id: 6,
        question:
          "In which scenario would an object experience the greatest acceleration?",
        options: [
          { id: 1, text: "A large truck moving at a constant speed" },
          { id: 2, text: "A small car moving at a constant speed" },
          { id: 3, text: "A falling feather in vacuum" },
          { id: 4, text: "A falling rock" },
        ],
        correctOption: 4,
      },
      {
        id: 7,
        question: "What force allows a bird to fly?",
        options: [
          { id: 1, text: "Electromagnetic force" },
          { id: 2, text: "Gravitational force" },
          { id: 3, text: "Lift force" },
          { id: 4, text: "Nuclear force" },
        ],
        correctOption: 3,
      },
      {
        id: 8,
        question: "Which instrument is used to measure force?",
        options: [
          { id: 1, text: "Barometer" },
          { id: 2, text: "Hygrometer" },
          { id: 3, text: "Thermometer" },
          { id: 4, text: "Dynamometer" },
        ],
        correctOption: 4,
      },
      {
        id: 9,
        question: "What is the SI unit of force?",
        options: [
          { id: 1, text: "Joule" },
          { id: 2, text: "Watt" },
          { id: 3, text: "Newton" },
          { id: 4, text: "Pascal" },
        ],
        correctOption: 3,
      },
      {
        id: 10,
        question:
          "Which of the following is an example of a non-contact force?",
        options: [
          { id: 1, text: "Frictional force" },
          { id: 2, text: "Tension force" },
          { id: 3, text: "Magnetic force" },
          { id: 4, text: "Normal force" },
        ],
        correctOption: 3,
      },
      {
        id: 11,
        question:
          "Which of Newton's laws describes the relationship between force, mass, and acceleration?",
        options: [
          { id: 1, text: "First law" },
          { id: 2, text: "Second law" },
          { id: 3, text: "Third law" },
          { id: 4, text: "Law of inertia" },
        ],
        correctOption: 2,
      },
      {
        id: 12,
        question:
          "What is the force that opposes the relative motion of two surfaces in contact?",
        options: [
          { id: 1, text: "Centripetal force" },
          { id: 2, text: "Tension force" },
          { id: 3, text: "Frictional force" },
          { id: 4, text: "Inertial force" },
        ],
        correctOption: 3,
      },
      {
        id: 13,
        question: "Which force keeps a car moving forward on a level road?",
        options: [
          { id: 1, text: "Frictional force" },
          { id: 2, text: "Tension force" },
          { id: 3, text: "Gravitational force" },
          { id: 4, text: "Engine force" },
        ],
        correctOption: 4,
      },
      {
        id: 14,
        question:
          "What is the force that acts on a parachute to slow down its descent?",
        options: [
          { id: 1, text: "Frictional force" },
          { id: 2, text: "Lift force" },
          { id: 3, text: "Buoyant force" },
          { id: 4, text: "Drag force" },
        ],
        correctOption: 4,
      },
      {
        id: 15,
        question: "Which force allows a boat to float on water?",
        options: [
          { id: 1, text: "Frictional force" },
          { id: 2, text: "Buoyant force" },
          { id: 3, text: "Magnetic force" },
          { id: 4, text: "Tension force" },
        ],
        correctOption: 2,
      },
      {
        id: 16,
        question:
          "Which type of force acts on a pendulum bob at its highest point?",
        options: [
          { id: 1, text: "Tension force" },
          { id: 2, text: "Gravitational force" },
          { id: 3, text: "Centripetal force" },
          { id: 4, text: "Normal force" },
        ],
        correctOption: 1,
      },
      {
        id: 17,
        question: "What force allows a rocket to propel through space?",
        options: [
          { id: 1, text: "Frictional force" },
          { id: 2, text: "Thrust force" },
          { id: 3, text: "Gravity force" },
          { id: 4, text: "Drag force" },
        ],
        correctOption: 2,
      },
      {
        id: 18,
        question:
          "What is the force that causes an object to move in a circular path?",
        options: [
          { id: 1, text: "Centrifugal force" },
          { id: 2, text: "Centripetal force" },
          { id: 3, text: "Tension force" },
          { id: 4, text: "Inertial force" },
        ],
        correctOption: 2,
      },
      {
        id: 19,
        question:
          "Which force is responsible for holding the atoms and molecules of a solid together?",
        options: [
          { id: 1, text: "Nuclear force" },
          { id: 2, text: "Electromagnetic force" },
          { id: 3, text: "Frictional force" },
          { id: 4, text: "Strong force" },
        ],
        correctOption: 2,
      },
      {
        id: 20,
        question:
          "What is the force exerted by a stretched spring or elastic object?",
        options: [
          { id: 1, text: "Tension force" },
          { id: 2, text: "Spring force" },
          { id: 3, text: "Resistive force" },
          { id: 4, text: "Shear force" },
        ],
        correctOption: 2,
      },
    ],

    space: [
      {
        id: 1,
        question: "Which planet is known as the Red Planet?",
        options: [
          { id: 1, text: "Mars" },
          { id: 2, text: "Jupiter" },
          { id: 3, text: "Saturn" },
          { id: 4, text: "Venus" },
        ],
        correctOption: 1,
      },
      {
        id: 2,
        question: "What is the closest star to Earth?",
        options: [
          { id: 1, text: "The Sun" },
          { id: 2, text: "Alpha Centauri" },
          { id: 3, text: "Proxima Centauri" },
          { id: 4, text: "Sirius" },
        ],
        correctOption: 1,
      },
      {
        id: 3,
        question: "Which planet is the largest in our Solar System?",
        options: [
          { id: 1, text: "Jupiter" },
          { id: 2, text: "Saturn" },
          { id: 3, text: "Uranus" },
          { id: 4, text: "Neptune" },
        ],
        correctOption: 1,
      },
      {
        id: 4,
        question: "What is the term for a moon that orbits around the Earth?",
        options: [
          { id: 1, text: "Satellite" },
          { id: 2, text: "Asteroid" },
          { id: 3, text: "Comet" },
          { id: 4, text: "Meteor" },
        ],
        correctOption: 1,
      },
      {
        id: 5,
        question:
          "What is the name of the galaxy that contains our Solar System?",
        options: [
          { id: 1, text: "Milky Way" },
          { id: 2, text: "Andromeda" },
          { id: 3, text: "Triangulum" },
          { id: 4, text: "Whirlpool" },
        ],
        correctOption: 1,
      },
      {
        id: 6,
        question:
          "What is the name of the force that keeps planets in orbit around the Sun?",
        options: [
          { id: 1, text: "Gravitational Force" },
          { id: 2, text: "Electromagnetic Force" },
          { id: 3, text: "Strong Nuclear Force" },
          { id: 4, text: "Weak Nuclear Force" },
        ],
        correctOption: 1,
      },
      {
        id: 7,
        question: "What type of celestial object is the Sun?",
        options: [
          { id: 1, text: "Star" },
          { id: 2, text: "Planet" },
          { id: 3, text: "Moon" },
          { id: 4, text: "Comet" },
        ],
        correctOption: 1,
      },
      {
        id: 8,
        question: "What is the term for a rocky object that orbits the Sun?",
        options: [
          { id: 1, text: "Asteroid" },
          { id: 2, text: "Planet" },
          { id: 3, text: "Meteor" },
          { id: 4, text: "Comet" },
        ],
        correctOption: 1,
      },
      {
        id: 9,
        question: "What is the name of the second planet from the Sun?",
        options: [
          { id: 1, text: "Venus" },
          { id: 2, text: "Earth" },
          { id: 3, text: "Mars" },
          { id: 4, text: "Mercury" },
        ],
        correctOption: 1,
      },
      {
        id: 10,
        question: "What is the boundary of the Solar System known as?",
        options: [
          { id: 1, text: "Heliopause" },
          { id: 2, text: "Oort Cloud" },
          { id: 3, text: "Kuiper Belt" },
          { id: 4, text: "Asteroid Belt" },
        ],
        correctOption: 1,
      },
      {
        id: 11,
        question: "What is the name of the largest moon of Saturn?",
        options: [
          { id: 1, text: "Titan" },
          { id: 2, text: "Ganymede" },
          { id: 3, text: "Callisto" },
          { id: 4, text: "Io" },
        ],
        correctOption: 1,
      },
      {
        id: 12,
        question:
          "What is the term for a massive cloud of gas and dust in space?",
        options: [
          { id: 1, text: "Nebula" },
          { id: 2, text: "Galaxy" },
          { id: 3, text: "Quasar" },
          { id: 4, text: "Pulsar" },
        ],
        correctOption: 1,
      },
      {
        id: 13,
        question:
          "What is the name of the force that causes objects to fall towards the Earth?",
        options: [
          { id: 1, text: "Gravity" },
          { id: 2, text: "Friction" },
          { id: 3, text: "Electromagnetic Force" },
          { id: 4, text: "Magnetic Force" },
        ],
        correctOption: 1,
      },
      {
        id: 14,
        question: "Which planet has the most extensive ring system?",
        options: [
          { id: 1, text: "Saturn" },
          { id: 2, text: "Jupiter" },
          { id: 3, text: "Uranus" },
          { id: 4, text: "Neptune" },
        ],
        correctOption: 1,
      },
    ],
    waveandsound: [
      {
        id: 1,
        question: "What is the speed of sound in air at room temperature?",
        options: [
          { id: 1, text: "343 m/s" },
          { id: 2, text: "300 m/s" },
          { id: 3, text: "400 m/s" },
          { id: 4, text: "500 m/s" },
        ],
        correctOption: 1,
      },
      {
        id: 2,
        question: "Which of the following is an example of a transverse wave?",
        options: [
          { id: 1, text: "Sound wave" },
          { id: 2, text: "Light wave" },
          { id: 3, text: "Seismic P-wave" },
          { id: 4, text: "Pressure wave" },
        ],
        correctOption: 2,
      },
      {
        id: 3,
        question: "What property of a wave is measured in Hertz (Hz)?",
        options: [
          { id: 1, text: "Wavelength" },
          { id: 2, text: "Amplitude" },
          { id: 3, text: "Frequency" },
          { id: 4, text: "Speed" },
        ],
        correctOption: 3,
      },
      {
        id: 4,
        question:
          "Which phenomenon explains the bending of waves around obstacles?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Refraction" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Interference" },
        ],
        correctOption: 3,
      },
      {
        id: 5,
        question: "What is the term for the highest point of a wave?",
        options: [
          { id: 1, text: "Trough" },
          { id: 2, text: "Peak" },
          { id: 3, text: "Crest" },
          { id: 4, text: "Amplitude" },
        ],
        correctOption: 3,
      },
      {
        id: 6,
        question: "What kind of wave requires a medium to travel through?",
        options: [
          { id: 1, text: "Electromagnetic wave" },
          { id: 2, text: "Transverse wave" },
          { id: 3, text: "Mechanical wave" },
          { id: 4, text: "Longitudinal wave" },
        ],
        correctOption: 3,
      },
      {
        id: 7,
        question: "Which of the following best describes the Doppler Effect?",
        options: [
          { id: 1, text: "Change in wave speed due to medium" },
          { id: 2, text: "Change in wave frequency due to motion" },
          { id: 3, text: "Change in wave amplitude due to interference" },
          { id: 4, text: "Change in wave direction due to reflection" },
        ],
        correctOption: 2,
      },
      {
        id: 8,
        question: "What is the unit of measurement for sound intensity?",
        options: [
          { id: 1, text: "Decibel (dB)" },
          { id: 2, text: "Hertz (Hz)" },
          { id: 3, text: "Meter (m)" },
          { id: 4, text: "Pascal (Pa)" },
        ],
        correctOption: 1,
      },
      {
        id: 9,
        question:
          "In which type of wave do particles of the medium move parallel to the direction of wave propagation?",
        options: [
          { id: 1, text: "Transverse wave" },
          { id: 2, text: "Longitudinal wave" },
          { id: 3, text: "Electromagnetic wave" },
          { id: 4, text: "Surface wave" },
        ],
        correctOption: 2,
      },
      {
        id: 10,
        question:
          "What is the phenomenon where two waves superpose to form a resultant wave of greater, lower, or the same amplitude?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Refraction" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Interference" },
        ],
        correctOption: 4,
      },
      {
        id: 11,
        question:
          "Which term describes the distance between successive crests of a wave?",
        options: [
          { id: 1, text: "Frequency" },
          { id: 2, text: "Amplitude" },
          { id: 3, text: "Wavelength" },
          { id: 4, text: "Period" },
        ],
        correctOption: 3,
      },
      {
        id: 12,
        question: "Sound waves in air are examples of which type of wave?",
        options: [
          { id: 1, text: "Transverse wave" },
          { id: 2, text: "Longitudinal wave" },
          { id: 3, text: "Electromagnetic wave" },
          { id: 4, text: "Surface wave" },
        ],
        correctOption: 2,
      },
      {
        id: 13,
        question:
          "Which physical quantity is described by the height of a wave's crest?",
        options: [
          { id: 1, text: "Frequency" },
          { id: 2, text: "Wavelength" },
          { id: 3, text: "Amplitude" },
          { id: 4, text: "Speed" },
        ],
        correctOption: 3,
      },
      {
        id: 14,
        question:
          "What happens to the wavelength of a sound wave as its frequency increases?",
        options: [
          { id: 1, text: "Wavelength increases" },
          { id: 2, text: "Wavelength decreases" },
          { id: 3, text: "Wavelength remains the same" },
          { id: 4, text: "Wavelength doubles" },
        ],
        correctOption: 2,
      },
      {
        id: 15,
        question: "Which type of wave can travel through the vacuum of space?",
        options: [
          { id: 1, text: "Sound wave" },
          { id: 2, text: "Water wave" },
          { id: 3, text: "Electromagnetic wave" },
          { id: 4, text: "Seismic wave" },
        ],
        correctOption: 3,
      },
      {
        id: 16,
        question:
          "What is the relationship between the frequency and period of a wave?",
        options: [
          { id: 1, text: "They are directly proportional" },
          { id: 2, text: "They are inversely proportional" },
          { id: 3, text: "They are unrelated" },
          { id: 4, text: "They are equal" },
        ],
        correctOption: 2,
      },
      {
        id: 17,
        question:
          "Which term describes the bending of waves due to a change in speed when they pass from one medium to another?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Refraction" },
          { id: 3, text: "Diffraction" },
          { id: 4, text: "Interference" },
        ],
        correctOption: 2,
      },
      {
        id: 18,
        question:
          "What is the name of the point on a standing wave with the maximum displacement?",
        options: [
          { id: 1, text: "Node" },
          { id: 2, text: "Antinode" },
          { id: 3, text: "Crest" },
          { id: 4, text: "Trough" },
        ],
        correctOption: 2,
      },
      {
        id: 19,
        question: "What is the primary cause of sound wave attenuation?",
        options: [
          { id: 1, text: "Reflection" },
          { id: 2, text: "Diffraction" },
          { id: 3, text: "Absorption" },
          { id: 4, text: "Interference" },
        ],
        correctOption: 3,
      },
      {
        id: 20,
        question:
          "What type of wave interaction results in a decrease in amplitude when two waves meet?",
        options: [
          { id: 1, text: "Constructive interference" },
          { id: 2, text: "Destructive interference" },
          { id: 3, text: "Reflection" },
          { id: 4, text: "Refraction" },
        ],
        correctOption: 2,
      },
    ],
    motion: [
      {
        id: 1,
        question: "What is the SI unit of speed?",
        options: [
          { id: 1, text: "m/s" },
          { id: 2, text: "km/h" },
          { id: 3, text: "mph" },
          { id: 4, text: "cm/s" },
        ],
        correctOption: 1,
      },
      {
        id: 2,
        question: "Which of the following is a scalar quantity?",
        options: [
          { id: 1, text: "Velocity" },
          { id: 2, text: "Displacement" },
          { id: 3, text: "Acceleration" },
          { id: 4, text: "Speed" },
        ],
        correctOption: 4,
      },
      {
        id: 3,
        question: "What is the formula for calculating acceleration?",
        options: [
          { id: 1, text: "a = v/t" },
          { id: 2, text: "a = v^2" },
          { id: 3, text: "a = Δv/Δt" },
          { id: 4, text: "a = v^2/t" },
        ],
        correctOption: 3,
      },
      {
        id: 4,
        question:
          "What does a horizontal line on a velocity-time graph represent?",
        options: [
          { id: 1, text: "Constant speed" },
          { id: 2, text: "Constant acceleration" },
          { id: 3, text: "Increasing speed" },
          { id: 4, text: "Decreasing speed" },
        ],
        correctOption: 1,
      },
      {
        id: 5,
        question: "Which of the following is a vector quantity?",
        options: [
          { id: 1, text: "Distance" },
          { id: 2, text: "Speed" },
          { id: 3, text: "Displacement" },
          { id: 4, text: "Time" },
        ],
        correctOption: 3,
      },
      {
        id: 6,
        question: "What is the unit of force?",
        options: [
          { id: 1, text: "Newton" },
          { id: 2, text: "Joule" },
          { id: 3, text: "Watt" },
          { id: 4, text: "Pascal" },
        ],
        correctOption: 1,
      },
      {
        id: 7,
        question: "What is the acceleration due to gravity on Earth?",
        options: [
          { id: 1, text: "9.8 m/s²" },
          { id: 2, text: "9.8 m/s" },
          { id: 3, text: "9.8 km/h" },
          { id: 4, text: "9.8 m/s³" },
        ],
        correctOption: 1,
      },
      {
        id: 8,
        question: "What is the formula for calculating velocity?",
        options: [
          { id: 1, text: "v = s/t" },
          { id: 2, text: "v = s × t" },
          { id: 3, text: "v = s²/t" },
          { id: 4, text: "v = s/t²" },
        ],
        correctOption: 1,
      },
      {
        id: 9,
        question: "Which of the following describes uniform motion?",
        options: [
          { id: 1, text: "Motion with changing speed" },
          { id: 2, text: "Motion with constant acceleration" },
          { id: 3, text: "Motion with constant speed" },
          { id: 4, text: "Motion with changing direction" },
        ],
        correctOption: 3,
      },
      {
        id: 10,
        question: "What is the term for the rate of change of velocity?",
        options: [
          { id: 1, text: "Speed" },
          { id: 2, text: "Acceleration" },
          { id: 3, text: "Displacement" },
          { id: 4, text: "Force" },
        ],
        correctOption: 2,
      },
      {
        id: 11,
        question: "Which of the following is an example of non-uniform motion?",
        options: [
          {
            id: 1,
            text: "A car moving at a constant speed on a straight road",
          },
          { id: 2, text: "A ball rolling down an inclined plane" },
          { id: 3, text: "A satellite orbiting the Earth" },
          { id: 4, text: "A pendulum swinging with constant amplitude" },
        ],
        correctOption: 2,
      },
      {
        id: 12,
        question: "What is the term for the distance covered per unit time?",
        options: [
          { id: 1, text: "Velocity" },
          { id: 2, text: "Speed" },
          { id: 3, text: "Acceleration" },
          { id: 4, text: "Displacement" },
        ],
        correctOption: 2,
      },
      {
        id: 13,
        question: "What does a slope on a distance-time graph represent?",
        options: [
          { id: 1, text: "Speed" },
          { id: 2, text: "Velocity" },
          { id: 3, text: "Acceleration" },
          { id: 4, text: "Displacement" },
        ],
        correctOption: 1,
      },
      {
        id: 14,
        question:
          "Which of the following equations represents Newton's Second Law of Motion?",
        options: [
          { id: 1, text: "F = ma" },
          { id: 2, text: "F = mv" },
          { id: 3, text: "F = m/a" },
          { id: 4, text: "F = ma²" },
        ],
        correctOption: 1,
      },
      {
        id: 15,
        question: "What is the term for the shortest path between two points?",
        options: [
          { id: 1, text: "Distance" },
          { id: 2, text: "Path length" },
          { id: 3, text: "Displacement" },
          { id: 4, text: "Trajectory" },
        ],
        correctOption: 3,
      },
      {
        id: 16,
        question: "What is the unit of displacement?",
        options: [
          { id: 1, text: "Meter" },
          { id: 2, text: "Second" },
          { id: 3, text: "Kilogram" },
          { id: 4, text: "Newton" },
        ],
        correctOption: 1,
      },
      {
        id: 17,
        question: "What does the area under a velocity-time graph represent?",
        options: [
          { id: 1, text: "Displacement" },
          { id: 2, text: "Acceleration" },
          { id: 3, text: "Speed" },
          { id: 4, text: "Distance" },
        ],
        correctOption: 1,
      },
      {
        id: 18,
        question:
          "Which of the following quantities is conserved in uniform circular motion?",
        options: [
          { id: 1, text: "Speed" },
          { id: 2, text: "Velocity" },
          { id: 3, text: "Acceleration" },
          { id: 4, text: "Momentum" },
        ],
        correctOption: 1,
      },
      {
        id: 19,
        question:
          "What is the formula for calculating displacement in uniform motion?",
        options: [
          { id: 1, text: "s = vt" },
          { id: 2, text: "s = at" },
          { id: 3, text: "s = v²t" },
          { id: 4, text: "s = at²" },
        ],
        correctOption: 1,
      },
      {
        id: 20,
        question:
          "What is the term for the tendency of an object to resist changes in its state of motion?",
        options: [
          { id: 1, text: "Inertia" },
          { id: 2, text: "Force" },
          { id: 3, text: "Mass" },
          { id: 4, text: "Momentum" },
        ],
        correctOption: 1,
      },
    ],
    energy: [
      {
        id: 1,
        question:
          "What is the primary source of energy for the Earth's climate system?",
        options: [
          { id: 1, text: "Solar energy" },
          { id: 2, text: "Geothermal energy" },
          { id: 3, text: "Wind energy" },
          { id: 4, text: "Tidal energy" },
        ],
        correctOption: 1,
      },
      {
        id: 2,
        question: "Which of the following is a non-renewable energy source?",
        options: [
          { id: 1, text: "Wind energy" },
          { id: 2, text: "Solar energy" },
          { id: 3, text: "Coal" },
          { id: 4, text: "Hydroelectric energy" },
        ],
        correctOption: 3,
      },
      {
        id: 3,
        question:
          "What is the unit of energy in the International System of Units (SI)?",
        options: [
          { id: 1, text: "Watt" },
          { id: 2, text: "Joule" },
          { id: 3, text: "Newton" },
          { id: 4, text: "Pascal" },
        ],
        correctOption: 2,
      },
      {
        id: 4,
        question:
          "Which of the following processes directly converts solar energy into electrical energy?",
        options: [
          { id: 1, text: "Solar thermal power" },
          { id: 2, text: "Photovoltaic cells" },
          { id: 3, text: "Hydroelectric power" },
          { id: 4, text: "Wind turbines" },
        ],
        correctOption: 2,
      },
      {
        id: 5,
        question: "What type of energy is stored in a battery?",
        options: [
          { id: 1, text: "Kinetic energy" },
          { id: 2, text: "Thermal energy" },
          { id: 3, text: "Chemical energy" },
          { id: 4, text: "Nuclear energy" },
        ],
        correctOption: 3,
      },
      {
        id: 6,
        question:
          "Which energy source is considered the most environmentally friendly?",
        options: [
          { id: 1, text: "Coal" },
          { id: 2, text: "Natural gas" },
          { id: 3, text: "Nuclear energy" },
          { id: 4, text: "Solar energy" },
        ],
        correctOption: 4,
      },
      {
        id: 7,
        question: "What is the main disadvantage of solar energy?",
        options: [
          { id: 1, text: "It is intermittent and weather dependent" },
          { id: 2, text: "It produces greenhouse gases" },
          { id: 3, text: "It is non-renewable" },
          { id: 4, text: "It requires a lot of water" },
        ],
        correctOption: 1,
      },
      {
        id: 8,
        question: "Which of the following is an example of kinetic energy?",
        options: [
          { id: 1, text: "A compressed spring" },
          { id: 2, text: "A moving car" },
          { id: 3, text: "A charged battery" },
          { id: 4, text: "A stretched rubber band" },
        ],
        correctOption: 2,
      },
      {
        id: 9,
        question:
          "What form of energy is harnessed from the heat within the Earth?",
        options: [
          { id: 1, text: "Solar energy" },
          { id: 2, text: "Geothermal energy" },
          { id: 3, text: "Nuclear energy" },
          { id: 4, text: "Wind energy" },
        ],
        correctOption: 2,
      },
      {
        id: 10,
        question:
          "What is the process of generating electricity by using water to turn turbines called?",
        options: [
          { id: 1, text: "Photovoltaic generation" },
          { id: 2, text: "Thermal generation" },
          { id: 3, text: "Hydroelectric generation" },
          { id: 4, text: "Nuclear generation" },
        ],
        correctOption: 3,
      },
      {
        id: 11,
        question: "Which energy source has the highest energy density?",
        options: [
          { id: 1, text: "Wind energy" },
          { id: 2, text: "Solar energy" },
          { id: 3, text: "Hydroelectric energy" },
          { id: 4, text: "Nuclear energy" },
        ],
        correctOption: 4,
      },
      {
        id: 12,
        question: "What is the main byproduct of burning fossil fuels?",
        options: [
          { id: 1, text: "Oxygen" },
          { id: 2, text: "Carbon dioxide" },
          { id: 3, text: "Hydrogen" },
          { id: 4, text: "Nitrogen" },
        ],
        correctOption: 2,
      },
      {
        id: 13,
        question: "Which of the following is a renewable energy source?",
        options: [
          { id: 1, text: "Natural gas" },
          { id: 2, text: "Coal" },
          { id: 3, text: "Wind energy" },
          { id: 4, text: "Oil" },
        ],
        correctOption: 3,
      },
      {
        id: 14,
        question:
          "What type of energy transformation occurs in a hydroelectric dam?",
        options: [
          { id: 1, text: "Thermal to mechanical" },
          { id: 2, text: "Mechanical to electrical" },
          { id: 3, text: "Chemical to thermal" },
          { id: 4, text: "Nuclear to thermal" },
        ],
        correctOption: 2,
      },
      {
        id: 15,
        question: "What is the efficiency of a typical coal-fired power plant?",
        options: [
          { id: 1, text: "30-40%" },
          { id: 2, text: "50-60%" },
          { id: 3, text: "70-80%" },
          { id: 4, text: "90-100%" },
        ],
        correctOption: 1,
      },
      {
        id: 16,
        question: "Which of the following is not a greenhouse gas?",
        options: [
          { id: 1, text: "Carbon dioxide" },
          { id: 2, text: "Methane" },
          { id: 3, text: "Nitrous oxide" },
          { id: 4, text: "Oxygen" },
        ],
        correctOption: 4,
      },
      {
        id: 17,
        question: "What is the main component of natural gas?",
        options: [
          { id: 1, text: "Methane" },
          { id: 2, text: "Ethane" },
          { id: 3, text: "Propane" },
          { id: 4, text: "Butane" },
        ],
        correctOption: 1,
      },
      {
        id: 18,
        question: "What type of energy is produced by splitting atomic nuclei?",
        options: [
          { id: 1, text: "Thermal energy" },
          { id: 2, text: "Nuclear energy" },
          { id: 3, text: "Chemical energy" },
          { id: 4, text: "Mechanical energy" },
        ],
        correctOption: 2,
      },
      {
        id: 19,
        question: "Which of the following is a disadvantage of wind energy?",
        options: [
          { id: 1, text: "It is non-renewable" },
          { id: 2, text: "It produces air pollution" },
          { id: 3, text: "It can be intermittent and dependent on weather" },
          { id: 4, text: "It requires fossil fuels" },
        ],
        correctOption: 3,
      },
      {
        id: 20,
        question:
          "What is the main advantage of using renewable energy sources?",
        options: [
          { id: 1, text: "They are non-renewable" },
          { id: 2, text: "They are always available" },
          { id: 3, text: "They do not produce greenhouse gases" },
          { id: 4, text: "They are inexpensive to install" },
        ],
        correctOption: 3,
      },
    ],
  };
  useEffect(() => {
    let timer = null;

    if (quizStarted && !submitted && currentSet.length > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleTimeExpired(); // Handle timer expiration
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup timer on unmount or reset
  }, [quizStarted, currentSet, submitted]);

  useEffect(() => {
    if (!initialized) {
      resetQuiz();
      setInitialized(true);
    }
  }, [initialized]);

  const handleSubmit = () => {
    if (!selectedTopic) {
      alert("Please select a topic first.");
      return;
    }

    const currentQuestions = currentSet;

    const unansweredQuestions = currentQuestions.filter(
      (q) => !selectedOptions[q.id]
    );
    if (unansweredQuestions.length > 0) {
      alert("Please answer all questions before submitting.");
      return;
    }

    let totalScore = 0;

    currentQuestions.forEach((q) => {
      if (selectedOptions[q.id] && selectedOptions[q.id] === q.correctOption) {
        totalScore += 1;
      }
    });

    setScore(totalScore);
    setSubmitted(true);
    setShowFeedback(true);
  };

  const handleOptionSelect = (questionId, optionId) => {
    if (!submitted) {
      setSelectedOptions({
        ...selectedOptions,
        [questionId]: optionId,
      });
    }
  };

  const getOptionText = (question, optionId) => {
    const option = question.options.find((o) => o.id === optionId);
    return option ? option.text : "";
  };

  const handleTimeExpired = () => {
    setTimeExpired(true);
    resetQuiz();
  };

  const resetQuiz = () => {
   setSelectedOptions({});
    setScore(0);
    setSubmitted(false);
    setShowAnswerSheet(false);
    setShowFeedback(false);
    setTimeLeft(120); // Reset the timer
    setTimeExpired(false);
    setQuizStarted(false); 
  };

  const startQuiz = () => {
    setShowAnswerSheet(false);
    if (!selectedTopic) {
      alert("Please select a topic first.");
      return;
    }

    const selectedQuestions = topics[selectedTopic]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    setCurrentSet(selectedQuestions);
    resetQuiz();
    setQuizStarted(true); // Mark quiz as started
  };

  const showAnswers = () => {
    setShowAnswerSheet(true);
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-white-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-sky-800">Quiz on Topics</h1>
      {!submitted && !timeExpired && (
        <div className="fixed top-4 right-4 bg-white shadow-lg p-4 rounded-md border border-gray-300">
          {showCalculator && (
            <motion.div
              className="calculator-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Assuming Calculator component is defined somewhere */}
              <Calculator />
            </motion.div>
          )}

          <div className="text-red-500 text-lg font-semibold">
            Time left: {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
          </div>
        </div>
      )}

      {!submitted && !timeExpired && (
        <div className="flex flex-col items-center w-full">
          <div className="flex space-x-4 mb-4">
            {Object.keys(topics).map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded ${
                  selectedTopic === topic
                    ? "bg-blue-500 text-white font-semibold"
                    : "bg-gray-200 font-semibold"
                }`}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </div>
          <button
            onClick={startQuiz}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Start
          </button>
        </div>
      )}

      {!submitted && !timeExpired && currentSet.length > 0 && (
        <div className="p-8 h-full">
          <div className="h-full">
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
                {showCalculator ? "Hide Calculator" : "Show Calculator"}
              </button>
            </motion.div>

            {currentSet.map((q, index) => (
              <div key={q.id} className="mb-4">
                <p className="mb-2 font-semibold">{`${index + 1}. ${
                  q.question
                }`}</p>
                <ul>
                  {q.options.map((option) => (
                    <li key={option.id} className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={option.id}
                          onChange={() => handleOptionSelect(q.id, option.id)}
                          className="mr-2"
                          checked={selectedOptions[q.id] === option.id}
                        />
                        {option.text}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex justify-between w-full mt-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {submitted && (
        <div className="p-8 h-full">
          <h2 className="text-xl font-semibold mb-4">Quiz Results</h2>
          <p className="mb-4">
            Your score: {score} / {currentSet.length}
          </p>
          <div className="flex space-x-5 mb-5">
            {Object.keys(topics).map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded ${
                  selectedTopic === topic
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </div>
          <button
            onClick={startQuiz}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Take Another Quiz
          </button>
          {!showAnswerSheet && (
            <button
              onClick={showAnswers}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
            >
              Show Answer Sheet
            </button>
          )}
          {showAnswerSheet && (
            <button
              onClick={() => setShowAnswerSheet(false)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-4"
            >
              Hide Answer Sheet
            </button>
          )}
          {showAnswerSheet && (
            <div className="answer-sheet mt-4">
              {currentSet.map((q, index) => (
                <div key={q.id} className="mb-4">
                  <p className="mb-2 font-semibold">{`${index + 1}. ${
                    q.question
                  }`}</p>
                  <p className="mb-2 text-gray-700">
                    Your answer: {getOptionText(q, selectedOptions[q.id])}
                  </p>
                  <p className="text-green-700">
                    Correct answer: {getOptionText(q, q.correctOption)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {timeExpired && !submitted && (
        <div className="p-8 h-full">
          <h2 className="text-xl font-semibold mb-4">Time's Up!</h2>
          <p className="mb-4">
            Your score: {score} / {currentSet.length}
          </p>
          <div className="flex space-x-5 mb-5">
            {Object.keys(topics).map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded ${
                  selectedTopic === topic
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </div>
          <button
            onClick={startQuiz}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
           Take Another Quiz
          </button>
          {!showAnswerSheet && (
            <button
              onClick={showAnswers}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
            >
              Show Answer Sheet
            </button>
          )}
          {showAnswerSheet && (
            <button
              onClick={() => setShowAnswerSheet(false)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-4"
            >
              Hide Answer Sheet
            </button>
          )}
          {showAnswerSheet && (
            <div className="answer-sheet mt-4">
              {currentSet.map((q, index) => (
                <div key={q.id} className="mb-4">
                  <p className="mb-2 font-semibold">{`${index + 1}. ${
                    q.question
                  }`}</p>
                  <p className="mb-2 text-gray-700">
                    Your answer: {getOptionText(q, selectedOptions[q.id])}
                  </p>
                  <p className="text-green-700">
                    Correct answer: {getOptionText(q, q.correctOption)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
