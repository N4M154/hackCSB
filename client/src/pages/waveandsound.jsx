import React, { useRef, useState, useEffect } from "react";
import { downloadPDF } from "../utils/pdf";
import wavelengthImage from "../images/wavelength.jpeg";
import introwaveImage from "../images/introwave.jpeg";
import EMWaveImage from "../images/EMWave.gif";
import tImage from "../images/t.gif";
import soundImage from "../images/sound.gif";
import echoImage from "../images/echo.gif";
import polutionImage from "../images/polution.jpeg";
import { Link } from "react-router-dom";
import { GiKnockedOutStars } from "react-icons/gi";

export default function WavesAndSound() {
  const pdfRef = useRef();

  const [highlightedRanges, setHighlightedRanges] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const MAX_TEXT_LENGTH = 30;

  const unlockNextLevel = () => {
    window.location.reload();
    window.location.href = "/spacequiz";
  };

  useEffect(() => {
    if (location.pathname === "/waveandsound") {
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
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-white-500 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 py-8" id="pdfContent">
        <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">
          Chapter 3: Wave and Sound
        </h1>

        <h2 className="text-3xl font-bold mb-6 text-sky-800">
          3.1 Introduction of Waves
        </h2>
        <p className="mb-4">Transfers energy.</p>
        <p className="mb-4">
          Usually involves a periodic, repetitive movement.
        </p>
        <p className="mb-4">
          Does not result in a net movement of the medium or particles in the
          medium (mechanical wave).
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={introwaveImage}
            alt="Energy Illustration"
            style={{ width: "250px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="mb-8">
          There are some basic descriptors of a wave. Wavelength is the distance
          between two successive identical parts of the wave. Amplitude is the
          maximum displacement from the neutral position. This represents the
          energy of the wave. Greater amplitude carries greater energy.
          Displacement is the position of a particular point in the medium as it
          moves as the wave passes. Maximum displacement is the amplitude of the
          wave.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">Types of Waves</h3>
        <p className="mb-4">
          Transverse Waves: Waves in which the medium moves at right angles to
          the direction of the wave.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={tImage}
            alt="Energy Illustration"
            className="rounded-lg shadow-lg w-48 h-auto"
          />
        </div>

        <p className="mb-4">
          Longitudinal Wave: A longitudinal wave has the movement of the
          particles in the medium in the same dimension as the direction of
          movement of the wave.
        </p>

        <p className="mb-4">
          Mechanical waves: A wave which needs a medium in order to propagate
          itself. Sound waves, waves in a slinky, and water waves are all
          examples of this.
        </p>
        <p className="mb-8">
          Electromagnetic Waves: These waves are disturbance that does not need
          any object medium for propagation and can easily travel through the
          vacuum. They are produced due to various magnetic and electric fields.
          The periodic changes that take place in magnetic and electric fields
          and therefore known as electromagnetic waves.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={EMWaveImage}
            alt="Energy Illustration"
            className="rounded-lg shadow-lg w-48 h-auto"
          />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Properties of Waves
        </h3>
        <p className="mb-8">
          Waves have properties such as wavelength, frequency, amplitude, and
          speed. These properties help describe how waves move and interact.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Mathematical Relationship
        </h3>
        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded mb-8">
          <p>
            <strong>Formula:</strong> Wave Speed (v) = Frequency (f) ×
            Wavelength (λ)
            <br />
            <strong>Unit:</strong> Meters per second (m/s)
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-sky-800">
          3.2 Characteristics of Waves
        </h2>
        <p className="mb-4">
          Amplitude – Wave is an energy transport phenomenon. Amplitude is the
          height of the wave, usually measured in meters. It is directly related
          to the amount of energy carried by a wave.
        </p>
        <p className="mb-4">
          Wavelength – The distance between identical points in the adjacent
          cycles of crests of a wave is called a wavelength. It is also measured
          in meters.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={wavelengthImage}
            alt="Energy Illustration"
            style={{ width: "250px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mb-4">
          Period – The period of a wave is the time for a particle on a medium
          to make one complete vibrational cycle. As the period is time, hence
          is measured in units of time such as seconds or minutes.
        </p>
        <p className="mb-8">
          Frequency – Frequency of a wave is the number of waves passing a point
          in a certain time. The unit of frequency is hertz (Hz) which is equal
          to one wave per second.
        </p>
        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded mb-8">
          <p>
            <strong>Formula:</strong> Period = 1 / Frequency
          </p>
        </div>
        <p className="mb-8">
          Speed – The speed of an object means how fast an object moves and is
          usually expressed as the distance travelled per time of travel. The
          speed of a wave refers to the distance travelled by a given point on
          the wave (crest) in a given interval of time.
        </p>
        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded mb-8">
          <p>
            <strong>Formula:</strong> Speed(V) = Distance(d) / Time(t)
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-sky-800">
          3.3 Nature of Sound Waves
        </h2>
        <p className="mb-8">
          Often we hear sound when we talk to people, listen to music, play a
          musical instrument, etc. But have you ever wondered what sound is and
          how it originated? In this article, let us find answers to all these
          questions.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sky-600">What Is Sound?</h3>
        <p className="mb-8">
          A sound is a vibration that propagates through a medium in the form of
          a mechanical wave. The medium in which it propagates can either be a
          solid, a liquid or a gas. Sound travels fastest in solids, relatively
          slower in liquids and slowest in gases.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={soundImage}
            alt="Energy Illustration"
            style={{ width: "250px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded mb-8">
          <p>
            <strong>Formula:</strong> Frequency(f) = 1 / Time(t)
          </p>
        </div>
        <p className="mb-8">
          Where, f is the frequency of a sound wave and T is the time period.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Frequency and Pitch
        </h3>
        <p className="mb-8">
          The frequency of a sound wave determines its pitch. High-frequency
          sounds have a high pitch, and low-frequency sounds have a low pitch.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Amplitude and Loudness
        </h3>
        <p className="mb-8">
          The amplitude of a sound wave determines its loudness. Loud sounds
          have high intensity, and soft sounds have low intensity.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-sky-800">3.4 Echoes</h2>
        <div className="flex justify-center mb-8">
          <img
            src={echoImage}
            alt="Energy Illustration"
            className="rounded-lg shadow-lg w-48 h-auto"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Creation of an Echo
        </h3>
        <p className="mb-8">
          An echo occurs when sound waves reflect off a surface and return to
          the listener. This phenomenon is commonly experienced in large, empty
          spaces such as canyons or auditoriums. The time delay between the
          original sound and the echo depends on the distance between the source
          and the reflecting surface.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Uses of Echo in Our Daily Lives
        </h3>
        <p className="mb-8">
          Echoes are used in various applications such as sonar and ultrasound
          imaging. Sonar (Sound Navigation and Ranging) uses echoes to detect
          objects underwater. Ultrasound imaging uses echoes to create images of
          the inside of the body, which is commonly used in medical diagnostics.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-sky-800">
          3.5 Velocity of Sound
        </h2>
        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Speed of Sound in Different Media
        </h3>
        <p className="mb-8">
          The speed of sound varies depending on the medium through which it
          travels. It is faster in solids, slower in liquids, and slowest in
          gases. For example, sound travels faster in water than in air, and
          faster on a hot day than on a cold day.
        </p>
        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded mb-8">
          <p>
            <strong>Formula:</strong> Wave Speed (v) = Frequency (f) ×
            Wavelength (λ)
            <br />
            <strong>Unit:</strong> Meters per second (m/s)
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-sky-800">
          3.5 Range of Hearing
        </h2>
        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Human Hearing Range
        </h3>
        <p className="mb-8">
          Humans can hear sounds in the frequency range of approximately 20 Hz
          to 20,000 Hz. This range varies with age and individual hearing
          ability.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Applications of Ultrasound
        </h3>
        <p className="mb-8">
          Ultrasound waves, which have frequencies above the human hearing
          range, are used in various applications such as medical imaging and
          industrial nondestructive testing.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-sky-800">
          3.6 Sound Pollution
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src={polutionImage}
            alt="Energy Illustration"
            style={{ width: "250px", height: "auto" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Causes of Sound Pollution
        </h3>
        <p className="mb-4">
          Sound pollution, also known as noise pollution, is caused by excessive
          or harmful levels of noise in the environment. Common sources include
          traffic, industrial activities, and loud music.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Effects of Sound Pollution
        </h3>
        <p className="mb-4">
          Prolonged exposure to loud noise can lead to various health issues
          such as hearing loss, stress, and sleep disturbances.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-sky-600">
          Prevention of Sound Pollution
        </h3>
        <p className="mb-8">
          Measures to prevent sound pollution include using soundproofing
          materials, implementing noise regulations, and promoting public
          awareness about the harmful effects of noise.
        </p>
      </div>

      {isButtonVisible && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={undoHighlight}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg"
          >
            Undo Highlight
          </button>
        </div>
      )}
      <div className="mt-4 flex space-x-4">
        <button
          className="bg-blue-400 text-white font-bold py-2 px-4 rounded shadow-lg"
          onClick={() => downloadPDF(pdfRef, "WavesAndSound.pdf")}
        >
          Download PDF
        </button>
        <button
          className="bg-teal-500 text-white px-4 py-2 rounded-md"
          onClick={unlockNextLevel}
        >
          Take a quiz
        </button>
        <Link
          to="/space"
          className="bg-blue-600 text-yellow-200 font-semibold px-5 py-2 rounded-md flex items-center"
        >
          <GiKnockedOutStars className="mr-2 scale-150" />
          Check out SPACE
        </Link>
      </div>
    </div>
  );
}
