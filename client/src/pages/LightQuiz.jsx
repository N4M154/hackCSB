import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiSoundWaves } from "react-icons/gi";

export default function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [nextLevelUnlocked, setNextLevelUnlocked] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes timer
  const [timeExpired, setTimeExpired] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeExpired(); // Handle timer expiration
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  useEffect(() => {
    if (!initialized) {
      resetQuiz();
      setInitialized(true);
    }
  }, [initialized]);

  const questions = [
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
      question: "Which effect demonstrates that light can behave as particles?",
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
  ];

  const questionSets = [
    questions.slice(0, 5),
    questions.slice(5, 10),
    questions.slice(10, 15),
    questions.slice(15, 20),
  ];

  const handleSubmit = async (autoSubmit = false) => {
    const currentQuestions = questionSets[currentSet - 1];

    if (!autoSubmit) {
      const unansweredQuestions = currentQuestions.filter(
        (q) => !selectedOptions[q.id]
      );
      if (unansweredQuestions.length > 0) {
        alert("Please answer all questions before submitting.");
        return;
      }
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

    if (totalScore > 3) {
      setNextLevelUnlocked(true);
      await updateUserLevel();
    }
  };

  const handleLevelUpdate = async () => {
    if (currentLevel < 3) {
      await unlockNextLevel();
    } else {
      navigateToNextPage();
    }
  };

  const unlockNextLevel = async () => {
    try {
      const response = await fetch(`/api/course/unlock-next-level`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName,
          courseTopic,
          username: currentUser.username,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(false);
        setShowFeedback(false);
        setScore(0);
        setSelectedOptions({});

        setTimeLeft(120);

        window.location.href = "/Operators";
        alert("You have successfully moved to next level of the course!");
      } else {
        console.error("Failed to unlock next level");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateUserLevel = async () => {
    try {
      const response = await fetch("/api/update-level", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ increment: 1 }), // Sending the increment value, you might want to adjust this according to your backend logic
      });

      if (!response.ok) {
        throw new Error("Failed to update user level");
      }

      const data = await response.json();
      console.log("User level updated:", data);
    } catch (error) {
      console.error("Error updating user level:", error);
    }
  };

  const navigateToNextPage = () => {
    setTimeLeft(120); // Reset the timer
    window.location.href = "/Operators";
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
    setShowFeedback(false);
    setNextLevelUnlocked(false);
    setCurrentSet((currentSet % 4) + 1); // Alternate between sets
    setTimeLeft(120); // Reset the timer
    setTimeExpired(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-white-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-sky-800">Quiz on Force</h1>
      {!submitted && !timeExpired && (
        <div className="fixed top-4 right-4 bg-white shadow-lg p-4 rounded-md border border-gray-300">
          <div className="text-red-500 text-lg font-semibold">
            Time left: {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
          </div>
        </div>
      )}
      {!submitted && !timeExpired && (
        <p className="font-semibold rounded-md keyword-box border border-gray-300 p-4 bg-gray-300 mx-9">
          There are 5 questions on FORCE. You{" "}
          <span className="underline">
            must answer all the questions in a set before submitting.
          </span>
          Once you answer all the questions in a set, you can refresh the page
          to take the quiz again from the beginning.
        </p>
      )}
      {timeExpired && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-red-500 font-semibold mb-4">
            Time's up! Please take the quiz again.
          </p>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Start Again
          </button>
        </div>
      )}
      {!submitted && !timeExpired ? (
        <div className="p-8 h-full">
          <div className="h-full">
            {questionSets[currentSet - 1].map((q, index) => (
              <div key={q.id} className="mb-4">
                <div className="bg-white shadow-md rounded-lg p-4">
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
              </div>
            ))}
            <div className="flex justify-between w-full mt-4">
              <button
                onClick={() => handleSubmit(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={submitted}
              >
                Submit
              </button>
            </div>
            {showFeedback && (
              <div className="mt-4">
                <p className="text-green-500 text-2xl">Score: {score}/5</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
      {submitted && !timeExpired && (
        <div className="mt-4 w-full h-full overflow-y-auto">
          <h3 className="text-xl font-bold mb-2">
            Answer Sheet -{" "}
            <span className="text-green-500 font-semibold underline">
              Score: {score}/5
            </span>
          </h3>
          <div className="mb-4" style={{ margin: "20px" }}>
            {questionSets[currentSet - 1].map((q, index) => (
              <div key={q.id} className="mb-2">
                <div
                  className={`bg-white shadow-md rounded-lg p-4 ${
                    selectedOptions[q.id] === q.correctOption
                      ? "border-green-500 border-2"
                      : "border-red-500 border-2"
                  }`}
                >
                  <p className="mb-1 text-blue-800 font-medium">
                    Question: {`${index + 1}. ${q.question}`}
                  </p>
                  <p
                    className={`mb-1 ${
                      selectedOptions[q.id] === q.correctOption
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    Your Answer: {getOptionText(q, selectedOptions[q.id])}
                  </p>
                  <p>Correct Answer: {getOptionText(q, q.correctOption)}</p>
                </div>
              </div>
            ))}
          </div>

          {score >= 0 && (
            <Link
              to="/waveandsound"
              className="bg-red-100 text-green-900 font-semibold px-5 py-2 rounded-md flex items-center"
            >
              <GiSoundWaves className="mr-2" />
              Check out WAVE and SOUND
            </Link>
          )}

          <button
            onClick={() => {
              resetQuiz();
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Take Quiz Again
          </button>
        </div>
      )}
    </div>
  );
}
