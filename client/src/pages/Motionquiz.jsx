import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

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
      question: "What is the SI unit of speed?",
      options: [
        { id: 1, text: "m/s" },
        { id: 2, text: "km/h" },
        { id: 3, text: "mph" },
        { id: 4, text: "cm/s" },
      ],
      correctOption: 1,
    },
    {
      id: 2,
      question: "Which of the following is a scalar quantity?",
      options: [
        { id: 1, text: "Velocity" },
        { id: 2, text: "Displacement" },
        { id: 3, text: "Acceleration" },
        { id: 4, text: "Speed" },
      ],
      correctOption: 4,
    },
    {
      id: 3,
      question: "What is the formula for calculating acceleration?",
      options: [
        { id: 1, text: "a = v/t" },
        { id: 2, text: "a = v^2" },
        { id: 3, text: "a = Δv/Δt" },
        { id: 4, text: "a = v^2/t" },
      ],
      correctOption: 3,
    },
    {
      id: 4,
      question:
        "What does a horizontal line on a velocity-time graph represent?",
      options: [
        { id: 1, text: "Constant speed" },
        { id: 2, text: "Constant acceleration" },
        { id: 3, text: "Increasing speed" },
        { id: 4, text: "Decreasing speed" },
      ],
      correctOption: 1,
    },
    {
      id: 5,
      question: "Which of the following is a vector quantity?",
      options: [
        { id: 1, text: "Distance" },
        { id: 2, text: "Speed" },
        { id: 3, text: "Displacement" },
        { id: 4, text: "Time" },
      ],
      correctOption: 3,
    },
    {
      id: 6,
      question: "What is the unit of force?",
      options: [
        { id: 1, text: "Newton" },
        { id: 2, text: "Joule" },
        { id: 3, text: "Watt" },
        { id: 4, text: "Pascal" },
      ],
      correctOption: 1,
    },
    {
      id: 7,
      question: "What is the acceleration due to gravity on Earth?",
      options: [
        { id: 1, text: "9.8 m/s²" },
        { id: 2, text: "9.8 m/s" },
        { id: 3, text: "9.8 km/h" },
        { id: 4, text: "9.8 m/s³" },
      ],
      correctOption: 1,
    },
    {
      id: 8,
      question: "What is the formula for calculating velocity?",
      options: [
        { id: 1, text: "v = s/t" },
        { id: 2, text: "v = s × t" },
        { id: 3, text: "v = s²/t" },
        { id: 4, text: "v = s/t²" },
      ],
      correctOption: 1,
    },
    {
      id: 9,
      question: "Which of the following describes uniform motion?",
      options: [
        { id: 1, text: "Motion with changing speed" },
        { id: 2, text: "Motion with constant acceleration" },
        { id: 3, text: "Motion with constant speed" },
        { id: 4, text: "Motion with changing direction" },
      ],
      correctOption: 3,
    },
    {
      id: 10,
      question: "What is the term for the rate of change of velocity?",
      options: [
        { id: 1, text: "Speed" },
        { id: 2, text: "Acceleration" },
        { id: 3, text: "Displacement" },
        { id: 4, text: "Force" },
      ],
      correctOption: 2,
    },
    {
      id: 11,
      question: "Which of the following is an example of non-uniform motion?",
      options: [
        { id: 1, text: "A car moving at a constant speed on a straight road" },
        { id: 2, text: "A ball rolling down an inclined plane" },
        { id: 3, text: "A satellite orbiting the Earth" },
        { id: 4, text: "A pendulum swinging with constant amplitude" },
      ],
      correctOption: 2,
    },
    {
      id: 12,
      question: "What is the term for the distance covered per unit time?",
      options: [
        { id: 1, text: "Velocity" },
        { id: 2, text: "Speed" },
        { id: 3, text: "Acceleration" },
        { id: 4, text: "Displacement" },
      ],
      correctOption: 2,
    },
    {
      id: 13,
      question: "What does a slope on a distance-time graph represent?",
      options: [
        { id: 1, text: "Speed" },
        { id: 2, text: "Velocity" },
        { id: 3, text: "Acceleration" },
        { id: 4, text: "Displacement" },
      ],
      correctOption: 1,
    },
    {
      id: 14,
      question:
        "Which of the following equations represents Newton's Second Law of Motion?",
      options: [
        { id: 1, text: "F = ma" },
        { id: 2, text: "F = mv" },
        { id: 3, text: "F = m/a" },
        { id: 4, text: "F = ma²" },
      ],
      correctOption: 1,
    },
    {
      id: 15,
      question: "What is the term for the shortest path between two points?",
      options: [
        { id: 1, text: "Distance" },
        { id: 2, text: "Path length" },
        { id: 3, text: "Displacement" },
        { id: 4, text: "Trajectory" },
      ],
      correctOption: 3,
    },
    {
      id: 16,
      question: "What is the unit of displacement?",
      options: [
        { id: 1, text: "Meter" },
        { id: 2, text: "Second" },
        { id: 3, text: "Kilogram" },
        { id: 4, text: "Newton" },
      ],
      correctOption: 1,
    },
    {
      id: 17,
      question: "What does the area under a velocity-time graph represent?",
      options: [
        { id: 1, text: "Displacement" },
        { id: 2, text: "Acceleration" },
        { id: 3, text: "Speed" },
        { id: 4, text: "Distance" },
      ],
      correctOption: 1,
    },
    {
      id: 18,
      question:
        "Which of the following quantities is conserved in uniform circular motion?",
      options: [
        { id: 1, text: "Speed" },
        { id: 2, text: "Velocity" },
        { id: 3, text: "Acceleration" },
        { id: 4, text: "Momentum" },
      ],
      correctOption: 1,
    },
    {
      id: 19,
      question:
        "What is the formula for calculating displacement in uniform motion?",
      options: [
        { id: 1, text: "s = vt" },
        { id: 2, text: "s = at" },
        { id: 3, text: "s = v²t" },
        { id: 4, text: "s = at²" },
      ],
      correctOption: 1,
    },
    {
      id: 20,
      question:
        "What is the term for the tendency of an object to resist changes in its state of motion?",
      options: [
        { id: 1, text: "Inertia" },
        { id: 2, text: "Force" },
        { id: 3, text: "Mass" },
        { id: 4, text: "Momentum" },
      ],
      correctOption: 1,
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
      <h1 className="text-3xl font-bold mb-8 text-sky-800">Quiz on MOTION</h1>
      {!submitted && !timeExpired && (
        <div className="fixed top-4 right-4 bg-white shadow-lg p-4 rounded-md border border-gray-300">
          <div className="text-red-500 text-lg font-semibold">
            Time left: {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
          </div>
        </div>
      )}
      {!submitted && !timeExpired && (
        <p className="font-semibold rounded-md keyword-box border border-gray-300 p-4 bg-gray-300 mx-9">
          There are 5 questions on MOTION. You{" "}
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
              to="/force"
              className="bg-black text-white px-5 py-2 rounded-md flex items-center"
            >
              <IoStarSharp className="mr-2" />
              Check out FORCE
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
