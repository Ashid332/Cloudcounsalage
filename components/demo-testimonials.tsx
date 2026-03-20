import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Visionary leader driving the mission to eradicate unemployability globally.",
      name: "Tushar Topale",
      designation: "Founder & CEO",
      src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Tushar%20Profile.png",
    },
    {
      quote: "Co-founding director helping scale the impact of our social cause.",
      name: "Harshada Topale",
      designation: "Co-Founder",
      src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Harshada%20Profile.png",
    },
    {
      quote: "Strategic leader focused on expanding our global ecosystem.",
      name: "Subhi",
      designation: "Co-Founder",
      src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Subhi%20Profile.png",
    },
    {
      quote: "Committed to bridging the gap between industry and academia.",
      name: "Abhishek",
      designation: "Co-Founder",
      src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Abhishek%20Profile.png",
    },
    {
      quote: "Enabling professional development for students across the world.",
      name: "Sudin",
      designation: "Co-Founder",
      src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Sudin%20Profile.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export { AnimatedTestimonialsDemo };
