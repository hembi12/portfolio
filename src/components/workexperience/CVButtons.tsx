import { Eye, Download } from "lucide-react";

const CVButtons = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4 mt-2">
      <a 
        href="/src/assets/Hector_Martil_CV.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
      >
        <Eye size={16} /> View CV
      </a>
      <a 
        href="/src/assets/Hector_Martil_CV.pdf" 
        download 
        className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
      >
        <Download size={16} /> Download CV
      </a>
    </div>
  );
};

export default CVButtons;
