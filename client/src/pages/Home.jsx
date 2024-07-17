import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaAtom, FaBook } from "react-icons/fa";
import { IoTelescopeSharp } from "react-icons/io5";
import { GiSoundWaves } from "react-icons/gi";
import { FaLightbulb, FaPeopleCarryBox } from "react-icons/fa6";
import { FaFilePdf, FaQuestionCircle, FaRobot } from "react-icons/fa";

export default function Home() {
  const quote =
    "Look deep into nature, and then you will understand everything better.";
  const author = "- Albert Einstein";

  return (
    <div className="bg-gradient-to-br from-sky-300 to-sky-100 text-white min-h-screen">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://windowscustomization.com/wp-content/uploads/2018/08/blue-wave-bar.gif')",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white inline-block">
              {Array.from(quote).map((char, index) =>
                char === " " ? (
                  <span key={index}>&nbsp;</span>
                ) : (
                  <span
                    key={index}
                    className="inline-block animate-pulse"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {char}
                  </span>
                )
              )}
            </span>
          </h2>
          <p className="text-xl text-white italic">
            {Array.from(author).map((char, index) =>
              char === " " ? (
                <span key={index}>&nbsp;</span>
              ) : (
                <span
                  key={index}
                  className="inline-block animate-pulse"
                  style={{
                    animationDelay: `${quote.length * 100 + index * 100}ms`,
                  }}
                >
                  {char}
                </span>
              )
            )}
          </p>

          <a
            href="#topics"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-10"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Topics Section */}
      <section id="topics" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">TOPICS</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <FaRocket className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Motion</h3>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 mt-12">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <FaPeopleCarryBox className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Force</h3>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <FaAtom className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Energy</h3>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 mt-12">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <FaLightbulb className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Light</h3>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <GiSoundWaves className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Wave</h3>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 mt-12">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <IoTelescopeSharp className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Space</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-sky-300 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">FEATURES</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <FaFilePdf className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">PDFs</h3>
                <p>Download PDFs for offline reading.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <FaQuestionCircle className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Quizzes</h3>
                <p>Take fun interactive quizzes.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <FaBook className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Engaging Content</h3>
                <p>
                  Interactive lessons and experiments. Built-in calculator and
                  graphs.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center p-6 bg-teal-500 rounded-lg shadow-lg">
                <FaRobot className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Chatbot</h3>
                <p>Get help with our interactive chatbot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Link
        to="/motion"
        className="bg-teal-500 text-2xl text-white font-bold px-5 py-5 rounded-md flex items-center justify-center hover:bg-green-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        style={{ cursor: "pointer" }}
      >
        Start the journey from here!
      </Link>
    </div>
  );
}
