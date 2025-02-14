'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const contacts = [
  { id: 1, icon: 'phone', text: '+994 50 231 2297', link: 'tel:+994502312297' },
  { id: 2, icon: 'mail', text: 'elchinhumbatov@yahoo.com', link: 'mailto:elchinhumbatov@yahoo.com' },
  { id: 3, icon: 'location', text: 'Remote | Relocation | Azerbaijan', link: '#contact' }
];

export default function MainContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-5%' });

  return (
    <section ref={ref} id='contact' className="py-20 px-6 md:px-16 text-center md:text-left">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
      >
        Contact Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Let&apos;s work together! Feel free to reach out via any platform below.
      </motion.p>

      <div className="mt-10 flex flex-wrap justify-center items-center md:items-start gap-6">
        {contacts.map((contact) => (
          <motion.a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: contact.id * 0.1 }}
            className="flex items-center gap-3 bg-white dark:bg-gray-700 shadow-md px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all"
          >
            <Image src={`/icons/${contact.icon}.svg`} alt={contact.text} width={35} height={35} />
            <span className="text-gray-700 dark:text-gray-300">{contact.text}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}