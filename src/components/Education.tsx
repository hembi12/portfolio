const Education = () => {
  const educationExperience = [
    { 
      institution: "Latin American Technological University Online", 
      degree: "Bachelor's Degree in Information Technology Administration", 
      duration: "February 2022 - Present", 
      logo: "/src/assets/utel.png", 
      link: "http://www.utel.edu.mx/" 
    },
    { 
      institution: "DEV.F", 
      degree: "Master in Coding: Backend, Frontend, and Fullstack Development", 
      duration: "June 2024 - Present", 
      logo: "/src/assets/devf.jpg", 
      link: "https://devf.la/" 
    },
  ];

  const certificates = [
    { 
      institution: "Latin American Technological University Online", 
      title: "International Diploma in Computer Systems Analysis", 
      duration: "Completed 2025", 
      logo: "/src/assets/utel.png", // Usamos la misma imagen de UTEL
      pdf: "/src/assets/010439887.DPLO.313614.DPL2025-384081.pdf" 
    },
  ];

  return (
    <div className="mt-6">
      {/* Encabezado de Educación */}
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        Education
      </h2>
      
      {/* Experiencia Académica */}
      <div className="mt-4 space-y-4">
        {educationExperience.map((edu, index) => (
          <div key={index} className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <img src={edu.logo} alt={edu.institution} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-semibold">
                  <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 hover:underline">
                    {edu.institution}
                  </a>
                </h3>
                <p className="text-gray-300">{edu.degree}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{edu.duration}</p>
          </div>
        ))}
      </div>

      {/* Encabezado de Certificados */}
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left mt-6">
        Certificates
      </h2>

      {/* Lista de Certificados */}
      <div className="mt-4 space-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <img src={cert.logo} alt={cert.institution} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-semibold">
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 hover:underline">
                    {cert.institution}
                  </a>
                </h3>
                <p className="text-gray-300">{cert.title}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{cert.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
