import React, { useState, useEffect } from 'react';

const SpeedVelocityAnimation = () => {
  const initialObjects = [
    { id: 1,  mass: 5, position: 0, speed: 20, initialPosition: 0, distance: 0 },
    { id: 2,  mass: 5, position: 0, speed: 40, initialPosition: 100, distance: 0 },
    { id: 3,  mass: 5, position: 0, speed: 60, initialPosition: 200, distance: 0 },
  ];
  const [objects, setObjects] = useState(initialObjects);
  const [raceStarted, setRaceStarted] = useState(false);
  const [showSeeAgainButton, setShowSeeAgainButton] = useState(false);
  const animationDuration = 10; // Animation duration in seconds
  const boxWidth = 600; // Width of the gray box in pixels
  const objectSizeMultiplier = 12; // Multiplier for object size based on mass

  // Calculate mass, velocity, and distance for each object
  useEffect(() => {
    let animationTimeout;
    if (raceStarted) {
      const updatedObjects = objects.map(obj => {
        const newMass = obj.mass; // Mass is constant
        const distance = obj.speed * animationDuration;
        const newPosition = (boxWidth - (obj.mass * objectSizeMultiplier)) * (distance / (boxWidth - (obj.mass * objectSizeMultiplier)));
        return {
          ...obj,
          mass: newMass,
          position: newPosition,
          distance: distance,
        };
      });
      setObjects(updatedObjects);

      // Reset race after animation duration
      animationTimeout = setTimeout(() => {
        setRaceStarted(false);
        setShowSeeAgainButton(true);
      }, 1000 * animationDuration); // Timeout matches animation duration
    }
    return () => clearTimeout(animationTimeout);
  }, [objects, raceStarted]);

  const startRace = () => {
    setRaceStarted(true);
    setShowSeeAgainButton(false); // Hide the "See Again" button when race starts
  };

  const resetRace = () => {
    setObjects(initialObjects); // Reset objects to initial state
    setRaceStarted(false);
    setShowSeeAgainButton(false); // Hide "See Again" button again
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {objects.map(obj => (
          <div
            key={obj.id}
            className="bg-sky-800 text-white p-2 rounded absolute"
            style={{
              width: `${obj.mass * objectSizeMultiplier}px`,
              height: `${obj.mass * objectSizeMultiplier}px`,
              left: obj.position,
              top: obj.initialPosition,
              transition: `left ${animationDuration}s linear`,
            }}
          >
            Object {obj.id}
          </div>
        ))}
      </div>
      <div className="flex mt-4 bg-gray-200 rounded shadow-lg">
        {objects.map(obj => (
          <div key={obj.id} className="ml-4">
            <p>Object {obj.id}</p>
            <p>Speed: {obj.speed} m/s</p>
            <p>Time: {obj.animationDuration}10s</p>
            <p>Mass: {obj.mass} kg</p>
            <p>Distance Traveled: {obj.distance.toFixed(2)} meters</p>
          </div>
        ))}
      </div>
      {!raceStarted && !showSeeAgainButton && (
        <button
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={startRace}
        >
          Start Race
        </button>
      )}
      {showSeeAgainButton && (
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={resetRace}
        >
          See Again
        </button>
      )}
    </div>
  );
};

export default SpeedVelocityAnimation;
