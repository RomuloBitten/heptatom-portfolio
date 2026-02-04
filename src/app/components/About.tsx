import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00E676]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-[#00E676]">Me</span>
            </h2>
            <p className="text-gray-400 text-lg">
              I am a passionate Mobile Engineer with extensive experience in the iOS ecosystem. 
              My journey involves leading projects, mentoring teams, and delivering high-impact applications.
            </p>
          </div>

          <div className="grid gap-12">
            {/* Experience Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 text-[#00E676]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              
              <div className="space-y-8 pl-4 border-l-2 border-gray-800 ml-4">
                {[
                  {
                    role: "Founder & Lead Engineer",
                    company: "HEPTATOM TECHNOLOGIES",
                    period: "Present",
                    description: "Leading mobile development consultancy, specializing in iOS and cross-platform solutions."
                  },
                  {
                    role: "Senior iOS Developer",
                    company: "Previous Company (Placeholder)",
                    period: "2020 - 2023",
                    description: "Spearheaded the migration of legacy Objective-C codebase to Swift, improving app performance by 40%."
                  },
                  {
                    role: "Mobile Developer",
                    company: "Another Tech Firm",
                    period: "2017 - 2020",
                    description: "Developed and maintained multiple client applications. Implemented CI/CD pipelines."
                  }
                ].map((job, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-[#00E676]" />
                    <h4 className="text-lg font-bold text-white">{job.role}</h4>
                    <span className="text-[#00E676] text-sm mb-2 block">{job.company} | {job.period}</span>
                    <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 text-[#00E676]">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Swift", "SwiftUI", "Objective-C", "React Native", "Flutter", "Node.js", "GraphQL", "CI/CD"].map((skill) => (
                  <div key={skill} className="bg-black/50 p-3 rounded-lg text-center border border-gray-800 text-gray-300 hover:border-[#00E676]/50 transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
