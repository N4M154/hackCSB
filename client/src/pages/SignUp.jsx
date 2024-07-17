import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import peenImage from "../images/peen.jpg";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-gray-800 flex items-center justify-center relative">
        <img
          src={peenImage}
          alt="Physics Quote"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="text-white text-center p-8 bg-transparent rounded-lg">
          <h2 className="text-2xl italic font-bold mb-4 text-teal-100">
            <span className="text-white inline-block animate-pulse">
              One never notices what has been done;
            </span>
            <br />
            <span className="text-white inline-block animate-pulse">
              one can only see what remains to be done.
            </span>
          </h2>
          <p className="text-lg italic text-white">
            {Array.from("- Marie Curie").map((char, index) =>
              char === " " ? (
                <span key={index}>&nbsp;</span>
              ) : (
                <span
                  key={index}
                  className="inline-block animate-pulse"
                  style={{
                    animationDelay: `${
                      "One never notices what has been done; one can only see what remains to be done."
                        .length *
                        100 +
                      index * 100
                    }ms`,
                  }}
                >
                  {char}
                </span>
              )
            )}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="p-8 max-w-md w-full">
          <h1 className="text-3xl text-center font-semibold mb-7 text-gray-800">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-gray-800 text-white p-3 rounded-lg uppercase hover:bg-gray-900 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
            <OAuth />
          </form>
          <div className="flex items-center justify-center mt-5">
            <p className="text-black font-semibold">Have an account?</p>
            <Link to="/sign-in">
              <span className="text-gray-800 text-3xl font-bold text-lg ml-1 hover:text-blue-400">
                Sign In
              </span>
            </Link>
          </div>
          <p className="text-red-700 mt-5">
            {error ? error.message || "Something went wrong!" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
