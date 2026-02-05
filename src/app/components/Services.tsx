import { Smartphone, Code, Lightbulb, Database, Cpu, Users, Package, GitBranch, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Smartphone,
    title: "iOS Development",
    description: "Native iOS applications built with Swift and SwiftUI, focusing on performance and user experience.",
  },
  {
    icon: Code,
    title: "Cross-Platform Apps",
    description: "Efficient mobile solutions using React Native and Flutter to reach both iOS and Android users.",
  },
  {
    icon: Lightbulb,
    title: "Tech Consultancy",
    description: "Strategic advice on mobile architecture, tech stack selection, and digital transformation.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading mobile teams: aligning with PM, PO, back-end; backlog grooming, tech decisions, and mentoring.",
  },
  {
    icon: Database,
    title: "Backend Integration",
    description: "Seamless integration with RESTful APIs, GraphQL, BFF, and cloud services.",
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description: "Auditing and improving existing apps for speed, battery usage, and stability.",
  },
  {
    icon: Package,
    title: "Release Management",
    description: "Owning release cycles, regressive testing, QA shift-left, and CI/CD with Fastlane, Jenkins, Bamboo.",
  },
  {
    icon: GitBranch,
    title: "Solution Architecture",
    description: "Engineering and architectural designs, TDD documentation, and scalable mobile architectures (MVVM, VIPER).",
  },
  {
    icon: Sparkles,
    title: "AI Engineering",
    description: "Leveraging AI-assisted development and code generation where it accelerates delivery and quality.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#00E676]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive mobile engineering solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00E676]/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00E676] transition-colors">
                <service.icon className="w-7 h-7 text-[#00E676] group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
