'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const socialLinks = [
  { id: 4, icon: 'whatsapp', link: 'https://wa.me/+994502312297' },
  { id: 5, icon: 'telegram', link: 'https://t.me/@elchinhumbatov' },
  { id: 6, icon: 'linkedin', link: 'https://linkedin.com/in/elchinhumbatov' },
  { id: 7, icon: 'github', link: 'https://github.com/elchinhumbatov' },
  { id: 8, icon: 'hackerrank', link: 'https://hackerrank.com/elchinhumbatov' },
];

export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 md:px-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-4">
        {/* Name with Animated Underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold relative group"
        >
          Elchin Humbatov
          <span className="block h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: social.id * 0.1 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <Image src={`/icons/${social.icon}.svg`} alt={social.icon} width={25} height={25} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="relative z-10 mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Elchin Humbatov. All rights reserved.
      </div>
    </footer>
  );
}
