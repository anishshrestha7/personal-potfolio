import React, { useState, useEffect } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCode,
  FiLayers,
  FiBriefcase,
  FiCpu,
  FiLayout,
  FiAward
} from 'react-icons/fi';
import { SiVercel } from 'react-icons/si';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import TypewriterEffect from './components/TypewriterEffect';
import './index.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const projects = [
    {
      title: "MIRA",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      description: "A clean and elegant ecommerce platform with dummy product data and cart functionality.",
      github: "https://github.com/anishshrestha7/mira",
      live: "https://mira-ivory.vercel.app/",
    },
    {
      title: "Hawaa",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      description: "A travel booking platform for online reservation with a unique responsive homepage.",
      github: "https://github.com/anishshrestha7/haawa",
      live: "https://haawa.vercel.app/",
    },
    {
      title: "News II",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      description: "A modern news and magazine website featuring sliders and responsive sidebar list.",
      github: "https://github.com/elearning/onlinelearning",
      live: "https://news-ll.vercel.app/",
    },
    {
      title: "Furns",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      description: "A user-friendly furniture shop featuring product previews and responsive layout.",
      github: "https://github.com/anishshrestha7/furn",
      live: "https://furn-three.vercel.app/",
    }
  ];

  const skillGroups = [
    { category: "Web Tech", icon: <FiCode size={20} />, skills: ["JavaScript", "HTML5", "CSS3", "React", "Next JS"] },
    { category: "Frameworks", icon: <FiLayout size={20} />, skills: ["Tailwind", "SASS", "Bootstrap"] },
    { category: "Workflow", icon: <FiLayers size={20} />, skills: ["Git", "Github", "Vercel"] },
    { category: "Professional", icon: <FiCpu size={20} />, skills: ["Problem Solving", "Teamwork", "Leadership"] }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      <Header activeSection={activeSection} toggleTheme={toggleTheme} theme={theme} />

      {/* Hero */}
      <section id="home" className="min-h-[90vh] flex items-center py-20">
        <div className="max-w-[1100px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-center md:text-left pt-[80px] md:pt-0">
          <motion.div
            className="flex-1 w-full max-w-[300px] md:max-w-[450px] mx-auto md:mx-0 flex justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-none">
              <img src="/profile.jpg" alt="Anish Shrestha" className="w-full h-full object-cover transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div
            className="flex-[1.5]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[12px] tracking-[3px] uppercase text-primary mb-6 font-semibold">Web Developer Intern</p>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] mb-6 font-bold tracking-tight">Anish <br/><span className="accent-text">Shrestha</span></h1>
            
            <TypewriterEffect 
              text="A fast learner who is excited to dive into the technical side of web Development. Aiming to master modern design frameworks and accessibility standards." 
              className="max-w-[550px] text-[18px] text-textSecondary mb-10 mx-auto md:mx-0 min-h-[81px] md:min-h-[54px]"
              delay={35}
            />

            <div className="flex gap-5 justify-center md:justify-start mb-10 text-textSecondary">
              <a href="https://github.com/anishshrestha7" target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-2"><FiGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/anish-shrestha-025b2a155/" target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-2"><FiLinkedin size={24} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-2"><FiMail size={24} /></a>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
              <a href="#projects" className="btn-primary flex items-center justify-center w-full md:w-auto">View Projects</a>
              <a href="/Anishwebdev-intern.pdf" download className="btn-secondary flex items-center justify-center w-full md:w-auto">Download CV</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-[32px] font-bold mb-3 accent-text tracking-tight">About Me</h2>
            <p>Passionate about solving design challenges.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 glass">
              <div className="flex items-center gap-3 mb-4">
                <FiBriefcase className="accent-text" size={24} />
                <h3 className="font-bold tracking-tight">Background</h3>
              </div>
              <p>Educated at Depot College, I've expanded my technical progress through intensive training at Broadway Infosys. I'm driven by a passion for contributing to professional teams.</p>
            </div>
            <div className="p-8 glass">
              <div className="flex items-center gap-3 mb-4">
                <FiAward className="accent-text" size={24} />
                <h3 className="font-bold tracking-tight">Training</h3>
              </div>
              <p>Completed Front-End Development Training at Broadway Infosys Pvt. Ltd. (Nov '25 - Jan '26).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-[32px] font-bold mb-3 accent-text tracking-tight">Skills</h2>
            <p>Technologies I use to build websites.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups?.length > 0 ? skillGroups.map((group, idx) => (
              <motion.div {...fadeInUp} transition={{ delay: idx * 0.1 }} key={idx} className="p-6 glass">
                <div className="flex items-center gap-3 mb-4">
                  <div className="accent-text">{group.icon}</div>
                  <h3 className="font-bold tracking-tight">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills?.length > 0 ? group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="bg-bgPrimary border border-customBorder px-3 py-1 rounded-md text-[13px]">{skill}</span>
                  )) : null}
                </div>
              </motion.div>
            )) : <p>No skills data found.</p>}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-[32px] font-bold mb-3 accent-text tracking-tight">Projects</h2>
            <p>Works from my development journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects?.length > 0 ? projects.map((project, idx) => (
              <motion.div {...fadeInUp} transition={{ delay: idx * 0.1 }} key={idx} className="p-6 glass flex flex-col h-full">
                <h3 className="mb-3 font-bold tracking-tight">{project.title}</h3>
                <p className="text-textSecondary text-[14px] mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.length > 0 ? project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="bg-surface px-2 py-0.5 rounded-md text-[11px] border border-customBorder">{t}</span>
                  )) : null}
                </div>
                <div className="flex gap-5 !mb-0 text-textSecondary mt-auto">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-2"><FiGithub size={18} title="View Code" /></a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-all duration-300 hover:-translate-y-2"><SiVercel size={18} title="View Site" /></a>}
                </div>
              </motion.div>
            )) : <p>No projects data found.</p>}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div {...fadeInUp} className="p-12 glass">
            <h2 className="text-[32px] font-bold mb-6 accent-text tracking-tight">Let's Talk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="mb-4 text-textSecondary">I'm open to internships.</p>
                <div className="flex items-center gap-3 mb-4 text-textPrimary"><FiMail className="accent-text" /> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">anikazeani7@gmail.com</a></div>
                <div className="flex items-center gap-3 mb-4 text-textPrimary"><FiPhone className="accent-text" /> <a href="tel:+9779841077344" className="hover:text-primary transition-colors">+977-9841077344</a></div>
                <div className="flex items-center gap-3 mb-4 text-textPrimary"><FiMapPin className="accent-text" /> <span>Dharan, Nepal</span></div>
              </div>
              <div className="flex items-center">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer" className="btn-primary w-full max-w-[300px] mx-auto text-center block">Send a Message</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;