"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 4, name: 'Experience', path: '/experience' },
  { id: 3, name: 'Portfolio', path: '/portfolio' },
  { id: 5, name: 'Contact', path: '/#contact' }
];


export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-15 bg-background shadow-md py-4">
      <nav className="container mx-auto flex items-center justify-between px-4">
      {/* Logo */}
        <Link href="/" className="text-xl font-bold group">
          Elchin
          <span className="block h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
        </Link>

      {/* Navigation Links */}
        <div className="space-x-4 hidden md:flex">
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.path} className={`link group`}>
              {navLink.name}
              <span className="block h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

      {/* Theme & Mobile Menu Toggler */}
        <div className="flex items-center space-x-4">
          <Button
            variant="solid"
            onPress={() => setTheme(theme == "dark" ? "light" : "dark")}
            className="min-w-10 p-0"
          >
            <Image
              src={theme === "light" ? "/icons/moon.svg" : "/icons/sun.svg"}
              alt={theme === "light" ? "moon" : "sun"}
              width={25}
              height={25}
            />
          </Button>

          <Button isIconOnly className="md:hidden" onPress={() => setIsOpen(!isOpen)}>
              {isOpen ? 
                <Image
                  src={theme === 'dark' ? "/icons/menu-cross-light.svg" : "/icons/menu-cross-dark.svg"}
                  alt="menu close"
                  width={25}
                  height={25}
                  priority
                /> : 
              
              <Image
                src={theme === 'dark' ? "/icons/menu-burger-light.svg" : "/icons/menu-burger-dark.svg"}
                alt="menu open"
                width={25}
                height={25}
                priority
              />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <div onClick={() => setIsOpen(false)} className="fixed top-0 left-0 w-screen h-screen mt-[72px]"></div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[72px] left-0 w-full bg-background border-t border-gray-200 dark:border-gray-800 md:hidden"
              >
                <div className="flex flex-col items-center py-4 space-y-4">
                  {navLinks.map((navLink) => (
                    <Link key={navLink.id} href={navLink.path} className="hover:underline" onClick={() => setIsOpen(false)}>{navLink.name}</Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
