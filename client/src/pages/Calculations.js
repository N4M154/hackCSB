// Function to calculate acceleration from force and mass
export function calculateAcceleration(force, mass) {
  if (isNaN(force) || isNaN(mass) || mass === 0) {
    throw new Error(
      "Invalid input. Force and mass must be valid numbers, and mass must not be zero."
    );
  }

  const acceleration = force / mass;

  return acceleration.toFixed(2);
}

// Function to calculate acceleration from initial velocity, final velocity, and time
export function calculateAccelerationFromVUT(
  finalVelocity,
  initialVelocity,
  time
) {
  if (
    isNaN(finalVelocity) ||
    isNaN(initialVelocity) ||
    isNaN(time) ||
    time === 0
  ) {
    throw new Error(
      "Invalid input. Final velocity, initial velocity, and time must be valid numbers, and time must not be zero."
    );
  }

  const acceleration = (finalVelocity - initialVelocity) / time;

  return acceleration.toFixed(2);
}

// Function to calculate acceleration from displacement, initial velocity, and time
export function calculateAccelerationFromSUT(
  displacement,
  initialVelocity,
  time
) {
  if (
    isNaN(displacement) ||
    isNaN(initialVelocity) ||
    isNaN(time) ||
    time === 0
  ) {
    throw new Error(
      "Invalid input. Displacement, initial velocity, and time must be valid numbers, and time must not be zero."
    );
  }
  const acceleration =
    (2 * (displacement - initialVelocity * time)) / (time * time);
  return acceleration.toFixed(2);
}

// Function to calculate acceleration from initial velocity, final velocity, and displacement
export function calculateAccelerationFromV2U2(
  finalVelocity,
  initialVelocity,
  displacement
) {
  if (
    isNaN(finalVelocity) ||
    isNaN(initialVelocity) ||
    isNaN(displacement) ||
    displacement === 0
  ) {
    throw new Error(
      "Invalid input. Final velocity, initial velocity, and displacement must be valid numbers, and displacement must not be zero."
    );
  }

  const acceleration =
    (Math.pow(finalVelocity, 2) - Math.pow(initialVelocity, 2)) /
    (2 * displacement);

  return acceleration.toFixed(2);
}

// Function to calculate energy from spring constant and displacement
export function calculateEnergy(k, x) {
  if (isNaN(k) || isNaN(x)) {
    throw new Error("Invalid input. k and x must be valid numbers.");
  }
  const energy = 0.5 * k * x * x;
  return energy.toFixed(2);
}

// Function to calculate current from voltage and resistance
export function calculateCurrent(voltage, resistance) {
  if (isNaN(voltage) || isNaN(resistance) || resistance === 0) {
    throw new Error(
      "Invalid input. Voltage and resistance must be valid numbers, and resistance must not be zero."
    );
  }
  const current = voltage / resistance;
  return current.toFixed(2); // Round to two decimal places
}
