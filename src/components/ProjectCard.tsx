interface Project {
  title: string;
  description: string;
  tech: string[];
  status?: string;
  link?: string;
  badge?: string;
}

interface ProjectCardProps {
  project: Project;
  isDark: boolean;
  isCurrent: boolean;
}

const ProjectCard = ({ project, isDark, isCurrent }: ProjectCardProps) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`p-6 border transition-colors duration-100 ${
        isDark
          ? 'bg-gray-950 border-gray-800 hover:border-[#00ff00]'
          : 'bg-white border-gray-200 hover:border-gray-300'
      } ${project.link ? 'cursor-pointer' : ''}`}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h4 className="text-lg font-medium leading-tight text-gray-200">
            {project.title}
          </h4>
          {project.badge && (
            <span className="text-xs px-2 py-1 border border-[#00ff00] text-[#00ff00] font-mono">
              {project.badge}
            </span>
          )}
          {isCurrent && project.status && !project.badge && (
            <span className="text-xs px-2 py-1 border border-[#00ff00] text-[#00ff00] font-mono">
              {project.status}
            </span>
          )}
        </div>
        
        <p className="text-sm leading-relaxed text-gray-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 border border-gray-800 text-gray-400 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
