"use client";

import { motion } from "framer-motion";

// Data for each section
const experiences = [
  {
    company: "Benzeine",
    role: "Frontend Developer",
    duration: "Mar 2021 - Freelance",
    description: [
      "- Maintained a robust, IELTS-like web application using Angular, providing users with interactive learning modules and test simulations.", 
      "- Built a scalable, Udemy-like mobile application with React Native, enabling cross-platform functionality and delivering a seamless learning experience to users.",
    ],
  },
  {
    company: "Azercell",
    role: "End User Test specialist",
    duration: "Dec 2020 - Present",
    description: [
      "- Collaborate with development and QA teams to communicate test results, highlight potential risks, and suggest improvements.",
      "- Develop, execute, and document test cases and scenarios for new features and system updates.",
    ],
  },
  {
    company: "eiLink R&D Center",
    role: "Software Developer",
    duration: "Nov 2021 - Apr 2022",
    description: [
      "- Developed and maintained a responsive SPA dashboard in Angular, enhancing data visualization for end-users",
    ],
  },
  {
    company: "Azercell",
    role: "Corporate Customer Support",
    duration: "May 2016 - Dec 2020",
    description: [
      "- Provided exceptional support to B2B clients by addressing inquiries, resolving issues, and ensuring high customer satisfaction.",
    ],
  },
];

const education = [
  {
    institution: "STEP IT Academy",
    degree: "Web Development",
    duration: "2019 - 2020",
  },
  {
    institution: "Self Study (Udemy, O’Reilly, AI, Web)",
    degree: "Tech Innovations",
    duration: "2020 - ♾️",
  },
];

const certificates = [
  {
    name: "React Certification",
    issuer: "Hackerrank",
    date: "Sep 2021",
  },
  {
    name: "JavaScript Certification",
    issuer: "Hackerrank",
    date: "Sep 2021",
  },
];

const languages = [
  { name: "English", level: "Intermediate", progress: 80 },
  { name: "Russian", level: "Fluent", progress: 100 },
  { name: "Azerbaijani", level: "Fluent", progress: 100 },
];


export default function ExperiencePage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto pt-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          My Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600"
        >
          A journey through my professional and academic achievements.
        </motion.p>
      </section>

      {/* Work Experience Section */}
      <section className="mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 pl-8 border-l-4 border-primary"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              {exp.description.map((description, idx) => (
                <p key={idx} className="mt-2">{description}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-stone-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p className="text-gray-500">{cert.issuer}</p>
              <p className="text-sm text-gray-400">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Languages</h2>
        <div className="space-y-4">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-semibold">{lang.name}</span>
                <span className="text-gray-600">{lang.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-2 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}