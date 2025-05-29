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
      className={`p-6 rounded-lg transition-all duration-300 border ${
        isDark
          ? 'bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600'
          : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md'
      } ${project.link ? 'cursor-pointer hover:scale-105' : ''}`}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h4 className="text-lg font-medium leading-tight">
            {project.title}
          </h4>
          {project.badge && (
            <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
              isDark
                ? 'bg-purple-900 text-purple-300'
                : 'bg-purple-100 text-purple-700'
            }`}>
              {project.badge}
            </span>
          )}
          {isCurrent && project.status && !project.badge && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              isDark
                ? 'bg-orange-900 text-orange-300'
                : 'bg-orange-100 text-orange-700'
            }`}>
              {project.status}
            </span>
          )}
        </div>
        
        <p className={`text-sm leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded ${
                isDark
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-100 text-gray-700'
              }`}
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
