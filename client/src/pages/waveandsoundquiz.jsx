import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiKnockedOutStars } from "react-icons/gi";

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
      question: "What is the speed of sound in air at room temperature?",
      options: [
        { id: 1, text: "343 m/s" },
        { id: 2, text: "300 m/s" },
        { id: 3, text: "400 m/s" },
        { id: 4, text: "500 m/s" },
      ],
      correctOption: 1,
    },
    {
      id: 2,
      question: "Which of the following is an example of a transverse wave?",
      options: [
        { id: 1, text: "Sound wave" },
        { id: 2, text: "Light wave" },
        { id: 3, text: "Seismic P-wave" },
        { id: 4, text: "Pressure wave" },
      ],
      correctOption: 2,
    },
    {
      id: 3,
      question: "What property of a wave is measured in Hertz (Hz)?",
      options: [
        { id: 1, text: "Wavelength" },
        { id: 2, text: "Amplitude" },
        { id: 3, text: "Frequency" },
        { id: 4, text: "Speed" },
      ],
      correctOption: 3,
    },
    {
      id: 4,
      question:
        "Which phenomenon explains the bending of waves around obstacles?",
      options: [
        { id: 1, text: "Reflection" },
        { id: 2, text: "Refraction" },
        { id: 3, text: "Diffraction" },
        { id: 4, text: "Interference" },
      ],
      correctOption: 3,
    },
    {
      id: 5,
      question: "What is the term for the highest point of a wave?",
      options: [
        { id: 1, text: "Trough" },
        { id: 2, text: "Peak" },
        { id: 3, text: "Crest" },
        { id: 4, text: "Amplitude" },
      ],
      correctOption: 3,
    },
    {
      id: 6,
      question: "What kind of wave requires a medium to travel through?",
      options: [
        { id: 1, text: "Electromagnetic wave" },
        { id: 2, text: "Transverse wave" },
        { id: 3, text: "Mechanical wave" },
        { id: 4, text: "Longitudinal wave" },
      ],
      correctOption: 3,
    },
    {
      id: 7,
      question: "Which of the following best describes the Doppler Effect?",
      options: [
        { id: 1, text: "Change in wave speed due to medium" },
        { id: 2, text: "Change in wave frequency due to motion" },
        { id: 3, text: "Change in wave amplitude due to interference" },
        { id: 4, text: "Change in wave direction due to reflection" },
      ],
      correctOption: 2,
    },
    {
      id: 8,
      question: "What is the unit of measurement for sound intensity?",
      options: [
        { id: 1, text: "Decibel (dB)" },
        { id: 2, text: "Hertz (Hz)" },
        { id: 3, text: "Meter (m)" },
        { id: 4, text: "Pascal (Pa)" },
      ],
      correctOption: 1,
    },
    {
      id: 9,
      question:
        "In which type of wave do particles of the medium move parallel to the direction of wave propagation?",
      options: [
        { id: 1, text: "Transverse wave" },
        { id: 2, text: "Longitudinal wave" },
        { id: 3, text: "Electromagnetic wave" },
        { id: 4, text: "Surface wave" },
      ],
      correctOption: 2,
    },
    {
      id: 10,
      question:
        "What is the phenomenon where two waves superpose to form a resultant wave of greater, lower, or the same amplitude?",
      options: [
        { id: 1, text: "Reflection" },
        { id: 2, text: "Refraction" },
        { id: 3, text: "Diffraction" },
        { id: 4, text: "Interference" },
      ],
      correctOption: 4,
    },
    {
      id: 11,
      question:
        "Which term describes the distance between successive crests of a wave?",
      options: [
        { id: 1, text: "Frequency" },
        { id: 2, text: "Amplitude" },
        { id: 3, text: "Wavelength" },
        { id: 4, text: "Period" },
      ],
      correctOption: 3,
    },
    {
      id: 12,
      question: "Sound waves in air are examples of which type of wave?",
      options: [
        { id: 1, text: "Transverse wave" },
        { id: 2, text: "Longitudinal wave" },
        { id: 3, text: "Electromagnetic wave" },
        { id: 4, text: "Surface wave" },
      ],
      correctOption: 2,
    },
    {
      id: 13,
      question:
        "Which physical quantity is described by the height of a wave's crest?",
      options: [
        { id: 1, text: "Frequency" },
        { id: 2, text: "Wavelength" },
        { id: 3, text: "Amplitude" },
        { id: 4, text: "Speed" },
      ],
      correctOption: 3,
    },
    {
      id: 14,
      question:
        "What happens to the wavelength of a sound wave as its frequency increases?",
      options: [
        { id: 1, text: "Wavelength increases" },
        { id: 2, text: "Wavelength decreases" },
        { id: 3, text: "Wavelength remains the same" },
        { id: 4, text: "Wavelength doubles" },
      ],
      correctOption: 2,
    },
    {
      id: 15,
      question: "Which type of wave can travel through the vacuum of space?",
      options: [
        { id: 1, text: "Sound wave" },
        { id: 2, text: "Water wave" },
        { id: 3, text: "Electromagnetic wave" },
        { id: 4, text: "Seismic wave" },
      ],
      correctOption: 3,
    },
    {
      id: 16,
      question:
        "What is the relationship between the frequency and period of a wave?",
      options: [
        { id: 1, text: "They are directly proportional" },
        { id: 2, text: "They are inversely proportional" },
        { id: 3, text: "They are unrelated" },
        { id: 4, text: "They are equal" },
      ],
      correctOption: 2,
    },
    {
      id: 17,
      question:
        "Which term describes the bending of waves due to a change in speed when they pass from one medium to another?",
      options: [
        { id: 1, text: "Reflection" },
        { id: 2, text: "Refraction" },
        { id: 3, text: "Diffraction" },
        { id: 4, text: "Interference" },
      ],
      correctOption: 2,
    },
    {
      id: 18,
      question:
        "What is the name of the point on a standing wave with the maximum displacement?",
      options: [
        { id: 1, text: "Node" },
        { id: 2, text: "Antinode" },
        { id: 3, text: "Crest" },
        { id: 4, text: "Trough" },
      ],
      correctOption: 2,
    },
    {
      id: 19,
      question: "What is the primary cause of sound wave attenuation?",
      options: [
        { id: 1, text: "Reflection" },
        { id: 2, text: "Diffraction" },
        { id: 3, text: "Absorption" },
        { id: 4, text: "Interference" },
      ],
      correctOption: 3,
    },
    {
      id: 20,
      question:
        "What type of wave interaction results in a decrease in amplitude when two waves meet?",
      options: [
        { id: 1, text: "Constructive interference" },
        { id: 2, text: "Destructive interference" },
        { id: 3, text: "Reflection" },
        { id: 4, text: "Refraction" },
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
              to="/space"
              className="bg-blue-900 text-yellow-200 font-semibold px-5 py-2 rounded-md flex items-center"
            >
              <GiKnockedOutStars className="mr-2 scale-150" />
              Check out SPACE
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
