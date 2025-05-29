import { useState } from "react";
import { Github, Linkedin, FileText, Sun, Moon, Twitter } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Terminal from "../components/Terminal";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const currentProjects = [
    {
      title: "hooked",
      description: "building an AI-powered video editing assistant that helps creators find their best moments, polish audio, and generate impactful captions",
      tech: ["next.js", "typescript", "supabase", "ffmpeg", "whisper", "tailwindcss"],
      status: "in progress"
    },
    {
      title: "verdicto",
      description: "working on a platform for exploring and analyzing U.S. civil litigation data with smart case summaries, docket timelines, and legal analytics",
      tech: ["next.js", "python", "whisper", "postgresql", "supabase", "openai", "chart.js"],
      status: "in progress"
    }
  ];

  const personalProjects = [
    {
      title: "olowrapped",
      description: "spotify wrapped for restaurants — created an OloLLM and used snowflake data to generate personalized guest summaries. provided as a feature to thousands of restaurants as part of olo's engage suite",
      tech: ["go", "templ", "html", "css", "sql", "snowflake", "docker"],
      link: "https://drive.google.com/file/d/1Y3fbda_2aLD8C_bt-sx4_Vo4BTq7lFuc/view?usp=sharing"
    },
    {
      title: "ansar",
      description: "community app connecting refugees with nearby volunteers for help like document translation or airport pickups — includes local opportunities and chat",
      tech: ["react native", "firebase", "typescript", "expo", "google maps api"],
      link: "https://drive.google.com/file/d/1hvrYtphF6IvF9BoKZ5J0fqOKE3HocD6a/view?usp=sharing",
      badge: "1st place at Tech for Social Good Hackathon"
    }, 
    {
      title: "rentscoper",
      description: "mobile app that scrapes Ann Arbor rental listings and visualizes price trends with interactive charts and historical data tracking",
      tech: ["react native", "expo", "typescript", "victory", "python", "beautifulsoup", "asyncstorage", "json"],
      link: "https://github.com/ahmadsk7/RentScoper"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 font-bold ${
      isDark 
        ? "text-gray-100" 
        : "text-gray-900"
    }`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className={`p-4 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark 
              ? 'bg-gray-800/50 hover:bg-gray-700/50 text-yellow-400 backdrop-blur-sm' 
              : 'bg-white/50 hover:bg-gray-100/50 text-gray-700 shadow-lg backdrop-blur-sm'
          }`}
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-12">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-8">
            {/* Header with Profile Picture, Name and Social Icons */}
            <div className="flex items-center space-x-8">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white p-1">
                  <img 
                    src="/lovable-uploads/251a1875-33e9-4396-be4d-ecc791aebfe9.png"
                    alt="ahmad sheikh-khalil"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Name, Pronunciation, University, and Social Icons */}
              <div className="flex flex-col space-y-4">
                <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                  <span className="underline decoration-blue-400 decoration-2 underline-offset-4">ahmad</span>{" "}
                  <span className="italic">sheikh-khalil</span>
                </h1>

                {/* Pronunciation */}
                <div className="flex flex-col space-y-1">
                  <p className={`text-base italic font-medium ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    /ˈɑːməd ʃeɪk kəˈliːl/
                  </p>
                </div>

                {/* University Info */}
                <div className="text-left space-y-2">
                  <p className={`text-lg font-bold ${
                    isDark ? 'text-blue-300' : 'text-blue-800'
                  }`}>
                    <span className="italic underline decoration-blue-500 decoration-2">cs</span> @ <span className="font-black">umich</span>
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/ahmadsk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                      isDark 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white backdrop-blur-sm' 
                        : 'bg-white/50 hover:bg-gray-50/50 text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg backdrop-blur-sm'
                    }`}
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/ahmad-sheikh-khalil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                      isDark 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-blue-400 backdrop-blur-sm' 
                        : 'bg-white/50 hover:bg-gray-50/50 text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg backdrop-blur-sm'
                    }`}
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://twitter.com/_ahmadsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                      isDark 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-blue-400 backdrop-blur-sm' 
                        : 'bg-white/50 hover:bg-gray-50/50 text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg backdrop-blur-sm'
                    }`}
                  >
                    <Twitter size={24} />
                  </a>
                  <button
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                      isDark 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-green-400 backdrop-blur-sm' 
                        : 'bg-white/50 hover:bg-gray-50/50 text-gray-600 hover:text-green-600 shadow-md hover:shadow-lg backdrop-blur-sm'
                    }`}
                  >
                    <FileText size={24} />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <p className={`text-lg md:text-xl leading-relaxed max-w-2xl text-center font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              interested in creating <span className="font-bold underline decoration-blue-400 decoration-2">tech for social impact</span>. i love working on creative, <span className="italic">human-centered</span> projects and sometimes explore ideas through cinematography, editing, and design.
            </p>
          </div>

          {/* Terminal Section */}
          <Terminal />

          {/* Projects Section */}
          <div className="w-full max-w-6xl space-y-12">
            <h2 className="text-2xl md:text-3xl font-black text-center italic">projects</h2>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Currently Building */}
              <div className="space-y-6">
                <h3 className={`text-lg font-bold text-center italic underline decoration-2 ${
                  isDark ? 'text-blue-300 decoration-blue-300' : 'text-blue-800 decoration-blue-800'
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
                <h3 className={`text-lg font-bold text-center italic underline decoration-2 ${
                  isDark ? 'text-indigo-300 decoration-indigo-300' : 'text-indigo-800 decoration-indigo-800'
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

          {/* Contact Info */}
          <div className={`text-center space-y-2 font-medium ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="text-sm italic">available for opportunities</p>
            <p className="text-sm font-bold">let's build something together</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
