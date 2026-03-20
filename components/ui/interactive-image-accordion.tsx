import React, { useState } from 'react';
import { Briefcase, GraduationCap, Rocket, Trophy, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Data for the image accordion ---
// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Jobs',
    iconSrc: "https://cdn.lordicon.com/zhiiqoue.json",
    description: [
      'Full-time Internships — Remote/Onsite',
      'Remote/Onsite/Hybrid/Freelance Jobs',
      'Career Development Sessions',
      'Readiness Assessments & Resources'
    ],
    link: 'https://careers.industryacademiacommunity.com/web/apps/jobs'
  },
  {
    id: 2,
    title: 'Internships',
    iconSrc: "https://cdn.lordicon.com/ogjpwrxe.json",
    description: [
      'No Selection Criteria / No Fees',
      '6 Weeks to 6 Months with Live Projects',
      '50+ IT, Mgmt. & Humanities Domains',
      'Experience Letter Provided'
    ],
    link: 'https://gpi.industryacademiacommunity.com/gpi'
  },
  {
    id: 3,
    title: 'Entrepreneurship',
    iconSrc: "https://cdn.lordicon.com/fqbvgezn.json",
    description: [
      'Startup Entrepreneurship Launchpad',
      'Participate in Ideathon',
      'Win prizes worth Rs. 6 Lakhs',
      'Rs. 3 Lakhs Equity in Cloud Counselage'
    ],
    link: 'https://dolphintankindia.com/'
  },
  {
    id: 4,
    title: 'Excellence Awards',
    iconSrc: "https://cdn.lordicon.com/wjdlpfml.json",
    description: [
      'Jury-based / No Fees',
      'Industry Academia Excellence Awards',
      'Youth Icon Awards',
      'Companies, Colleges, Faculty & More'
    ],
    link: 'https://careers.industryacademiacommunity.com/web/apps/excellence-awards-nomination-form'
  },
];

interface AccordionItemData {
  id: number;
  title: string;
  iconSrc: string;
  description: string[];
  link: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white font-sans py-12">
      <section className="container mx-auto px-4">
        {/* Removed Header Section as requested */}

        {/* Improved Accordion: White theme, wider cards, shorter height */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 min-h-[450px] overflow-hidden">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item as AccordionItemData}
              isActive={index === activeIndex}
              onMouseEnter={() => handleItemHover(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

import { Spotlight } from "@/components/ui/spotlight";

// ... [data remains the same] ...

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  const inactiveColors = [
    "bg-[#fef9c3]", // Yellow
    "bg-[#e0f2fe]", // Light Blue
    "bg-[#fef9c3]", // Yellow
    "bg-[#bae6fd]", // Sky Blue
  ];

  return (
    <div
      className={cn(
        "relative h-[440px] rounded-[40px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] border shadow-sm font-['Times_New_Roman',serif]",
        isActive 
          ? "w-full md:w-[650px] bg-white border-yellow-400 border-4 shadow-[0_32px_64px_-16px_rgba(250,204,21,0.15)]" 
          : cn("w-full md:w-[130px] border-transparent hover:brightness-95", inactiveColors[item.id - 1])
      )}
      onMouseEnter={onMouseEnter}
    >
      {/* Spotlight Effect (Active Only) */}
      {isActive && (
        <Spotlight
          className="from-yellow-400/20 via-yellow-100/5 to-transparent blur-2xl"
          size={250}
        />
      )}

      <div className="absolute inset-0 p-8 flex flex-col h-full z-10">
        {/* Header Area */}
        <div className={cn(
          "relative flex items-center transition-all duration-500 h-full w-full",
          isActive ? "flex-row gap-6 mb-8" : ""
        )}>
          {/* Active Icon */}
          {isActive && (
            <div className="shrink-0 p-4 bg-white rounded-3xl border border-gray-100 shadow-md transition-all duration-500 w-[110px] h-[110px]">
              {(React.createElement as any)('lord-icon', {
                src: item.iconSrc,
                trigger: "hover",
                colors: "primary:#f4f19c,secondary:#30c9e8",
                style: { width: '100%', height: '100%' }
              })}
            </div>
          )}

          {/* Inactive Title (Vertically Centered) */}
          {!isActive && (
             <div className="absolute inset-0 flex items-center justify-center w-full">
               <span className="text-black text-lg font-bold tracking-[0.1em] uppercase block origin-center rotate-90 whitespace-nowrap">
                 {item.title}
               </span>
             </div>
          )}

          {isActive && (
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
              {item.title}
            </h3>
          )}
        </div>

        {/* Details (Visible only when active) */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col flex-grow"
            >
              <ul className="space-y-3 mb-4">
                {item.description.map((point, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3 text-gray-600 text-lg font-medium leading-tight"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-black transition-all duration-300 text-lg shadow-lg"
                >
                  Get Started
                  <span className="text-yellow-400">→</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
