// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Force from "./pages/Force";
import Forcequiz from "./pages/ForceQuiz";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import SelfStudy from "./pages/SelfStudy";
import Light from "./pages/Light";
import Space from "./pages/SpaceScience";
import Energy from "./pages/Energy";
import Energyquiz from "./pages/Energyquiz";
import Motion from "./pages/Motion";
import Motionquiz from "./pages/Motionquiz";
import Waveandsound from "./pages/waveandsound";
import Waveandsoundquiz from "./pages/waveandsoundquiz";
import Quiz from "./pages/Quiz";
import Last from "./pages/Last";
import SpaceQuiz from "./pages/SpaceQuiz";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/force" element={<Force />} />
          <Route path="/forcequiz" element={<Forcequiz />} />
          <Route path="/self-study" element={<SelfStudy />} />
          <Route path="/light" element={<Light />} />
          <Route path="/space" element={<Space />} />
          <Route path="/Spacequiz" element={<SpaceQuiz />} />
          <Route path="/waveandsound" element={<Waveandsound />} />
          <Route path="/waveandsoundquiz" element={<Waveandsoundquiz />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/Energyquiz" element={<Energyquiz />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="/Motionquiz" element={<Motionquiz />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/last" element={<Last />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
