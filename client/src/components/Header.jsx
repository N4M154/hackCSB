import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const chapters = [
    { name: "Chapter 1: Motion", link: "/motion" },
    { name: "Chapter 2: Force", link: "/force" },
    { name: "Chapter 3: Energy", link: "/energy" },
    { name: "Chapter 4: Light", link: "/light" },
    { name: "Chapter 5: Wave and Sound", link: "/waveandsound" },
    { name: "Chapter 6: Space", link: "/space" },

    { name: "Physics Formulae", link: "/self-study" },
    { name: "Quiz", link: "/quiz" },
  ];

  return (
    <div>
      <div className="bg-gradient-to-br from-teal-600 to-teal-20000">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="text-blue-900 mr-10">
              &#9776;
            </button>
            <h2 className="font-bold text-2xl font-serif text-blue-900">
              PhysixLab
            </h2>
          </div>

          <ul className="flex gap-4 text-blue-900 font-semibold">
            {currentUser && (
              <li>
                <Link to="/Home">Home</Link>
              </li>
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">
                {currentUser ? (
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                ) : (
                  "Sign In"
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-y-0 left-0 w-64 bg-teal-800 text-white p-4 z-10">
          <button onClick={toggleSidebar} className="mb-4">
            &#10005; {/* This represents a close icon */}
          </button>
          <h3 className="text-lg font-bold mb-4">Chapters</h3>
          <ul>
            {chapters.map((chapter, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={chapter.link}
                  className="block py-2 text-white"
                  onClick={toggleSidebar}
                >
                  {chapter.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-teal-600">&nbsp;</div>
    </div>
  );
}
