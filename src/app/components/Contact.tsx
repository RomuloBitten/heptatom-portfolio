import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const LINKEDIN_URL = "https://www.linkedin.com/in/romulo-mantovani";
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=351962934937";

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
                  <a href="mailto:romulo.jobapplying@outlook.com" className="text-gray-400 hover:text-[#00E676] transition-colors">
                    romulo.jobapplying@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-900 rounded-lg text-[#00E676]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Phone</h4>
                  <a href="tel:+5541999591239" className="text-gray-400 hover:text-[#00E676] transition-colors">
                    +55 41 99959-1239
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-900 rounded-lg text-[#00E676]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Location</h4>
                  <p className="text-gray-400">Curitiba, Paraná, Brazil · Full-remote available</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-semibold rounded-full hover:bg-[#004182] transition-colors"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
