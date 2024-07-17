import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SlEnergy } from "react-icons/sl";

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
      question: "Which of the following is not a fundamental force in nature?",
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
      question: "Which of the following is an example of a non-contact force?",
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
              to="/energy"
              className="bg-gray-300 text-black px-5 py-2 rounded-md flex items-center"
            >
              <SlEnergy className="mr-2 text-yellow-500" />
              Check out ENERGY
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
