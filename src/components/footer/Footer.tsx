const Footer = () => {
    return (
      <footer className="bg-black text-white py-6 mt-12 mb-12">
        <div className="w-full border-t border-gray-100 mb-4"></div>
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Héctor Martil. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
