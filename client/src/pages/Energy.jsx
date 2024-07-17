import React, { useRef, useEffect } from "react";
import sunlightImage from "../images/sunlight.jpeg";
import fuelImage from "../images/fuel.png";
import typesImage from "../images/types.jpg";
import transferImage from "../images/transfer.png";
import nuclearImage from "../images/nuclear.jpeg";
import conservationImage from "../images/conservation.png";
import gravitationalImage from "../images/gravitational.jpg";
import kineticImage from "../images/kinetic.jpeg";
import efficiencyImage from "../images/efficiency.png";
import { Link } from "react-router-dom";
import { downloadPDF } from "../utils/pdf";
import { FaLightbulb } from "react-icons/fa";

export default function Arrays() {
  const pdfRef = useRef();

  const unlockNextLevel = () => {
    window.location.reload();
    window.location.href = "/Energyquiz";
  };

  useEffect(() => {
    if (location.pathname === "/energy") {
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
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-sky-300 to-white-500 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4" id="pdfContent">
        <h1 className="text-3xl font-bold mb-8 text-blue-800">
          Introduction to Energy
        </h1>

        <h2 className="text-2xl font-bold mb-8 text-sky-800">
          What is energy?
        </h2>

        <p>
          Energy is the ability to do work. Think of it as the fuel for
          everything that happens around us. It comes in different forms like
          the movement of a car, the heat from a stove, or the light from a
          bulb. We measure energy in joules (J), just like we measure distance
          in meters or weight in kilograms. For example, when you eat food, your
          body converts it into energy that you can use to play, run, and think.
          Similarly, a car uses fuel to move, and a stove uses gas or
          electricity to cook food.
        </p>
        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded">
          <p>
            <strong>Formula:</strong> Work done (W) = Force (F) × Distance (d)
            <br />
            <strong>Unit:</strong> Joules (J)
          </p>
        </div>

        <h2 className="text-1xl font-bold mb-8 text-sky-800">
          You need energy
        </h2>

        <p>
          Imagine trying to ride your bike without eating. It wouldn’t work
          because your body needs energy from food to move. Cars need fuel to
          run, and homes need electricity to power lights and appliances. Energy
          helps us understand what’s possible, even if it doesn’t explain
          everything. For example, knowing a car needs fuel tells us it won’t go
          anywhere without it, but it doesn't tell us where the car will go.
          Just like how you need a good breakfast to start your day strong, a
          car needs fuel to get going.
        </p>

        <h2 className="text-1xl font-bold mb-8 text-sky-800">
          Energy for your body
        </h2>

        <p>
          Every action you take, like walking, breathing, or thinking, uses
          energy. Most of the energy you need daily keeps your body functioning,
          like maintaining your body temperature and supporting vital processes.
          Athletes need more energy, especially those undertaking extreme
          challenges like polar expeditions, which require energy for both
          physical activity and staying warm. Think about how you feel after a
          long day of playing outside; your body uses energy to keep you moving
          and warm.
        </p>

        <div className="flex justify-center my-8">
          <img
            src={sunlightImage}
            alt="Energy Illustration"
            width="300"
            height="200"
          />
        </div>

        <h2 className="text-1xl font-bold mb-8 text-sky-800">
          Energy in fuels
        </h2>

        <p>
          Besides food, fuels like coal, oil, and wood store energy that we can
          use. Burning these fuels can heat a room or cook food. When you use an
          electric kettle, the energy to boil water often comes from burning
          fuels at power stations. This stored energy in fuels is transferred to
          electricity, which powers the kettle. Imagine roasting marshmallows
          over a campfire; the wood you burn is a fuel that provides heat
          energy.
        </p>

        <div className="flex justify-center my-8">
          <img src={fuelImage} alt="Fuel" width="300" height="200" />
        </div>

        <h2 className="text-2xl font-bold mb-8 text-sky-800">
          2.2 Energy types
        </h2>
        <p>
          Whenever you move, cook, or turn on a light, you’re using stored
          energy from food or fuels. We can describe energy in different ‘types’
          to help understand these processes. For example, potential energy is
          stored due to an object’s position or shape. Moving objects have
          kinetic energy, and food and fuels store chemical energy.
        </p>
        <p>
          Chemical energy from food and fuels keeps us warm and powers our
          activities. When you lift an object, like a baby, it gains
          gravitational potential energy. Burning fuels releases thermal energy,
          which heats the air around us. Think of a roller coaster at the top of
          a hill (potential energy) and then speeding down (kinetic energy).
        </p>

        <div className="flex justify-center my-8">
          <img src={typesImage} alt="Energy Types" width="300" height="200" />
        </div>

        <h2 className="text-2xl font-bold mb-8 text-sky-800">
          Energy transfer
        </h2>
        <p>
          In a flashlight, electrical energy from the battery transfers to the
          bulb, producing light. Electric kettles use electrical energy to heat
          water, usually sourced from power stations. Energy from the Sun or a
          candle transfers as light waves, which we need to see.
        </p>

        <div className="flex justify-center my-8">
          <img
            src={transferImage}
            alt="Energy Transfer"
            width="300"
            height="200"
          />
        </div>

        <p>
          Musical instruments transfer energy as sound waves. When you play a
          guitar or talk, your vocal cords produce sound energy. Electrical,
          light, and sound energy describe how energy is transferred, not
          stored. Think of a radio playing your favorite song, transferring
          electrical energy to sound energy that you can hear.
        </p>

        <h2 className="text-1xl font-bold mb-8 text-sky-800">Nuclear energy</h2>

        <div className="flex justify-center my-8">
          <img
            src={nuclearImage}
            alt="Nuclear Energy"
            width="300"
            height="200"
          />
        </div>

        <p>
          The Sun’s energy comes from nuclear reactions at its core. Power
          stations can use similar reactions to generate electricity. Imagine
          how much energy the Sun must have to keep shining every day, providing
          light and warmth.
        </p>

        <h2 className="text-2xl font-bold mb-8 text-sky-800">
          Energy conservation
        </h2>
        <p>
          Energy conservation means energy doesn’t disappear; it only transfers
          from one form to another. If energy seems to vanish, look for where it
          has transferred, usually as thermal energy. For example, a moving car
          stops because its kinetic energy transfers to thermal energy due to
          friction. Think about how rubbing your hands together makes them warm
          due to friction.
        </p>

        <div className="flex justify-center my-8">
          <img
            src={conservationImage}
            alt="Energy Conservation"
            width="300"
            height="200"
          />
        </div>

        <h2 className="text-1xl font-bold mb-8 text-sky-800">
          Gravitational potential energy
        </h2>

        <div className="flex justify-center my-8">
          <img
            src={gravitationalImage}
            alt="Gravitational Potential Energy"
            width="300"
            height="200"
          />
        </div>

        <p>
          Lifting an object increases its gravitational potential energy. When
          it falls, this energy converts to kinetic energy. For example,
          dropping a book transfers potential energy to kinetic energy as it
          falls. Think of a swing going up (gaining potential energy) and then
          coming down (converting to kinetic energy).
        </p>
        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded my-4">
          <p>
            <strong>Formula:</strong> Gravitational Potential Energy (GPE) =
            Mass (m) × Gravitational Field Strength (g) × Height (h)
            <br />
            <strong>Unit:</strong> Joules (J)
          </p>
        </div>

        <h2 className="text-1xl font-bold mb-8 text-sky-800">Kinetic energy</h2>

        <div className="flex justify-center my-8">
          <img
            src={kineticImage}
            alt="Kinetic Energy"
            width="300"
            height="200"
          />
        </div>

        <p>
          Moving objects have kinetic energy. Heavier or faster objects have
          more kinetic energy. For example, a speeding car has more kinetic
          energy than a slow-moving bike. Think of a fastball in baseball having
          more energy compared to a gently tossed ball.
        </p>
        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded my-4">
          <p>
            <strong>Formula:</strong> Kinetic Energy (KE) = 1/2 × Mass (m) ×
            Velocity² (v²)
            <br />
            <strong>Unit:</strong> Joules (J)
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-sky-800">
          Energy efficiency
        </h2>
        <p>
          Energy efficiency measures how well energy converts from one form to
          another. Machines are never perfectly efficient; some energy always
          transfers to less useful forms, often thermal. For example, car
          engines convert only part of fuel energy into motion; the rest turns
          into heat. Imagine how much energy a lightbulb uses to produce light
          versus how much turns into heat.
        </p>

        <div className="flex justify-center my-8">
          <img
            src={efficiencyImage}
            alt="Energy Efficiency"
            width="300"
            height="200"
          />
        </div>

        <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded my-4">
          <p>
            <strong>Formula:</strong> Efficiency (%) = (Useful Energy Output /
            Total Energy Input) × 100
          </p>
        </div>
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          onClick={() =>
            downloadPDF(pdfRef.current, "Chapter2_IntroductionToEnergy.pdf")
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-700"
        >
          Download PDF
        </button>
        <button
          onClick={unlockNextLevel}
          className="bg-teal-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-green-700"
        >
          Take the quiz
        </button>

        <Link
          to="/light"
          className="bg-yellow-300 text-black px-5 py-2 rounded-md flex items-center"
        >
          <FaLightbulb className="mr-2" />
          Check out LIGHT
        </Link>
      </div>
    </div>
  );
}
