import React, { useState } from "react";
import { downloadPDF } from "../utils/pdf";
import "./Light.css"; // Ensure CSS file for animations is imported correctly

export default function Light() {
  const [isLightOn, setIsLightOn] = useState(true); // Track if light is on or off

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-white min-h-screen relative">
      

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold mb-8 text-yellow-800">
          Light: Understanding Shadows and Refraction
        </h1>

        <h2 className="text-2xl font-bold mb-4 text-yellow-700">What is Light?</h2>
        <p className="mb-4">
          <b>Light</b> is a way of transferring energy. Light sources give out light, so we say they are
          luminous. Energy is transferred from the Sun to the Earth by light waves. Light can reach
          us from the Sun and other stars. It can travel through empty space because, unlike sound,
          light does not need a medium to travel through. Infrared radiation, called heat or thermal
          energy, is very similar to light and is another method by which energy reaches us from the
          Sun.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Shadows</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solar_eclipse_umbrella_shadows.JPG/800px-Solar_eclipse_umbrella_shadows.JPG"
          alt="Penumbra"
          className="mb-4"
        />
        <p className="mb-4">
          Shadows are dark areas where something blocks out light. They are formed because light
          travels in straight lines and does not bend round corners, so if something is in its path
          the light is blocked. On a sunny day you can look down and see your shadow on the ground.
          The light from the Sun cannot pass through you because you are opaque and block out the
          light.
        </p>
        <p className="mb-4">
          Sometimes shadows have fuzzy edges and sometimes they have sharp edges. It depends on the
          type of light source. If the light source is small, there is a full shadow called an umbra
          and the edges of the shadow are sharp. If the light source is large or spread out, there
          is a partial shadow called a penumbra as well as an umbra and the edges of the shadow
          appear blurred.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pinhole-camera.png/800px-Pinhole-camera.png"
          alt="Pinhole Camera"
          className="mb-4"
        />
      </div>

      {/* Light Animation Circle and Explanation */}
      <div className="max-w-screen-lg mx-auto px-4 mt-8 flex items-center">
        <div className={`light-circle ${isLightOn ? "on" : "off"}`} />
        <button
          className={`ml-4 px-4 py-2 rounded-lg ${
            isLightOn ? "bg-yellow-400 text-yellow-900" : "bg-gray-400 text-gray-800"
          }`}
          onClick={toggleLight}
        >
          {isLightOn ? "Light On" : "Light Off"}
        </button>
        <p className="text-yellow-800 ml-4">
          {isLightOn
            ? "Light is a form of electromagnetic radiation that allows us to see things."
            : "When light is off, it is no longer emitting visible electromagnetic waves."}
        </p>
      </div>

      {/* Additional Content Section */}
      <div className="max-w-screen-lg mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Line of Sight</h2>
        <p className="mb-4">
          You can demonstrate that light travels in straight lines using holes cut in card. You
          cannot see the candle unless all three holes are exactly lined up.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Cameras</h2>
        <p className="mb-4">
          If you take a picture of a friend with a camera, light is reflected from your friend and
          goes into the camera. Your friend is the object, and an image is formed at the back of the
          camera. The image is formed because light travels in straight lines.
        </p>
        <p className="mb-4">
          A pinhole camera is a very simple camera. It is a box with a very small hole at the front
          made with a pin. At the back is a translucent screen where you can see the image. The
          image is not very bright because only a small amount of light can get through the hole.
          Over 1000 years ago Al-Haytham, an Arab scientist, explained how a pinhole camera works.
          The light from the top of the object forms the bottom of the image. The image is upside
          down, or inverted. An image that is the right way up is upright.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Camera_obscura.png/800px-Camera_obscura.png"
          alt="Camera Obscura"
          className="mb-4"
        />

        <p className="mb-4">
         <b>IN SUMMARY,</b> Light waves transfer energy from sources such as the Sun. Anything that gives out light is
          luminous. Shadows are formed because some objects are opaque. Light travels in straight
          lines. This explains how shadows and images are formed. A camera forms an inverted image
          on a screen.
        </p>
    
      

      {/* Next Page Button (Right Corner) */}
      <div className="absolute bottom-9 right-4">
        <button
          className="bg-yellow-800 text-white px-4 py-2 rounded-lg shadow-md"
          onClick={() => (window.location.href = "/light2")}
        >
          Next Page
        </button>
      </div>

      {/* Download PDF Button (Left Corner) */}
      <div className="absolute bottom-9 left-4">
      <button
        className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
        
          onClick={downloadPDF}
        >
          Download
        </button>
      </div>


      </div>
      
    </div>

  );
}
