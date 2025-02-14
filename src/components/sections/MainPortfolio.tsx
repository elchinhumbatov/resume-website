'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';


const projects = [
  { id: 1, title: 'Morooq', image: '/mocups/morooq.png', link: 'https://morooq.com/', techStack: ['angular', 'html', 'css', 'ts', 'ngrx'] },
  { id: 2, title: 'TapOyren', image: '/mocups/tapoyren.png', link: 'https://tapoyren.com/', techStack: ['react', 'html', 'css', 'js', 'i18n'] },
  { id: 3, title: 'DCS Dubai', image: '/mocups/dcs.png', link: 'https://dcsdubai.com/', techStack: ['vue', 'html', 'css', 'js', 'graph'] },
  { id: 4, title: 'TapOyren App', image: '/mocups/tapoyren-app.png', link: 'https://tapoyren.com/', techStack: ['react', 'html', 'css', 'js', 'i18n'] },
  { id: 5, title: 'E-Basket', image: '/mocups/drops.png', link: 'https://elchinhumbatov.github.io/e-basket/', techStack: ['angular', 'html', 'css', 'js'] },
  { id: 6, title: 'Splitter', image: '/mocups/splitter.png', link: 'https://elchinhumbatov.github.io/splitter/', techStack: ['react', 'html', 'css', 'js', 'figma'] },
  { id: 7, title: 'Flowers', image: '/mocups/flowers.png', link: 'https://elchinhumbatov.github.io/flowers/', techStack: ['react', 'html', 'css', 'js', 'redux'] },
  { id: 8, title: 'Summer Fest', image: '/mocups/summerfest.png', link: 'https://elchinhumbatov.github.io/Summer-Fest/', techStack: ['html', 'css', 'sass', 'jquery'] },
];

export default function MainPortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-30%' });

  return (
    <section ref={ref} id='portfolio' className="py-20 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-gray-900 dark:text-white"
      >
        Portfolio
      </motion.h2>

      <div className="mt-12 h-[25vh] md:h-[50vh]">
        <Swiper
          direction='vertical'
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          className="size-full max-w-4xl mx-auto"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className='h-full flex justify-center items-center'>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="relative size-full rounded-xl overflow-hidden shadow-lg"
              >
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className='block w-full' />
                <div className="flex absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center m-auto">
                  <div className='w-1/3'>
                    <h3 className="md:text-xl font-semibold">{project.title}</h3>
                    <Link target='_blank' href={project.link} className="text-sm underline">View Project</Link>
                  </div>
                  <div className='flex justify-center items-center w-2/3'>
                    <h3 className="hidden md:block md:text-xl font-semibold">Tech stack: </h3>
                    {project.techStack.map((tech) => (
                      <div key={tech} className='w-[30px] h-[30px] p-1 m-1'>
                        <Image src={`/img/tech-logo/${tech}.png`} alt={tech} width={30} height={30} />
                      </div>
                    ))
                    }
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
