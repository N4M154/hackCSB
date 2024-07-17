import React from "react";
export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-200 to-white-500 text-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <br></br>
        <h1 className="text-3xl font-bold mb-8 text-teal-600 underline text-center">
          ABOUT PhysixLab
        </h1>
        <div class="grid grid-cols-2 gap-4 mx-4">
          <div class="box bg-gray-900 border border-gray-800 rounded-lg p-8 text-justify bg-sky-100">
            <h1 className="text-2xl font-semibold mb-8 text-sky-800">
              Motivation behind the project:
            </h1>
            <p className="text-indigo-900">
              Welcome to Physixlab, where we've crafted an engaging platform to
              make physics learning fun and accessible for everyone.
              <br></br>
              <br></br>
              Inspired by our own challenges in grasping physics concepts, we've
              created a unified solution. PhysiLearn serves as your go-to hub
              for all things physics, offering a seamless learning experience.{" "}
              <br></br>
              <br></br>From interactive tutorials to captivating quizzes, our
              platform is designed to simplify complex topics and ignite your
              curiosity. Join us on PhysiLearn, where learning physics is both
              enjoyable and effortless. Start your journey to mastering physics
              today!
            </p>
          </div>
          <div class="box bg-gray-900 border border-gray-800 rounded-lg p-8 text-justify bg-sky-100">
            <h1 className="text-2xl font-semibold mb-8 text-sky-800">
              About us:
            </h1>
            <p className="text-indigo-900">
              We are currently studying BSc in Software Engineering under the
              Department of Computer Science and Engineering in&nbsp;&nbsp;
              <text className="font-semibold text-white-500">
                Islamic University of Technology.
              </text>
            </p>
            <br></br>
            <p className="text-indigo-900">Nabila Sheona</p>
            <p className="text-indigo-900">Namisa Najah Raisa</p>
            <p className="text-indigo-900">Antara Arifa Mullick</p>
            <p className="text-indigo-900">Tasnia Anower Medha</p>
          </div>
        </div>
      </div>
    </div>
  );
}
