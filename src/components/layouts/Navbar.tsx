"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-15 bg-background shadow-md py-4">
      <nav className="container mx-auto flex items-center justify-between px-4">
      {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Elchin
        </Link>

      {/* Navigation Links */}
        <div className="space-x-4 hidden md:flex">
          <Link href="/about" className={`link underline-offset-4 ${pathname === '/about' ? 'underline' : 'hover:underline'}`}>
            About
          </Link>
          <Link href="/experience" className={`link underline-offset-4 ${pathname === '/experience' ? 'underline' : 'hover:underline'}`}>
            Experience
          </Link>
          <Link href="/portfolio" className={`link underline-offset-4 ${pathname === '/portfolio' ? 'underline' : 'hover:underline'}`}>
            Portfolio
          </Link>
          <Link href="/contact" className={`link underline-offset-4 ${pathname === '/contact' ? 'underline' : 'hover:underline'}`}>
            Contact
          </Link>
        </div>

      {/* Theme & Mobile Menu Toggler */}
        <div className="flex items-center space-x-4">
          <Button
            variant="solid"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            className=""
          >
            {theme === "light" ? "🌙 Mode" : "☀️ Mode"}
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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-background border-t border-gray-200 dark:border-gray-800 md:hidden"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                <Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/experience" className="hover:underline" onClick={() => setIsOpen(false)}>Experience</Link>
                <Link href="/portfolio" className="hover:underline" onClick={() => setIsOpen(false)}>Portfolio</Link>
                <Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
