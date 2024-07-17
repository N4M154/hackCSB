import React, { useEffect } from "react";
import SpeedVelocityAnimation from "./SpeedVelocityAnimation";
import { downloadPDF } from "../utils/pdf";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

export default function Arrays() {
  const unlockNextLevel = () => {
    window.location.reload();
    window.location.href = "/Motionquiz";
  };

  useEffect(() => {
    if (location.pathname === "/motion") {
      const scriptConfig = document.createElement("script");
      scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "i7C9I_1eouolQfwkbX3oo",
        domain: "www.chatbase.co"
      };
    `;
      document.body.appendChild(scriptConfig);

      const scriptEmbed = document.createElement("script");
      scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
      scriptEmbed.setAttribute("chatbotId", "i7C9I_1eouolQfwkbX3oo");
      scriptEmbed.setAttribute("domain", "www.chatbase.co");
      scriptEmbed.defer = true;
      document.body.appendChild(scriptEmbed);

      return () => {
        document.body.removeChild(scriptConfig);
        document.body.removeChild(scriptEmbed);
      };
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-sky-300 to-white-500 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4" id="pdfContent">
        <h1 className="text-3xl font-bold mb-8 text-sky-800">MOTION</h1>
        <p className="text-xl font-bold mb-4">
          Did you know that motion is everywhere?
        </p>
        <p>
          Imagine this! <br />
          When you hop on a bicycle, you're moving. When a car zooms past you,
          that's motion too. A plane soaring through the sky? Yep, motion again!
          Even the earth spinning around the sun and a hanging bulb swaying back
          and forth are types of motion. And don't forget a bullet flying out of
          a rifle—that's some serious motion!It might seem like all these
          different movements are completely unrelated, but here's the cool
          part: they can all be explained using just a handful of concepts. So
          let's get ready to see the world of motion in a whole new way!
        </p>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*lP0157SXU3xfyy0QOU6YSQ.jpeg"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>
        <section>
          <h2 className="text-2xl font-bold mb-4">REST AND MOTION</h2>
          <p>
            Look around you. Some things are chilling out while others are on
            the move.
          </p>
          <p>
            A body is said to be at rest if it stays put with respect to its
            surroundings. Surroundings are just the nearby places where various
            objects hang out.
          </p>
          <p>
            On the flip side, a body is in motion if it changes its position
            with respect to its surroundings.
          </p>
          <p>
            But here's the twist: rest and motion are all about perspective.
            Imagine you're sitting in a moving bus. To you, you're at rest
            because you're not changing your position relative to other
            passengers or objects inside the bus. But to someone watching from
            the street, you and everything inside the bus are in motion. Cool,
            right?
          </p>
        </section>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://images.collegedunia.com/public/image/c7d494ef0e734d855c26e9dbc2faf623.jpeg?"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>
        <section>
          <h2 className="text-2xl font-bold mb-4">TYPES OF MOTION</h2>
          <p>
            Take a closer look, and you'll see that everything in the universe
            is in motion. But not all motion is created equal. Some objects
            glide along a straight path, others curve around, and some do their
            own unique dance. Here are the three main types of motion:
          </p>
          <ol className="list-decimal ml-8">
            <li className="mb-4">
              <strong>Translatory Motion</strong>:
              <ul className="list-disc ml-8">
                <li>Linear Motion: Moving in a straight line.</li>
                <li>
                  Random Motion: Moving in any direction without a fixed path.
                </li>
                <li>Circular Motion: Moving in a circle.</li>
              </ul>
            </li>
            <li className="mb-4">
              <strong>Rotatory Motion</strong>: Spinning or rotating around a
              fixed axis.
            </li>
            <li className="mb-4">
              <strong>Periodic Motion</strong>: Moving back and forth, like a
              pendulum or a guitar string.
            </li>
          </ol>
          <p>
            So, whether it's a straight dash, a spin, or a back-and-forth
            wiggle, everything's always moving in one way or another!
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Quantities in Our Universe
          </h2>
          <p>
            In the vast tapestry of our universe, everything that can be
            measured is considered a quantity. From the temperature of a hot
            summer day to the distance traveled on a road trip, these
            measurements help us understand and navigate the world around us.
            However, not all quantities are alike. Some can be fully described
            by a single number, while others require both magnitude and
            direction for a complete understanding.
          </p>
          <p>
            In the realm of physics, these distinctions are categorized into
            scalar and vector quantities. Understanding the difference between
            them is crucial for grasping how various aspects of our physical
            world are measured and analyzed. Let's explore these concepts
            further to uncover their significance in physics and everyday life.
          </p>
        </section>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220829104035/ScalarandVector-768x427.png"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>
        <section>
          <h2 className="text-2xl font-bold mb-4">Scalar Quantities</h2>
          <p>
            In our world, anything that can be measured is called a quantity.
            Think of it this way: joy and sorrow aren't quantities because you
            can't measure them with a number, but temperature is a quantity
            because you can measure it—like your body temperature being 37°C or
            98.4°F.
          </p>
          <p>
            Some quantities can be fully described by just a single number.
            These are called scalar quantities. For example, time (like 5
            seconds), length (such as 10 meters), and mass (like 2 kilograms)
            are all scalar quantities because they don't need direction to be
            measured.
          </p>
        </section>
        <section className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Vector Quantities</h2>
          <p>
            Now, imagine giving someone directions to your favorite spot—you'd
            tell them not just how far, but also which way to go. That's like
            vector quantities!
          </p>
          <p>
            Unlike scalar quantities, vector quantities need both a number and a
            direction to be fully understood. For instance, position is a vector
            quantity because you need to say not only how far something is but
            also where it is. Other examples of vector quantities include
            velocity (which tells you how fast something is moving and in which
            direction) and force (which shows both how strong a push or pull is
            and in what direction it acts).
          </p>
        </section>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220905114456/WhatisDisplacement.jpg"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Distance and Displacement</h2>
          <p>
            Hey there! You've probably heard of distance—how far something is
            from point A to point B. Imagine riding your bike along a curvy path
            from point A to point B, covering 4 kilometers. That's your
            distance! Distance is simple—it's just a number that tells you how
            far you've traveled without caring about direction. It's like
            measuring how long a road trip is.
          </p>
          <p>
            Now, let's talk about displacement. It's not a word we use every
            day, but it's pretty cool! Displacement is like the straight-line
            distance from where you started (point A) to where you ended up
            (point B), ignoring all the curves in between. It's a{" "}
            <strong>vector quantity</strong> because it has both a number
            (magnitude) and a direction. So, if you rode 4 kilometers but ended
            up 3 kilometers away in a straight line from where you started,
            that's your displacement.
          </p>
        </section>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://drio3wma3xcvi.cloudfront.net/Aakash/s3fs-public/inline-images/Screenshot%202021-08-27%20at%202.34.27%20PM.png"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Speed and Velocity</h2>
          <p>
            Okay, now let's zoom into speed and velocity. You know speed—it's
            how fast you're going. Imagine covering 100 meters in 20 seconds on
            your bike. Your speed would be 5 meters per second. Speed is
            simple—it's just how quickly you're covering distance, like checking
            your pace in a race.
          </p>
          <p>
            Velocity, though, adds a twist! It's not just about how fast you're
            going; it's about how fast you're changing your position in a
            specific direction. So, if you moved 50 meters in 20 seconds
            straight ahead, your velocity would be 2.5 meters per second in that
            direction. Velocity is also a <strong>vector quantity</strong>{" "}
            because it includes both speed and direction.
          </p>
          <p>
            Here’s a cool thing: if you're moving in a straight line, your speed
            and velocity are the same. But on a curvy path (like the one you
            biked on), your velocity can change because you're not just speeding
            up or slowing down—you're also turning. That's why velocity can be
            different from speed, especially when your path isn't straight.
          </p>
        </section>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://www.open.edu/openlearn/1a/49/1a4938f26894e976d661a004e8597beb23753964?response-content-disposition=inline%3Bfilename%3D%22bltl_maths_level2_10.png%22&response-content-type=image%2Fpng&Expires=1720968000&Signature=iR75a6JFACENTldJsyOntbVsif4YM8jF9931NO3tKfdE2zkVHMyzevLxi6uFEWFPegBNWSnbfC~YbhrrWG4PGhyE8j3pQvpEh-yhv-IcPsr5GsBdWke7eLZx1No7g5edsK-yzbS2nXswPMUciSEv0jiL78OkjHioYuXhasKSQ31-tJzT3UFAiDQwzeLveGglz45eN6Nd3azVHEnGzBnRLqncrm5CugDMDhE8kz65CVJEB5w6OglIiopbIIaout3iCgoJC1zChvAR7oMxFfPe3apvnIexhCxEtZ-W9T9Y9-h82vWWIbqYt8g2vG~ythhmjgHDs1z5OPWxbw2NN1DARQ__&Key-Pair-Id=K87HJKWMK329B"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>
        <p>Now, let's have a look at the race happening below!</p>
        <SpeedVelocityAnimation />
        <br />
        <section className="mt-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Problem: Sarah's Jogging Speed
            </h2>
            <p className="mb-4">
              <strong>Question:</strong> Sarah jogs a distance of 3 kilometers
              in 30 minutes. What is her average speed in kilometers per hour
              (km/h)?
            </p>
            <p className="mb-4">
              <strong>Solution:</strong> To find Sarah's average speed, we can
              use the formula for speed:
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Formula for Speed:</p>
              <p>Speed = Distance / Time</p>
            </div>
            <p className="mb-4">
              <strong>Convert the Time to Hours:</strong>
            </p>
            <p className="mb-4">
              Since speed is typically measured in kilometers per hour, we need
              to convert the time from minutes to hours. There are 60 minutes in
              an hour, so:
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Time Conversion:</p>
              <p>Time = 30 minutes / 60 hours = 0.5 hours</p>
            </div>
            <p className="mb-4">
              <strong>Calculate the Speed:</strong>
            </p>
            <p className="mb-4">
              Using the formula for speed, we can plug in the distance and the
              converted time:
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Speed Calculation:</p>
              <p>Speed = 3 kilometers / 0.5 hours Speed = 6 km/h</p>
            </div>
            <p className="mb-4">
              <strong>Answer:</strong> Sarah's average speed is 6 kilometers per
              hour (km/h).
            </p>
          </div>
        </section>
        <p>
          Let's dive into what happened during the race. We can see that the
          distance traveled by each object is equal to its speed multiplied by
          the time it took to travel. In this race, three objects of the same
          mass participated. Each of them had different speeds, but they all
          raced for the same amount of time. As a result, the distance covered
          by each object varied because their speeds were different. This simple
          formula became clear as we observed the demonstration of the race.
        </p>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://miro.medium.com/v2/resize:fit:522/1*1wVsIEFOvGnUBTImAaniAA.jpeg"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Acceleration and Deceleration (or Retardation)
          </h2>
          <p>
            Acceleration is like adding spice to motion—it happens when there's
            a change in velocity over time. Velocity, remember, is not just
            about speed but also about direction. So, if something speeds up,
            slows down, or changes direction, it's experiencing acceleration.
          </p>

          <h3 className="text-xl font-bold mt-4">
            Changing Velocity in Curves and Swings
          </h3>
          <p>
            Imagine riding your bike along a curvy path. Even if you keep a
            steady speed, every twist and turn changes your direction—a kind of
            acceleration! Similarly, swinging a stone around on a string creates
            acceleration because its direction keeps changing.
          </p>

          <h3 className="text-xl font-bold mt-4">
            Linear Motion: Speeding Up and Slowing Down
          </h3>
          <p>
            When you're moving in a straight line, acceleration can happen in
            two ways. First, if you speed up, your velocity's magnitude
            increases—that's positive acceleration. But if you slow down, it's
            negative acceleration, also known as deceleration or retardation.
          </p>

          <h3 className="text-xl font-bold mt-4">
            Examples from Everyday Motion
          </h3>
          <p>
            Think about cars, trains, and bicycles—they rarely move at a steady
            speed. When a car starts from rest and gradually speeds up, it
            accelerates until it hits its max speed. Once it stops, it
            decelerates until it comes to a halt. And when it's still, both its
            velocity and acceleration are zero.
          </p>
        </section>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://st.adda247.com/https://adda247jobs-wp-assets-prod.adda247.com/jobs/wp-content/uploads/sites/2/2023/07/21093432/acceleration-formula.png"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>{" "}
        <br />
        <section className="mt-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Problem: Car's Acceleration
            </h2>
            <p className="mb-4">
              <strong>Question:</strong> A car increases its velocity from 10
              meters per second (m/s) to 30 meters per second (m/s) in 5
              seconds. What is its acceleration?
            </p>
            <p className="mb-4">
              <strong>Solution:</strong> To find the car's acceleration, we can
              use the formula for acceleration:
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Formula for Acceleration:</p>
              <p>Acceleration = Change in Velocity / Time</p>
            </div>
            <p className="mb-4">
              <strong>Determine the Change in Velocity:</strong>
            </p>
            <p className="mb-4">
              The change in velocity (Δv) is the final velocity minus the
              initial velocity:
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Change in Velocity:</p>
              <p>
                Δv = Final Velocity - Initial Velocity <br />
                Δv = 30 m/s - 10 m/s <br />
                Δv = 20 m/s
              </p>
            </div>
            <p className="mb-4">
              <strong>Calculate the Acceleration:</strong>
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Acceleration Calculation:</p>
              <p>
                Acceleration = 20 m/s / 5 s <br />
                Acceleration = 4 m/s²
              </p>
            </div>
            <p className="mb-4">
              <strong>Answer:</strong> The car's acceleration is 4 meters per
              second squared (m/s²).
            </p>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Equations of Motion</h2>
          <p>
            There are three basic equations of motion for bodies moving with
            uniform acceleration. These equations relate initial velocity, final
            velocity, acceleration, time and distance covered by a moving body.
            To simplify the derivation of these equations, we assume that the
            motion is along a straight line. Hence, we consider only the
            magnitude of displacements, velocities, and acceleration
          </p>
          <h3 className="text-xl font-bold mt-4">
            Relationship Between Velocity and Distance
          </h3>{" "}
          <br />
          <p>
            In the world of linear motion, we have a few key quantities to play
            with:
          </p>
          <ul className="list-disc ml-8">
            <li>
              <strong>𝑢</strong>: Initial velocity
            </li>
            <li>
              <strong>𝑣</strong>: Final velocity after time 𝑡
            </li>
            <li>
              <strong>𝑎</strong>: Acceleration
            </li>
            <li>
              <strong>𝑡</strong>: Elapsed time
            </li>
            <li>
              <strong>𝑠</strong>: Distance covered during time 𝑡
            </li>
          </ul>{" "}
          <br />
          <p className="text-xl font-bold">Equations Highlighted:</p>
          <div className="bg-gray-100 p-4 rounded-lg my-4">
            <p className="mt-2">
              𝑠 = 𝑣𝑡 <br />
              𝑣 = 𝑢 + 𝑎𝑡 <br />
              𝑉 = (𝑢 + 𝑣) / 2
            </p>
            <p className="mt-2">
              Therefore, <br />
              𝑠 = 𝑉𝑡 = (𝑢 + 𝑣)𝑡 / 2 <br />
              𝑉 = (𝑢 + 𝑣) / 2
            </p>
          </div>
          <h3 className="text-xl font-bold mt-4">
            Deriving the Equations of Motion
          </h3>{" "}
          <br />
          <p>
            For uniformly accelerated motion, the average velocity 𝑉 is exactly
            the same as the arithmetic mean of the initial and final velocities:
          </p>{" "}
          <br />
          <p className="text-xl font-bold">Equations of Motion:</p>
          <div className="bg-gray-100 p-4 rounded-lg my-4">
            <p className="mt-2">
              <strong>First Equation of Motion:</strong>
            </p>
            <p>𝑠 = 𝑢𝑡 + (1/2)𝑎𝑡²</p>

            <p className="mt-2">
              <strong>Second Equation of Motion:</strong>
            </p>
            <p>𝑣² = 𝑢² + 2𝑎𝑠</p>
          </div>
          <p>
            These equations allow us to calculate various aspects of motion—like
            how far something travels, how fast it's going, and how acceleration
            affects its journey—all without needing advanced math like calculus,
            since we're focusing on uniform acceleration.
          </p>
        </section>{" "}
        <br />
        <section className="mt-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              {" "}
              Distance Traveled by an Accelerating Car
            </h2>
            <p className="mb-4">
              <strong>Problem Name:</strong> Accelerating Car Distance
              Calculation
            </p>
            <p className="mb-4">
              <strong>Question:</strong> A car starts from rest and accelerates
              uniformly at a rate of 3 m/s². How far does the car travel in 5
              seconds?
            </p>
            <p className="mb-4">
              <strong>Solution:</strong>
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">First Equation of Motion:</p>
              <p>s = ut + (1/2)at²</p>
            </div>
            <p className="mb-4">
              Given:
              <br />
              Initial velocity (u) = 0 m/s (since the car starts from rest)
              <br />
              Acceleration (a) = 3 m/s²
              <br />
              Time (t) = 5 s
            </p>
            <p className="mb-4">Substitute the values into the equation:</p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Calculation:</p>
              <p>
                s = (0 m/s)(5 s) + (1/2)(3 m/s²)(5 s)²
                <br />
                s = 0 + (1/2) × 3 × 25
                <br />
                s = (3 × 25) / 2
                <br />
                s = 75 / 2
                <br />s = 37.5 m
              </p>
            </div>
            <p className="mb-4">
              <strong>Answer:</strong> The car travels 37.5 meters in 5 seconds.
            </p>
          </div>
        </section>{" "}
        <br />
        <section className="mt-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              {" "}
              Final Velocity of a Sprinter
            </h2>
            <p className="mb-4">
              <strong>Problem Name:</strong> Sprinter's Final Velocity
              Calculation
            </p>
            <p className="mb-4">
              <strong>Question:</strong> A sprinter accelerates from rest with
              an acceleration of 2 m/s² and covers a distance of 50 meters. What
              is the sprinter's final velocity?
            </p>
            <p className="mb-4">
              <strong>Solution:</strong>
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Second Equation of Motion:</p>
              <p>v² = u² + 2as</p>
            </div>
            <p className="mb-4">
              Given:
              <br />
              Initial velocity (u) = 0 m/s (since the sprinter starts from rest)
              <br />
              Acceleration (a) = 2 m/s²
              <br />
              Distance (s) = 50 m
            </p>
            <p className="mb-4">Substitute the values into the equation:</p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Calculation:</p>
              <p>
                v² = (0 m/s)² + 2(2 m/s²)(50 m)
                <br />
                v² = 0 + 2 × 2 × 50
                <br />
                v² = 4 × 50
                <br />
                v² = 200
                <br />
                v = √200
                <br />v ≈ 14.14 m/s
              </p>
            </div>
            <p className="mb-4">
              <strong>Answer:</strong> The sprinter's final velocity is
              approximately 14.14 meters per second.
            </p>
          </div>
        </section>{" "}
        <br />
        <section className="mt-8">
          <h2 className="text-2xl font-bold">
            Fun with Falling Objects: Galileo's Laws Simplified!
          </h2>{" "}
          <br />
          <p>
            Hey there! Ever wondered why things fall the way they do? Let's
            explore Galileo's awesome laws that explain how objects drop under
            gravity's spell—without the boring bits!
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-bold">
              Galileo's Three Laws of Falling Objects
            </h3>

            <div className="mt-4">
              <h4 className="text-lg font-bold">First Law: Equal Drop Race</h4>
              <p>
                Imagine dropping a feather and a rock from the same height.
                According to Galileo, without air slowing them down, both would
                hit the ground at the same time! That’s because gravity treats
                them equally. Air messes with this—ever seen a feather float
                longer than a rock? In space, though, they'd race together!
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-bold">
                Second Law: Speedy Free Fall
              </h4>
              <p>
                When you drop something, it starts slow and picks up speed.
                Galileo figured out that an object’s speed increases steadily as
                it falls. The longer it falls, the faster it goes!
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-bold">Third Law: Squared Distance</h4>
              <p>
                Now, think about how far something falls in a given time.
                Galileo found that the distance an object falls is related to
                the square of the time it’s been falling. So, if something falls
                for twice as long, it will cover four times the distance!
              </p>
            </div>
          </div>
          <br />
          <div className="flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/028/242/069/original/illustration-of-physics-the-law-of-falling-bodies-galileo-s-law-of-inertia-newton-first-law-of-motion-free-falling-objects-galileo-s-experiment-png.png"
              alt=""
              height={400}
              width={400}
              className="mb-4 rounded-lg"
            />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold">
              Seeing Galileo's Laws in Action
            </h3>
            <ul className="list-disc ml-8">
              <li>
                <strong>First Law:</strong> Drop a feather and a rock. Despite
                air resistance, they’d fall together in a vacuum!
              </li>
              <li>
                <strong>Second Law:</strong> Drop a ball and watch it speed up
                every second it falls. It’s like a speed boost from gravity!
              </li>
              <li>
                <strong>Third Law:</strong> Drop something and see how the
                distance it falls increases rapidly with time. Double the time,
                quadruple the distance!
              </li>
            </ul>
          </div>
          <p className="mt-6">
            Next time you drop something, remember—you're witnessing Galileo's
            timeless laws at play, making falling objects a super cool part of
            physics!
          </p>
        </section>{" "}
        <br />
        <section className="mt-8">
          <h2 className="text-2xl font-bold">
            Uniform Acceleration and Galileo's Laws
          </h2>{" "}
          <br />
          <p>
            Remember how gravity pulls everything down at the same rate? That's
            uniform acceleration, like when you drop stuff and it falls faster
            and faster. For falling bodies, instead of calling it distance (
            <strong>s</strong>), we call it height (<strong>h</strong>). And
            instead of regular acceleration (<strong>a</strong>), we use gravity
            (<strong>g</strong>). That's the only change!
          </p>
          <p>
            Galileo's laws about falling bodies are just these equations in
            action. They say that everything falls in predictable ways because
            of gravity's steady pull.
          </p>
        </section>{" "}
        <br />
        <div className="flex justify-center">
          <img
            src="https://d1avenlh0i1xmr.cloudfront.net/48aa6d90-777c-4b43-a61a-2eec7c1e6961/old-equation-new-equation.jpg"
            alt=""
            height={400}
            width={400}
            className="mb-4 rounded-lg"
          />
        </div>{" "}
        <br />
        <section className="mt-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Example: Falling Object Velocity Calculation
            </h2>
            <p className="mb-4">
              <strong>Problem Name:</strong> Falling Object Velocity Calculation
            </p>
            <p className="mb-4">
              <strong>Question:</strong> An object is dropped from a height of
              100 meters. Calculate its velocity just before it hits the ground,
              assuming it falls freely under gravity (acceleration due to
              gravity, g = 9.8 m/s²).
            </p>
            <p className="mb-4">
              <strong>Solution:</strong>
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">First Equation of Motion:</p>
              <p>v = u + gt</p>
            </div>
            <p className="mb-4">
              <strong>Given:</strong>
              <br />
              Initial height (h) = 100 m
              <br />
              Initial velocity (u) = 0 m/s (object is dropped from rest)
              <br />
              Acceleration due to gravity (g) = 9.8 m/s²
            </p>
            <p className="mb-4">
              <strong>Calculations:</strong>
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">Calculation for time (t):</p>
              <p>
                h = ut + (1/2)gt²
                <br />
                100 = 0 + (1/2) × 9.8 × t²
                <br />
                100 = 4.9t²
                <br />
                t² = 100 / 4.9
                <br />
                t ≈ √(100 / 4.9)
                <br />
                t ≈ √20.41
                <br />t ≈ 4.51 seconds
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-bold">
                Calculation for final velocity (v):
              </p>
              <p>
                v = u + gt
                <br />
                v = 0 + 9.8 × 4.51
                <br />v ≈ 44.36 m/s
              </p>
            </div>
            <p className="mb-4">
              <strong>Answer:</strong> Just before hitting the ground, the
              object's velocity is approximately 44.36 m/s.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          className="bg-sky-800 text-white px-4 py-2 rounded-md"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={unlockNextLevel}
        >
          Take a quiz
        </button>
        <Link
          to="/force"
          className="bg-teal-500 text-black px-5 py-2 rounded-md flex items-center"
        >
          <IoStarSharp className="mr-2" />
          Check out FORCE
        </Link>
      </div>
    </div>
  );
}
