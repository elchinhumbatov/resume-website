
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@heroui/react';
import Link from 'next/link';

const experiences = [
  { id: 0, role: 'Frontend Developer', company: 'benzeine LLC', year: '2022 - Present' },
  { id: 1, role: 'Software Developer', company: 'eiLink R&D Center', year: '2021 - 2022' }
];

export default function MainExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-30%' });

  return (
    <section ref={ref} className="py-20 px-6 md:px-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: exp.id * 0.2 }}
              className="p-6 w-full md:w-1/2 lg:w-1/3 bg-stone-200 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.year}</p>
            </motion.div>
          ))}
        </div>

        {/* More Experience Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Button
            as={Link}
            color="primary"
            href="/experience"
            variant="bordered"
            size="lg"
          >
            See More
          </Button>
          {/* <Link href="/experience" className='inline-block' role="button">
            <Button size="lg" color='primary' variant="bordered">
              See More
            </Button>
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}