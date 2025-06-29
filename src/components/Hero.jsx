import { motion } from "framer-motion";
import { styles } from "../styles";
import profilePic from "../assets//himanshu.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left Line Indicator */}
        <div className="flex flex-col justify-center items-center hidden md:flex">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-80 violet-gradient" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-white">
            Hello, I'm <span className="text-[#915EFF]">Himanshu</span>
          </h2>
          <p className="text-[8px] sm:text-[12px] lg:text-[14px] mt-2 text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I’m a final-year Computer Science & Business Systems student at VNR
            VJIET, passionate about building scalable, user-centric solutions
            across backend, frontend, and AI-driven systems.
            <br></br>Proficient in the MERN stack, Python, FastAPI, Flask, and
            React.js, with experience in machine learning and deep learning
            using TensorFlow, PyTorch, and Transformers. My projects, including
            an Online Judge, AI Interviewer, and E-Commerce Pricing System,
            reflect strong system design and problem-solving skills.
            <br></br>I’ve gained practical exposure through roles at
            AlgoUniversity and Sri Madhusudan Sai Institute and hold
            certifications from Cisco, Infosys, JPMorgan Chase, Goldman Sachs,
            Accenture, Hackerrank, and Smart Interviews via virtual programs.
            <br></br>I've actively participated in national hackathons like
            HackIndia, COSC Hackathon, and Smart India Hackathon, and served as
            Hackathon Coordinator for Convergence. With 680+ LeetCode problems
            solved (Top 1.4% globally), I thrive in innovative, collaborative,
            and growth-driven environments.
            <br></br>I’m excited to contribute fresh ideas and energy to teams
            shaping the future.
          </p>

          {/* Buttons and Icons */}
          {/* Social Icons and Buttons */}
          <div className="mt-6">
            {/* Row 1: Icons */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/B-Himanshu19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-2xl hover:text-[#915EFF] hover:scale-125 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/himanshubhatraj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white text-2xl hover:text-[#915EFF] hover:scale-125 transition duration-300" />
              </a>
              <a href="mailto:himanshu.b1902@gmail.com">
                <FaEnvelope className="text-white text-2xl hover:text-[#915EFF] hover:scale-125 transition duration-300" />
              </a>
            </div>

            {/* Row 2: Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start mt-4">
              <a
                href="ttps://drive.google.com/file/d/1WrvKpgwy7AwIXRAn3xZIoWbp4P0PCJAL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-[#915EFF] text-white rounded-lg hover:bg-purple-700 hover:scale-105 transition duration-300">
                  Resume
                </button>
              </a>
              <a href="#contact">
                <button className="px-4 py-2 bg-[#915EFF] text-white rounded-lg hover:bg-purple-700 hover:scale-105 transition duration-300">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative w-[360px] h-[360px] rounded-full overflow-hidden border-4 border-[#915EFF] shadow-xl hover:shadow-purple-600 hover:scale-105 transition-all duration-300">
          <img
            src={profilePic}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
