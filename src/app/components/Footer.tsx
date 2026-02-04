import logo from "figma:asset/e5db17c71aac79e7b149f97cc422e4e5137557fc.png";
import { Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Heptatom Logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold tracking-wider text-white">
              HEPTATOM
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-[#00E676] hover:bg-gray-800 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-[#00E676] hover:bg-gray-800 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-[#00E676] hover:bg-gray-800 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HEPTATOM TECHNOLOGIES. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
