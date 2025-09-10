import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Academic = () => {

  return (
    <div className="min-h-screen transition-colors duration-300 font-bold text-gray-100">

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-10">
        <Link
          to="/"
          className="p-4 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white backdrop-blur-sm"
        >
          <ArrowLeft size={24} />
        </Link>
      </div>

      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
            hey!
          </h1>
          
          <div className="text-lg md:text-xl leading-relaxed space-y-2 text-gray-300">
            <p>you probably clicked on the link of an academic project.</p>
            <p>
              if you want to see my code, email me at{" "}
              <a 
                href="mailto:ahmadsk@umich.edu"
                className="font-bold hover:underline transition-colors text-blue-400 hover:text-blue-300"
              >
                ahmadsk@umich.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
