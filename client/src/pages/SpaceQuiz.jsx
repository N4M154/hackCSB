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
        question: "What is space science?",
        options: [
            { id: 1, text: "The study of oceans" },
            { id: 2, text: "The study of animals" },
            { id: 3, text: "The study of everything in outer space" },
            { id: 4, text: "The study of weather patterns" }
        ],
        correctOption: 3
    },
    {
        id: 2,
        question: "What do space scientists use to explore space?",
        options: [
            { id: 1, text: "Microscopes" },
            { id: 2, text: "Telescopes and spacecraft" },
            { id: 3, text: "Binoculars" },
            { id: 4, text: "Magnifying glasses" }
        ],
        correctOption: 2
    },
    {
        id: 3,
        question: "Why is space science important?",
        options: [
            { id: 1, text: "It helps us understand our universe" },
            { id: 2, text: "It leads to technological advancements" },
            { id: 3, text: "It inspires curiosity and imagination" },
            { id: 4, text: "All of the above" }
        ],
        correctOption: 4
    },
    {
        id: 4,
        question: "How many planets are there in our solar system?",
        options: [
            { id: 1, text: "Six" },
            { id: 2, text: "Seven" },
            { id: 3, text: "Eight" },
            { id: 4, text: "Nine" }
        ],
        correctOption: 3
    },
    {
        id: 5,
        question: "Which planet is known as the Red Planet?",
        options: [
            { id: 1, text: "Earth" },
            { id: 2, text: "Mars" },
            { id: 3, text: "Jupiter" },
            { id: 4, text: "Saturn" }
        ],
        correctOption: 2
    },
    {
        id: 6,
        question: "What is the Sun?",
        options: [
            { id: 1, text: "A planet" },
            { id: 2, text: "A moon" },
            { id: 3, text: "A star" },
            { id: 4, text: "An asteroid" }
        ],
        correctOption: 3
    },
    {
        id: 7,
        question: "What are black holes?",
        options: [
            { id: 1, text: "Large stars" },
            { id: 2, text: "Planets with no atmosphere" },
            { id: 3, text: "Mysterious objects with a strong gravitational pull" },
            { id: 4, text: "Bright galaxies" }
        ],
        correctOption: 3
    },
    {
        id: 8,
        question: "What galaxy is our solar system a part of?",
        options: [
            { id: 1, text: "Andromeda Galaxy" },
            { id: 2, text: "Milky Way Galaxy" },
            { id: 3, text: "Whirlpool Galaxy" },
            { id: 4, text: "Sombrero Galaxy" }
        ],
        correctOption: 2
    },
    {
        id: 9,
        question: "Who was the first person to walk on the Moon?",
        options: [
            { id: 1, text: "Yuri Gagarin" },
            { id: 2, text: "Buzz Aldrin" },
            { id: 3, text: "Chris Hadfield" },
            { id: 4, text: "Neil Armstrong" }
        ],
        correctOption: 4
    },
    {
        id: 10,
        question: "What is the International Space Station (ISS)?",
        options: [
            { id: 1, text: "A space shuttle" },
            { id: 2, text: "A space probe" },
            { id: 3, text: "A space station where astronauts live and work" },
            { id: 4, text: "A telescope" }
        ],
        correctOption: 3
    },
    {
        id: 11,
        question: "What happens to sound in space?",
        options: [
            { id: 1, text: "It becomes louder" },
            { id: 2, text: "It travels faster" },
            { id: 3, text: "It cannot travel" },
            { id: 4, text: "It echoes" }
        ],
        correctOption: 3
    },
    {
        id: 12,
        question: "What protects astronauts from the harsh environment of space?",
        options: [
            { id: 1, text: "Space boots" },
            { id: 2, text: "Space gloves" },
            { id: 3, text: "Space suits" },
            { id: 4, text: "Space helmets" }
        ],
        correctOption: 3
    },
    {
        id: 13,
        question: "Who was the first human to journey into outer space?",
        options: [
            { id: 1, text: "Neil Armstrong" },
            { id: 2, text: "Yuri Gagarin" },
            { id: 3, text: "Chris Hadfield" },
            { id: 4, text: "John Glenn" }
        ],
        correctOption: 2
    },
    {
        id: 14,
        question: "What was the first manned mission to land on the Moon?",
        options: [
            { id: 1, text: "Apollo 1" },
            { id: 2, text: "Apollo 8" },
            { id: 3, text: "Apollo 11" },
            { id: 4, text: "Apollo 13" }
        ],
        correctOption: 3
    },
    {
        id: 15,
        question: "What is a light year?",
        options: [
            { id: 1, text: "A year with a lot of sunlight" },
            { id: 2, text: "The time it takes for light to travel around the Earth" },
            { id: 3, text: "The distance light travels in one year" },
            { id: 4, text: "A unit of time in astronomy" }
        ],
        correctOption: 3
    },
    {
        id: 16,
        question: "What is the main function of a telescope?",
        options: [
            { id: 1, text: "To travel to space" },
            { id: 2, text: "To collect and magnify light from distant objects" },
            { id: 3, text: "To generate electricity" },
            { id: 4, text: "To measure temperature" }
        ],
        correctOption: 2
    },
    {
        id: 17,
        question: "What is the largest planet in our solar system?",
        options: [
            { id: 1, text: "Earth" },
            { id: 2, text: "Mars" },
            { id: 3, text: "Jupiter" },
            { id: 4, text: "Saturn" }
        ],
        correctOption: 3
    },
    {
        id: 18,
        question: "Which space telescope has taken stunning images of distant galaxies?",
        options: [
            { id: 1, text: "Hubble Space Telescope" },
            { id: 2, text: "James Webb Space Telescope" },
            { id: 3, text: "Arecibo Observatory" },
            { id: 4, text: "Kepler Space Telescope" }
        ],
        correctOption: 1
    },
    {
        id: 19,
        question: "What planet is known for its beautiful ring system?",
        options: [
            { id: 1, text: "Mars" },
            { id: 2, text: "Jupiter" },
            { id: 3, text: "Uranus" },
            { id: 4, text: "Saturn" }
        ],
        correctOption: 4
    },
    {
        id: 20,
        question: "What galaxy is shaped like a spiral?",
        options: [
            { id: 1, text: "Milky Way" },
            { id: 2, text: "Andromeda" },
            { id: 3, text: "Whirlpool" },
            { id: 4, text: "All of the above" }
        ],
        correctOption: 4
    }
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
      <h1 className="text-3xl font-bold mb-8 text-sky-800">Quiz on Space</h1>
      {!submitted && !timeExpired && (
        <div className="fixed top-4 right-4 bg-white shadow-lg p-4 rounded-md border border-gray-300">
          <div className="text-red-500 text-lg font-semibold">
            Time left: {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
          </div>
        </div>
      )}
      {!submitted && !timeExpired && (
        <p className="font-semibold rounded-md keyword-box border border-gray-300 p-4 bg-gray-300 mx-9">
          There are 5 questions on SPACE. You{" "}
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

 
