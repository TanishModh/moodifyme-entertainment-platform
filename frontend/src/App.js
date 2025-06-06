import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ResultsPage from "./pages/ResultsPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutPage from "./pages/AboutPage";
import LogoutPage from "./pages/LogoutPage";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";
import ScrollToTop from './components/ScrollToTop';
import "./styles/styles.css";
import "./styles/blob.css";

function App() {
  // Use the dark mode hook here, within the DarkModeProvider context
  const { isDarkMode } = useDarkMode();
  
  // Change the background color of the root div based on dark mode
  useEffect(() => {
    const root = document.getElementById("root");
    root.style.backgroundColor = isDarkMode ? "#121212" : "#f5f5f5"; // Dark mode and light mode colors
  }, [isDarkMode]);

  return (
    <Router>
      <div id="blob"></div>
      <div id="blur"></div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default function AppWithProvider() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}
