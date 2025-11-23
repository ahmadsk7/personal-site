import { Link } from "react-router-dom";
import CustomCursor from "../components/CustomCursor";
import FloatingParticles from "../components/FloatingParticles";

const Creative = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono">
      <CustomCursor />
      <FloatingParticles />
      <div className="max-w-3xl mx-auto px-4 py-12 relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Link
                to="/"
                className="text-[#00ff00] hover:underline text-sm font-pixel"
              >
                ← back
              </Link>
            </div>
            <h1 className="text-4xl font-pixel text-[#00ff00] mt-4">
              creative
            </h1>
          </div>

          {/* Creative Work Section */}
          <div>
            <div className="border border-[#00ff00] p-6">
              <div className="font-pixel text-[#00ff00] text-lg mb-6 border-b border-[#00ff00] pb-2">
                work
              </div>
              <div className="space-y-6 text-gray-300 text-sm">
                <p className="text-gray-400 italic">
                  coming soon...
                </p>
                {/* Add your creative work here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;

