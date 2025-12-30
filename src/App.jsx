import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import Details from "./Pages/Details";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <Details />
          <ContactPage />
        <footer className="w-full mt-16 border-t border-white/10 bg-[#030014]">
  <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-4 text-center">

    {/* Name / Brand */}
    <h2 className="text-lg font-semibold text-white tracking-wide">
      Nasirulla (Raaz)
    </h2>

    {/* Tagline */}
    <p className="text-sm text-gray-400 max-w-md">
      Building modern web experiences with clean code, scalable architecture,
      and a passion for learning.
    </p>

    {/* Divider */}
    <div className="w-24 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-60 my-2"></div>

    {/* Links */}


    {/* Copyright */}
    <span className="text-xs text-gray-500 mt-4">
      © {new Date().getFullYear()} Nasirulla. All Rights Reserved.
    </span>
  </div>
</footer>

        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            EkiZR™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
