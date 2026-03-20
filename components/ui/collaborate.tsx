"use client";

import { motion } from "framer-motion";
import { Logos3, type Logo } from "@/components/ui/logos3";

export interface FeatureCardProps {
  title: string;
  points: string[];
  link: string;
  buttonText: string;
}

const FeatureCard = ({ title, points: _points, link, buttonText, partnerLogos }: FeatureCardProps & { partnerLogos: Logo[] }) => (
  <div className="bg-white rounded-[32px] p-5 border-4 border-[#FACC15] shadow-xl hover:shadow-[#FACC15]/25 transition-all duration-500 font-['Times_New_Roman',serif] group">
    <div className="flex flex-col gap-3">
      
      {/* Top Row: Title, Points & Button */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center gap-10">
          <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-none shrink-0">{title}</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-gray-500 font-medium text-base italic leading-tight">
            {_points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FACC15] text-gray-900 font-black px-8 py-3 rounded-xl hover:bg-yellow-500 transition-all duration-300 text-lg whitespace-nowrap inline-flex items-center gap-2 shadow-sm"
        >
          {buttonText} →
        </a>
      </div>

      {/* Bottom Row: Logos */}
      <div className="w-full bg-yellow-50/30 rounded-xl py-4 px-6 border border-[#FACC15]/10 overflow-hidden relative h-32 flex items-center">
        <Logos3 logos={partnerLogos} speed={0.4} className="py-0 bg-transparent" />
      </div>

    </div>
  </div>
);

export function CollaborateSection({ 
  industryLogos, 
  academicLogos 
}: { 
  industryLogos: Logo[], 
  academicLogos: Logo[] 
}) {
  return (
    <section className="bg-transparent py-8 font-['Times_New_Roman',serif] overflow-hidden">
      <div className="mx-auto px-8 max-w-[1400px]">
        {/* Header - Very Compact */}
        <div className="text-center mb-6 relative">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-black text-[#FACC15] uppercase tracking-[0.2em] mb-2 select-none"
          >
            COLLABORATE
          </motion.h2>
          <h3 className="text-5xl font-black text-sky-400 mb-4 leading-tight">Partner With Us for a Cause</h3>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
            Get free benefits, recognition & satisfaction from supporting a mission that impacts millions.
          </p>
        </div>

        {/* Vertical Stack of Tiered Cards */}
        <div className="flex flex-col gap-8 w-full">
          <FeatureCard 
            title="For Colleges"
            points={[
              "Jobs & Internships",
              "Faculty Training",
              "Excellence Awards"
            ]}
            link="https://share.hsforms.com/1MEud73FpS1SbFdjvqIexBAdwqgw"
            buttonText="Associate Us"
            partnerLogos={academicLogos}
          />
          <FeatureCard 
            title="For Companies"
            points={[
              "Talent Pool Access",
              "Employee Training",
              "Industry Awards"
            ]}
            link="https://share.hsforms.com/1T66G-ljQSza9Menl0f9U5Qbus52"
            buttonText="Partner Us"
            partnerLogos={industryLogos}
          />
        </div>

        {/* Unified Bottom CTA */}
        <div className="text-center mt-8 font-['Times_New_Roman',serif]">
           <p className="text-gray-400 text-sm italic mb-4">Support our mission to impact millions of lives</p>
           <a href="https://share.hsforms.com/1T66G-ljQSza9Menl0f9U5Qbus52" className="group inline-flex items-center gap-4 bg-[#FACC15] text-gray-900 font-bold px-12 py-5 rounded-full text-2xl hover:bg-yellow-500 transition-all border-4 border-white shadow-xl">
             Sponsor For-A-Cause →
           </a>
        </div>
      </div>
    </section>
  );
}
