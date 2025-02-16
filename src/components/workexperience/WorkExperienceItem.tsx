interface WorkExperienceItemProps {
  company: string;
  title: string;
  duration: string;
  logo: string;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ company, title, duration, logo }) => {
  return (
    <div className="flex flex-col space-y-2 pb-4">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <img 
            src={logo} 
            alt={`${company} logo`} 
            className="w-12 h-12 rounded-full object-cover" 
          />
          <div>
            <h3 className="text-gray-200 text-lg font-semibold">{company}</h3>
            <p className="text-gray-300">{title}</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">{duration}</p>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
