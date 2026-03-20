import React from 'react';
import ReactDOM from 'react-dom/client';
import { LandingAccordionItem } from './components/ui/interactive-image-accordion';
import { LogoCloud } from './components/ui/logo-cloud-4';
import { Logos3 } from './components/ui/logos3';
import { CollaborateSection } from './components/ui/collaborate';
import { LayeredText } from './components/ui/layered-text';
import { Spotlight } from './components/ui/spotlight';
import BlurText from './components/ui/blur-text';
import { AnimatedText } from './components/ui/animated-underline-text-one';
import './style.css'; 
import './index.css'; 

// --- ROOTS ---
const accordionRoot = document.getElementById('accordion-root');
const mediaRoot = document.getElementById('media-coverage-root');
const collaborateRoot = document.getElementById('collaborate-unified-root');
const layeredTextRoot = document.getElementById('layered-text-root');
const spotlightPrep1 = document.getElementById('spotlight-prep-1');
const spotlightPrep2 = document.getElementById('spotlight-prep-2');
const spotlightPrep3 = document.getElementById('spotlight-prep-3');
const blurHeroRoot = document.getElementById('blur-hero-root');
const foundersRoot = document.getElementById('founders-root');
const careerOppsRoot = document.getElementById('career-opps-root');
const prepTitleRoot = document.getElementById('prep-title-root');

// --- DATA ---

const mediaLogos = [
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/CNN%20News%2018.png?width=305&height=165", alt: "CNN News 18" },
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/Times%20Now.png?width=204&height=192", alt: "Times Now" },
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/India%20News.jpg?width=155&height=75", alt: "India News" },
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/images-1.jpeg?width=158&height=98", alt: "ANI" },
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/download-2.jpg?width=299&height=168", alt: "Media 1" },
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/images.jpg?width=290&height=174", alt: "Media 2" },
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/download-1-2.png?width=225&height=225", alt: "Media 3" },
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/download-2-1.png?width=300&height=168", alt: "Media 4" },
  { src: "https://www.cloudcounselage.com/hs-fs/hubfs/download-3-1.png?width=267&height=189", alt: "Media 5" },
];

const industryLogos = [
  { id: "i1", description: "Cultfit", image: "https://www.cloudcounselage.com/hs-fs/hubfs/Cultfit.png?width=297&height=170" },
  { id: "i2", description: "Truemeds", image: "https://www.cloudcounselage.com/hs-fs/hubfs/Truemeds.png?width=298&height=103" },
  { id: "i3", description: "Helpnow", image: "https://www.cloudcounselage.com/hs-fs/hubfs/helpnow-1.png?width=223&height=66" },
  { id: "i4", description: "Getsetup", image: "https://www.cloudcounselage.com/hs-fs/hubfs/Getsetup.png?width=344&height=146" },
  { id: "i5", description: "Design Qandy", image: "https://www.cloudcounselage.com/hs-fs/hubfs/Design%20Qandy.jpeg?width=164&height=46" },
  { id: "i6", description: "Techjays", image: "https://www.cloudcounselage.com/hs-fs/hubfs/Techjays.png?width=500&height=101" },
  { id: "i7", description: "Kingston", image: "https://www.cloudcounselage.com/hs-fs/hubfs/Kingston-logo-1-1.jpeg?width=400&height=103" },
  { id: "i8", description: "Partner 1", image: "https://www.cloudcounselage.com/hs-fs/hubfs/1528883126823.jpg?width=200&height=200" },
  { id: "i9", description: "Partner 2", image: "https://www.cloudcounselage.com/hs-fs/hubfs/download%20copy.png?width=450&height=112" },
  { id: "i10", description: "Partner 3", image: "https://www.cloudcounselage.com/hs-fs/hubfs/download%20copy.jpeg?width=199&height=124" },
  { id: "i11", description: "Partner 4", image: "https://www.cloudcounselage.com/hs-fs/hubfs/download-1.png?width=200&height=112" },
];

const academicLogos = [
  { id: "a1", description: "RAIT", image: "https://www.cloudcounselage.com/hs-fs/hubfs/RAIT%20logo.png?width=328&height=154" },
  { id: "a2", description: "Parul University", image: "https://www.cloudcounselage.com/hs-fs/hubfs/PARUL%20UNIVERSITY%20LOGO.png?width=200&height=200" },
  { id: "a3", description: "Amity", image: "https://www.cloudcounselage.com/hs-fs/hubfs/Amity%20logo-1.png?width=124&height=137" },
  { id: "a4", description: "PCE Nagpur", image: "https://www.cloudcounselage.com/hs-fs/hubfs/pce%20nagpur%20logo.png?width=269&height=187" },
  { id: "a5", description: "YCCE Nagpur", image: "https://www.cloudcounselage.com/hs-fs/hubfs/ycce%20nagpur%20logo.jpg?width=225&height=225" },
  { id: "a6", description: "BK Birla", image: "https://www.cloudcounselage.com/hs-fs/hubfs/B%20K%20Birla.jpg?width=225&height=225" },
  { id: "a7", description: "VKBIT", image: "https://www.cloudcounselage.com/hs-fs/hubfs/VKBIT.png?width=212&height=238" },
  { id: "a8", description: "College 1", image: "https://www.cloudcounselage.com/hs-fs/hubfs/download-1.jpg?width=219&height=230" },
  { id: "a9", description: "College 2", image: "https://www.cloudcounselage.com/hs-fs/hubfs/0.jpg?width=200&height=200" },
  { id: "a10", description: "College 3", image: "https://www.cloudcounselage.com/hs-fs/hubfs/download.jpg?width=150&height=149" },
  { id: "a11", description: "College 4", image: "https://www.cloudcounselage.com/hs-fs/hubfs/download-1-1.png?width=208&height=242" },
  { id: "a12", description: "College 5", image: "https://www.cloudcounselage.com/hs-fs/hubfs/download-2.png?width=238&height=188" },
];

// --- RENDERING ---

if (spotlightPrep1) {
  ReactDOM.createRoot(spotlightPrep1).render(
    <React.StrictMode>
      <Spotlight className="from-blue-500/25 via-blue-400/15 to-transparent blur-2xl" size={350} />
    </React.StrictMode>
  );
}
if (spotlightPrep2) {
  ReactDOM.createRoot(spotlightPrep2).render(
    <React.StrictMode>
      <Spotlight className="from-blue-500/25 via-blue-400/15 to-transparent blur-2xl" size={350} />
    </React.StrictMode>
  );
}
if (spotlightPrep3) {
  ReactDOM.createRoot(spotlightPrep3).render(
    <React.StrictMode>
      <Spotlight className="from-blue-500/25 via-blue-400/15 to-transparent blur-2xl" size={350} />
    </React.StrictMode>
  );
}

if (layeredTextRoot) {
  ReactDOM.createRoot(layeredTextRoot).render(
    <React.StrictMode>
      <LayeredText 
        lines={[
          { top: "\u00A0", bottom: "1ST EDITION" },
          { top: "1ST EDITION", bottom: "SUCCESS" },
          { top: "SUCCESS", bottom: "ONLINE" },
          { top: "ONLINE", bottom: "INTERNSHIP" },
          { top: "INTERNSHIP", bottom: "STORIES" },
          { top: "STORIES", bottom: "\u00A0" },
        ]}
        fontSize="52px"
        fontSizeMd="26px"
        lineHeight={48}
        lineHeightMd={24}
        className="!ml-0 !py-4"
      />
    </React.StrictMode>
  );
}

if (accordionRoot) {
  ReactDOM.createRoot(accordionRoot).render(
    <React.StrictMode>
      <LandingAccordionItem />
    </React.StrictMode>
  );
}

if (mediaRoot) {
  ReactDOM.createRoot(mediaRoot).render(
    <React.StrictMode>
      <LogoCloud logos={mediaLogos} />
    </React.StrictMode>
  );
}

if (collaborateRoot) {
  ReactDOM.createRoot(collaborateRoot).render(
    <React.StrictMode>
      <CollaborateSection
        industryLogos={industryLogos}
        academicLogos={academicLogos}
      />
    </React.StrictMode>
  );
}

if (blurHeroRoot) {
  ReactDOM.createRoot(blurHeroRoot).render(
    <React.StrictMode>
      <BlurText 
        text="Unemployability"
        animateBy="letters"
        direction="top"
        className="italic text-yellow-400 inline-flex"
        delay={50}
      />
    </React.StrictMode>
  );
}

if (foundersRoot) {
  ReactDOM.createRoot(foundersRoot).render(
    <React.StrictMode>
      <AnimatedText 
        text="Meet Our Founders"
        textClassName="text-5xl font-black text-sky-400"
        underlineClassName="text-yellow-400"
      />
    </React.StrictMode>
  );
}

if (careerOppsRoot) {
  ReactDOM.createRoot(careerOppsRoot).render(
    <React.StrictMode>
      <AnimatedText 
        text="Career Opportunities"
        textClassName="text-5xl font-bold text-sky-400 inline-block"
        underlineClassName="text-sky-400"
        className="inline-flex"
      />
    </React.StrictMode>
  );
}

if (prepTitleRoot) {
  ReactDOM.createRoot(prepTitleRoot).render(
    <React.StrictMode>
      <AnimatedText 
        text="Preparing You for Vision 2030"
        textClassName="text-5xl font-bold text-[#0f172a]"
        underlineClassName="text-sky-400"
      />
    </React.StrictMode>
  );
}
