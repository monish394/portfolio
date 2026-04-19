import { useState, useEffect, useRef } from 'react';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt,
  FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaShieldAlt,
  FaTools, FaGraduationCap, FaCertificate, FaGamepad, FaGlobe,
  FaLock, FaJava, FaCss3Alt, FaChevronUp, FaBars, FaTimes
} from 'react-icons/fa';
import {
  SiJavascript, SiHtml5, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMongoose, SiTailwindcss, SiAxios, SiChartdotjs,
  SiJsonwebtokens, SiPostman, SiRedux,
  SiSocketdotio, SiCloudinary, SiGithub, SiLeaflet,
  SiOpenai, SiRazorpay, SiFramer, SiGreensock,
  SiRadixui, SiReacthookform, SiReactrouter, SiVite,
  SiGoogle, SiPython, SiMysql
} from 'react-icons/si';
import { TbApi, TbBrandReactNative, TbRoute, TbChartBar, TbBrandVscode } from 'react-icons/tb';
import { MdSecurity, MdVerified } from 'react-icons/md';
import { FaFileUpload } from 'react-icons/fa';

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
      { name: 'Python', icon: <SiPython color="#3776ab" /> },
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
      { name: 'Chart.js / Recharts', icon: <SiChartdotjs color="#ff6384" /> },
      // { name: 'React Hook Form', icon: <SiReacthookform color="#ec5990" /> },
      { name: 'Framer Motion', icon: <SiFramer color="#00d8ff" /> },
      { name: 'GSAP', icon: <SiGreensock color="#88ce02" /> },
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
      { name: 'MySQL', icon: <SiMysql color="#4479a1" /> },
    ],
  },
  {
    label: 'Auth & Security',
    icon: <FaShieldAlt />,
    color: '#ec4899',
    skills: [
      { name: 'JWT', icon: <SiJsonwebtokens color="#d63aff" /> },
      { name: 'Google OAuth', icon: <SiGoogle color="#4285f4" /> },
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
      { name: 'VS Code', icon: <TbBrandVscode color="#007acc" /> },
      { name: 'Razorpay', icon: <SiRazorpay color="#3395ff" /> },
      { name: 'Cloudinary', icon: <SiCloudinary color="#3448c5" /> },
      { name: 'Google Gemini', icon: <SiOpenai color="#10b981" /> },
      { name: 'Vite', icon: <SiVite color="#646cff" /> },
      { name: 'Radix UI', icon: <SiRadixui color="#ffffff" /> },
      { name: 'Multer', icon: <FaFileUpload color="#94a3b8" /> },
    ],
  },
];

const projects = [
  {
    title: 'Scheduling-Platform',
    description:
      'A high-performance, full-stack scheduling solution that enables users to manage availability and automate meeting bookings. Built with the MERN stack and React 19, it features a dynamic dashboard with real-time stats, cinematic data visualizations, and seamless Google OAuth integration for a premium, user-centric experience.',
    stack: ['MERN Stack', 'React 19', 'Node.js', 'Express.js', 'MongoDB', 'Google OAuth'],
    github: 'https://github.com/monish394/Scheduling-Platform',
    live: 'https://scheduling-platform-service-management.onrender.com',
    color: '#06b6d4',
    badge: '🚀 New',
  },
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
    live: 'https://expense-tracker-management.onrender.com/',
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
    transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    WebkitBackdropFilter: 'blur(12px)',
  },
  glassCardHover: {
    background: theme.bgCardHover,
    borderColor: theme.borderHover,
    boxShadow: theme.shadowHover,
    transform: 'translateY(-6px) scale(1.02)',
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
    transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
    letterSpacing: '0.01em',
    position: 'relative',
    overflow: 'hidden',
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
    transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    letterSpacing: '0.01em',
    position: 'relative',
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

// ─── Inject Professional Global Styles ──────────────────────────────────────

const globalCSS = `
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
  @keyframes animateComet {
    0% {
      transform: rotate(-35deg) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(-35deg) translateX(-2000px);
      opacity: 0;
    }
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.1; transform: scale(0.6); }
    50% { opacity: 1; transform: scale(1.1); box-shadow: 0 0 8px rgba(182, 23, 23, 0.7); }
  }

  .star {
    position: absolute;
    background: #fff;
    border-radius: 50%;
    animation: twinkle 3s infinite alternate ease-in-out;
  }

  .comet {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(99,102,241,0.1), 0 0 0 8px rgba(139,92,246,0.1), 0 0 20px rgba(255,255,255,1);
    animation: animateComet 4s linear infinite;
  }
  .comet::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 250px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(99,102,241,0.5), transparent);
  }

  .btn-shine {
    position: relative;
    overflow: hidden;
  }
  .btn-shine::after {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transform: skewX(-20deg);
    transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .btn-shine:hover::after {
    left: 150%;
  }

  @keyframes moveFloorGrid {
    0% { transform: rotateX(75deg) translateZ(-50px) translateY(0); }
    100% { transform: rotateX(75deg) translateZ(-50px) translateY(80px); }
  }

  /* Reveal on Scroll - Smooth & Professional */
  .reveal {
    opacity: 0;
    transform: translate(-20px, 30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform, opacity;
  }
  .reveal.active {
    opacity: 1;
    transform: translate(0, 0);
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

function GlobalBg3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let offset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const horizon = H * 0.45;
      const vx = W / 2;
      const COLS = 16;
      const ROWS = 20;
      const spacing = W / COLS;
      offset = (offset + 0.5) % (H / ROWS);

      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 0; i <= COLS; i++) {
        const baseX = i * spacing;
        const grad = ctx.createLinearGradient(vx, horizon, baseX, H);
        grad.addColorStop(0, 'rgba(99,102,241,0)');
        grad.addColorStop(0.3, 'rgba(139,92,246,0.25)');
        grad.addColorStop(1, 'rgba(99,102,241,0.45)');
        ctx.beginPath();
        ctx.moveTo(vx, horizon);
        ctx.lineTo(baseX, H);
        ctx.strokeStyle = grad;
        ctx.stroke();
      }

      // Horizontal lines
      for (let j = 0; j <= ROWS; j++) {
        const t = j / ROWS;
        const y = horizon + offset + (H - horizon) * Math.pow(t, 1.6);
        if (y > H) continue;
        const alpha = 0.08 + 0.32 * t;
        const progress = (y - horizon) / (H - horizon);
        const lx = vx - vx * progress * 1.2;
        const rx = vx + (W - vx) * progress * 1.2;
        const grad = ctx.createLinearGradient(lx, y, rx, y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.2, `rgba(139,92,246,${alpha})`);
        grad.addColorStop(0.5, `rgba(99,102,241,${alpha})`);
        grad.addColorStop(0.8, `rgba(139,92,246,${alpha})`);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.moveTo(lx, y);
        ctx.lineTo(rx, y);
        ctx.strokeStyle = grad;
        ctx.stroke();
      }

      // Glowing horizon line
      const hGrad = ctx.createLinearGradient(0, horizon, W, horizon);
      hGrad.addColorStop(0, 'transparent');
      hGrad.addColorStop(0.3, 'rgba(139,92,246,0.5)');
      hGrad.addColorStop(0.5, 'rgba(167,139,250,0.7)');
      hGrad.addColorStop(0.7, 'rgba(139,92,246,0.5)');
      hGrad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.moveTo(0, horizon);
      ctx.lineTo(W, horizon);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hGrad;
      ctx.shadowBlur = 12;
      ctx.shadowColor = 'rgba(139,92,246,0.6)';
      ctx.stroke();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.5,
      }}
    />
  );
}

function Section({ id, children, style: extraStyle, noReveal }) {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    const el = document.getElementById(id);
    if (el && !noReveal) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [id, noReveal]);

  return (
    <section
      id={id}
      className={!noReveal ? `reveal ${isVisible ? 'active' : ''}` : ''}
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
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        background: scrolled ? 'rgba(10,11,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
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
        <a
          href="#hero"
          style={{ textDecoration: 'none', fontWeight: 900, fontSize: '20px', letterSpacing: '-0.02em' }}
          aria-label="Monishkumar AR - Portfolio Home"
        >
          <span style={styles.gradientText}>Monishkumar A R</span>
        </a>

        {/* Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          className="desktop-nav"
          role="menubar">
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
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'scale(1.1)' : 'scale(1)',
          }}
          className="mobile-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
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
        role="menu"
      >
        {navLinks.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            style={{
              display: 'block',
              padding: '12px 16px',
              color: theme.textSecondary,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '15px',
              borderRadius: '10px',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
      role="navigation"
      style={{
        textDecoration: 'none',
        padding: '8px 16px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: 600,
        color: active ? theme.textPrimary : hovered ? theme.textPrimary : theme.textSecondary,
        background: active ? 'rgba(99,102,241,0.12)' : hovered ? 'rgba(255,255,255,0.05)' : 'transparent',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        letterSpacing: '0.01em',
        position: 'relative',
        borderBottom: active ? '2px solid #6366f1' : '2px solid transparent',
      }}
    >
      {children}
    </a>
  );
}

// ─── Dynamic Helpers ─────────────────────────────────────────────────────────

const getTrainingMonths = () => {
  const startDate = new Date(2025, 6, 15); // Mid-July 2025
  const now = new Date();
  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += now.getMonth();
  if (now.getDate() < startDate.getDate()) {
    months--;
  }
  return months > 0 ? months : 0;
};

// ─── Sky Background (Stars + Comets) ─────────────────────────────────────────

const STATIC_STARS = Array.from({ length: 150 }).map(() => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 3 + 2}s`
}));

const CometShower = () => {
  const comets = [
    { top: '-10%', left: '110%', delay: '0s',   duration: '10s' },
    { top: '20%',  left: '120%', delay: '2s',   duration: '13s' },
    { top: '-20%', left: '80%',  delay: '5s',   duration: '11s' },
    { top: '40%',  left: '130%', delay: '1.5s', duration: '8s'  },
    { top: '-5%',  left: '100%', delay: '7s',   duration: '12s' },
    { top: '10%',  left: '140%', delay: '9s',   duration: '9s'  },
    { top: '30%',  left: '150%', delay: '3.5s', duration: '14s' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {STATIC_STARS.map((s, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
      {comets.map((c, i) => (
        <div
          key={`comet-${i}`}
          className="comet"
          style={{
            top: c.top,
            left: c.left,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}
    </div>
  );
};

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

      <CometShower />

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

        <h1
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: theme.textPrimary,
            marginBottom: '8px',
            letterSpacing: '-0.03em',
          }}
        >
          Monishkumar <span style={{ color: theme.accent }}>A R</span>
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
            hoverStyle={{
              transform: 'translateY(-3px)',
              boxShadow: '0 12px 40px rgba(99,102,241,0.45)',
              letterSpacing: '0.015em',
            }}
          >
            <FaGithub size={16} /> View My Work
          </HoverButton>
          <HoverButton
            href="https://www.linkedin.com/in/armonishkumar78/"
            target="_blank"
            rel="noopener noreferrer"
            baseStyle={styles.btnSecondary}
            hoverStyle={{
              borderColor: '#0077b5',
              color: '#0077b5',
              background: 'rgba(0,119,181,0.08)',
              transform: 'translateY(-2px)',
            }}
          >
            <FaLinkedin size={16} /> LinkedIn
          </HoverButton>
          <HoverButton
            href="mailto:monish123ar@gmail.com"
            baseStyle={styles.btnSecondary}
            hoverStyle={{
              borderColor: theme.accent,
              color: theme.accentLight,
              background: 'rgba(99,102,241,0.08)',
              transform: 'translateY(-2px)',
            }}
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
            { value: '4+', label: 'Projects Built' },
            { value: 'MERN', label: 'Tech Stack' },
            { value: `${getTrainingMonths()} mo`, label: 'Pro Training' },
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

function HoverButton({ children, baseStyle, hoverStyle, className = '', ...props }) {
  const { hovered, bind } = useHover();
  return (
    <a
      {...props}
      {...bind}
      role="button"
      tabIndex={0}
      className={`btn-shine ${className}`}
      style={{
        ...baseStyle,
        ...(hovered ? hoverStyle : {}),
        cursor: 'pointer',
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.currentTarget.click();
        }
      }}
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
            <strong style={{ color: theme.textPrimary }}>{getTrainingMonths()} months at DCT Academy, Bangalore</strong> in
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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Professional shine effect on hover */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
            animation: 'slideInRight 0.6s ease-out',
            pointerEvents: 'none',
          }}
        />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
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
            transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: hovered ? 'rotate(-5deg) scale(1.1)' : 'rotate(0)',
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

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative', zIndex: 1 }}>
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
      role="img"
      aria-label={`${skill.name} skill`}
      style={{
        ...styles.skillChip,
        ...(hovered
          ? {
            background: 'rgba(99,102,241,0.08)',
            borderColor: theme.accentLight,
            color: theme.textPrimary,
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(99,102,241,0.15)',
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
  const [showPreview, setShowPreview] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

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
          transform: showPreview ? 'none' : 'translateY(-4px)',
        } : {}),
        transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
          transition: 'opacity 0.4s ease',
          boxShadow: hovered ? `0 0 12px ${p.color}80` : 'none',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}>
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
                transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: hovered ? 'rotate(-3deg) scale(1.08)' : 'rotate(0)',
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

          {/* Links + Preview toggle */}
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center', flexWrap: 'wrap' }}>
            {p.live && (
              <button
                onClick={() => { setShowPreview(!showPreview); setIframeLoading(true); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: `1px solid ${p.color}40`,
                  background: showPreview ? `${p.color}20` : 'transparent',
                  color: p.color,
                  transition: 'all 0.25s ease',
                }}
              >
                {showPreview ? '✕ Close Preview' : '⬡ Live Preview'}
              </button>
            )}
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
            letterSpacing: '0.005em',
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
                transition: 'all 0.25s ease',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Iframe Live Preview */}
        {showPreview && p.live && (
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: `1px solid ${p.color}30`,
              boxShadow: `0 0 30px ${p.color}20`,
              position: 'relative',
              background: '#0a0b0f',
            }}
          >
            {/* Browser chrome bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              background: 'rgba(255,255,255,0.04)',
              borderBottom: `1px solid ${p.color}20`,
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <span key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, display: 'inline-block' }} />
                ))}
              </div>
              <div style={{
                flex: 1,
                marginLeft: '8px',
                padding: '4px 12px',
                borderRadius: '6px',
                background: 'rgba(255,255,255,0.06)',
                fontSize: '11px',
                color: theme.textMuted,
                fontFamily: 'monospace',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {p.live}
              </div>
            </div>

            {/* Loading spinner */}
            {iframeLoading && (
              <div style={{
                position: 'absolute',
                inset: 0,
                top: '37px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0a0b0f',
                gap: '12px',
                zIndex: 2,
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  border: `3px solid ${p.color}30`,
                  borderTop: `3px solid ${p.color}`,
                  borderRadius: '50%',
                  animation: 'spin 0.9s linear infinite',
                }} />
                <span style={{ fontSize: '12px', color: theme.textMuted }}>Loading live preview…</span>
              </div>
            )}

            <iframe
              src={p.live}
              title={`${p.title} Live Preview`}
              onLoad={() => setIframeLoading(false)}
              style={{
                width: '100%',
                height: '520px',
                border: 'none',
                display: 'block',
              }}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
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
        transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: hovered ? 'scale(1.15) translateY(-2px)' : 'scale(1)',
        boxShadow: hovered ? `0 6px 16px rgba(0,0,0,0.2)` : 'none',
      }}
      aria-label="Project link"
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
              July 2025 – Present · {getTrainingMonths()} Months
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
                "Built 4+ production-grade full-stack projects",
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
        transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        background: hovered ? 'rgba(255,255,255,0.06)' : 'transparent',
        border: `1px solid ${hovered ? theme.borderHover : 'transparent'}`,
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
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
          transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: hovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
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
          opacity: hovered ? 1 : 0.5,
          transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: hovered ? 'translate(3px, -3px)' : 'translate(0,0)',
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
        padding: '48px 0 32px',
        borderTop: `1px solid ${theme.border}`,
        background: `linear-gradient(180deg, transparent, rgba(10,11,15,0.8))`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.05), transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div
        style={{
          ...styles.container,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="footer-inner"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '14px', fontWeight: 500, color: theme.textSecondary }}>
            © 2025{' '}
            <span style={{ ...styles.gradientText, fontWeight: 700 }}>Monishkumar AR</span>
          </p>
          <p style={{ fontSize: '12px', color: theme.textMuted, letterSpacing: '0.05em' }}>
            Built with React • Crafted with attention to detail
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'center' }}>
          {[
            { href: 'https://github.com/monish394', icon: <FaGithub size={20} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/armonishkumar78/', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:monish123ar@gmail.com', icon: <FaEnvelope size={20} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <FooterIcon key={href} href={href} label={label}>
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

function FooterIcon({ href, label, children }) {
  const { hovered, bind } = useHover();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...bind}
      aria-label={label}
      title={label}
      style={{
        color: hovered ? theme.accentLight : theme.textMuted,
        textDecoration: 'none',
        transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: hovered ? 'translateY(-3px) scale(1.2)' : 'translateY(0) scale(1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
  //made changes
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
        position: 'relative',
      }}
    >
      <GlobalBg3D />
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