import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import {
  calculateAcceleration,
  calculateAccelerationFromVUT,
  calculateAccelerationFromSUT,
  calculateAccelerationFromV2U2,
  calculateEnergy,
  calculateCurrent,
} from "./Calculations";
import VUTCalculator from "./VUTcalculator";
import SUTCalculator from "./SUTcalculator";

export default function ForceCalculator() {
  const [force, setForce] = useState("");
  const [mass, setMass] = useState("");
  const [initialVelocity, setInitialVelocity] = useState("");
  const [finalVelocity, setFinalVelocity] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [springConstant, setSpringConstant] = useState("");
  const [voltage, setVoltage] = useState("");
  const [resistance, setResistance] = useState("");
  const [energy, setEnergy] = useState("");
  const [current, setCurrent] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [selectedFormula, setSelectedFormula] = useState("Force");
  const [dataPoints, setDataPoints] = useState([]);
  const [highlightedAcceleration, setHighlightedAcceleration] = useState(null);

  const handleCalculate = () => {
    try {
      if (selectedFormula === "Force") {
        const calculatedAcceleration = calculateAcceleration(
          parseFloat(force),
          parseFloat(mass)
        );
        setAcceleration(calculatedAcceleration);
        setHighlightedAcceleration(parseFloat(calculatedAcceleration));
        generateDataPointsForForce(parseFloat(mass));
      } else if (selectedFormula === "V2U2") {
        const calculatedAcceleration = calculateAccelerationFromV2U2(
          parseFloat(finalVelocity),
          parseFloat(initialVelocity),
          parseFloat(displacement)
        );
        setAcceleration(calculatedAcceleration);
        setHighlightedAcceleration(parseFloat(calculatedAcceleration));
        generateDataPointsForV2U2(
          parseFloat(initialVelocity),
          parseFloat(displacement)
        );
      } else if (selectedFormula === "Energy") {
        const calculatedEnergy = calculateEnergy(
          parseFloat(springConstant),
          parseFloat(displacement)
        );
        setEnergy(calculatedEnergy);
        generateDataPointsForEnergy(parseFloat(displacement));
      } else if (selectedFormula === "Current") {
        const calculatedCurrent = calculateCurrent(
          parseFloat(voltage),
          parseFloat(resistance)
        );
        setCurrent(calculatedCurrent);
        generateDataPointsForCurrent(parseFloat(resistance));
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const generateDataPointsForForce = (mass) => {
    const newPoints = [];
    for (let a = 0; a <= 10; a += 0.5) {
      newPoints.push({ acceleration: a, force: mass * a });
    }
    setDataPoints(newPoints);
  };

  const generateDataPointsForV2U2 = (initialVelocity, displacement) => {
    const newPoints = [];
    for (let a = 0; a <= 10; a += 0.5) {
      const v = Math.sqrt(Math.pow(initialVelocity, 2) + 2 * a * displacement);
      newPoints.push({ acceleration: a, velocity: v });
    }
    setDataPoints(newPoints);
  };

  const generateDataPointsForEnergy = (displacement) => {
    const newPoints = [];
    for (let k = 0; k <= 10; k += 0.5) {
      const e = 0.5 * k * displacement * displacement;
      newPoints.push({ springConstant: k, energy: e });
    }
    setDataPoints(newPoints);
  };

  const generateDataPointsForCurrent = (resistance) => {
    const newPoints = [];
    for (let v = 0; v <= 10; v += 0.5) {
      const i = v / resistance;
      newPoints.push({ voltage: v, current: i });
    }
    setDataPoints(newPoints);
  };

  const renderCalculator = () => {
    switch (selectedFormula) {
      case "Force":
        return (
          <div className="bg-green-200 shadow-md rounded-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Force Calculator
            </h3>
            <p className="text-gray-700 mb-2">
              Enter values for Force (F) and Mass (m):
            </p>
            <div className="mb-4">
              <label htmlFor="forceInput" className="block text-gray-700">
                Force (F):
              </label>
              <input
                type="number"
                id="forceInput"
                value={force}
                onChange={(e) => setForce(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="massInput" className="block text-gray-700">
                Mass (m):
              </label>
              <input
                type="number"
                id="massInput"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
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

      case "VUT":
        return (
          <VUTCalculator
            setAcceleration={setAcceleration}
            setHighlightedAcceleration={setHighlightedAcceleration}
            setDataPoints={setDataPoints}
          />
        );

      case "SUT":
        return (
          <SUTCalculator
            setAcceleration={setAcceleration}
            setHighlightedAcceleration={setHighlightedAcceleration}
            setDataPoints={setDataPoints}
          />
        );

      case "V2U2":
        return (
          <div className="bg-green-200 shadow-md rounded-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Velocity Squared Calculator
            </h3>
            <p className="text-gray-700 mb-2">
              Enter values for Initial Velocity (u), Final Velocity (v), and
              Displacement (s):
            </p>
            <div className="mb-4">
              <label
                htmlFor="initialVelocityInput"
                className="block text-gray-700"
              >
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
              <label
                htmlFor="finalVelocityInput"
                className="block text-gray-700"
              >
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
              <label
                htmlFor="displacementInput"
                className="block text-gray-700"
              >
                Displacement (s):
              </label>
              <input
                type="number"
                id="displacementInput"
                value={displacement}
                onChange={(e) => setDisplacement(e.target.value)}
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

      case "Energy":
        return (
          <div className="bg-green-200 shadow-md rounded-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Energy Calculator
            </h3>
            <p className="text-gray-700 mb-2">
              Enter values for Spring Constant (k) and Displacement (x):
            </p>
            <div className="mb-4">
              <label
                htmlFor="springConstantInput"
                className="block text-gray-700"
              >
                Spring Constant (k):
              </label>
              <input
                type="number"
                id="springConstantInput"
                value={springConstant}
                onChange={(e) => setSpringConstant(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="displacementInput"
                className="block text-gray-700"
              >
                Displacement (x):
              </label>
              <input
                type="number"
                id="displacementInput"
                value={displacement}
                onChange={(e) => setDisplacement(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              onClick={handleCalculate}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Calculate Energy
            </button>
            {energy && (
              <p className="mt-4 text-green-600">Energy (E) = {energy} J</p>
            )}
          </div>
        );

      case "Current":
        return (
          <div className="bg-green-200 shadow-md rounded-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Current Calculator
            </h3>
            <p className="text-gray-700 mb-2">
              Enter values for Voltage (V) and Resistance (R):
            </p>
            <div className="mb-4">
              <label htmlFor="voltageInput" className="block text-gray-700">
                Voltage (V):
              </label>
              <input
                type="number"
                id="voltageInput"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="resistanceInput" className="block text-gray-700">
                Resistance (R):
              </label>
              <input
                type="number"
                id="resistanceInput"
                value={resistance}
                onChange={(e) => setResistance(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              onClick={handleCalculate}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Calculate Current
            </button>
            {current && (
              <p className="mt-4 text-green-600">Current (I) = {current} A</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center bg-gradient-to-br from-green-200 to-white-500">
      {/* Left Side */}
      <div className="w-1/3 p-4">
        <div className="mb-4">
          <h3 className="text-3xl font-bold mb-4">Select a Formula</h3>
          <select
            className="bg-green-200 rounded-md py-2 px-4 text-xl"
            value={selectedFormula}
            onChange={(e) => setSelectedFormula(e.target.value)}
          >
            <option value="Force">Force (F = ma)</option>
            <option value="VUT">Final Velocity (v = u + at)</option>
            <option value="SUT">Displacement (s = ut + 0.5at²)</option>
            <option value="V2U2">Velocity Squared (v² = u² + 2as)</option>
            <option value="Energy">Energy (E = 0.5kx²)</option>
            <option value="Current">Current (I = V/R)</option>
          </select>
        </div>

        {/* Render Calculator */}
        {renderCalculator()}
      </div>

      {/* Right Side */}
      <div className="w-2/3 p-4">
        {dataPoints.length > 0 && (
          <div className="mt-8">
            <h3>
              {selectedFormula === "Force"
                ? "Force vs Acceleration Graph"
                : selectedFormula === "VUT"
                ? "Velocity vs Time Graph"
                : selectedFormula === "SUT"
                ? "Displacement vs Time Graph"
                : selectedFormula === "V2U2"
                ? "Velocity vs Acceleration Graph"
                : selectedFormula === "Energy"
                ? "Energy vs Spring Constant Graph"
                : "Current vs Resistance Graph"}
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={dataPoints}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={
                    selectedFormula === "Force"
                      ? "acceleration"
                      : selectedFormula === "VUT"
                      ? "time"
                      : selectedFormula === "SUT"
                      ? "time"
                      : selectedFormula === "V2U2"
                      ? "acceleration"
                      : selectedFormula === "Energy"
                      ? "springConstant"
                      : "voltage"
                  }
                  label={{
                    value:
                      selectedFormula === "Force"
                        ? "Acceleration (m/s²)"
                        : selectedFormula === "VUT"
                        ? "Time (s)"
                        : selectedFormula === "SUT"
                        ? "Time (s)"
                        : selectedFormula === "V2U2"
                        ? "Acceleration (m/s²)"
                        : selectedFormula === "Energy"
                        ? "Spring Constant (k)"
                        : "Voltage (V)",
                    position: "insideBottomRight",
                    offset: 0,
                  }}
                />
                <YAxis
                  label={{
                    value:
                      selectedFormula === "Force"
                        ? "Force (N)"
                        : selectedFormula === "VUT"
                        ? "Velocity (m/s)"
                        : selectedFormula === "SUT"
                        ? "Displacement (m)"
                        : selectedFormula === "V2U2"
                        ? "Velocity (m/s)"
                        : selectedFormula === "Energy"
                        ? "Energy (J)"
                        : "Current (A)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey={
                    selectedFormula === "Force"
                      ? "force"
                      : selectedFormula === "VUT"
                      ? "velocity"
                      : selectedFormula === "SUT"
                      ? "displacement"
                      : selectedFormula === "V2U2"
                      ? "velocity"
                      : selectedFormula === "Energy"
                      ? "energy"
                      : "current"
                  }
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                {highlightedAcceleration && (
                  <ReferenceLine
                    x={highlightedAcceleration}
                    stroke="red"
                    label={{
                      position: "top",
                      value: `${highlightedAcceleration} m/s²`,
                      fill: "red",
                    }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
