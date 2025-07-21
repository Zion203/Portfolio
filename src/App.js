import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Palette, Zap, Trophy, GraduationCap, Briefcase, User, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  // const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);
const mouseRef = useRef({ x: 0, y: 0 });
const followerRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


useEffect(() => {
  const updateMouse = (e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };

    if (followerRef.current) {
      requestAnimationFrame(() => {
        followerRef.current.style.left = `${mouseRef.current.x - 8}px`;
        followerRef.current.style.top = `${mouseRef.current.y - 8}px`;
      });
    }
  };

  window.addEventListener('mousemove', updateMouse);
  return () => window.removeEventListener('mousemove', updateMouse);
}, []);


  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-emerald-500/30 rounded-full mx-auto animate-pulse"></div>
        </div>
        <div className="text-emerald-400 font-mono text-lg animate-pulse">Loading Portfolio...</div>
      </div>
    </div>
  );

  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-400 font-mono">JZ</div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-mono"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Zion203" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/jesudas-zion-49b804305/" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-emerald-500/10 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            JESUDAS ZION
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 font-mono mb-6 animate-fade-in">
            Full Stack Developer & AI Enthusiast
          </div>
          <div className="flex justify-center space-x-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span className="font-mono">jesudaszion@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="font-mono">Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          <p className="animate-slide-up">
            A leader by nature and a builder by choice, I use the world in layers 
            of logic, emotion, and unseen connections. My passion for building 
            exceptional software and systems keeps me pushing boundaries.
          </p>
          <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I believe in the power of technology to solve real-world problems meaningfully.
          </p>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <button className="bg-emerald-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50">
            View Projects
          </button>
          <button className="border border-emerald-500 text-emerald-400 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="text-emerald-400 mx-auto" />
        </div>
      </div>
    </section>
  );

  const SkillCard = ({ icon: Icon, title, skills, color }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 ${color} mr-3`} />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="text-gray-300 font-mono text-sm">{skill}</div>
        ))}
      </div>
    </div>
  );

  const SkillsSection = () => (
    <section id="skills" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400 font-mono">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            icon={Code}
            title="Programming"
            color="text-emerald-400"
            skills={['Python & C++', 'JavaScript & TypeScript', 'React & Next.js', 'Node.js & Express']}
          />
          <SkillCard
            icon={Database}
            title="Data & AI"
            color="text-cyan-400"
            skills={['MongoDB & APIs', 'Machine Learning', 'TensorFlow & PyTorch', 'Data Analysis']}
          />
          <SkillCard
            icon={Palette}
            title="Design"
            color="text-purple-400"
            skills={['UI/UX Design', 'Figma & Adobe', 'Responsive Design', 'User Research']}
          />
          <SkillCard
            icon={Zap}
            title="DevOps"
            color="text-yellow-400"
            skills={['Git & GitHub', 'CI/CD Pipelines', 'Docker', 'AWS & Cloud']}
          />
        </div>
      </div>
    </section>
  );

  const ProjectCard = ({ title, description, tech, link, delay }) => (
    <div 
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <ExternalLink className="w-5 h-5 text-emerald-400 hover:text-emerald-300 cursor-pointer" />
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, index) => (
          <span key={index} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400 font-mono">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Train Like a Trainer"
            description="Online Sports Learning Platform with 850K+ users. Expansive platform helping users build sports skills through tutorials and community engagement."
            tech={['React', 'Node.js', 'MongoDB', 'AWS']}
            delay={0}
          />
          <ProjectCard
            title="Feedback Personalized Video"
            description="AI-powered video feedback system for personalized learning experiences with advanced analytics and reporting."
            tech={['Python', 'AI/ML', 'Video Processing', 'React']}
            delay={0.2}
          />
          <ProjectCard
            title="Google OAuth Integration"
            description="Secure user authentication system with Google OAuth for seamless login experiences across multiple platforms."
            tech={['OAuth 2.0', 'Node.js', 'Express', 'JWT']}
            delay={0.4}
          />
          <ProjectCard
            title="RESTful API Backend"
            description="Robust backend architecture with MongoDB integration, supporting high-traffic applications with optimal performance."
            tech={['Node.js', 'Express', 'MongoDB', 'REST API']}
            delay={0.6}
          />
          <ProjectCard
            title="Real-time Communication"
            description="WebSocket-based real-time messaging and notification system for enhanced user engagement."
            tech={['WebSocket', 'Socket.io', 'React', 'Node.js']}
            delay={0.8}
          />
          <ProjectCard
            title="AI Progress Tracking"
            description="Intelligent progress tracking system using machine learning to provide personalized insights and recommendations."
            tech={['Python', 'TensorFlow', 'Analytics', 'React']}
            delay={1}
          />
        </div>
      </div>
    </section>
  );

  const ExperienceCard = ({ company, role, period, description, achievements }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 mb-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <div className="text-emerald-400 font-mono">{company}</div>
        </div>
        <div className="text-gray-400 font-mono text-sm">{period}</div>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-300 text-sm flex items-start">
            <span className="text-emerald-400 mr-2">▸</span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );

  const ExperienceSection = () => (
    <section id="experience" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400 font-mono">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <ExperienceCard
            company="Icliniq"
            role="Full Stack Developer"
            period="Present"
            description="Leading development of scalable web applications and AI-powered solutions for Online doctor consultation."
            achievements={[
              'Developed MSKCC healthcare project, supporting various medical management systems',
              'Created enterprise-level web applications with React and Node.js',
              'Implemented secure authentication with OAuth and JWT',
              'Built RESTful APIs serving 850K+ users',
              'Worked with healthcare data using various software architectures'
            ]}
          />
          <ExperienceCard
            company="Freelance"
            role="Full Stack Developer & AI Consultant"
            period="2023 - Present"
            description="Providing comprehensive development and AI solutions to various clients across different industries."
            achievements={[
              'Contributing indie, scalable code with optimized API integrations',
              'Getting hands-on experience in healthcare consulting and implementation',
              'Building AI-powered applications for client-specific needs',
              'Implementing real-time communication features and progress tracking systems'
            ]}
          />
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400 font-mono">
          Let's Connect
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 mb-8 leading-relaxed">
            Ready to build something amazing together? I'm always excited to discuss new opportunities 
            and innovative projects. Let's create the future, one line of code at a time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-white font-mono">jesudaszion@gmail.com</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-white font-mono">+91 9176391966</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-white font-mono">Chennai, Tamil Nadu</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="mailto:jesudaszion@gmail.com" className="bg-emerald-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50">
              Send Message
            </a>
            <a href="https://linkedin.com/in/jesudas" className="border border-emerald-500 text-emerald-400 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-105">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-black border-t border-emerald-500/20 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-gray-400 font-mono">
          © 2025 Jesudas Zion. Crafted with passion and cutting-edge tech.
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://github.com/Zion203" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/jesudas-zion-49b804305/" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:jesudaszion@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Mouse Follower */}
     <div 
  ref={followerRef}
  className="fixed w-4 h-4 bg-emerald-400 rounded-full pointer-events-none z-50 mix-blend-difference"
  style={{
    left: 0,
    top: 0,
    transition: 'all 0.1s ease-out'
  }}
/>

      
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;