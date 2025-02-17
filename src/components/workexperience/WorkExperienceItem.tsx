interface WorkExperienceItemProps {
  company: string;
  title: string;
  duration: string;
  logo: string;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ company, title, duration, logo }) => {
  const fallbackLogo = "/src/assets/default-company-logo.png"; // Imagen de respaldo

  return (
    <div className="flex flex-col space-y-2 pb-4">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-12 h-12 rounded-full object-cover"
            onError={(e) => (e.currentTarget.src = fallbackLogo)} // Imagen de respaldo si falla
          />
          <div>
            <h3 className="text-gray-100 text-lg font-semibold">{company}</h3>
            <p className="text-gray-200">{title}</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm">{duration}</p>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
