import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-[#00E676]">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Have a project in mind or want to discuss the latest in mobile tech? 
              I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-900 rounded-lg text-[#00E676]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email</h4>
                  <a href="mailto:contact@heptatom.com" className="text-gray-400 hover:text-[#00E676] transition-colors">
                    contact@heptatom.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-900 rounded-lg text-[#00E676]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-900 rounded-lg text-[#00E676]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Location</h4>
                  <p className="text-gray-400">Available for Remote Work & Consulting</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900 p-8 rounded-3xl border border-gray-800"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#00E676] text-black font-bold py-4 rounded-lg hover:bg-[#00c853] transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
