import React, { useState, useEffect } from 'react';

import {

  FiGithub,

  FiLinkedin,

  FiMail,

  FiPhone,

  FiMapPin,

  FiExternalLink,

  FiCode,

  FiLayers,

  FiBriefcase,

  FiCpu,

  FiLayout,

  FiSun,

  FiMoon,

  FiX,

  FiCheckCircle,

  FiAward

} from 'react-icons/fi';

import { SiVercel } from 'react-icons/si';

import { motion } from 'framer-motion';

import './index.css';



const App = () => {

  const [activeSection, setActiveSection] = useState('home');

  const [theme, setTheme] = useState('light');

  const [scrolled, setScrolled] = useState(false);



  // Intersection Observer for active section highlighting

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



  // Handle scroll for navbar styling

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  // Theme Toggler

  const toggleTheme = () => {

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);

    document.documentElement.setAttribute('data-theme', newTheme);

  };



  const navigation = [

    { name: 'Home', href: '#home', id: 'home' },

    { name: 'About', href: '#about', id: 'about' },

    { name: 'Skills', href: '#skills', id: 'skills' },

    { name: 'Projects', href: '#projects', id: 'projects' },

    { name: 'Contact', href: '#contact', id: 'contact' },

  ];



  const projects = [

    {

      title: "MIRA",

      tech: ["React.js", "Node.js", "Tailwind CSS"],

      description: "A clean and elegant ecommerce platform with dummy product data and cart functionality.",

      github: "https://github.com/anishshrestha7/mira",

      live: "https://mira-ivory.vercel.app/",

      category: "Ecommerce"

    },

    {

      title: "Hawaa",

      tech: ["React.js", "HTML", "CSS", "JavaScript"],

      description: "A travel booking platform for online reservation with a unique responsive homepage.",

      github: "https://github.com/anishshrestha7/haawa",

      live: "https://haawa.vercel.app/",

      category: "Booking"

    },

    {

      title: "News II",

      tech: ["React.js", "Node.js", "Tailwind CSS"],

      description: "A modern news and magazine website featuring sliders and responsive sidebar list.",

      github: "https://github.com/elearning/onlinelearning",

      live: "https://news-ll.vercel.app/",

      category: "Media"

    },

    {

      title: "Furns",

      tech: ["React.js", "HTML", "CSS", "JavaScript"],

      description: "A user-friendly furniture shop featuring product previews and responsive layout.",

      github: "https://github.com/anishshrestha7/furn",

      live: "https://furn-three.vercel.app/",

      category: "Ecommerce"

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

    <main className="portfolio-content">

      <nav className={`navbar-main ${scrolled ? 'scrolled' : ''}`}>

        <div className="container nav-container">

          <div className="nav-desktop">

            {navigation.map((item) => (

              <a

                key={item.id}

                href={item.href}

                className={activeSection === item.id ? 'active' : ''}

              >

                {item.name}

              </a>

            ))}

            <button className="theme-toggle" onClick={toggleTheme}>

              {theme === 'dark' ? <FiSun /> : <FiMoon />}

            </button>

          </div>

        </div>

      </nav>



      {/* Hero */}

      <section id="home" className="hero-section">

        <div className="container hero-grid">

          <motion.div

            className="hero-image-container"

            initial={{ opacity: 0, scale: 0.9 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.8 }}

          >

            <div className="image-frame">

              <img src="/profile.jpg" alt="Anish Shrestha" className="profile-img" />

            </div>

          </motion.div>



          <motion.div

            className="hero-text"

            initial={{ opacity: 0, x: 20 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.5, delay: 0.2 }}

          >

            <p className="subtitle">Web Developer Intern</p>

            <h1 className="hero-title">Anish <br/><span className="accent-text">Shrestha</span></h1>

            <p className="description">

              A fast learner who is excited to dive into the technical side of web Development.

              Aiming to master modern design frameworks and accessibility standards.

            </p>

            <div className="hero-social">

              <a href="https://github.com/anishshrestha7" target="_blank" rel="noreferrer"><FiGithub size={24} /></a>

              <a href="https://www.linkedin.com/in/anish-shrestha-025b2a155/" target="_blank" rel="noreferrer"><FiLinkedin size={24} /></a>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer"><FiMail size={24} /></a>

            </div>

            <div className="hero-actions">

              <a href="#projects" className="btn-primary">View Projects</a>

              <a href="#about" className="btn-secondary">My Story</a>

            </div>

          </motion.div>

        </div>

      </section>



      {/* About */}

      <section id="about">

        <div className="container">

          <motion.div {...fadeInUp} className="section-header">

            <h2 className="accent-text">About Me</h2>

            <p>Passionate about solving design challenges.</p>

          </motion.div>



          <div className="about-grid">

            <div className="about-card glass">

              <div className="card-header">

                <FiBriefcase className="accent-text" size={24} />

                <h3>Background</h3>

              </div>

              <p>Educated at Depot College, I've expanded my technical progress through intensive training at Broadway Infosys. I'm driven by a passion for contributing to professional teams.</p>

            </div>

            <div className="about-card glass">

              <div className="card-header">

                <FiAward className="accent-text" size={24} />

                <h3>Training</h3>

              </div>

              <p>Completed Front-End Development Training at Broadway Infosys Pvt. Ltd. (Nov '25 - Jan '26).</p>

            </div>

          </div>

        </div>

      </section>



      {/* Skills */}

      <section id="skills">

        <div className="container">

          <motion.div {...fadeInUp} className="section-header">

            <h2 className="accent-text">Skills</h2>

            <p>Technologies I use to build robust websites.</p>

          </motion.div>



          <div className="skills-grid">

            {skillGroups.map((group, idx) => (

              <motion.div {...fadeInUp} transition={{ delay: idx * 0.1 }} key={idx} className="skill-category glass">

                <div className="card-header">

                  <div className="accent-text">{group.icon}</div>

                  <h3>{group.category}</h3>

                </div>

                <div className="skills-list">

                  {group.skills.map((skill, sIdx) => (

                    <span key={sIdx} className="skill-tag">{skill}</span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* Projects */}

      <section id="projects">

        <div className="container">

          <motion.div {...fadeInUp} className="section-header">

            <h2 className="accent-text">Projects</h2>

            <p> Works from my development journey.</p>

          </motion.div>



          <div className="projects-grid">

            {projects.map((project, idx) => (

              <motion.div {...fadeInUp} transition={{ delay: idx * 0.1 }} key={idx} className="project-card glass">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">

                  {project.tech.map((t, tIdx) => (

                    <span key={tIdx} className="tech-tag">{t}</span>

                  ))}

                </div>

                <div className="hero-social" style={{ marginBottom: 0 }}>

                  <a href={project.github} target="_blank" rel="noreferrer"><FiGithub size={18} title="View Code" /></a>

                  <a href={project.live} target="_blank" rel="noreferrer"><SiVercel size={18} title="View Site" /></a>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* Contact */}

      <section id="contact">

        <div className="container">

          <motion.div {...fadeInUp} className="contact-container glass">

            <h2 className="accent-text" style={{ marginBottom: '24px' }}>Let's Talk</h2>

            <div className="contact-grid">

              <div className="contact-info">

                <p style={{ marginBottom: '16px' }}>I'm open to internships.</p>

                <div className="card-header"><FiMail className="accent-text" /> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer">anikazeani7@gmail.com</a></div>

                <div className="card-header"><FiPhone className="accent-text" /> <a href="tel:+9779841077344">+977-9841077344</a></div>

                <div className="card-header"><FiMapPin className="accent-text" /> <span>Dharan, Nepal</span></div>

              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anikazeani7@gmail.com" target="_blank" rel="noreferrer" className="btn-primary" style={{ textAlign: 'center', width: '100%' }}>Send a Message</a>

              </div>

            </div>

          </motion.div>

        </div>

      </section>



      <footer className="footer">

        <div className="container">

          <p>@2026 <span className="footer-name" onClick={() => window.location.href = "/"}>Anish Shrestha</span></p>

        </div>

      </footer>

    </main>

  );

};



export default App;