import React, { useRef, useEffect } from "react";
import { downloadPDF } from "../utils/pdf";
import Apollo11 from "../images/Apollo_11_Launch.jpg";
import NeilArmstrong from "../images/Neil_Armstrong_pose.jpg";
import YuriGagarin from "../images/Yuri_Gagarin.jpg";
import ChrisHadfield from "../images/Chris_Hadfield_2011.jpg";
import "./SpaceScience.css";

import core from "../images/core.jpg";

import hubbleImage from "../images/hubble.jpg";
import jamesWebbImage from "../images/jamesWebbImage.png";
import areciboImage from "../images/arecibo.jpg";

import bigBangImage from "../images/big-bang.jpg";
import v2RocketImage from "../images/v2-rocket.jpg";
import apollo11Image from "../images/Apollo_11_Launch.jpg";
import issImage from "../images/issimage.jpg";
import marsRoverImage from "../images/marsrover.jpg";
import jwstImage from "../images/jamesWebbImage.png";

import { motion } from "framer-motion";
export default function SpaceScience() {
  const pdfRef = useRef();
  const planets = [
    {
      name: "Mercury",
      size: 10,
      color: "#b2bec3",
      orbitSize: 150,
      animationDuration: "3s",
    },
    {
      name: "Venus",
      size: 15,
      color: "#fdcb6e",
      orbitSize: 200,
      animationDuration: "5s",
    },
    {
      name: "Earth",
      size: 20,
      color: "#00b894",
      orbitSize: 250,
      animationDuration: "7s",
    },
    {
      name: "Mars",
      size: 18,
      color: "#d63031",
      orbitSize: 300,
      animationDuration: "10s",
    },
    {
      name: "Jupiter",
      size: 40,
      color: "#e17055",
      orbitSize: 350,
      animationDuration: "12s",
    },
    {
      name: "Saturn",
      size: 35,
      color: "#fdcb6e",
      orbitSize: 400,
      animationDuration: "14s",
    },
    {
      name: "Uranus",
      size: 30,
      color: "#00cec9",
      orbitSize: 450,
      animationDuration: "16s",
    },
    {
      name: "Neptune",
      size: 28,
      color: "#0984e3",
      orbitSize: 500,
      animationDuration: "18s",
    },
    {
      name: "Pluto",
      size: 8,
      color: "#9b59b6",
      orbitSize: 550,
      animationDuration: "20s",
    },
  ];

  useEffect(() => {
    if (location.pathname === "/space") {
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

  return (
    <div className="spaceScience-container">
      {/* Content Section */}
      <div className="spaceScience-content" id="pdfContent">
        <h1 className="spaceScience-section-title">
          Exploring Space: A Journey Beyond Earth
        </h1>

        {/* Introduction to Space Science */}
        <div className="spaceScience-history-section">
          <h2 className="spaceScience-subsection-title">
            What is Space Science?
          </h2>
          <div className="flex flex-wrap">
            <div className="spaceScience-history-text spaceScience-center">
              <p>
                Space science is the study of everything in outer space. It
                includes the study of planets, stars, galaxies, and the universe
                as a whole. Space scientists, also known as astronomers, use
                telescopes and spacecraft to explore and understand the
                mysteries of space.
              </p>
            </div>
          </div>

          <h2 className="spaceScience-subsection-title">
            Why is Space Science Important?
          </h2>
          <div className="flex flex-wrap">
            <div className="spaceScience-history-text spaceScience-left">
              <p>
                <strong>Understanding Our Universe:</strong> By studying space,
                we learn more about where we live, how the universe was formed,
                and what it’s made of.
              </p>
            </div>
            <div className="spaceScience-history-text spaceScience-right">
              <p>
                <strong>Technology and Innovation:</strong> Space exploration
                has led to many technological advancements that we use every
                day, like GPS and weather satellites.
              </p>
            </div>
            <div className="spaceScience-history-text spaceScience-center">
              <p>
                <strong>Inspiration and Curiosity:</strong> Space science
                inspires curiosity and imagination, encouraging us to ask
                questions and seek answers.
              </p>
            </div>
          </div>

          <h2 className="spaceScience-subsection-title">
            Cool Things About Space
          </h2>
          <div className="flex flex-wrap">
            <div className="spaceScience-history-text spaceScience-left">
              <p>
                <strong>The Planets:</strong> Our solar system has eight planets
                that orbit the Sun. Each planet is unique. For example, Mars is
                known as the Red Planet, and Jupiter is the largest planet in
                our solar system.
              </p>
            </div>
            <div className="spaceScience-history-text spaceScience-right">
              <p>
                <strong>The Sun:</strong> The Sun is a star at the center of our
                solar system. It’s incredibly hot and provides the energy needed
                for life on Earth.
              </p>
            </div>
            <div className="spaceScience-history-text spaceScience-center">
              <p>
                <strong>Black Holes:</strong> These are mysterious objects with
                a gravitational pull so strong that not even light can escape
                them.
              </p>
            </div>
            <div className="spaceScience-history-text spaceScience-left">
              <p>
                <strong>The Milky Way:</strong> Our solar system is part of the
                Milky Way galaxy, which is a massive collection of stars, dust,
                and gas bound together by gravity.
              </p>
            </div>
            <div className="spaceScience-history-text spaceScience-right">
              <p>
                <strong>Astronauts:</strong> These are people who travel to
                space. They live and work on the International Space Station
                (ISS), conducting experiments and learning about living in
                space.
              </p>
            </div>
          </div>

          <h2 className="spaceScience-subsection-title">Fun Facts</h2>
          <div className="flex flex-wrap">
            <div className="spaceScience-history-text spaceScience-center">
              <p>
                <strong>Weightlessness:</strong> In space, there is very little
                gravity, so astronauts float around in their spacecraft.
              </p>
            </div>
            <div className="spaceScience-history-text spaceScience-left">
              <p>
                <strong>No Sound:</strong> Space is a vacuum, which means
                there’s no air. Without air, sound can't travel, so space is
                completely silent.
              </p>
            </div>
            <div className="spaceScience-history-text spaceScience-right">
              <p>
                <strong>Space Suits:</strong> Astronauts wear special suits to
                protect them from the harsh environment of space. These suits
                provide oxygen, regulate temperature, and protect from
                radiation.
              </p>
            </div>
          </div>

          {/* Notable Figures */}
          <div className="spaceScience-notable-figures">
            <div className="spaceScience-figure">
              <img
                src={Apollo11}
                alt="Apollo 11 Launch"
                className="spaceScience-figure-image"
              />
              <div className="spaceScience-figure-caption">
                <p className="spaceScience-figure-name">Apollo 11</p>
                <p className="spaceScience-figure-description">
                  The first manned mission to land on the Moon in 1969.
                </p>
              </div>
            </div>

            <div className="spaceScience-figure">
              <img
                src={NeilArmstrong}
                alt="Neil Armstrong"
                className="spaceScience-figure-image"
              />
              <div className="spaceScience-figure-caption">
                <p className="spaceScience-figure-name">Neil Armstrong</p>
                <p className="spaceScience-figure-description">
                  The first person to walk on the Moon.
                </p>
              </div>
            </div>

            <div className="spaceScience-figure">
              <img
                src={YuriGagarin}
                alt="Yuri Gagarin"
                className="spaceScience-figure-image"
              />
              <div className="spaceScience-figure-caption">
                <p className="spaceScience-figure-name">Yuri Gagarin</p>
                <p className="spaceScience-figure-description">
                  The first human to journey into outer space.
                </p>
              </div>
            </div>

            <div className="spaceScience-figure">
              <img
                src={ChrisHadfield}
                alt="Chris Hadfield"
                className="spaceScience-figure-image"
              />
              <div className="spaceScience-figure-caption">
                <p className="spaceScience-figure-name">Chris Hadfield</p>
                <p className="spaceScience-figure-description">
                  The first Canadian to command the International Space Station.
                </p>
              </div>
            </div>
            <h2 className="spaceScience-subsection-title">How to Learn More</h2>
            <div className="flex flex-wrap">
              <div className="spaceScience-history-text spaceScience-center">
                <p>
                  <strong>Visit a Planetarium:</strong> These are special
                  theaters that show star-filled skies and teach about
                  astronomy.
                </p>
              </div>
              <div className="spaceScience-history-text spaceScience-left">
                <p>
                  <strong>Watch Space Documentaries:</strong> Shows like
                  "Cosmos" and "The Universe" are great for learning about
                  space.
                </p>
              </div>
              <div className="spaceScience-history-text spaceScience-right">
                <p>
                  <strong>Use Astronomy Apps:</strong> There are many apps
                  available that let you explore the night sky and learn about
                  constellations and planets.
                </p>
              </div>
              <div className="spaceScience-history-text spaceScience-center">
                <p>
                  <strong>Join a Space Club:</strong> Look for clubs or
                  organizations that focus on space science, where you can meet
                  others who share your interest.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="ss-section-title">Solar System Animation</h1>

        <motion.div
          className="ss-space-animation-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="ss-animation-container">
            <div className="ss-sun"></div>
            {planets.map((planet, index) => (
              <div
                key={index}
                className="ss-orbit"
                style={{
                  width: planet.orbitSize + "px",
                  height: planet.orbitSize + "px",
                  animationDuration: planet.animationDuration,
                }}
              >
                <div
                  className="ss-planet"
                  style={{
                    width: planet.size + "px",
                    height: planet.size + "px",
                    background: planet.color,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="ss-description-section">
          <div className="ss-description-text ss-left">
            <h1 className="ss-section-subtitle">The Solar System and Beyond</h1>

            <p>
              The Solar System consists of the Sun and the objects that orbit
              it, including the eight planets: Mercury, Venus, Earth, Mars,
              Jupiter, Saturn, Uranus, and Neptune. Additionally, it includes
              the dwarf planet Pluto, moons, comets, asteroids, and other
              celestial bodies. The Sun, a star at the center, provides the
              gravitational pull that keeps these objects in orbit.
            </p>
            <h2 className="ss-section-subtitle">The Planets</h2>
            <p>
              <strong>Mercury:</strong> The closest planet to the Sun and the
              smallest in the Solar System. It has a very thin atmosphere and
              extreme temperature variations.
            </p>
            <p>
              <strong>Venus:</strong> Similar in size to Earth but covered with
              thick clouds of sulfuric acid. It has a surface temperature hot
              enough to melt lead.
            </p>
            <p>
              <strong>Earth:</strong> The only planet known to support life,
              with water covering about 71% of its surface.
            </p>
            <p>
              <strong>Mars:</strong> Known as the Red Planet because of its
              reddish appearance. It has the largest volcano and canyon in the
              Solar System.
            </p>
            <p>
              <strong>Jupiter:</strong> The largest planet in the Solar System,
              famous for its Great Red Spot, a giant storm. It has more than 75
              moons.
            </p>
            <p>
              <strong>Saturn:</strong> Known for its beautiful ring system made
              of ice and rock particles. It has over 80 moons.
            </p>
            <p>
              <strong>Uranus:</strong> An ice giant with a blue-green color due
              to methane in its atmosphere. It rotates on its side.
            </p>
            <p>
              <strong>Neptune:</strong> Another ice giant, known for its strong
              winds and deep blue color. It has a Great Dark Spot similar to
              Jupiter's storm.
            </p>
            <p>
              <strong>Pluto:</strong> Once considered the ninth planet, it is
              now classified as a dwarf planet. It has a heart-shaped glacier.
            </p>
            <p>
              {" "}
              <strong>Other Objects:</strong> Our solar system also has dwarf
              planets like Pluto, moons like Earth’s Moon, and small bodies like
              comets and asteroids.
            </p>
            <h2 className="ss-section-subtitle">The Sun</h2>
            <p>
              The Sun is a star at the center of our Solar System. It is made up
              of hot plasma and generates energy through nuclear fusion. This
              energy provides light and heat to Earth, making life possible.
            </p>
            <h2 className="solarSystem-subsection-title">Stars and Galaxies</h2>
            <p>
              When we look up at the night sky, we see countless stars and
              galaxies. Here’s what they are:
            </p>

            <h2 className="ss-section-subtitle">Stars and Galaxies</h2>

            <ul>
              <li>
                <strong>Stars:</strong> Stars are huge balls of burning gas.
                They come in different sizes and colors. Our Sun is a
                medium-sized star. Some stars are much bigger, like supergiants,
                and some are smaller, like red dwarfs.
              </li>
              <li>
                <strong>Galaxies:</strong> A galaxy is a massive collection of
                stars, dust, and gas all held together by gravity. Our galaxy is
                called the Milky Way, and it’s shaped like a spiral. There are
                billions of galaxies in the universe!
              </li>
            </ul>
            <p>
              <strong>Constellations:</strong> Groups of stars forming
              recognizable patterns, like Orion or Ursa Major, which have been
              used for navigation and storytelling for centuries.
            </p>
            <p>
              <strong>Light Years:</strong> The distance light travels in one
              year, used to measure vast distances in space.
            </p>

            <h2 className="ss-section-subtitle">The Milky Way</h2>
            <p>
              The Milky Way is our cosmic home. It’s a spiral galaxy, which
              means it has a central bulge with arms that spiral outward. Our
              solar system is located in one of these spiral arms, called the
              Orion Arm. If you look at the Milky Way from Earth, it appears as
              a hazy band of light stretching across the sky.
            </p>
            <h2 className="ss-section-subtitle">Black Holes</h2>
            <p>
              Black holes are some of the most mysterious and fascinating
              objects in space. Here’s what we know about them:
            </p>
            <ul>
              <li>
                <strong>What is a Black Hole?</strong> A black hole forms when a
                massive star collapses under its own gravity. The gravity is so
                strong that not even light can escape it, which is why it’s
                called a black hole.
              </li>
              <li>
                <strong>Event Horizon:</strong> This is the boundary around a
                black hole. Once something crosses the event horizon, it can’t
                escape the black hole’s gravity.
              </li>
              <li>
                <strong>Singularity:</strong> At the very center of a black hole
                is a point called the singularity, where gravity is extremely
                intense.
              </li>
              <li>
                <strong>Types of Black Holes:</strong> There are three main
                types:
                <ul>
                  <li>
                    <strong>Stellar Black Holes:</strong> Formed from the
                    collapse of a single star.
                  </li>
                  <li>
                    <strong>Supermassive Black Holes:</strong> Found at the
                    centers of galaxies, including the Milky Way. They can be
                    millions to billions of times more massive than the Sun.
                  </li>
                  <li>
                    <strong>Intermediate Black Holes:</strong> These are in
                    between stellar and supermassive black holes in size.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h1 className="coreOfEarth-section-title">
            Exploring the Core of the Earth
          </h1>

          {/* What is the Core of the Earth? */}
          <div className="coreOfEarth-history-section">
            <h2 className="coreOfEarth-subsection-title">
              What is the Core of the Earth?
            </h2>
            <div className="flex flex-wrap">
              <div className="coreOfEarth-history-text coreOfEarth-center">
                <p>
                  The Earth’s core is the innermost part of our planet. Think of
                  it like the yolk of a hard-boiled egg, hidden beneath the
                  layers we walk on every day. The core is made up of two parts:
                  the outer core and the inner core.
                </p>
              </div>
            </div>

            {/* Layers of the Earth */}
            <h2 className="coreOfEarth-subsection-title">
              Layers of the Earth
            </h2>
            <div className="flex flex-wrap">
              <div className="spaceScience-figure">
                <img src={core} alt="core" className="core-figure-image" />
                <div className="core-figure-caption">
                  <p className="core-figure-name">Core of Earth</p>
                </div>
              </div>
              <div className="coreOfEarth-history-text coreOfEarth-left">
                <p>
                  <strong>Crust:</strong> This is the outermost layer where we
                  live. It’s like the skin of an apple.
                </p>
              </div>
              <div className="coreOfEarth-history-text coreOfEarth-right">
                <p>
                  <strong>Mantle:</strong> Beneath the crust is the mantle. It’s
                  made of hot, solid rock that flows very slowly.
                </p>
              </div>
              <div className="coreOfEarth-history-text coreOfEarth-left">
                <p>
                  <strong>Outer Core:</strong> The outer core is made of molten
                  (liquid) metal, mostly iron and nickel. It’s extremely hot!
                </p>
              </div>
              <div className="coreOfEarth-history-text coreOfEarth-right">
                <p>
                  <strong>Inner Core:</strong> At the very center, the inner
                  core is a solid ball of iron and nickel. Despite being hotter
                  than the outer core, it’s solid because of the immense
                  pressure.
                </p>
              </div>
            </div>

            {/* Journey to the Core */}
            <h2 className="coreOfEarth-subsection-title">
              Journey to the Core
            </h2>
            <div className="flex flex-wrap">
              <div className="coreOfEarth-history-text coreOfEarth-center">
                <p>
                  Imagine you’re digging a hole to the center of the Earth.
                  Here’s what you’d find:
                </p>
                <ul>
                  <li>
                    <strong>First Stop: The Crust:</strong> This layer is where
                    we live, and it includes the continents and ocean floors.
                    It’s about 5-70 kilometers thick.
                  </li>
                  <li>
                    <strong>Next Stop: The Mantle:</strong> As you go deeper,
                    you reach the mantle, which is about 2,900 kilometers thick.
                    It’s made of semi-solid rock that moves very slowly, causing
                    the tectonic plates on the crust to shift.
                  </li>
                  <li>
                    <strong>The Outer Core:</strong> Keep going, and you’ll
                    reach the outer core, which is about 2,200 kilometers thick.
                    It’s so hot here (around 4,000-6,000 degrees Celsius) that
                    the iron and nickel are melted into a thick, flowing liquid.
                  </li>
                  <li>
                    <strong>The Inner Core:</strong> Finally, you’ve made it to
                    the inner core! It’s about 1,200 kilometers thick and is a
                    solid ball of iron and nickel. The temperature here can
                    reach up to 6,000 degrees Celsius, which is as hot as the
                    surface of the sun!
                  </li>
                </ul>
              </div>
            </div>

            {/* Why is the Core Important? */}
            <h2 className="coreOfEarth-subsection-title">
              Why is the Core Important?
            </h2>
            <div className="flex flex-wrap">
              <div className="coreOfEarth-history-text coreOfEarth-left">
                <p>
                  The Earth’s core plays a crucial role in our planet’s
                  structure and behavior:
                </p>
                <ul>
                  <li>
                    <strong>Magnetic Field:</strong> The movement of the liquid
                    outer core creates Earth’s magnetic field. This field
                    protects us from harmful solar radiation and makes compass
                    needles point north.
                  </li>
                  <li>
                    <strong>Heat Source:</strong> The heat from the core drives
                    the movement of the mantle, which causes earthquakes,
                    volcanic eruptions, and the shifting of continents.
                  </li>
                </ul>
              </div>
            </div>

            {/* Fun Facts About the Earth’s Core */}
            <h2 className="coreOfEarth-subsection-title">
              Fun Facts About the Earth’s Core
            </h2>
            <div className="flex flex-wrap">
              <div className="coreOfEarth-history-text coreOfEarth-center">
                <ul>
                  <li>
                    The inner core is growing slowly as the outer core cools and
                    solidifies.
                  </li>
                  <li>
                    If you could visit the inner core, the pressure would be
                    about 3.6 million times the pressure at the Earth’s surface!
                  </li>
                  <li>
                    The idea of a journey to the center of the Earth has
                    inspired many adventure stories, like Jules Verne’s famous
                    book, "Journey to the Center of the Earth."
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="telescope-section-title">
            Telescopes: Windows to the Universe
          </h1>

          {/* What is a Telescope? */}
          <div className="telescope-history-section">
            <h2 className="telescope-subsection-title">What is a Telescope?</h2>
            <div className="telescope-history-text telescope-center">
              <p>
                A telescope is an instrument that makes distant objects appear
                closer and more detailed. It gathers light and magnifies images,
                allowing us to see things in space that are too far away to see
                with just our eyes.
              </p>
            </div>
          </div>

          {/* Types of Telescopes */}
          <h2 className="telescope-subsection-title">Types of Telescopes</h2>
          <div className="telescope-history-section">
            <div className="telescope-history-text telescope-left">
              <h3>Optical Telescopes</h3>
              <p>
                These are the most common type and are used to observe visible
                light.
              </p>
              <ul>
                <li>
                  <strong>Refracting Telescopes:</strong> Use lenses to bend
                  (refract) light. The first telescopes made by Galileo were
                  refracting telescopes.
                </li>
                <li>
                  <strong>Reflecting Telescopes:</strong> Use mirrors to reflect
                  light. The largest telescopes today are reflectors because
                  they can be made much bigger than lenses.
                </li>
              </ul>
            </div>
            <div className="telescope-history-text telescope-right">
              <h3>Radio Telescopes</h3>
              <p>
                These telescopes detect radio waves from space. They have large
                dish antennas and can see things that optical telescopes can’t,
                like clouds of gas where stars are forming.
              </p>
            </div>
            <div className="telescope-history-text telescope-left">
              <h3>Space Telescopes</h3>
              <p>
                These telescopes are placed in space to avoid the distortion
                caused by Earth’s atmosphere. The Hubble Space Telescope is a
                famous example.
              </p>
            </div>
          </div>

          {/* How Telescopes Work */}
          <h2 className="telescope-subsection-title">How Telescopes Work</h2>
          <div className="telescope-history-section">
            <div className="telescope-history-text telescope-center">
              <p>
                Telescopes work by collecting light from distant objects and
                focusing it to create a clear image.
              </p>
              <ol>
                <li>
                  <strong>Light Collection:</strong> The larger the telescope’s
                  lens or mirror, the more light it can collect, making faint
                  objects appear brighter.
                </li>
                <li>
                  <strong>Focusing:</strong> The light is then focused to form
                  an image. In refracting telescopes, lenses bend the light; in
                  reflecting telescopes, mirrors bounce the light.
                </li>
                <li>
                  <strong>Magnification:</strong> An eyepiece lens magnifies the
                  focused light, allowing us to see a larger image of the
                  distant object.
                </li>
              </ol>
            </div>
          </div>

          {/* Famous Telescopes */}
          <h2 className="telescope-subsection-title">Famous Telescopes</h2>
          <div className="telescope-history-section">
            <div className="telescope-notable-figures">
              <div className="telescope-figure">
                <img
                  src={hubbleImage}
                  alt="Hubble Space Telescope"
                  className="telescope-figure-image"
                />
                <div className="telescope-figure-caption">
                  <p className="telescope-figure-name">
                    Hubble Space Telescope
                  </p>
                  <p className="telescope-figure-description">
                    Launched in 1990, Hubble has taken stunning images of
                    distant galaxies, nebulae, and stars.
                  </p>
                </div>
              </div>
              <div className="telescope-figure">
                <img
                  src={jamesWebbImage}
                  alt="James Webb Space Telescope"
                  className="telescope-figure-image"
                />
                <div className="telescope-figure-caption">
                  <p className="telescope-figure-name">
                    James Webb Space Telescope
                  </p>
                  <p className="telescope-figure-description">
                    Set to launch soon, this telescope will observe in infrared
                    light, allowing it to see even farther into the universe’s
                    past.
                  </p>
                </div>
              </div>
              <div className="telescope-figure">
                <img
                  src={areciboImage}
                  alt="Arecibo Observatory"
                  className="telescope-figure-image"
                />
                <div className="telescope-figure-caption">
                  <p className="telescope-figure-name">Arecibo Observatory</p>
                  <p className="telescope-figure-description">
                    Although it collapsed in 2020, Arecibo was one of the
                    largest radio telescopes in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How Telescopes Have Changed Our View */}
          <h2 className="telescope-subsection-title">
            How Telescopes Have Changed Our View
          </h2>
          <div className="telescope-history-section">
            <div className="telescope-history-text telescope-left">
              <h3>Discovering New Planets</h3>
              <p>
                Telescopes have helped find planets orbiting other stars, known
                as exoplanets.
              </p>
            </div>
            <div className="telescope-history-text telescope-right">
              <h3>Mapping the Universe</h3>
              <p>
                Telescopes have mapped the structure of our galaxy and others,
                revealing billions of galaxies in the universe.
              </p>
            </div>
            <div className="telescope-history-text telescope-left">
              <h3>Understanding Stars</h3>
              <p>
                Telescopes allow us to study the life cycles of stars, from
                their formation to their end as supernovas or black holes.
              </p>
            </div>
            <div className="telescope-history-text telescope-right">
              <h3>Seeing Back in Time</h3>
              <p>
                Because light takes time to travel, telescopes allow us to see
                objects as they were in the past.
              </p>
            </div>
          </div>

          {/* Fun Activities with Telescopes */}
          <h2 className="telescope-subsection-title">
            Fun Activities with Telescopes
          </h2>
          <div className="telescope-history-section">
            <div className="telescope-history-text telescope-center">
              <ul>
                <li>
                  <strong>Stargazing:</strong> Use a small telescope or
                  binoculars to observe the Moon, planets, and star clusters.
                </li>
                <li>
                  <strong>Join an Astronomy Club:</strong> Participate in star
                  parties to explore different types of telescopes.
                </li>
                <li>
                  <strong>Build a Simple Telescope:</strong> Create a basic
                  refracting telescope with lenses and a cardboard tube.
                </li>
              </ul>
            </div>
          </div>

          <h1 className="briefHistory-section-title">
            Brief History of the Creation of the Universe and Space Travel
          </h1>

          {/* Creation of the Universe */}
          <div className="briefHistory-history-section">
            <h2 className="briefHistory-subsection-title">
              Creation of the Universe
            </h2>
            <div className="briefHistory-history-text briefHistory-center">
              <p>
                The universe began as a singularity, an infinitely small, hot,
                and dense point. It expanded rapidly in an event called the Big
                Bang, creating space, time, and matter.
              </p>
            </div>

            {/* Big Bang Image */}
            <div className="briefHistory-history-text briefHistory-left">
              <img
                src={bigBangImage}
                alt="Big Bang"
                className="briefHistory-figure-image"
              />
            </div>

            {/* Formation of the First Atoms */}
            <h2 className="briefHistory-subsection-title">
              Formation of the First Atoms
            </h2>
            <div className="briefHistory-history-text briefHistory-right">
              <p>
                As the universe cooled, protons and electrons combined to form
                hydrogen and helium atoms during recombination.
              </p>
            </div>

            {/* Formation of Stars and Galaxies */}
            <h2 className="briefHistory-subsection-title">
              Formation of Stars and Galaxies
            </h2>
            <div className="briefHistory-history-text briefHistory-left">
              <p>
                Gravity caused hydrogen and helium to clump together, forming
                the first stars and galaxies that began to shine light.
              </p>
            </div>

            {/* Formation of the Solar System */}
            <h2 className="briefHistory-subsection-title">
              Formation of the Solar System
            </h2>
            <div className="briefHistory-history-text briefHistory-right">
              <p>
                About 4.6 billion years ago, a cloud of gas and dust collapsed
                under gravity to form the Sun and the planets, including Earth.
              </p>
            </div>
          </div>

          {/* History of Space Travel */}
          <div className="briefHistory-history-section">
            <h2 className="briefHistory-subsection-title">
              History of Space Travel
            </h2>

            {/* Early Rocketry */}
            <div className="briefHistory-history-text briefHistory-center">
              <p>
                The Chinese invented simple rockets using gunpowder for
                fireworks and military purposes. In the 20th century, scientists
                like Konstantin Tsiolkovsky and Robert Goddard laid the
                groundwork for modern rocketry.
              </p>
            </div>

            {/* V-2 Rocket Image */}
            <div className="briefHistory-history-text briefHistory-left">
              <img
                src={v2RocketImage}
                alt="V-2 Rocket"
                className="briefHistory-figure-image"
              />
            </div>

            {/* The Space Race */}
            <h2 className="briefHistory-subsection-title">The Space Race</h2>
            <div className="briefHistory-history-text briefHistory-right">
              <p>
                The Soviet Union achieved milestones like launching Sputnik 1
                and sending Yuri Gagarin into space. The United States countered
                with achievements like the Apollo 11 moon landing.
              </p>
            </div>

            {/* Apollo 11 Image */}
            <div className="briefHistory-history-text briefHistory-left">
              <img
                src={apollo11Image}
                alt="Apollo 11"
                className="briefHistory-figure-image"
              />
            </div>

            {/* Space Shuttle Era */}
            <h2 className="briefHistory-subsection-title">Space Shuttle Era</h2>
            <div className="briefHistory-history-text briefHistory-right">
              <p>
                NASA's Space Shuttle program launched in 1981, enabling reusable
                spacecraft to support missions like building the International
                Space Station (ISS).
              </p>
            </div>

            {/* ISS Image */}
            <div className="briefHistory-history-text briefHistory-left">
              <img
                src={issImage}
                alt="ISS"
                className="briefHistory-figure-image"
              />
            </div>

            {/* Modern Space Exploration */}
            <h2 className="briefHistory-subsection-title">
              Modern Space Exploration
            </h2>
            <div className="briefHistory-history-text briefHistory-right">
              <p>
                Robotic missions to Mars, private spaceflight initiatives, and
                telescopes like the James Webb Space Telescope continue to push
                the boundaries of space exploration.
              </p>
            </div>

            {/* Mars Rover Image */}
            <div className="briefHistory-history-text briefHistory-left">
              <img
                src={marsRoverImage}
                alt="Mars Rover"
                className="briefHistory-figure-image"
              />
            </div>

            {/* Future Prospects */}
            <h2 className="briefHistory-subsection-title">Future Prospects</h2>
            <div className="briefHistory-history-text briefHistory-center">
              <p>
                NASA’s Artemis program aims to return humans to the Moon, while
                plans for manned missions to Mars are in development.
              </p>
            </div>

            {/* JWST Image */}
            <div className="briefHistory-history-text briefHistory-left">
              <img
                src={jwstImage}
                alt="JWST"
                className="briefHistory-figure-image"
              />
            </div>
          </div>

          
        </div>

        
      </div>

      <div className="mt-4 flex space-x-4">
          <button
          className="bg-sky-600 text-white px-4 py-2 rounded-md"
          onClick={downloadPDF}
         >
          Download PDF
         </button>
         
         <button  className="bg-teal-600 text-white px-4 py-2 rounded-md" onClick={() => (window.location.href = "/Spacequiz")}>
           Take a Quiz
          </button>
         
            <button

              className="bg-indigo-900 text-sky-100 font-semibold px-5 py-2 rounded-md flex items-center"
              onClick={() => (window.location.href = "/last")}
            >
             PhysicxLab
            </button>
       
       
</div>
    </div>
  );
}
