import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-purple-700 to-purple-20000">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
          <div className="flex items-center">
            <h2 className="font-bold text-2xl font-serif text-sky-300">
            Learn_It
            </h2>
          </div>

          <ul className="flex gap-4 text-sky-200">
            
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
      <div className="bg-gray-900">&nbsp;</div>
    </div>
  );
}
