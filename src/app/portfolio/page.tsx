"use client";

import React from 'react'
import { motion } from "framer-motion";
import ProjectCard from '@/components/ProjectCard';

const projects = [
  { id: 1, title: 'Zaur Tango', image: '/mocups/zaurtango.png', link: 'https://www.zaurtango.com/', techStack: ['react', 'next.js', 'firebase', 'tailwind', 'ts'] },
  { id: 2, title: 'Morooq', image: '/mocups/morooq.png', link: 'https://morooq.com/', techStack: ['angular', 'html', 'css', 'ts', 'ngrx'] },
  { id: 3, title: 'TapOyren', image: '/mocups/tapoyren.png', link: 'https://tapoyren.com/', techStack: ['react', 'html', 'css', 'js', 'i18n'] },
  { id: 4, title: 'DCS Dubai', image: '/mocups/dcs.png', link: 'https://dcsdubai.com/', techStack: ['vue', 'html', 'css', 'js', 'graph'] },
  { id: 5, title: 'TapOyren App', image: '/mocups/tapoyren-app.png', link: 'https://tapoyren.com/', techStack: ['react', 'html', 'css', 'js', 'i18n'] },
  { id: 6, title: 'E-Basket', image: '/mocups/drops.png', link: 'https://elchinhumbatov.github.io/e-basket/', techStack: ['angular', 'html', 'css', 'js'] },
  { id: 7, title: 'Splitter', image: '/mocups/splitter.png', link: 'https://elchinhumbatov.github.io/splitter/', techStack: ['react', 'html', 'css', 'js', 'figma'] },
  { id: 8, title: 'Flowers', image: '/mocups/flowers.png', link: 'https://elchinhumbatov.github.io/flowers/', techStack: ['react', 'html', 'css', 'js', 'redux'] },
  { id: 9, title: 'Summer Fest', image: '/mocups/summerfest.png', link: 'https://elchinhumbatov.github.io/Summer-Fest/', techStack: ['html', 'css', 'sass', 'jquery'] },
];

export default function Portfolio() {
  return (
    <section>
      <div className='container'>
        <div className='py-20 px-6 md:px-16'>
          <section className="mx-auto pt-10 px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4"
            >
              Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Less Talk, More Work
            </motion.p>
          </section>
          <div className='flex justify-center gap-8 mt-12 flex-wrap'>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                imageUrl={project.image}
                tags={project.techStack}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>  
    </section>
  )
}
