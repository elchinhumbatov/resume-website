"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  // Center - Main Skills (Largest Font Size)
  { name: "Next.js", left: "53%", top: "22%", mobileLeft: "40%", mobileTop: "40%", fontSize: "32px" },
  { name: "TypeScript", left: "36%", top: "20%", mobileLeft: "25%", mobileTop: "55%", fontSize: "30px" },
  { name: "React Native", left: "42%", top: "10%", mobileLeft: "30%", mobileTop: "30%", fontSize: "30px" },
  { name: "React", left: "47%", top: "35%", mobileLeft: "35%", mobileTop: "70%", fontSize: "28px" },

  // Middle Circle - Important Skills (Medium Font Size)
  { name: "Angular", left: "32%", top: "10%", mobileLeft: "28%", mobileTop: "20%", fontSize: "24px" },
  { name: "Tailwind", left: "60%", top: "15%", mobileLeft: "65%", mobileTop: "10%", fontSize: "24px" },
  { name: "Firebase", left: "34%", top: "35%", mobileLeft: "1%", mobileTop: "70%", fontSize: "24px" },
  { name: "HTML", left: "60%", top: "35%", mobileLeft: "65%", mobileTop: "70%", fontSize: "20px" },
  { name: "Vue", left: "30%", top: "25%", mobileLeft: "35%", mobileTop: "10%", fontSize: "22px" },
  { name: "JavaScript", left: "65%", top: "25%", mobileLeft: "60%", mobileTop: "20%", fontSize: "22px" },

  // Outer Circle - Supporting Skills (Smallest Font Size)
  { name: "Redux", left: "20%", top: "5%", mobileLeft: "5%", mobileTop: "0%", fontSize: "18px" },
  { name: "GraphQL", left: "70%", top: "5%", mobileLeft: "75%", mobileTop: "4%", fontSize: "18px" },
  { name: "CSS", left: "25%", top: "45%", mobileLeft: "10%", mobileTop: "80%", fontSize: "18px" },
  { name: "SCSS", left: "70%", top: "45%", mobileLeft: "75%", mobileTop: "80%", fontSize: "16px" },
  { name: "Git", left: "27%", top: "18%", mobileLeft: "10%", mobileTop: "30%", fontSize: "16px" },
  { name: "Github", left: "75%", top: "20%", mobileLeft: "77%", mobileTop: "50%", fontSize: "16px" },
  { name: "SQL", left: "25%", top: "30%", mobileLeft: "0%", mobileTop: "55%", fontSize: "16px" },
  { name: "Figma", left: "75%", top: "30%", mobileLeft: "80%", mobileTop: "60%", fontSize: "16px" },
  { name: "SwiftUI", left: "20%", top: "22%", mobileLeft: "0%", mobileTop: "15%", fontSize: "16px" },
  { name: "Swift", left: "80%", top: "25%", mobileLeft: "85%", mobileTop: "40%", fontSize: "14px" },
  { name: "Material", left: "46%", top: "3%", mobileLeft: "50%", mobileTop: "0%", fontSize: "14px" },
  { name: "Vercel", left: "50%", top: "49%", mobileLeft: "35%", mobileTop: "85%", fontSize: "14px" },
  { name: "CloudFlare", left: "15%", top: "35%", mobileLeft: "10%", mobileTop: "45%", fontSize: "14px" },
];


export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="container mx-auto pt-20 px-6 min-h-screen">
      {/* About Section */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-4 mt-8"
      >About Me</motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
        {/* Left - Experience Graphic */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative bg-primary h-[239px] w-[154px] font-bold">
            <span className="absolute left-[-6px] top-[-116px] text-[19rem] text-background">4</span>
            <span className="absolute bottom-[-7px] left-0 text-[16px] text-background">years of experience</span>
          </div>
        </motion.div>
        
        {/* Right - About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg mb-6">
            I&apos;m a Front-end Developer specializing in responsive and interactive web applications with React, Angular and Vue.js. I also have experience in mobile development using React Native. Passionate about innovation and constantly expanding my technical expertise
          </p>
          <Button size="lg" className="flex gap-2 px-6 py-3 rounded-lg shadow-md">
            <Image src="/icons/download.svg" alt="download" width={22} height={22} priority />
            <a href="/Elchin Humbatov.pdf" target="_blank">Download CV</a>
          </Button>
        </motion.div>
      </div>
      
      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold my-6">Skills</h2>
        <div className="relative w-full h-[400px]">
          {skills.map((skill, index) => {
            const left = isMobile ? skill.mobileLeft : skill.left;
            const top = isMobile ? skill.mobileTop : skill.top;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`p-2 cursor-pointer absolute`}
                style={{
                  fontSize: skill.fontSize,
                  left: left,
                  top: top,
                }}
              >
                {skill.name}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
