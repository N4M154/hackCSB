import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa";

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
      question:
        "What is the primary source of energy for the Earth's climate system?",
      options: [
        { id: 1, text: "Solar energy" },
        { id: 2, text: "Geothermal energy" },
        { id: 3, text: "Wind energy" },
        { id: 4, text: "Tidal energy" },
      ],
      correctOption: 1,
    },
    {
      id: 2,
      question: "Which of the following is a non-renewable energy source?",
      options: [
        { id: 1, text: "Wind energy" },
        { id: 2, text: "Solar energy" },
        { id: 3, text: "Coal" },
        { id: 4, text: "Hydroelectric energy" },
      ],
      correctOption: 3,
    },
    {
      id: 3,
      question:
        "What is the unit of energy in the International System of Units (SI)?",
      options: [
        { id: 1, text: "Watt" },
        { id: 2, text: "Joule" },
        { id: 3, text: "Newton" },
        { id: 4, text: "Pascal" },
      ],
      correctOption: 2,
    },
    {
      id: 4,
      question:
        "Which of the following processes directly converts solar energy into electrical energy?",
      options: [
        { id: 1, text: "Solar thermal power" },
        { id: 2, text: "Photovoltaic cells" },
        { id: 3, text: "Hydroelectric power" },
        { id: 4, text: "Wind turbines" },
      ],
      correctOption: 2,
    },
    {
      id: 5,
      question: "What type of energy is stored in a battery?",
      options: [
        { id: 1, text: "Kinetic energy" },
        { id: 2, text: "Thermal energy" },
        { id: 3, text: "Chemical energy" },
        { id: 4, text: "Nuclear energy" },
      ],
      correctOption: 3,
    },
    {
      id: 6,
      question:
        "Which energy source is considered the most environmentally friendly?",
      options: [
        { id: 1, text: "Coal" },
        { id: 2, text: "Natural gas" },
        { id: 3, text: "Nuclear energy" },
        { id: 4, text: "Solar energy" },
      ],
      correctOption: 4,
    },
    {
      id: 7,
      question: "What is the main disadvantage of solar energy?",
      options: [
        { id: 1, text: "It is intermittent and weather dependent" },
        { id: 2, text: "It produces greenhouse gases" },
        { id: 3, text: "It is non-renewable" },
        { id: 4, text: "It requires a lot of water" },
      ],
      correctOption: 1,
    },
    {
      id: 8,
      question: "Which of the following is an example of kinetic energy?",
      options: [
        { id: 1, text: "A compressed spring" },
        { id: 2, text: "A moving car" },
        { id: 3, text: "A charged battery" },
        { id: 4, text: "A stretched rubber band" },
      ],
      correctOption: 2,
    },
    {
      id: 9,
      question:
        "What form of energy is harnessed from the heat within the Earth?",
      options: [
        { id: 1, text: "Solar energy" },
        { id: 2, text: "Geothermal energy" },
        { id: 3, text: "Nuclear energy" },
        { id: 4, text: "Wind energy" },
      ],
      correctOption: 2,
    },
    {
      id: 10,
      question:
        "What is the process of generating electricity by using water to turn turbines called?",
      options: [
        { id: 1, text: "Photovoltaic generation" },
        { id: 2, text: "Thermal generation" },
        { id: 3, text: "Hydroelectric generation" },
        { id: 4, text: "Nuclear generation" },
      ],
      correctOption: 3,
    },
    {
      id: 11,
      question: "Which energy source has the highest energy density?",
      options: [
        { id: 1, text: "Wind energy" },
        { id: 2, text: "Solar energy" },
        { id: 3, text: "Hydroelectric energy" },
        { id: 4, text: "Nuclear energy" },
      ],
      correctOption: 4,
    },
    {
      id: 12,
      question: "What is the main byproduct of burning fossil fuels?",
      options: [
        { id: 1, text: "Oxygen" },
        { id: 2, text: "Carbon dioxide" },
        { id: 3, text: "Hydrogen" },
        { id: 4, text: "Nitrogen" },
      ],
      correctOption: 2,
    },
    {
      id: 13,
      question: "Which of the following is a renewable energy source?",
      options: [
        { id: 1, text: "Natural gas" },
        { id: 2, text: "Coal" },
        { id: 3, text: "Wind energy" },
        { id: 4, text: "Oil" },
      ],
      correctOption: 3,
    },
    {
      id: 14,
      question:
        "What type of energy transformation occurs in a hydroelectric dam?",
      options: [
        { id: 1, text: "Thermal to mechanical" },
        { id: 2, text: "Mechanical to electrical" },
        { id: 3, text: "Chemical to thermal" },
        { id: 4, text: "Nuclear to thermal" },
      ],
      correctOption: 2,
    },
    {
      id: 15,
      question: "What is the efficiency of a typical coal-fired power plant?",
      options: [
        { id: 1, text: "30-40%" },
        { id: 2, text: "50-60%" },
        { id: 3, text: "70-80%" },
        { id: 4, text: "90-100%" },
      ],
      correctOption: 1,
    },
    {
      id: 16,
      question: "Which of the following is not a greenhouse gas?",
      options: [
        { id: 1, text: "Carbon dioxide" },
        { id: 2, text: "Methane" },
        { id: 3, text: "Nitrous oxide" },
        { id: 4, text: "Oxygen" },
      ],
      correctOption: 4,
    },
    {
      id: 17,
      question: "What is the main component of natural gas?",
      options: [
        { id: 1, text: "Methane" },
        { id: 2, text: "Ethane" },
        { id: 3, text: "Propane" },
        { id: 4, text: "Butane" },
      ],
      correctOption: 1,
    },
    {
      id: 18,
      question: "What type of energy is produced by splitting atomic nuclei?",
      options: [
        { id: 1, text: "Thermal energy" },
        { id: 2, text: "Nuclear energy" },
        { id: 3, text: "Chemical energy" },
        { id: 4, text: "Mechanical energy" },
      ],
      correctOption: 2,
    },
    {
      id: 19,
      question: "Which of the following is a disadvantage of wind energy?",
      options: [
        { id: 1, text: "It is non-renewable" },
        { id: 2, text: "It produces air pollution" },
        { id: 3, text: "It can be intermittent and dependent on weather" },
        { id: 4, text: "It requires fossil fuels" },
      ],
      correctOption: 3,
    },
    {
      id: 20,
      question: "What is the main advantage of using renewable energy sources?",
      options: [
        { id: 1, text: "They are non-renewable" },
        { id: 2, text: "They are always available" },
        { id: 3, text: "They do not produce greenhouse gases" },
        { id: 4, text: "They are inexpensive to install" },
      ],
      correctOption: 3,
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
              to="/light"
              className="bg-yellow-300 text-black px-5 py-2 rounded-md flex items-center"
            >
              <FaLightbulb className="mr-2" />
              Check out LIGHT
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
