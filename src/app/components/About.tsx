import { motion } from "motion/react";
import { Briefcase, Award } from "lucide-react";

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
              Proactive, communicative leader focused on native iOS and mobile. I help professionals and companies evolve their mobile apps and workflows. 
              Broad experience in agile, scrum, GitFlow, UX, and mobile architectures (MVVM, VIPER). Exploring Android (Kotlin, Jetpack Compose), React Native, Flutter, and cloud/CI-CD.
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
                  { role: "Lead iOS Engineer", company: "American Eagle Outfitters (InsightGlobal)", period: "Oct 2024 – Present", description: "Feature ownership in Marketing Technologies & Customer Communications: push, offers, in-app messaging, privacy consent, deeplinking, analytics. As Lead: release management, regressive tests, TDD, handovers, QA shift-left, bridge between back-end, QA, product, designers, architects. Swift 6, SwiftUI, Combine, Fastlane, Bamboo." },
                  { role: "iOS Specialist", company: "Feedzai – Digital Trust", period: "Feb 2024 – Sep 2024", description: "Solely responsible for 4 iOS projects: 2 SDKs for financial institutions (CyberSecurity/RiskOps, 190+ countries) and 2 demo apps. Also Android SDK/app and full DevOps/CI-CD. Swift 5+, Objective-C, SwiftUI, Combine, Kotlin, Jetpack Compose, GitLab, Jenkins, CircleCI." },
                  { role: "iOS Engineer", company: "SIBS (Aubay)", period: "Jun 2023 – Jan 2024", description: "MBWay (Portuguese real-time payment): VIPER, evolution, Unit Tests, SwiftUI, Combine, MVVM. In parallel: MulticertID (digital signatures with digital certificates). Swift, UIKit, SwiftUI, Combine." },
                  { role: "iOS Engineer", company: "Diconium (Aubay) – Volkswagen Group", period: "Feb 2023 – Jun 2023", description: "Whitelabel EV charging app (public & home). Reusable UI SDK skinned for VW, Audi, Škoda, Seat, Cupra, Porsche, Bentley. BFF maintenance. Swift, SwiftUI, Combine, XCTest, SPM, Kotlin, OpenAPI, GitHub Actions, Fastlane." },
                  { role: "Mobile Tech Lead", company: "BRQ – Next Bank", period: "Apr 2021 – Jan 2023", description: "Tech Lead on Pix project: technical guidance, ~50% hands-on, alignment with PM/PO/BA/back-end, pre-plannings, backlog grooming, architectural decisions." },
                  { role: "iOS Engineer", company: "BRQ – Next Bank", period: "Dec 2020 – Apr 2021", description: "Pix implementation, Design System team, reusable UI components (UIKit, briefly Flutter)." },
                  { role: "iOS Developer", company: "GFT – Cielo", period: "Aug 2020 – Dec 2020", description: "CieloPay and Bitz digital wallets: security (transactions, communications). White-label, componentized UIKit." },
                  { role: "iOS Developer", company: "Wipro – Bradesco Next", period: "Nov 2019 – Aug 2020", description: "Next super-app and nextJoy (Disney). SSO, cybersecurity, Swift migration, Unit Tests, code review. Swift, UIKit, RxSwift, MVVM, Realm, SwiftLint, XCTest." },
                  { role: "iOS Developer", company: "VHSYS", period: "Mar 2018 – Oct 2019", description: "Sole iOS developer: refactor from Swift 1.0 legacy, REST API, redesign, App Store Connect, deploy." },
                  { role: "Mobile Developer (iOS)", company: "DVPE T.I.", period: "May 2017 – Feb 2018", description: "Intern then effective iOS developer. Swift, Objective-C, xib/viewCode, APIs, geolocation. Occasional web (PHP, HTML5, CSS3, JS)." },
                ].map((job, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-[#00E676]" />
                    <h4 className="text-lg font-bold text-white">{job.role}</h4>
                    <span className="text-[#00E676] text-sm mb-2 block">{job.company} · {job.period}</span>
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
                {["Leadership", "Swift", "Objective-C", "SwiftUI", "Combine", "iOS", "Kotlin", "Jetpack Compose", "KMM", "React Native", "Flutter", "MVVM", "VIPER", "XCTest", "Fastlane", "Jenkins", "Bamboo", "GitLab CI/CD", "CircleCI", "OpenAPI", "REST API", "SPM", "CocoaPods", "Git", "GitFlow", "Scrum", "Agile"].map((skill) => (
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
