import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

// Assets base path (images in public/assets/)
const ASSETS = "/assets";

const projects = [
  { title: "AE + Aerie", tech: ["Swift 6", "SwiftUI", "Combine", "Fastlane", "Bamboo"], description: "American Eagle & Aerie apps. Marketing Technologies & Customer Communications: push notifications, offers, in-app messaging, privacy consent, deeplinking, analytics.", link: "https://apps.apple.com/pt/app/ae-aerie/id467738064?l=en-GB", image: `${ASSETS}/ae_aerie_proj_banner-0b65fd3b-09f7-43db-9bd1-6febb89ffa01.png`, isPortraitBanner: true },
  { title: "Digital Trust SDK", tech: ["Swift", "Objective-C", "SwiftUI", "Combine"], description: "Feedzai iOS SDKs for financial institutions (CyberSecurity & RiskOps), used in 190+ countries. Plus demo apps. Full DevOps/CI/CD ownership.", link: "https://www.feedzai.com/resource/digital-trust/", image: `${ASSETS}/digital_trust_proj_banner-ad7e8a7b-962b-4321-860a-cae1008f22b8.png`, isPortraitBanner: false },
  { title: "MBWay", tech: ["Swift", "UIKit", "SwiftUI", "Combine", "VIPER"], description: "SIBS Portuguese real-time payment system. Evolution of the product, introduction of Unit Tests, SwiftUI and Combine, MVVM.", link: "https://apps.apple.com/pt/app/mb-way/id918126133?l=en-GB", image: `${ASSETS}/mbway_proj_banner-6888cd47-bac8-4237-b81e-01840b78e13f.png`, isPortraitBanner: true },
  { title: "MulticertID", tech: ["Swift", "UIKit", "SwiftUI", "Combine"], description: "SIBS product for digital signatures using digital certificates.", link: "https://apps.apple.com/pt/app/multicert-id/id6444028886?l=en-GB", image: `${ASSETS}/multicert_proj_banner-edc12cea-087a-4135-9ab3-694b6722f7f8.png`, isPortraitBanner: true },
  { title: "Volkswagen", tech: ["Swift", "SwiftUI", "Combine", "SPM"], description: "The app for your Volkswagen. Whitelabel EV charging for VW Group: public and home charging. Reusable UI SDK skinned per brand.", link: "https://apps.apple.com/pt/app/volkswagen/id1517566572?l=en-GB", image: `${ASSETS}/vw_proj_banner-47dfde49-5ab0-4249-ab03-2a8069af5896.png`, isPortraitBanner: true },
  { title: "My Cupra App", tech: ["Swift", "SwiftUI", "Combine"], description: "Cupra-branded EV charging experience (VW Group whitelabel).", link: "https://apps.apple.com/pt/app/my-cupra-app/id1576693756?l=en-GB", image: `${ASSETS}/cupra_proj_banner-0f525312-6032-431c-99a4-12d78f50c4cc.png`, isPortraitBanner: true },
  { title: "My Seat App", tech: ["Swift", "SwiftUI", "Combine"], description: "SEAT-branded EV charging experience (VW Group whitelabel).", link: "https://apps.apple.com/pt/app/my-seat-app/id6472646580?l=en-GB", image: `${ASSETS}/seat_proj_banner-31a87290-e74c-4632-9242-07f49ec652c3.png`, isPortraitBanner: true },
  { title: "MyŠkoda", tech: ["Swift", "SwiftUI", "Combine"], description: "Škoda-branded EV charging experience (VW Group whitelabel).", link: "https://apps.apple.com/pt/app/myškoda/id1632202810?l=en-GB", image: `${ASSETS}/skoda_proj_banner-1a05b6c9-7b9e-4b04-80bb-44d7fb821173.png`, isPortraitBanner: true },
  { title: "myAudi", tech: ["Swift", "SwiftUI", "Combine"], description: "Audi-branded EV charging experience (VW Group whitelabel).", link: "https://apps.apple.com/pt/app/myaudi/id440464115?l=en-GB", image: `${ASSETS}/audi_proj_banner-014125c7-d227-4bc6-b565-a923c0785e8a.png`, isPortraitBanner: true },
  { title: "My Porsche", tech: ["Swift", "SwiftUI", "Combine"], description: "Porsche-branded EV charging experience (VW Group whitelabel).", link: "https://apps.apple.com/pt/app/my-porsche/id1559529059?l=en-GB", image: `${ASSETS}/porsche_proj_banner-eb0b7863-fc13-4d1f-99a5-33ff5ebb2bf0.png`, isPortraitBanner: true },
  { title: "My Bentley", tech: ["Swift", "SwiftUI", "Combine"], description: "Bentley-branded EV charging experience (VW Group whitelabel).", link: "https://apps.apple.com/pt/app/my-bentley/id1008052243?l=en-GB", image: `${ASSETS}/bentley_proj_banner-9146ab7f-4a2f-45a2-a73e-5b503676c3b5.png`, isPortraitBanner: true },
  { title: "next", tech: ["Swift", "UIKit", "RxSwift", "MVVM", "Realm"], description: "Next digital bank super-app. Pix (Brazilian real-time payment), Design System, reusable UI components. Senior iOS then Tech Lead.", link: "https://apps.apple.com/pt/app/next-conta-digital-e-cartão/id1133682678?l=en-GB", image: `${ASSETS}/next_proj_banner-b7643cd2-a7b4-4cf2-8c77-ec08cae3bb26.png`, isPortraitBanner: true  },
  { title: "nextJoy", tech: ["Swift", "UIKit", "RxSwift", "MVVM"], description: "Next underage app, Disney partnership. White-label with 12 Disney themes (Star Wars, Marvel, Pixar, etc.). Fully reactive, reusable UI.", link: "https://apps.apple.com/pt/app/nextjoy/id1507763183?l=en-GB", image: `${ASSETS}/nextjoy_proj_banner-5cfe0f94-ea26-42a8-a00a-caf4e0b1d732.png`, isPortraitBanner: true },
  { title: "CieloPay", tech: ["Swift", "UIKit"], description: "Cielo digital wallet app. Security-focused transactions and communications. White-label, componentized UI.", link: null, image: `${ASSETS}/cielo_pay_proj_banner-bf4077ad-f387-4aec-a9af-6d432e416919.png`, deprecated: true, isPortraitBanner: true },
  { title: "Bitz", tech: ["Swift", "UIKit"], description: "Cielo Bitz digital wallet. In-app and bank transactions security. Same codebase as CieloPay, white-label.", link: null, image: `${ASSETS}/bitz_proj_banner-9f07bb04-fd1e-462d-b3d9-b9b88e4c4bf8.png`, deprecated: true, isPortraitBanner: false },
  { title: "VHSYS", tech: ["Swift"], description: "VHSYS business management iOS app. Full ownership: refactor from Swift 1.0 legacy, REST API, redesign and modern UX.", link: "https://apps.apple.com/pt/app/vhsys-sistema-de-gestão/id999532391?l=en-GB", image: `${ASSETS}/vhsys_proj_banner-387e7a55-2c4a-4b30-b772-9c50e12870b4.png`, isPortraitBanner: true },
  { title: "VHSYS Parceiros", tech: ["Swift"], description: "App for VHSYS partners: manage client portfolio, commissions, referral link, and registrations.", link: "https://apps.apple.com/pt/app/vhsys-parceiros/id1375688420?l=en-GB", image: `${ASSETS}/vhsys_parceiros_proj_banner.-6483599a-0cc5-473f-9e86-f65eee6e0e07.png`, isPortraitBanner: true },
  { title: "DeVanPraEscola", tech: ["Swift", "Objective-C"], description: "Educational app with geolocation and API integration (now deprecated).", link: null, image: `${ASSETS}/dvpe_proj_banner-09ff3aa8-11d2-4d3f-9ef4-53232a1260f3.png`, deprecated: true, isPortraitBanner: false }
];

const INITIAL_COUNT = 6;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#00E676]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A selection of mobile applications and solutions delivered with precision and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
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
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E676] transition-colors">
                    {project.title}
                  </h3>
                  {"deprecated" in project && project.deprecated && (
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-400 text-xs rounded">Deprecated</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#00E676] transition-colors"
                  >
                    View project <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#00E676] text-[#00E676] font-semibold rounded-full hover:bg-[#00E676]/10 transition-colors"
            >
              {showAll ? (
                <>
                  Show less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show all ({projects.length} projects) <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
