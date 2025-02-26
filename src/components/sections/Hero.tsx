'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-30%' }); // Triggers every time it enters view

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-12"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 sm:min-w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-10"
      >
        <Image
          src="/img/profile.jpeg"
          alt="me"
          width={320}
          height={320}
          className="object-cover"
        />
      </motion.div>

      {/* Text & CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I&apos;m <span className="text-primary">Elchin</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-3">
          Frontend & Mobile Developer | Crafting seamless UI experiences
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <Button
            as={Link}
            color="primary"
            href="/#contact"
            variant="bordered"
            size="lg"
          >
            Hire Me
          </Button>
          {/* <Link href="/#contact" role="button">
            <Button size="lg" color='primary' variant="bordered">
                Hire Me
            </Button>
          </Link> */}
        </motion.div>
      </motion.div>

      {/* Scroll Mouse Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0, y: [0, 0, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 flex flex-col items-center"
      >
        <div className="w-5 h-8 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center items-start">
          <motion.div
            className="w-1 h-2 bg-gray-500 dark:bg-gray-400 rounded-full"
            animate={isInView ? { y: [0, 6, 0], opacity: [1, 0.5, 1] } : { y: [0, 6, 0], opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}