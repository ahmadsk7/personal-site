
import { useState } from "react";
import { Github, Linkedin, FileText, Sun, Moon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const currentProjects = [
    {
      title: "ai-powered analytics dashboard",
      description: "building a real-time analytics platform with machine learning insights for data visualization",
      tech: ["react", "python", "tensorflow", "postgresql"],
      status: "in progress"
    },
    {
      title: "decentralized task manager",
      description: "creating a blockchain-based task management system with smart contracts",
      tech: ["solidity", "web3", "react", "metamask"],
      status: "design phase"
    }
  ];

  const personalProjects = [
    {
      title: "mood-based music player",
      description: "spotify integration that curates playlists based on facial emotion recognition",
      tech: ["react native", "tensorflow.js", "spotify api"],
      link: "https://github.com/ahmadsk7/mood-music"
    },
    {
      title: "minimal habit tracker",
      description: "clean, distraction-free habit tracking with beautiful data visualizations",
      tech: ["react", "d3.js", "local storage"],
      link: "https://github.com/ahmadsk7/habit-tracker"
    },
    {
      title: "weather poetry generator",
      description: "generates haikus based on current weather conditions using openai api",
      tech: ["node.js", "openai api", "weather api"],
      link: "https://github.com/ahmadsk7/weather-poetry"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
              : 'bg-white hover:bg-gray-100 text-gray-700 shadow-lg'
          }`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left side - Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-light tracking-tight">
                  ahmad sheikh-khalil
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mt-4 rounded-full"></div>
              </div>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                passionate about building meaningful digital experiences. 
                i love creating innovative solutions that blend technology with human-centered design.
              </p>
            </div>

            {/* Projects Section */}
            <div className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-light">projects</h2>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Currently Building */}
                <div className="space-y-6">
                  <h3 className={`text-lg font-medium ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    currently building
                  </h3>
                  <div className="space-y-4">
                    {currentProjects.map((project, index) => (
                      <ProjectCard 
                        key={index} 
                        project={project} 
                        isDark={isDark}
                        isCurrent={true}
                      />
                    ))}
                  </div>
                </div>

                {/* Personal Projects */}
                <div className="space-y-6">
                  <h3 className={`text-lg font-medium ${
                    isDark ? 'text-pink-400' : 'text-pink-600'
                  }`}>
                    personal projects
                  </h3>
                  <div className="space-y-4">
                    {personalProjects.map((project, index) => (
                      <ProjectCard 
                        key={index} 
                        project={project} 
                        isDark={isDark}
                        isCurrent={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Profile */}
          <div className="flex flex-col items-center space-y-8 lg:sticky lg:top-12">
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/ahmadsk7"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ahmad-sheikh-khalil"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400' 
                    : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <button
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-green-400' 
                    : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-green-600 shadow-md hover:shadow-lg'
                }`}
              >
                <FileText size={20} />
              </button>
            </div>

            {/* Profile Picture */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-1">
                <div className={`w-full h-full rounded-full ${
                  isDark ? 'bg-gray-900' : 'bg-gray-50'
                } flex items-center justify-center`}>
                  <div className="w-44 h-44 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-2xl font-light">
                    as
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`text-center space-y-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <p className="text-sm">available for opportunities</p>
              <p className="text-sm">let's build something together</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
