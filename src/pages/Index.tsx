import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "../components/CustomCursor";
import FloatingParticles from "../components/FloatingParticles";

const Index = () => {
  const projects = [
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
    },
    {
      title: "websitecloner",
      description: "minimal AI-powered web app to clone public websites using LLMs and design scraping",
      tech: ["next.js", "typescript", "python", "fastapi", "claude", "gpt"],
      link: "https://github.com/ahmadsk7/websiteCloner"
    },
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
    <div className="min-h-screen bg-black text-gray-200 font-mono">
      <CustomCursor />
      <FloatingParticles />
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div>
            <div className="flex items-center gap-4 mb-2 flex-wrap">
              <h1 className="text-4xl font-pixel text-[#00ff00]">
                ahmad sheikh-khalil
              </h1>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ahmadsk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff00] transition-colors duration-100"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ahmad-sheikh-khalil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff00] transition-colors duration-100"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/_ahmadsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff00] transition-colors duration-100"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic">
              /ˈɑːməd ʃeɪk kəˈliːl/
            </p>
          </div>

          {/* About Section - Dictionary Style */}
          <div>
            <div className="border-l-2 border-[#00ff00] pl-4 mb-4">
              <h2 className="text-[#00ff00] font-pixel text-xl mb-2">about</h2>
            </div>
            <div className="space-y-1 text-gray-300 text-sm leading-relaxed">
              <p>• grew up in monroe, la</p>
              <p>• current student @ umich</p>
              <p>• prev engineer @ olo</p>
              <p>• prev engineer @ orchids (ycw25) - grew it to 50k users</p>
              <p>• see here for <Link to="/creative" className="text-[#00ff00] hover:underline">creative</Link></p>
              <p>• see here for <Link to="/writing" className="text-[#00ff00] hover:underline">writing</Link></p>
            </div>
          </div>

          {/* Projects Section - Box Drawn */}
          <div>
            <div className="border border-[#00ff00] p-6">
              <div className="font-pixel text-[#00ff00] text-lg mb-6 border-b border-[#00ff00] pb-2">
                projects
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-gray-800 pl-4 hover:border-[#00ff00] transition-colors duration-100"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[#00ff00] font-pixel text-base">
                        [{index + 1}] {project.title}
                        {project.status && <span className="text-gray-400 text-xs ml-2">({project.status})</span>}
                      </h3>
                      {project.badge && (
                        <span className="text-xs text-[#00ff00] border border-[#00ff00] px-2 py-1 font-mono">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs text-gray-400 border border-gray-800 px-2 py-1 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#00ff00] hover:underline mt-2 inline-block"
                      >
                        → view
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
