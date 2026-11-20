import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = 'home';

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAF8]/95 backdrop-blur-md border-b border-[#172A25]/12">
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#176B57] origin-left z-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="inline-flex items-center gap-3 text-[#172A25] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B57]"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#176B57]/30 bg-[#DFF4EC] text-[#176B57] font-mono text-xs font-semibold tracking-wider">
            {PROFILE.initials}
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">{PROFILE.name}</span>
        </a>

        {/* Clean Single-Line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1.5 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B57] ${
                  isActive ? 'text-[#176B57]' : 'text-[#64748B] hover:text-[#172A25]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="editorialNavUnderline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#176B57]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#172A25] hover:bg-[#DFF4EC] rounded-lg transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#F8FAF8] border-b border-[#172A25]/15"
          >
            <nav aria-label="Mobile Navigation" className="px-4 py-2 divide-y divide-[#172A25]/8">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`flex items-center justify-between py-3.5 text-sm font-medium ${
                      isActive ? 'text-[#176B57]' : 'text-[#172A25]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[#64748B] tabular-nums">
                      0{idx + 1}
                    </span>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
