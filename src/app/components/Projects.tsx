import { motion } from "motion/react";
import { ExternalLink, Layers, Github } from "lucide-react";

// Placeholder data - to be updated by user later
const projects = [
  {
    title: "Project Alpha",
    tech: ["SwiftUI", "CoreData", "CloudKit"],
    description: "A productivity app designed to streamline daily tasks with intuitive gestures.",
    link: "#",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    isPortraitBanner: false,
  },
  {
    title: "Project Beta",
    tech: ["React Native", "Redux", "Firebase"],
    description: "Social networking platform connecting professionals in the creative industry.",
    link: "#",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
    isPortraitBanner: true,
  },
  {
    title: "Project Gamma",
    tech: ["Flutter", "Dart", "GraphQL"],
    description: "E-commerce solution with real-time inventory tracking and AR product preview.",
    link: "#",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800",
    isPortraitBanner: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-[#00E676]">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              A selection of mobile applications and solutions delivered with precision and quality.
            </p>
          </div>
          <a href="#" className="text-[#00E676] hover:text-white transition-colors flex items-center gap-2 font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden group border border-gray-800 hover:border-[#00E676]/50 transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ${project.isPortraitBanner ? 'px-[20%]' : ''}`}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E676] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#00E676] transition-colors"
                >
                  App Store <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
