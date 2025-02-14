'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button, Chip } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';

const skills = [
  { name: 'React (85%)', logo: 'react' },
  { name: 'Next.js (85%)', logo: 'nextjs' },
  { name: 'TypeScript (75%)', logo: 'typescript' },
  { name: 'Tailwind CSS (75%)', logo: 'tailwind' },
  { name: 'React Native (80%)', logo: 'react-native' },
  { name: 'Angular (70%)', logo: 'angular' },
];

export default function MainAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50%' });

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-16 text-center md:text-left"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl mb-4 md:mb-9 font-extrabold"
      >
        About Me
      </motion.h2>

      {/* Content Wrapper */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left - Description & CV */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Passionate Frontend & Mobile Developer with expertise in crafting seamless user experiences.
            I love building high-performance web & mobile applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <Button size="lg" className="flex gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md">
              <Image src="/icons/download-light.svg" alt="download" width={22} height={22} priority />
              <a href="/Elchin Humbatov.pdf" download>Download CV</a>
            </Button>
          </motion.div>
        </div>

        {/* Right - Skills */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg grid grid-cols-2 lg:grid-cols-3 gap-6 place-items-center max-w-lg mx-auto"
          >
            {skills.map((skill) => (
              <div key={skill.logo} className="flex flex-col items-center gap-2 transition-all hover:scale-110">
                <Image src={`/icons/techs/${skill.logo}.svg`} alt={skill.name} width={45} height={45} priority />
                <Chip className="text-sm font-medium">{skill.name}</Chip>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 flex justify-center"
          >
            <Button size="lg" variant="bordered">
              <Link href="/about">See More Skills</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
