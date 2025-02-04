import { Eye, Download } from "lucide-react";

const WorkExperience = () => {
  const workExperience = [
    { 
      company: "PayPal", 
      title: "Customer Solutions Agent", 
      duration: "July 2023 - Present", 
      logo: "/src/assets/paypal.svg" 
    },
    { 
      company: "Teleperformance", 
      title: "Customer Solutions Agent - Team Lead", 
      duration: "August 2019 - June 2023", 
      logo: "/src/assets/tp.png" 
    },
    { 
      company: "Grupo SILA", 
      title: "Security Monitoring Operator", 
      duration: "November 2015 - July 2019", 
      logo: "/src/assets/sila.jpg" 
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        Work Experience
      </h2>
      <div className="mt-4 space-y-4">
        {workExperience.map((job, index) => (
          <div key={index} className="flex flex-col space-y-2 pb-4">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-gray-200 text-lg font-semibold">{job.company}</h3>
                  <p className="text-gray-300">{job.title}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{job.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-gray-100 my-4" />
      <div className="flex justify-center md:justify-start space-x-4 mt-2">
        <a href="/src/assets/Hector_Martil_CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2">
          <Eye size={16} /> View CV
        </a>
        <a href="/src/assets/Hector_Martil_CV.pdf" download className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2">
          <Download size={16} /> Download CV
        </a>
      </div>
    </div>
  );
};

export default WorkExperience;
