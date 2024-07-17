import React, { useState, useEffect } from "react";
import { downloadPDF } from "../utils/pdf";
import "./Light.css";
import pin from "../images/pin.jpeg";
import light from "../images/light.jpeg";
import camera from "../images/camera.png";

import o from "../images/1.jpg";
import i from "../images/2.jpg";
import a from "../images/3.jpg";
import t from "../images/4.jpg";
import j from "../images/5.jpg";

import eye from "../images/eyelight.png";
import see from "../images/see.png";

import Calculator from "../components/Calculator";
import { motion } from "framer-motion";
import speed from "../images/speedlight.gif";

import reflection from "../images/reflection.png";
import reflection2 from "../images/reflection.jpg";
import o2 from "../images/1.jpeg";

import refraction2 from "../images/refraction2.jpg";
import refraction from "../images/refraction.png";

import d from "../images/d.jpeg";
import r from "../images/r.jpeg";
import i2 from "../images/i.jpeg";

import { Link } from "react-router-dom";
import { GiSoundWaves } from "react-icons/gi";

export default function Light() {
  const unlockNextLevel = () => {
    window.location.reload();
    window.location.href = "/lightquiz";
  };
  const [isLightOn, setIsLightOn] = useState(true);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [isCorrect1, setIsCorrect1] = useState(null);
  const [isCorrect2, setIsCorrect2] = useState(null);
  useEffect(() => {
    if (location.pathname === "/light") {
      const scriptConfig = document.createElement("script");
      scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "i7C9I_1eouolQfwkbX3oo",
        domain: "www.chatbase.co"
      };
    `;
      document.body.appendChild(scriptConfig);

      const scriptEmbed = document.createElement("script");
      scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
      scriptEmbed.setAttribute("chatbotId", "i7C9I_1eouolQfwkbX3oo");
      scriptEmbed.setAttribute("domain", "www.chatbase.co");
      scriptEmbed.defer = true;
      document.body.appendChild(scriptEmbed);

      return () => {
        document.body.removeChild(scriptConfig);
        document.body.removeChild(scriptEmbed);
      };
    }
  }, [location.pathname]);

  // Correct answers and calculations
  const correctAnswer1 = "37.5";
  const correctAnswer2 = "1.33";
  const correctAnswer = "390000000";

  const checkAnswer = () => {
    if (userAnswer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  const calculateResult1 = () => {
    const value = parseFloat(answer1);
    if (!isNaN(value)) {
      const result = value * 1.5;
      setResult1(result.toFixed(2));
    }
  };

  const calculateResult2 = () => {
    const value = parseFloat(answer2);
    if (!isNaN(value)) {
      const result = 1 / value;
      setResult2(result.toFixed(2));
    }
  };

  const checkAnswer1 = () => {
    if (answer1 === correctAnswer1) {
      setIsCorrect1(true);
    } else {
      setIsCorrect1(false);
    }
  };

  const checkAnswer2 = () => {
    if (answer2 === correctAnswer2) {
      setIsCorrect2(true);
    } else {
      setIsCorrect2(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-white-500 min-h-screen relative">
      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-4 mt-8" id="pdfContent">
        <h1 className="text-3xl font-bold mb-8 text-yellow-800">
          Light: Understanding Shadows and Refraction
        </h1>
        <div className="flex justify-center mb-8">
          <img
            src={light}
            alt="Illustration"
            style={{ width: "550px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">
          What is Light?
        </h2>
        <p className="mb-4">
          <b>Light</b> is a way of transferring energy. Light sources give out
          light, so we say they are luminous. Energy is transferred from the Sun
          to the Earth by light waves. Light can reach us from the Sun and other
          stars. It can travel through empty space because, unlike sound, light
          does not need a medium to travel through. Infrared radiation, called
          heat or thermal energy, is very similar to light and is another method
          by which energy reaches us from the Sun.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Shadows</h2>

        <p className="mb-4">
          Shadows are dark areas where something blocks out light. They are
          formed because light travels in straight lines and does not bend round
          corners, so if something is in its path the light is blocked. On a
          sunny day you can look down and see your shadow on the ground. The
          light from the Sun cannot pass through you because you are opaque and
          block out the light.
        </p>
        <p className="mb-4">
          Sometimes shadows have fuzzy edges and sometimes they have sharp
          edges. It depends on the type of light source. If the light source is
          small, there is a full shadow called an umbra and the edges of the
          shadow are sharp. If the light source is large or spread out, there is
          a partial shadow called a penumbra as well as an umbra and the edges
          of the shadow appear blurred.
        </p>
      </div>

      {/* Light Animation Circle and Explanation */}
      <div className="max-w-screen-lg mx-auto px-4 mt-8 flex items-center">
        <div className={`light-circle ${isLightOn ? "on" : "off"}`} />
        <button
          className={`ml-4 px-4 py-2 rounded-lg ${
            isLightOn
              ? "bg-yellow-400 text-yellow-900"
              : "bg-gray-400 text-gray-800"
          }`}
          onClick={toggleLight}
        >
          {isLightOn ? "Light On" : "Light Off"}
        </button>
        <p className="text-yellow-800 ml-4">
          {isLightOn
            ? "Light is a form of electromagnetic radiation that allows us to see things."
            : "When light is off, it is no longer emitting visible electromagnetic waves."}
        </p>
      </div>

      {/* Additional Content Section */}
      <div className="max-w-screen-lg mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">
          Line of Sight
        </h2>

        <div className="flex justify-center mb-8">
          <img
            src={pin}
            alt="Illustration"
            style={{ width: "550px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mb-4">
          You can demonstrate that light travels in straight lines using holes
          cut in card. You cannot see the candle unless all three holes are
          exactly lined up.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Cameras</h2>
        <p className="mb-4">
          If you take a picture of a friend with a camera, light is reflected
          from your friend and goes into the camera. Your friend is the object,
          and an image is formed at the back of the camera. The image is formed
          because light travels in straight lines.
        </p>
        <p className="mb-4">
          A pinhole camera is a very simple camera. It is a box with a very
          small hole at the front made with a pin. At the back is a translucent
          screen where you can see the image. The image is not very bright
          because only a small amount of light can get through the hole. Over
          1000 years ago Al-Haytham, an Arab scientist, explained how a pinhole
          camera works. The light from the top of the object forms the bottom of
          the image. The image is upside down, or inverted. An image that is the
          right way up is upright.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={camera}
            alt="Illustration"
            style={{ width: "550px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="mb-4">
          <b>IN SUMMARY,</b> Light waves transfer energy from sources such as
          the Sun. Anything that gives out light is luminous. Shadows are formed
          because some objects are opaque. Light travels in straight lines. This
          explains how shadows and images are formed. A camera forms an inverted
          image on a screen.
        </p>

        <h1 className="light2-section-title">
          Exploring Light: A Colorful Journey
        </h1>

        {/* History of Study on Light */}
        <div className="light2-history-section">
          <h2 className="light2-subsection-title">History of Study on Light</h2>
          <div className="flex flex-wrap">
            {/* Left-aligned paragraph */}
            <div className="light2-history-text light2-left">
              <p>
                The study of light dates back to ancient civilizations, where
                philosophers like Aristotle (384–322 BC) proposed theories on
                light and vision, though they primarily viewed light as emitted
                from the eye rather than an external source.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Right-aligned paragraph */}
            <div className="light2-history-text light2-right">
              <p>
                In the Islamic Golden Age, scholars like Ibn al-Haytham
                (965–1040 AD) made significant advancements in optics. Known as
                the father of optics, he wrote the influential Book of Optics,
                explaining the nature of light and vision through
                experimentation and observation.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Center-aligned paragraph */}
            <div className="light2-history-text light2-center">
              <p>
                During the Renaissance, European thinkers such as Sir Isaac
                Newton (1643–1727) conducted experiments with prisms,
                discovering that white light is composed of different colors.
                This breakthrough laid the foundation for the modern
                understanding of the spectrum of light and color.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Left-aligned paragraph */}
            <div className="light2-history-text light2-left">
              <p>
                In the 19th and 20th centuries, Albert Einstein (1879–1955)
                proposed the theory of relativity, which transformed our
                understanding of light by describing it as both waves and
                particles, fundamentally influencing fields from physics to
                astronomy.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Right-aligned paragraph */}
            <div className="light2-history-text light2-right">
              <p>
                The wave theory of light was further developed by Thomas Young
                (1773–1829), an English scientist who conducted the famous
                double-slit experiment, providing evidence for light's wave-like
                nature and contributing significantly to optics.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Center-aligned paragraph */}
            <div className="light2-history-text light2-center">
              <p>
                James Clerk Maxwell (1831–1879) formulated the electromagnetic
                theory of light, linking electricity and magnetism. His
                equations unified the understanding of light, paving the way for
                technologies such as radio waves and modern optics.
              </p>
            </div>
          </div>
        </div>

        {/* Notable Figures */}
        <div className="light2-figure">
          <div className="flex justify-center mb-8">
            <img
              src={o}
              alt="Illustration"
              style={{ width: "250px", height: "auto" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="light2-figure-caption">
            <p className="light2-figure-name">Ibn al-Haytham</p>
            <p className="light2-figure-description">
              Known as the father of optics, he made significant advancements in
              understanding light and vision.
            </p>
          </div>
        </div>
        <div className="light2-notable-figures">
          <div className="light2-figure">
            <div className="flex justify-center mb-8">
              <img
                src={i}
                alt="Illustration"
                style={{ width: "250px", height: "auto" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="light2-figure-caption">
              <p className="light2-figure-name">Sir Isaac Newton</p>
              <p className="light2-figure-description">
                Discovered that white light is composed of different colors.
              </p>
            </div>
          </div>

          <div className="light2-figure">
            <div className="flex justify-center mb-8">
              <img
                src={a}
                alt="Illustration"
                style={{ width: "250px", height: "auto" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="light2-figure-caption">
              <p className="light2-figure-name">Albert Einstein</p>
              <p className="light2-figure-description">
                Proposed the theory of relativity, which impacts our
                understanding of light.
              </p>
            </div>
          </div>

          <div className="light2-figure">
            <div className="flex justify-center mb-8">
              <img
                src={t}
                alt="Illustration"
                style={{ width: "250px", height: "auto" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="light2-figure-caption">
              <p className="light2-figure-name">Thomas Young</p>
              <p className="light2-figure-description">
                Introduced the wave theory of light and made significant
                contributions to optics.
              </p>
            </div>
          </div>

          <div className="light2-figure">
            <div className="flex justify-center mb-8">
              <img
                src={j}
                alt="Illustration"
                style={{ width: "250px", height: "auto" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="light2-figure-caption">
              <p className="light2-figure-name">James Clerk Maxwell</p>
              <p className="light2-figure-description">
                Formulated the electromagnetic theory of light, linking
                electricity and magnetism.
              </p>
            </div>
          </div>
        </div>
        <h1 className="section-title">How Do We See Things? A Light Journey</h1>

        <motion.div
          className="light-journey"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">A Light Journey</h2>
          <p className="mb-4">
            Imagine light traveling from a source to your eyes. Here is a simple
            way to understand how we see things:
          </p>
          <div className="flex justify-center mb-8">
            <img
              src={see}
              alt="Illustration"
              style={{ width: "550px", height: "auto" }}
              className="rounded-lg shadow-lg"
            />
          </div>
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
              <b>Transmitted:</b> Light passes through an object, like clear
              glass.
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
              <b>Absorbed:</b> Light is taken in by an object, which can make
              the object warmer.
            </motion.li>
          </ul>
          <p className="mb-4">
            When light is emitted from a source, it travels and can be
            transmitted through some materials, reflected off surfaces, or
            absorbed by objects.
          </p>
        </motion.div>

        <motion.div
          className="light-behavior"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Light Behavior</h2>
          <p className="mb-4">Light behaves in different ways:</p>
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
              <b>Refraction:</b> Light bending as it passes through different
              materials.
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
            For example, when you are in a dark room, it’s harder to see
            compared to a bright room due to the lower amount of light
            available.
          </p>
          <p className="mb-4">
            Light spreads out as it moves away from the source, so it appears
            dimmer from farther away.
          </p>
        </motion.div>

        <motion.div
          className="l3-comparison-table"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Comparing the Eye and a Pinhole Camera</h2>
          <table className="l3-comparison-table">
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
          <ul className="list-disc list-inside mb-4 text-left">
            <li>
              Explain the difference between the words ‘emit’ and ‘transmit’.
            </li>
            <li>
              Is the Moon a luminous or a non-luminous object? Explain your
              answer.
            </li>
            <li>
              Why is it harder to see dark-colored cars at night than
              light-colored ones?
            </li>
            <li>
              Extension: the eye works in a similar way to the pinhole
              camera. Complete the table to compare them.
            </li>
          </ul>
        </motion.div>
        <h1 className="section-title">Understanding the Speed of Light</h1>

        <motion.div
          className="introduction"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-8">
            <img
              src={speed}
              alt="Illustration"
              style={{ width: "800px", height: "auto" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <h2 className="subsection-title">6.3 The Speed of Light</h2>
          <p className="mb-4">
            The speed of light is the fastest speed that there is. Nothing
            travels faster than light. There are many ways to express the speed
            of light:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>300 million m/s</li>
            <li>300,000,000 m/s</li>
            <li>300,000 km/s</li>
            <li>300,000 thousand km/s</li>
          </ul>
          <p className="mb-4">
            Using the speed of light, astronomers can measure enormous
            distances. For example:
          </p>
          <ul className="list-disc list-inside mb-4 text-left">
            <li>Earth to the Moon: 384,400 km</li>
            <li>Earth to the Sun: 150,000,000 km</li>
            <li>Earth to Neptune: 4,500,000,000 km</li>
          </ul>
          <p className="mb-4">
            Astronomers use a unit called a "light year" to describe these vast
            distances: A light year is the distance light travels in one year,
            approximately 9 trillion km.
          </p>
        </motion.div>

        {/* Animations */}
        <motion.div
          className="light4-space-animation-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="l4-animation-container">
            <div className="l4-sun">
              <div className="l4-earth-orbit">
                <div className="l4-earth">
                  <div className="l4-moon-orbit">
                    <div className="l4-moon"></div>
                  </div>
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
            The animation above shows the Sun, Earth, and Moon. The Earth orbits
            around the Sun, and the Moon orbits around the Earth. This is a
            simplified model of how objects in our solar system move. The light
            from the Sun travels through space to reach the Earth, and the
            Earth’s gravity keeps the Moon in orbit.
          </p>
        </motion.div>

        <motion.div
          className="calculation"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">
            Practicer: Calculate the Distance
          </h2>
          <p className="mb-4">
            If light travels from the Moon to the Earth in 1.3 seconds,
            calculate the distance between the Moon and the Earth using the
            speed of light (300,000,000 m/s). What is the distance in meters?
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
            <p
              className={`mb-4 ${
                isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCorrect ? "Correct! 🎉" : "Try Again! ❌"}
            </p>
          )}

          {/* Calculator Toggle Button */}
        </motion.div>
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
        </motion.div>

        <motion.div
          className="space-facts"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Fun Facts About Light</h2>
          <ul className="list-disc list-inside mb-4 text-left">
            <li>
              It takes light 8 minutes to travel from the Sun to the Earth.
            </li>
            <li>
              The nearest star to Earth is Proxima Centauri, located about 4.1
              light years away.
            </li>
            <li>
              The Milky Way galaxy has a diameter of about 100,000 light years.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="questions"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Questions to Think About</h2>
          <ul className="list-disc list-inside mb-4 text-left">
            <li>
              1. Why do astronomers use light years instead of kilometers for
              measuring distances in space?
            </li>
            <li>
              2. How long does it take light to travel from the Sun to the
              Earth?
            </li>
            <li>3. How far is Proxima Centauri from Earth in light years?</li>
          </ul>
        </motion.div>
        <h1 className="section-title">Understanding Reflection</h1>

        <motion.div
          className="introduction"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-8">
            <div className="l5-figure">
              <img
                src={reflection2}
                alt="reflection"
                className="l5-figure-image"
              />
              <div className="l5-figure-caption">
                <p className="l5-figure-name">Reflection</p>
              </div>
            </div>
          </div>

          <h2 className="subsection-title">Reflection</h2>
          <p className="mb-4">
            Looking in a mirror, we often see reflections. Water can behave like
            a mirror and reflect animals or the sky. Adinda is looking in a flat
            mirror, or plane mirror. We call her reflection an image. It is the
            right way up, the same size, and the same colour as Adinda. If she
            moves closer to the mirror, the image moves closer, and if she moves
            away, the image moves away. The image always appears to be the same
            distance behind the mirror as Adinda is in front of it.
          </p>
          <p className="mb-4">
            There is nothing behind the mirror – no light can get through it. We
            say that the image is virtual – another Adinda does not exist behind
            the mirror. She needs to look in the mirror to see her image. If you
            go to watch a movie, the pictures are projected onto a screen.
            Images that are projected onto a screen are called real images. The
            image in a pinhole camera is also real.
          </p>
          <p className="mb-4">
            If Adinda holds up her left hand, the image she sees in the mirror
            appears to be holding up her right hand. We say that the image we
            see in a mirror is laterally inverted. In these pictures, the word
            AMBULANCE is laterally inverted on the front of the vehicle, but not
            on the back.
          </p>
        </motion.div>
        <div className="flex justify-center mb-8">
          <div className="l5-figure">
            <img
              src={reflection}
              alt="reflection"
              className="l5-figure-image"
            />
            <div className="l5-figure-caption">
              <p className="l5-figure-name">Reflection</p>
            </div>
          </div>
        </div>

        <motion.div
          className="explanation"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">
            How is the Image in a Mirror Formed?
          </h2>
          <p className="mb-4">
            Light from an object such as a candle reflects off the mirror into
            your eyes. Your brain knows that light travels in straight lines, so
            it assumes that the light has come from where it sees the image. A
            ray diagram shows how the image is formed. A ray diagram is a model
            of what is happening when the image is formed. Light spreads out
            from a source in all directions. Some of the light from the candle
            will be reflected from the mirror. There are millions of different
            paths that the light can take as it leaves the candle. We choose two
            paths that the light takes to help us to work out where the image
            is.
          </p>
          <p className="mb-4">
            An image is formed when you look at yourself in the mirror. Light
            from a source like a light bulb reflects off your face, then off the
            mirror into your eye. The light from the top of your face appears to
            come from the top of the image. The light from the bottom of your
            face appears to come from the bottom of the image. The image is the
            right way up.
          </p>
        </motion.div>

        <motion.div
          className="types-of-reflection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Types of Reflection</h2>
          <p className="mb-4">
            All surfaces, rough or smooth, reflect some light. The image that
            you see in a mirror is very clear. An image on water will only be
            clear if the water is flat. If the water’s surface is very rough,
            you do not see an image at all. The light must be reflected in a
            regular way to see an image.
          </p>
          <p className="mb-4">
            A piece of white paper reflects most of the light that hits it, but
            you cannot see an image in it. This is because the surface is rough
            and the reflection is diffuse. The light is scattered from the
            surface.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              You see an image when light reflects from a smooth surface such as
              a mirror, water, or glass.
            </li>
            <li>The image is virtual and laterally inverted.</li>
            <li>
              You do not see images in rough surfaces because the reflection is
              diffuse.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="law-of-reflection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">
            Making Measurements: The Law of Reflection
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src={o2}
              alt="Illustration"
              style={{ width: "450px", height: "auto" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="mb-4">
            Light reflects off a smooth shiny surface, such as a mirror, in a
            regular way. A ray of light, called the incident ray, hits a mirror
            at a particular angle. You can measure this angle. First, draw a
            line at right angles to the mirror at the point where the ray hits
            it. This line is called the normal. The angle of incidence is the
            angle between the normal and the incident ray, and is usually
            labelled i. (The angle of incidence is not the angle between the
            mirror and the ray.) The ray reflects off the mirror. The angle
            between the normal and the reflected ray is the angle of reflection,
            labelled r.
          </p>
          <p className="mb-4">
            The angle of incidence = the angle of reflection. This is the law of
            reflection.
          </p>
          <p className="mb-4">
            Arjun and Diya are investigating the reflection of light in a
            mirror. They set up a ray box, a device that shines a ray of light.
            Arjun places a mirror to reflect the ray of light. They draw the
            mirror and the normal on some paper. Arjun puts the mirror on top of
            the diagram and shines the ray box at the mirror, making sure the
            ray hits the mirror where the normal is drawn.
          </p>
          <p className="mb-4">
            To measure the angle of incidence and the angle of reflection, they
            draw two dots on the paper under each ray, then draw the rays. They
            move the ray box to make different angles, and each time they draw
            the angle of incidence and the angle of reflection. Diya records
            their results in a table.
          </p>
          <table className="mb-4 w-full table-fixed border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">
                  Angle of incidence (°)
                </th>
                <th className="border border-gray-300 p-2">
                  Angle of reflection (°)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">10</td>
                <td className="border border-gray-300 p-2">12</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">30</td>
                <td className="border border-gray-300 p-2">29</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">50</td>
                <td className="border border-gray-300 p-2">51</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">70</td>
                <td className="border border-gray-300 p-2">68</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Thought-Provoking Questions */}
        <motion.div
          className="questions"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Questions</h2>
          <ol className="list-decimal list-inside mb-4 text-left">
            <li className="mb-2">
              Which CAPITAL letters of the alphabet look the same in a mirror?
            </li>
            <li className="mb-2">
              If you close your right eye, which eye does your mirror image
              close?
            </li>
            <li className="mb-2">
              Explain why the word ‘ambulance’ is laterally inverted on the
              front of the vehicle but not on the back.
            </li>
            <li className="mb-2">
              Different surfaces reflect light in different ways.
              <ol className="list-disc list-inside ml-4">
                <li className="mb-2">
                  Explain why you can see your face in a shiny metal saucepan.
                </li>
                <li className="mb-2">
                  Sometimes you can see a faint reflection in the surface of a
                  shiny plate or cup. Why?
                </li>
                <li className="mb-2">
                  Explain why you cannot see a reflection in a painted white
                  wall.
                </li>
              </ol>
            </li>
            <li className="mb-2">
              Name two things that Arjun and Diya did to get accurate
              measurements of the angles in their experiment.
            </li>
            <li className="mb-2">
              Suggest one improvement that they could make to their method that
              would make the results more accurate.
            </li>
            <li className="mb-2">
              Look at the drawing of the periscope. What are the angles of
              incidence and reflection at each mirror?
            </li>
            <li className="mb-2">
              A student does an experiment with a mirror. She measures the angle
              between the mirror and an incident ray and finds that it is 30°.
              <ol className="list-disc list-inside ml-4">
                <li className="mb-2">What is the angle of incidence?</li>
                <li className="mb-2">What is the angle of reflection?</li>
              </ol>
            </li>
          </ol>
        </motion.div>
        <h1 className="section-title">Exploring Refraction</h1>

        <motion.div
          className="introduction"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-8">
            <div className="l6-figure">
              <img
                src={refraction2}
                alt="refraction"
                className="l6-figure-image"
              />
              <div className="l6-figure-caption">
                <p className="l6-figure-name">Refraction</p>
              </div>
            </div>
          </div>

          <h2 className="subsection-title">What is Refraction?</h2>
          <p className="mb-4">
            Refraction is the bending of light as it passes from one medium to
            another. This change in direction happens because light travels at
            different speeds in different materials.
          </p>
          <p className="mb-4">
            When light moves from air to water, it slows down and bends towards
            the normal. Conversely, when light moves from water to air, it
            speeds up and bends away from the normal.
          </p>
        </motion.div>
        <div className="flex justify-center mb-8">
          <div className="l6-figure">
            <img
              src={refraction}
              alt="refraction"
              className="l6-figure-image"
            />
            <div className="l6-figure-caption">
              <p className="l6-figure-name">Refraction</p>
            </div>
          </div>
        </div>

        <motion.div
          className="explanation"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">How Refraction Occurs</h2>
          <p className="mb-4">
            Light refracts when it passes through the boundary between two
            materials with different densities. The change in speed causes the
            light to bend. This bending is described by Snell's Law:
          </p>
          <p className="mb-4 font-semibold">n₁ sin(θ₁) = n₂ sin(θ₂)</p>
          <p className="mb-4">
            Here, n₁ and n₂ are the refractive indices of the two materials, and
            θ₁ and θ₂ are the angles of incidence and refraction, respectively.
          </p>
        </motion.div>

        <motion.div
          className="refractive-index"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">The Refractive Index</h2>
          <p className="mb-4">
            The refractive index is a measure of how much light slows down in a
            medium compared to its speed in a vacuum. It is calculated as:
          </p>
          <p className="mb-4 font-semibold">
            Refractive Index (n) = Speed of Light in Vacuum / Speed of Light in
            Medium
          </p>
          <p className="mb-4">
            For example, the refractive index of water is about 1.33, meaning
            light travels 1.33 times slower in water than in a vacuum.
          </p>
        </motion.div>

        <motion.div
          className="total-internal-reflection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Total Internal Reflection</h2>
          <p className="mb-4">
            When light hits the boundary at a steep angle, it may not pass into
            the second medium but reflect entirely back into the first medium.
            This is called total internal reflection.
          </p>
          <p className="mb-4">
            The critical angle is the minimum angle of incidence at which total
            internal reflection occurs. It depends on the refractive indices of
            the two media.
          </p>
        </motion.div>

        <motion.div
          className="applications"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Applications of Refraction</h2>
          <p className="mb-4">Refraction is used in various optical devices:</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Optical Fibers:</strong> For high-speed communication
              through light signals.
            </li>
            <li>
              <strong>Eyeglasses and Magnifying Glasses:</strong> To correct
              vision and magnify objects.
            </li>
            <li>
              <strong>Periscopes:</strong> To see over obstacles using mirrors
              and refraction.
            </li>
          </ul>
        </motion.div>

        {/* Thought-Provoking Questions */}
        <motion.div
          className="questions"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Questions</h2>
          <ol className="list-decimal list-inside mb-4 text-left">
            <li className="mb-2">
              What happens to the speed of light when it moves from air to
              water?
            </li>
            <li className="mb-2">
              How can you calculate the refractive index of a medium?
            </li>
            <li className="mb-2">
              What is the critical angle, and how does it relate to total
              internal reflection?
            </li>
            <li className="mb-2">
              Explain why a straw looks bent when placed in a glass of water.
              <ol className="list-disc list-inside ml-4">
                <li className="mb-2">
                  What role does refraction play in this phenomenon?
                </li>
                <li className="mb-2">
                  How would the appearance of the straw change if the glass was
                  filled with a different liquid?
                </li>
              </ol>
            </li>
            <li className="mb-2">
              Describe one practical application of total internal reflection.
            </li>
          </ol>
        </motion.div>

        {/* First Calculation Question */}
        <motion.div
          className="calculation-question"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Calculation Question 1</h2>
          <p className="mb-4">
            If the angle of refraction is 25 degrees, calculate the angle of
            incidence using Snell's Law (n₁ sin(θ₁) = n₂ sin(θ₂)), where n₁ =
            1.5 and n₂ = 1.0.
          </p>
          <input
            type="text"
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            className="answer-input"
            placeholder="Your answer"
          />
          <button className="check-answer-button" onClick={checkAnswer1}>
            Check Answer
          </button>
          {isCorrect1 !== null && (
            <p
              className={`mb-4 ${
                isCorrect1 ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCorrect1 ? "Correct! 🎉" : "Try Again! ❌"}
            </p>
          )}
          {result1 !== null && <p className="mb-4">Result: {result1}</p>}
        </motion.div>
        <motion.div
          className="calculator-toggle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button
            className="check-answer-button"
            onClick={() => setShowCalculator(!showCalculator)}
          >
            {showCalculator ? "Hide Calculator" : "Show Calculator"}
          </button>

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
        </motion.div>
        {/* Second Calculation Question */}
        <motion.div
          className="calculation-question"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Calculation Question 2</h2>
          <p className="mb-4">
            If the speed of light in a medium is 225,000,000 m/s, calculate the
            refractive index of the medium compared to vacuum.
          </p>
          <input
            type="text"
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            className="answer-input"
            placeholder="Your answer"
          />
          <button className="check-answer-button" onClick={checkAnswer2}>
            Check Answer
          </button>
          {isCorrect2 !== null && (
            <p
              className={`mb-4 ${
                isCorrect2 ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCorrect2 ? "Correct! 🎉" : "Try Again! ❌"}
            </p>
          )}
          {result2 !== null && <p className="mb-4">Result: {result2}</p>}
        </motion.div>
        <motion.div
          className="calculation-question"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">-</h2>
        </motion.div>

        <h1 className="section-title">Exploring Light Dispersion and Color</h1>

        <motion.div
          className="introduction"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">What is Dispersion?</h2>
          <p className="mb-4">
            Dispersion occurs when white light passes through a medium and is
            split into its constituent colors. This happens because different
            colors of light are refracted by different amounts.
          </p>
          <p className="mb-4">
            When white light passes through a prism, it is separated into the
            colors of the spectrum: red, orange, yellow, green, blue, indigo,
            and violet.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <img
            src={d}
            alt="Illustration"
            style={{ width: "450px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        <motion.div
          className="explanation"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">How Dispersion Works</h2>
          <p className="mb-4">
            When white light enters a prism, different wavelengths of light bend
            by different amounts due to dispersion. Red light bends the least,
            and violet light bends the most.
          </p>
        </motion.div>

        <motion.div
          className="rainbows"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">How Rainbows Form</h2>
          <p className="mb-4">
            A rainbow is seen when sunlight is refracted and dispersed by
            raindrops, which act as small prisms. The light is also internally
            reflected inside the raindrop before emerging as a spectrum of
            colors.
          </p>
          <p className="mb-4">
            The process involves sunlight entering the raindrop, being
            refracted, reflecting off the back of the drop, and then being
            refracted again as it exits the raindrop.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <img
            src={r}
            alt="Illustration"
            style={{ width: "550px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        <motion.div
          className="newton"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Recombining the Spectrum</h2>
          <p className="mb-4">
            Sir Isaac Newton demonstrated that the spectrum of colors produced
            by a prism could be recombined into white light using another prism.
            This experiment proved that white light is a mixture of colors.
          </p>
          <p className="mb-4">
            By carefully arranging two prisms, Newton could show that the
            spectrum of colors could be combined back into white light.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <img
            src={i2}
            alt="Illustration"
            style={{ width: "550px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        <motion.div
          className="questions"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Questions</h2>
          <ol className="list-decimal list-inside mb-4 text-left">
            <li className="mb-2">
              How many colors are visible in the spectrum of white light?
            </li>
            <li className="mb-2">
              What does it mean for the spectrum of white light to be
              continuous?
            </li>
            <li className="mb-2">
              Explain why you cannot have dispersion without refraction.
            </li>
            <li className="mb-2">
              Which color of light is refracted the most in a prism?
            </li>
            <li className="mb-2">
              Describe the process by which a rainbow forms.
            </li>
            <li className="mb-2">
              How did Sir Isaac Newton demonstrate that white light is made up
              of colors?
            </li>
          </ol>
        </motion.div>
        <h1 className="section-title">Two Ideas about Light</h1>

        {/* Introduction */}
        <motion.div
          className="introduction"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Asking Scientific Questions</h2>
          <p className="mb-4">
            Scientists make observations and produce explanations about light
            based on their observations.
          </p>
          <p className="mb-4">
            Over 400 years ago, Isaac Newton and Christian Huygens had different
            explanations about light.
          </p>
        </motion.div>

        {/* Waves and Particles Section */}
        <motion.div
          className="waves-particles"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Waves and Particles</h2>
          <p className="mb-4">
            Isaac Newton showed that light could be split into colors using a
            prism and recombined.
          </p>
          <p className="mb-4">
            Newton believed light was made up of particles, while Christian
            Huygens proposed that light was a wave.
          </p>
        </motion.div>

        {/* Observations Comparison */}
        <div className="observations-comparison">
          <h2 className="subsection-title">Observation Comparison</h2>
          <table className="observations-table">
            <thead>
              <tr>
                <th>Observation about Light</th>
                <th>Newton’s Explanation</th>
                <th>Huygens’s Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Light travels in straight lines.</td>
                <td>Particles travel in straight lines.</td>
                <td>Waves travel in straight lines.</td>
              </tr>
              <tr>
                <td>Light is reflected at equal angles.</td>
                <td>
                  Particles of light bounce off the mirror like a ball off a
                  wall.
                </td>
                <td>Waves bounce off barriers like sound echoes.</td>
              </tr>
              <tr>
                <td>Light is refracted.</td>
                <td>
                  Particles near a boundary with a dense medium are pulled off
                  course.
                </td>
                <td>Waves slow down and bend when entering shallow water.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Explanation of Ideas Acceptance */}
        <motion.div
          className="explanation-acceptance"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Explanation Acceptance</h2>
          <p className="mb-4">
            Newton’s particle theory was accepted for over 100 years despite
            some shortcomings because of his fame and successful explanations in
            other areas.
          </p>
          <p className="mb-4">
            The wave theory gained acceptance in 1800 due to new experiments
            that couldn’t be explained by particles alone.
          </p>
          <p className="mb-4">
            Today, both particle and wave theories are needed to fully describe
            light.
          </p>
        </motion.div>

        {/* Questions Section */}
        <div className="questions">
          <h2 className="subsection-title">Questions</h2>
          <ol className="list-decimal list-inside mb-4 text-left">
            <li className="mb-2">Why was the idea of particles popular?</li>
            <li className="mb-2">Why was Newton famous?</li>
            <li className="mb-2">
              Explain how you could use a football to demonstrate Newton’s
              explanation of reflection of light.
            </li>
            <li className="mb-2">
              Can you use a football to demonstrate refraction of light?
              Explain.
            </li>
            <li className="mb-2">
              Evaluate Newton’s explanation for light passing through a glass
              block.
            </li>
          </ol>
        </div>

        {/* Extension Section */}
        <motion.div
          className="extension"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="subsection-title">Extension: Lasers</h2>
          <p className="mb-4">
            What is a laser? Lasers produce monochromatic light and have various
            industrial and medical uses.
          </p>
          <p className="mb-4">
            Laser light differs from sunlight in its coherence and ability to
            produce powerful beams for cutting and data reading.
          </p>
        </motion.div>
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          className="bg-sky-800 text-white px-4 py-2 rounded-md"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded-md"
          onClick={unlockNextLevel}
        >
          Take a quiz
        </button>
        <Link
          to="/waveandsound"
          className="bg-sky-200 text-green-900 font-semibold px-5 py-2 rounded-md flex items-center"
        >
          <GiSoundWaves className="mr-2" />
          Check out WAVE and SOUND
        </Link>
      </div>

      {/* Download PDF Button */}
    </div>
  );
}
