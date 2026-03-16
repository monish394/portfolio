import { useState, useEffect } from 'react';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaShieldAlt,
  FaTools, FaGraduationCap, FaCertificate, FaGamepad, FaGlobe,
  FaLock, FaJava, FaCss3Alt, FaChevronUp, FaBars, FaTimes
} from 'react-icons/fa';
import {
  SiJavascript, SiHtml5, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMongoose, SiTailwindcss, SiAxios, SiChartdotjs,
  SiJsonwebtokens, SiPostman, SiVscodium, SiRedux,
  SiSocketdotio, SiCloudinary, SiGithub, SiLeaflet,
  SiOpenai, SiRazorpay
} from 'react-icons/si';
import { TbApi, TbBrandReactNative, TbRoute } from 'react-icons/tb';
import { MdSecurity, MdVerified } from 'react-icons/md';

// ─── Theme ───────────────────────────────────────────────────────────────────

const theme = {
  bg: '#0a0b0f',
  bgCard: 'rgba(255,255,255,0.03)',
  bgCardHover: 'rgba(255,255,255,0.06)',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  textMuted: '#64748b',
  accent: '#6366f1',
  accentLight: '#818cf8',
  border: 'rgba(255,255,255,0.08)',
  borderHover: 'rgba(255,255,255,0.15)',
  gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
  gradientText: 'linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc)',
  shadow: '0 4px 30px rgba(0,0,0,0.3)',
  shadowHover: '0 8px 40px rgba(99,102,241,0.15)',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    label: 'Languages',
    icon: <FaCode />,
    color: '#6366f1',
    skills: [
      { name: 'JavaScript (ES6+)', icon: <SiJavascript color="#f7df1e" /> },
      { name: 'Core Java', icon: <FaJava color="#f89820" /> },
    ],
  },
  {
    label: 'Frontend',
    icon: <TbBrandReactNative />,
    color: '#06b6d4',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 color="#e34f26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572b6" /> },
      { name: 'React.js', icon: <SiReact color="#61dafb" /> },
      { name: 'React Router', icon: <TbRoute color="#ca4245" /> },
      { name: 'Redux / Context', icon: <SiRedux color="#764abc" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
      { name: 'Axios', icon: <SiAxios color="#5a29e4" /> },
      { name: 'Chart.js', icon: <SiChartdotjs color="#ff6384" /> },
      { name: 'Leaflet', icon: <SiLeaflet color="#199900" /> },
    ],
  },
  {
    label: 'Backend',
    icon: <FaServer />,
    color: '#10b981',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress color="#ffffff" /> },
      { name: 'REST API Dev', icon: <TbApi color="#10b981" /> },
      { name: 'Socket.IO', icon: <SiSocketdotio color="#ffffff" /> },
      { name: 'Joi Validation', icon: <MdSecurity color="#f59e0b" /> },
    ],
  },
  {
    label: 'Database',
    icon: <FaDatabase />,
    color: '#f59e0b',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
      { name: 'Mongoose', icon: <SiMongoose color="#880000" /> },
    ],
  },
  {
    label: 'Auth & Security',
    icon: <FaShieldAlt />,
    color: '#ec4899',
    skills: [
      { name: 'JWT', icon: <SiJsonwebtokens color="#d63aff" /> },
      { name: 'RBAC', icon: <MdVerified color="#ec4899" /> },
      { name: 'Bcrypt.js', icon: <FaLock color="#ef4444" /> },
    ],
  },
  {
    label: 'Tools & Integrations',
    icon: <FaTools />,
    color: '#8b5cf6',
    skills: [
      { name: 'Git & GitHub', icon: <SiGithub color="#ffffff" /> },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
      { name: 'VS Code', icon: <SiVscodium color="#007acc" /> },
      { name: 'Razorpay', icon: <SiRazorpay color="#3395ff" /> },
      { name: 'Cloudinary', icon: <SiCloudinary color="#3448c5" /> },
      { name: 'Google Gemini', icon: <SiOpenai color="#10b981" /> },
    ],
  },
];

const projects = [
  {
    title: 'Asset Maintenance & Service Tracking System',
    description:
      'Full-stack asset maintenance platform with JWT-based authentication and role-based access control (Admin, User, Technician). Features geolocation-based technician allocation using OpenStreetMap with 5 km radius routing, real-time Socket.IO notifications, AI-powered issue assistance via Google Gemini, and Razorpay payment integration.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.IO', 'Razorpay', 'Cloudinary', 'Gemini AI', 'OpenStreetMap'],
    github: 'https://github.com/monish394/Asset-Maintenance',
    live: 'https://asset-maintenance.onrender.com',
    color: '#6366f1',
    badge: '⭐ Featured',
  },
  {
    title: 'Expense Tracking System',
    description:
      'Responsive expense tracking app with AI-powered receipt scanning using Google Gemini + Cloudinary for automatic expense extraction. Features JWT authentication, secure profile management, and OTP-based password recovery.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Gemini AI', 'Cloudinary', 'JWT'],
    github: 'https://github.com/monish394/Expense-Tracker',
    live: 'https://expense-tracker-2-8f21.onrender.com/add-expense',
    color: '#10b981',
    badge: '🤖 AI Powered',
  },
  {
    title: 'Artist Event Location & Scheduling System',
    description:
      'Performance scheduling platform with interactive geolocation mapping via React-Leaflet. Features dynamic venue markers, event pop-ups, role-based dashboards, and secure RESTful APIs with duplicate prevention.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'React-Leaflet', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/monish394/Artist-Location-Tracking',
    live: null,
    color: '#8b5cf6',
    badge: '🗺️ Maps & Geo',
  },
];

const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

// ─── Shared Styles ───────────────────────────────────────────────────────────

const styles = {
  glassCard: {
    background: theme.bgCard,
    border: `1px solid ${theme.border}`,
    borderRadius: '16px',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s ease',
  },
  glassCardHover: {
    background: theme.bgCardHover,
    borderColor: theme.borderHover,
    boxShadow: theme.shadowHover,
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: 900,
    lineHeight: 1.2,
    color: theme.textPrimary,
    letterSpacing: '-0.02em',
  },
  sectionSub: {
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: theme.accent,
    marginBottom: '12px',
  },
  gradientText: {
    background: theme.gradientText,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 28px',
    borderRadius: '12px',
    fontWeight: 700,
    fontSize: '14px',
    color: '#fff',
    background: theme.gradient,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
    letterSpacing: '0.01em',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 28px',
    borderRadius: '12px',
    fontWeight: 700,
    fontSize: '14px',
    color: theme.textSecondary,
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${theme.border}`,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    letterSpacing: '0.01em',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.02em',
  },
  skillChip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '10px',
    fontSize: '12px',
    fontWeight: 500,
    color: theme.textSecondary,
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${theme.border}`,
    transition: 'all 0.25s ease',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
};

// ─── Inject Global Styles & Keyframes ────────────────────────────────────────

const globalCSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; scroll-padding-top: 80px; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${theme.bg};
    color: ${theme.textPrimary};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  ::selection { background: rgba(99,102,241,0.3); color: #fff; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${theme.bg}; }
  ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(99,102,241,0.5); }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.02); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
    50% { box-shadow: 0 0 0 6px rgba(74,222,128,0); }
  }
  @keyframes scroll-line {
    0% { transform: scaleY(0); transform-origin: top; }
    50% { transform: scaleY(1); transform-origin: top; }
    51% { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

function InjectStyles() {
  useEffect(() => {
    const id = 'portfolio-global-css';
    if (!document.getElementById(id)) {
      const style = document.createElement('style');
      style.id = id;
      style.textContent = globalCSS;
      document.head.appendChild(style);
    }
  }, []);
  return null;
}

// ─── Helper: useHover ────────────────────────────────────────────────────────

function useHover() {
  const [hovered, setHovered] = useState(false);
  return {
    hovered,
    bind: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  };
}

// ─── Helper: Section Wrapper ─────────────────────────────────────────────────

function Section({ id, children, style: extraStyle }) {
  return (
    <section
      id={id}
      style={{
        padding: '100px 0',
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        ...extraStyle,
      }}
    >
      <div style={styles.container}>{children}</div>
    </section>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(10,11,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? `1px solid ${theme.border}` : '1px solid transparent',
      }}
    >
      <div
        style={{
          ...styles.container,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
        }}
      >
        <a href="#hero" style={{ textDecoration: 'none', fontWeight: 900, fontSize: '22px' }}>
          <span style={styles.gradientText}>MK.</span>
        </a>

        {/* Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          className="desktop-nav">
          {navLinks.map((l) => {
            const isActive = activeSection === l.toLowerCase();
            return (
              <NavLink key={l} href={`#${l.toLowerCase()}`} active={isActive}>
                {l}
              </NavLink>
            );
          })}

        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: theme.textSecondary,
            cursor: 'pointer',
            padding: '8px',
            fontSize: '22px',
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '4px',
          padding: '8px 24px 24px',
          background: 'rgba(10,11,15,0.97)',
          borderBottom: `1px solid ${theme.border}`,
        }}
        className="mobile-menu"
      >
        {navLinks.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              padding: '12px 16px',
              color: theme.textSecondary,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '15px',
              borderRadius: '10px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
              e.currentTarget.style.color = theme.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = theme.textSecondary;
            }}
          >
            {l}
          </a>
        ))}
        <a
          href="mailto:monish123ar@gmail.com"
          style={{
            ...styles.btnPrimary,
            justifyContent: 'center',
            marginTop: '8px',
          }}
        >
          Hire Me
        </a>
      </div>

      {/* Responsive CSS for nav */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, children, active }) {
  const { hovered, bind } = useHover();
  return (
    <a
      href={href}
      {...bind}
      style={{
        textDecoration: 'none',
        padding: '8px 16px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: 600,
        color: active ? theme.textPrimary : hovered ? theme.textPrimary : theme.textSecondary,
        background: active ? 'rgba(99,102,241,0.12)' : hovered ? 'rgba(255,255,255,0.05)' : 'transparent',
        transition: 'all 0.25s ease',
        letterSpacing: '0.01em',
      }}
    >
      {children}
    </a>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 80%, rgba(6,182,212,0.04) 0%, transparent 50%),
          ${theme.bg}
        `,
      }}
    >
      {/* Floating orbs */}
      {[
        { size: 500, top: '-10%', left: '-5%', color: '#6366f1', opacity: 0.07, delay: '0s' },
        { size: 400, top: '20%', right: '-8%', color: '#8b5cf6', opacity: 0.05, delay: '2s' },
        { size: 300, bottom: '10%', left: '20%', color: '#06b6d4', opacity: 0.04, delay: '4s' },
      ].map((orb, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            opacity: orb.opacity,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            animation: `float 8s ease-in-out ${orb.delay} infinite`,
            pointerEvents: 'none',
            filter: 'blur(40px)',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          ...styles.container,
          textAlign: 'center',
          paddingTop: '120px',
          paddingBottom: '80px',
          animation: 'fadeInUp 0.8s ease-out',
        }}
      >
        {/* Available badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            borderRadius: '50px',
            marginBottom: '32px',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.2)',
            color: '#a5b4fc',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4ade80',
              animation: 'pulse-glow 2s infinite',
            }}
          />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: theme.textPrimary,
            marginBottom: '8px',
            letterSpacing: '-0.03em',
          }}
        >
          Monishkumar <span style={{ color: theme.accent }}>AR</span>
        </h1>
      

        {/* Role */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: 600,
            color: theme.textSecondary,
            marginBottom: '12px',
            letterSpacing: '0.01em',
          }}
        >
          Full Stack Developer &nbsp;·&nbsp; MERN Stack + Java
        </p>

        {/* Location */}
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '14px',
            color: theme.textMuted,
            marginBottom: '48px',
          }}
        >
          <FaMapMarkerAlt style={{ color: theme.accent, fontSize: '14px' }} />
          Trichy, Tamil Nadu &nbsp;|&nbsp; Currently in Bangalore
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '64px',
          }}
        >
          <HoverButton
            href="https://github.com/monish394?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            baseStyle={styles.btnPrimary}
            hoverStyle={{ transform: 'translateY(-2px)', boxShadow: '0 8px 30px rgba(99,102,241,0.4)' }}
          >
            <FaGithub size={16} /> View My Work
          </HoverButton>
          <HoverButton
            href="https://www.linkedin.com/in/armonishkumar78/"
            target="_blank"
            rel="noopener noreferrer"
            baseStyle={styles.btnSecondary}
            hoverStyle={{ borderColor: '#0077b5', color: '#0077b5', background: 'rgba(0,119,181,0.08)' }}
          >
            <FaLinkedin size={16} /> LinkedIn
          </HoverButton>
          <HoverButton
            href="mailto:monish123ar@gmail.com"
            baseStyle={styles.btnSecondary}
            hoverStyle={{ borderColor: theme.accent, color: theme.accentLight, background: 'rgba(99,102,241,0.08)' }}
          >
            <FaEnvelope size={16} /> Email Me
          </HoverButton>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            maxWidth: '480px',
            margin: '0 auto',
          }}
          className="stats-grid"
        >
          {[
            { value: '3+', label: 'Projects Built' },
            { value: 'MERN', label: 'Tech Stack' },
            { value: '7 mo', label: 'Pro Training' },
          ].map(({ value, label }) => (
            <StatCard key={label} value={value} label={label} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.4,
          color: theme.textMuted,
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: `linear-gradient(to bottom, ${theme.textMuted}, transparent)`,
            animation: 'scroll-line 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: 1fr !important; max-width: 200px !important; }
        }
      `}</style>
    </section>
  );
}

function StatCard({ value, label }) {
  const { hovered, bind } = useHover();
  return (
    <div
      {...bind}
      style={{
        ...styles.glassCard,
        padding: '24px 16px',
        textAlign: 'center',
        ...(hovered ? styles.glassCardHover : {}),
      }}
    >
      <div style={{ ...styles.gradientText, fontWeight: 900, fontSize: '24px', marginBottom: '4px' }}>
        {value}
      </div>
      <div style={{ fontSize: '11px', fontWeight: 600, color: theme.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </div>
    </div>
  );
}

function HoverButton({ children, baseStyle, hoverStyle, ...props }) {
  const { hovered, bind } = useHover();
  return (
    <a
      {...props}
      {...bind}
      style={{ ...baseStyle, ...(hovered ? hoverStyle : {}) }}
    >
      {children}
    </a>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const highlights = [
    'Built RESTful APIs with JWT-based auth & RBAC',
    'State management with Redux & Context API',
    'Integrated Razorpay & Cloudinary APIs',
    'Real-time systems with Socket.IO',
    'AI-powered features with Google Gemini',
    'Geolocation systems with OpenStreetMap',
  ];

  return (
    <Section id="about">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Left */}
        <div>
          <p style={styles.sectionSub}>About Me</p>
          <h2 style={styles.sectionTitle}>
            Crafting Digital{' '}
            <span style={styles.gradientText}>Experiences</span>
          </h2>
          <p
            style={{
              color: theme.textSecondary,
              lineHeight: 1.9,
              marginTop: '24px',
              fontSize: '15px',
            }}
          >
            I'm a <strong style={{ color: theme.textPrimary }}>Full Stack Developer</strong> specializing
            in the MERN stack and Core Java, passionate about building scalable, production-ready web
            applications. I focus on clean architecture, performance, and delivering great user experiences
            from backend APIs to polished UIs.
          </p>
          <p
            style={{
              color: theme.textSecondary,
              lineHeight: 1.9,
              marginTop: '16px',
              fontSize: '15px',
            }}
          >
            Trained for{' '}
            <strong style={{ color: theme.textPrimary }}>7 months at DCT Academy, Bangalore</strong> in
            Java Full Stack development, I've built end-to-end systems featuring real-time communication,
            AI integrations, payment gateways, and geolocation services.
          </p>
        </div>

        {/* Right */}
        <div style={{ ...styles.glassCard, padding: '32px' }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: '18px',
              color: theme.textPrimary,
              marginBottom: '24px',
            }}
          >
            What I've Built & Done
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {highlights.map((h) => (
              <HighlightItem key={h} text={h} />
            ))}
          </div>

          <div
            style={{
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: `1px solid ${theme.border}`,
              display: 'flex',
              gap: '24px',
            }}
          >
            <SocialLink
              href="https://github.com/monish394?tab=repositories"
              icon={<FaGithub size={16} />}
              label="GitHub"
              hoverColor="#fff"
            />
            <SocialLink
              href="https://www.linkedin.com/in/armonishkumar78/"
              icon={<FaLinkedin size={16} />}
              label="LinkedIn"
              hoverColor="#0077b5"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function HighlightItem({ text }) {
  const { hovered, bind } = useHover();
  return (
    <div
      {...bind}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
        padding: '8px 12px',
        borderRadius: '10px',
        transition: 'all 0.2s ease',
        background: hovered ? 'rgba(99,102,241,0.06)' : 'transparent',
      }}
    >
      <div
        style={{
          marginTop: '3px',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: 'rgba(99,102,241,0.15)',
          transition: 'all 0.2s ease',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4l2.5 2.5L9 1"
            stroke="#6366f1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span style={{ color: theme.textSecondary, fontSize: '14px', lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

function SocialLink({ href, icon, label, hoverColor }) {
  const { hovered, bind } = useHover();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...bind}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        fontWeight: 600,
        color: hovered ? hoverColor : theme.textSecondary,
        textDecoration: 'none',
        transition: 'all 0.25s ease',
      }}
    >
      {icon} {label}
    </a>
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <Section
      id="skills"
      style={{
        background: `
          linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.02) 50%, transparent 100%),
          ${theme.bg}
        `,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={styles.sectionSub}>Technical Skills</p>
        <h2 style={styles.sectionTitle}>
          My <span style={styles.gradientText}>Toolkit</span>
        </h2>
        <p
          style={{
            marginTop: '16px',
            maxWidth: '520px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: theme.textSecondary,
            fontSize: '15px',
            lineHeight: 1.6,
          }}
        >
          Technologies and tools I use to build robust, scalable applications
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
        }}
        className="skills-grid"
      >
        {skillCategories.map((cat) => (
          <SkillCategoryCard key={cat.label} cat={cat} />
        ))}
      </div>

      <style>{`
        @media (max-width: 420px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function SkillCategoryCard({ cat }) {
  const { hovered, bind } = useHover();
  return (
    <div
      {...bind}
      style={{
        ...styles.glassCard,
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        ...(hovered ? styles.glassCardHover : {}),
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            background: `${cat.color}18`,
            color: cat.color,
            transition: 'all 0.3s ease',
            transform: hovered ? 'rotate(-5deg) scale(1.05)' : 'rotate(0)',
          }}
        >
          {cat.icon}
        </div>
        <h3 style={{ fontWeight: 700, fontSize: '16px', color: theme.textPrimary }}>{cat.label}</h3>
        <div
          style={{
            marginLeft: 'auto',
            fontSize: '11px',
            fontWeight: 600,
            color: theme.textMuted,
            background: 'rgba(255,255,255,0.04)',
            padding: '3px 10px',
            borderRadius: '20px',
            border: `1px solid ${theme.border}`,
          }}
        >
          {cat.skills.length}
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
        {cat.skills.map((s) => (
          <SkillChip key={s.name} skill={s} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({ skill }) {
  const { hovered, bind } = useHover();
  return (
    <div
      {...bind}
      style={{
        ...styles.skillChip,
        ...(hovered
          ? {
            background: 'rgba(255,255,255,0.08)',
            borderColor: theme.borderHover,
            color: theme.textPrimary,
            transform: 'translateY(-1px)',
          }
          : {}),
      }}
    >
      <span style={{ display: 'flex', fontSize: '14px' }}>{skill.icon}</span>
      <span>{skill.name}</span>
    </div>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <Section id="projects">
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={styles.sectionSub}>Portfolio</p>
        <h2 style={styles.sectionTitle}>
          Featured <span style={styles.gradientText}>Projects</span>
        </h2>
        <p
          style={{
            marginTop: '16px',
            maxWidth: '520px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: theme.textSecondary,
            fontSize: '15px',
            lineHeight: 1.6,
          }}
        >
          Production-grade full-stack applications built with modern technologies
        </p>
      </div>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project: p, index: i }) {
  const { hovered, bind } = useHover();
  return (
    <div
      {...bind}
      style={{
        ...styles.glassCard,
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        ...(hovered ? {
          ...styles.glassCardHover,
          transform: 'translateY(-2px)',
        } : {}),
      }}
    >
      {/* Accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${p.color}, ${p.color}40, transparent)`,
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.3s ease',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '22px',
                fontWeight: 900,
                background: `${p.color}12`,
                border: `1px solid ${p.color}25`,
                color: p.color,
                transition: 'all 0.3s ease',
                transform: hovered ? 'rotate(-3deg)' : 'rotate(0)',
              }}
            >
              {i + 1}
            </div>
            <div>
              <span
                style={{
                  ...styles.tag,
                  background: `${p.color}15`,
                  color: p.color,
                  border: `1px solid ${p.color}25`,
                  marginBottom: '8px',
                  fontSize: '11px',
                }}
              >
                {p.badge}
              </span>
              <h3 style={{ fontWeight: 800, fontSize: '20px', color: theme.textPrimary, marginTop: '8px', lineHeight: 1.3 }}>
                {p.title}
              </h3>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <IconButton href={p.github} color={theme.textSecondary}>
              <FaGithub size={18} />
            </IconButton>
            {p.live && (
              <IconButton href={p.live} color={p.color} bg={`${p.color}12`} borderColor={`${p.color}25`}>
                <FaExternalLinkAlt size={15} />
              </IconButton>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            color: theme.textSecondary,
            fontSize: '14px',
            lineHeight: 1.8,
          }}
        >
          {p.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {p.stack.map((tech) => (
            <span
              key={tech}
              style={{
                ...styles.tag,
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${theme.border}`,
                color: theme.textMuted,
                fontSize: '11px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function IconButton({ href, color, bg, borderColor, children }) {
  const { hovered, bind } = useHover();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...bind}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: bg || 'rgba(255,255,255,0.05)',
        border: `1px solid ${borderColor || theme.border}`,
        color,
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
      }}
    >
      {children}
    </a>
  );
}

// ─── Education ───────────────────────────────────────────────────────────────

function Education() {
  return (
    <Section
      id="education"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.02) 50%, transparent 100%)",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p style={{ ...styles.sectionSub, color: "#10b981" }}>Background</p>
        <h2 style={styles.sectionTitle}>
          Education & <span style={styles.gradientText}>Certifications</span>
        </h2>
      </div>

      {/* Main Grid */}
      <div
        className="edu-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "24px",
          width: "100%",
          alignItems: "start",
        }}
      >
        {/* ── LEFT COLUMN: Education Stack ── */}
        <div
          className="edu-left"
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          {/* College */}
          <TimelineCard
            icon={<FaGraduationCap size={20} />}
            iconColor="#6366f1"
            title="Education"
            dotColor="#6366f1"
          >
            <span
              style={{
                ...styles.tag,
                background: "rgba(99,102,241,0.1)",
                color: "#6366f1",
                border: "1px solid rgba(99,102,241,0.2)",
                marginBottom: "12px",
                display: "inline-block",
              }}
            >
              2022 – 2025 · CGPA: 7.5
            </span>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "16px",
                color: theme.textPrimary,
                marginBottom: "6px",
              }}
            >
              Bachelor of Computer Science
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: theme.textSecondary,
                marginBottom: "12px",
              }}
            >
              National College, Tiruchirappalli, Tamil Nadu
            </p>
            <p
              style={{
                fontSize: "12px",
                color: theme.textMuted,
                lineHeight: 1.6,
              }}
            >
              Core coursework in Data Structures, Algorithms, Databases, and
              Software Engineering principles.
            </p>
          </TimelineCard>

          {/* HSLC */}
          <TimelineCard
            icon={<FaGraduationCap size={18} />}
            iconColor="#22c55e"
            title="Higher Secondary"
            dotColor="#22c55e"
          >
            <span
              style={{
                ...styles.tag,
                background: "rgba(34,197,94,0.1)",
                color: "#22c55e",
                border: "1px solid rgba(34,197,94,0.2)",
                marginBottom: "12px",
                display: "inline-block",
              }}
            >
              HSLC · 70%
            </span>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "16px",
                color: theme.textPrimary,
                marginBottom: "6px",
              }}
            >
              Government Boys Higher Secondary School
            </h4>
            <p style={{ fontSize: "14px", color: theme.textSecondary }}>
              Thathiengarpet, Tiruchirappalli
            </p>
          </TimelineCard>

          {/* SSLC */}
          <TimelineCard
            icon={<FaGraduationCap size={18} />}
            iconColor="#f59e0b"
            title="Secondary School"
            dotColor="#f59e0b"
          >
            <span
              style={{
                ...styles.tag,
                background: "rgba(245,158,11,0.1)",
                color: "#f59e0b",
                border: "1px solid rgba(245,158,11,0.2)",
                marginBottom: "12px",
                display: "inline-block",
              }}
            >
              SSLC · 65%
            </span>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "16px",
                color: theme.textPrimary,
                marginBottom: "6px",
              }}
            >
              Government Boys Higher Secondary School
            </h4>
            <p style={{ fontSize: "14px", color: theme.textSecondary }}>
              Thathiengarpet, Tiruchirappalli
            </p>
          </TimelineCard>
        </div>

        {/* ── RIGHT COLUMN: Certification ── */}
        <div
          className="edu-right"
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <TimelineCard
            icon={<FaCertificate size={20} />}
            iconColor="#8b5cf6"
            title="Certification"
            dotColor="#8b5cf6"
          >
            <span
              style={{
                ...styles.tag,
                background: "rgba(139,92,246,0.1)",
                color: "#8b5cf6",
                border: "1px solid rgba(139,92,246,0.2)",
                marginBottom: "12px",
                display: "inline-block",
              }}
            >
              July 2025 – March 2026 · 7 Months
            </span>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "16px",
                color: theme.textPrimary,
                marginBottom: "6px",
              }}
            >
              Java Full Stack Internship & Training
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: theme.textSecondary,
                marginBottom: "16px",
              }}
            >
              DCT Academy, Bangalore
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "12px",
                color: theme.textMuted,
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Intensive hands-on training covering full-stack web development,
              RESTful API design, database management, authentication systems,
              and deployment workflows.
            </p>

            {/* Key Topics */}
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.textMuted,
                marginBottom: "10px",
              }}
            >
              Key Topics Covered
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "MERN Stack",
                "Core Java",
                "REST APIs",
                "JWT Auth",
                "MongoDB",
                "React.js",
                "Node.js",
                "Express.js",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    ...styles.tag,
                    background: "rgba(139,92,246,0.08)",
                    color: "#8b5cf6",
                    border: "1px solid rgba(139,92,246,0.2)",
                    fontSize: "11px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </TimelineCard>

          {/* Training Highlights mini card */}
          <div
            style={{
              ...styles.glassCard,
              padding: "24px",
              background: "rgba(139,92,246,0.03)",
              borderColor: "rgba(139,92,246,0.1)",
            }}
          >
            <h4
              style={{
                fontWeight: 700,
                fontSize: "14px",
                color: theme.textPrimary,
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#8b5cf6",
                  display: "inline-block",
                }}
              />
              Training Highlights
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                "Built 3+ production-grade full-stack projects",
                "Implemented real-time features with Socket.IO",
                "Integrated AI, payments & geolocation APIs",
                "Practiced agile development & Git workflows",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      marginTop: "5px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: "rgba(139,92,246,0.15)",
                    }}
                  >
                    <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4l2.5 2.5L9 1"
                        stroke="#8b5cf6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: theme.textSecondary,
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FULL-WIDTH: Hobbies ── */}
        <div
          className="edu-hobbies"
          style={{ ...styles.glassCard, padding: "32px" }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: theme.textPrimary,
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "10px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(236,72,153,0.12)",
                color: "#ec4899",
                fontSize: "14px",
              }}
            >
              ✦
            </span>
            Interests & Hobbies
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                icon: <FaGlobe size={20} />,
                label: "Exploring Web Technologies",
                color: "#6366f1",
                desc: "Always learning new frameworks",
              },
              {
                icon: <FaCode size={20} />,
                label: "Solving Coding Challenges",
                color: "#10b981",
                desc: "Logic puzzles & algorithms",
              },
              {
                icon: <FaGamepad size={20} />,
                label: "Playing Video Games",
                color: "#ec4899",
                desc: "Strategy & adventure games",
              },
            ].map((h) => (
              <HobbyItem key={h.label} {...h} />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 1024px) {
          .edu-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto;
          }
          .edu-left {
            grid-column: 1;
            grid-row: 1;
          }
          .edu-right {
            grid-column: 2;
            grid-row: 1;
          }
          .edu-hobbies {
            grid-column: 1 / -1 !important;
            grid-row: 2;
          }
        }

        @media (max-width: 1023px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Section>
  );
}

function TimelineCard({ icon, iconColor, title, dotColor, children }) {
  const { hovered, bind } = useHover();
  return (
    <div
      {...bind}
      style={{
        ...styles.glassCard,
        padding: '32px',
        height: '100%',
        ...(hovered ? styles.glassCardHover : {}),
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `${iconColor}15`,
            color: iconColor,
          }}
        >
          {icon}
        </div>
        <h3 style={{ fontWeight: 700, fontSize: '18px', color: theme.textPrimary }}>{title}</h3>
      </div>

      <div
        style={{
          position: 'relative',
          paddingLeft: '24px',
          borderLeft: `2px solid ${theme.border}`,
        }}
      >
        {/* Timeline dot */}
        <div
          style={{
            position: 'absolute',
            left: '-6px',
            top: '6px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: dotColor,
            boxShadow: `0 0 8px ${dotColor}50`,
          }}
        />
        {children}
      </div>
    </div>
  );
}

function HobbyItem({ icon, label, color }) {
  const { hovered, bind } = useHover();
  return (
    <div
      {...bind}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        borderRadius: '14px',
        background: hovered ? `${color}12` : `${color}06`,
        border: `1px solid ${color}18`,
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: `${color}18`,
          color,
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: '14px', fontWeight: 600, color: theme.textSecondary }}>{label}</span>
    </div>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const contacts = [
    // { icon: <FaPhone size={16} />, label: 'Phone', value: '+91 96551 81539', href: 'tel:9655181539', color: '#10b981' },
    { icon: <FaEnvelope size={16} />, label: 'Email', value: 'monish123ar@gmail.com', href: 'mailto:monish123ar@gmail.com', color: '#6366f1' },
    { icon: <FaGithub size={16} />, label: 'GitHub', value: 'github.com/monish394', href: 'https://github.com/monish394?tab=repositories', color: '#e2e8f0' },
    { icon: <FaLinkedin size={16} />, label: 'LinkedIn', value: 'linkedin.com/in/armonishkumar78', href: 'https://www.linkedin.com/in/armonishkumar78/', color: '#0077b5' },
  ];

  return (
    <Section id="contact">
      {/* Background orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={styles.sectionSub}>Get In Touch</p>
          <h2 style={styles.sectionTitle}>
            Let's <span style={styles.gradientText}>Connect</span>
          </h2>
          <p
            style={{
              marginTop: '16px',
              maxWidth: '480px',
              marginLeft: 'auto',
              marginRight: 'auto',
              color: theme.textSecondary,
              fontSize: '15px',
              lineHeight: 1.7,
            }}
          >
            I'm open to full-time roles, freelance projects, and collaborations. Feel free to reach out
            through any of the channels below.
          </p>
        </div>

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ ...styles.glassCard, padding: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contacts.map((c) => (
                <ContactLink key={c.label} {...c} />
              ))}
            </div>

            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: `1px solid ${theme.border}`, textAlign: 'center' }}>
              <HoverButton
                href="mailto:monish123ar@gmail.com"
                baseStyle={{
                  ...styles.btnPrimary,
                  justifyContent: 'center',
                  width: '100%',
                  padding: '14px 28px',
                  fontSize: '15px',
                }}
                hoverStyle={{ transform: 'translateY(-2px)', boxShadow: '0 8px 30px rgba(99,102,241,0.4)' }}
              >
                <FaEnvelope size={16} /> Send Me a Message
              </HoverButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactLink({ icon, label, value, href, color }) {
  const { hovered, bind } = useHover();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...bind}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        borderRadius: '14px',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        background: hovered ? 'rgba(255,255,255,0.04)' : 'transparent',
        border: `1px solid ${hovered ? theme.borderHover : 'transparent'}`,
      }}
    >
      <div
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: `${color}12`,
          color,
          transition: 'all 0.25s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {icon}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: theme.textMuted,
            marginBottom: '3px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: theme.textPrimary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {value}
        </div>
      </div>
      <FaExternalLinkAlt
        size={12}
        style={{
          flexShrink: 0,
          color: theme.textMuted,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
          transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
        }}
      />
    </a>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        padding: '48px 0',
        borderTop: `1px solid ${theme.border}`,
        background: `linear-gradient(180deg, transparent, rgba(10,11,15,0.8))`,
      }}
    >
      <div
        style={{
          ...styles.container,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
        }}
        className="footer-inner"
      >
        <div>
          <p style={{ fontSize: '14px', fontWeight: 500, color: theme.textSecondary }}>
            © 2025{' '}
            <span style={{ ...styles.gradientText, fontWeight: 700 }}>Monishkumar AR</span>
          </p>
          <p style={{ fontSize: '12px', color: theme.textMuted, marginTop: '6px' }}>
            Built with React & crafted with care
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {[
            { href: 'https://github.com/monish394', icon: <FaGithub size={20} /> },
            { href: 'https://www.linkedin.com/in/armonishkumar78/', icon: <FaLinkedin size={20} /> },
            { href: 'mailto:monish123ar@gmail.com', icon: <FaEnvelope size={20} /> },
          ].map(({ href, icon }) => (
            <FooterIcon key={href} href={href}>
              {icon}
            </FooterIcon>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .footer-inner {
            flex-direction: row !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterIcon({ href, children }) {
  const { hovered, bind } = useHover();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...bind}
      style={{
        color: hovered ? theme.accentLight : theme.textMuted,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-2px) scale(1.15)' : 'translateY(0) scale(1)',
        display: 'flex',
      }}
    >
      {children}
    </a>
  );
}

// ─── Scroll to Top Button ────────────────────────────────────────────────────

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { hovered, bind } = useHover();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      {...bind}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 999,
        width: '48px',
        height: '48px',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: hovered ? theme.gradient : 'rgba(99,102,241,0.15)',
        border: `1px solid ${hovered ? 'rgba(99,102,241,0.5)' : 'rgba(99,102,241,0.25)'}`,
        color: hovered ? '#fff' : theme.accentLight,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(12px)',
        boxShadow: hovered ? '0 8px 30px rgba(99,102,241,0.3)' : 'none',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <FaChevronUp size={16} />
    </button>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        background: theme.bg,
      }}
    >
      <InjectStyles />
      <Navbar />

      <main style={{ width: '100%' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}