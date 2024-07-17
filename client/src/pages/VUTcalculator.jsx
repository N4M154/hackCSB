import React, { useState } from "react";
import { calculateAccelerationFromVUT } from "./Calculations";

function VUTCalculator({ setHighlightedAcceleration, setDataPoints }) {
  const [initialVelocity, setInitialVelocity] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [finalVelocity, setFinalVelocity] = useState("");
  const [time, setTime] = useState("");

  const handleCalculate = () => {
    try {
      const calculatedAcceleration = calculateAccelerationFromVUT(
        parseFloat(finalVelocity),
        parseFloat(initialVelocity),
        parseFloat(time)
      );
      setAcceleration(calculatedAcceleration);
      setHighlightedAcceleration(parseFloat(calculatedAcceleration));
      generateDataPoints(
        parseFloat(initialVelocity),
        parseFloat(calculatedAcceleration)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const generateDataPoints = (initialVelocity, acceleration) => {
    const newPoints = [];
    for (let t = 0; t <= 10; t += 0.5) {
      newPoints.push({ time: t, velocity: initialVelocity + acceleration * t });
    }
    setDataPoints(newPoints);
  };

  return (
    <div className="bg-green-200 shadow-md rounded-md p-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">
        Velocity Calculator
      </h3>
      <p className="text-gray-700 mb-2">
        Enter values for Initial Velocity (u), Final Velocity (v), and Time (t):
      </p>
      <div className="mb-4">
        <label htmlFor="initialVelocityInput" className="block text-gray-700">
          Initial Velocity (u):
        </label>
        <input
          type="number"
          id="initialVelocityInput"
          value={initialVelocity}
          onChange={(e) => setInitialVelocity(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="finalVelocityInput" className="block text-gray-700">
          Final Velocity (v):
        </label>
        <input
          type="number"
          id="finalVelocityInput"
          value={finalVelocity}
          onChange={(e) => setFinalVelocity(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="timeInput" className="block text-gray-700">
          Time (t):
        </label>
        <input
          type="number"
          id="timeInput"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Calculate Acceleration
      </button>
      {acceleration && (
        <p className="mt-4 text-green-600">
          Acceleration (a) = {acceleration} m/s²
        </p>
      )}
    </div>
  );
}

export default VUTCalculator;
