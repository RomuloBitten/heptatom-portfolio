import { motion } from "motion/react";
import photo from "figma:asset/9ceae61541f7e72bf181d09c7a61b575ea4f1825.png";
import logo from "figma:asset/e5db17c71aac79e7b149f97cc422e4e5137557fc.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-black">
      
      {/* Centered Background Logo with Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[800px] md:h-[800px] pointer-events-none select-none flex items-center justify-center z-0">
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-[#00E676]/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[#00E676]/10 rounded-full blur-[100px] animate-pulse" />
        
        {/* The Logo */}
        <img 
          src={logo} 
          alt="" 
          className="w-full h-full object-contain opacity-30 drop-shadow-[0_0_50px_rgba(0,230,118,0.3)] rounded-full"
        />
        
        {/* Rings/Pulse effects similar to profile photo, adapted for the logo */}
        <div className="absolute inset-[-10%] border border-[#00E676]/20 rounded-full opacity-20 animate-pulse" />
        <div className="absolute inset-[-20%] border border-[#00E676]/10 rounded-full opacity-10" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="drop-shadow-2xl bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-[#00E676]/30 rounded-full bg-[#00E676]/10 shadow-lg shadow-black/50">
            <span className="text-[#00E676] text-sm font-semibold tracking-wide uppercase">
              iOS & Mobile Specialist
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Mobile apps, engineered <br className="hidden md:block" /> with precision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#008040]">
              from idea to the palm of your hand
            </span>
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-lg leading-relaxed drop-shadow-md font-medium">
            Hi, I'm Romulo Mantovani. I transform complex ideas into intuitive, high-performance mobile experiences. 
            Founder of HEPTATOM TECHNOLOGIES.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#00E676] text-black font-bold rounded-full hover:bg-[#00c853] transition-colors flex items-center gap-2 shadow-lg shadow-[#00E676]/20"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-700 bg-black/50 text-white font-medium rounded-full hover:border-[#00E676] hover:text-[#00E676] transition-all shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center drop-shadow-2xl"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-2 border-[#00E676] rounded-full opacity-20 animate-pulse" />
            <div className="absolute inset-4 border border-[#00E676] rounded-full opacity-40" />
            <img
              src={photo}
              alt="Romulo Mantovani"
              className="w-full h-full object-cover rounded-full shadow-[0_0_40px_rgba(0,0,0,0.8)] border-4 border-black relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
