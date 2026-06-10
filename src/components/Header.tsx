import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Height of fixed header + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const [pathname, hash] = path.split('#');
    
    if (location.pathname !== pathname) {
      // Navigate to home first, then scroll
      navigate(pathname);
      setTimeout(() => {
        if (hash) scrollToSection(hash);
      }, 100);
    } else {
      // Already on the page, just scroll
      if (hash) scrollToSection(hash);
    }
    
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-background/90 backdrop-blur-md border-b border-border/50"
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="71.429 104.464 316.964 110.714" height="40" width="112" className="text-primary">
            <g transform="matrix(0.420183, 0, 0, -0.495694, 67.627632, 346.169922)">
              <g transform="matrix(1, 0, 0, 1, -21.454798, 26.453064)">
                <path fill="#00b0f0" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M 638.034,400.2588 H 579.0453 V 440.026 H 748.2657 V 400.2588 H 689.5556 V 259.6663 H 638.034 Z"></path>
                <path fill="#00b0f0" fill-opacity="1" fill-rule="evenodd" stroke="none" d="m 475.7125,259.7247 v 180.3597 h 51.5217 V 259.7247 Z"></path>
                <path fill="#00b0f0" fill-opacity="1" fill-rule="evenodd" stroke="none" d="m 373.2381,439.2374 h 55.6741 l -77.1134,-72.2293 77.4468,-108.1304 h -62.0187 l -49.5232,76.6953 -24.1263,-22.4915 v -54.2038 h -48.2096 v 56.0157 z M 245.3678,365.5556 v 73.6818 h 48.2096 v -26.8016 z"></path>
                <path fill="#00b0f0" fill-opacity="1" fill-rule="evenodd" stroke="none" d="m 58.068,358.7247 33.0418,33.0415 c 0.9238,0.9241 2.4358,0.9241 3.3599,0 l 19.0854,-19.0854 10.398,10.398 c -2.2632,2.2737 -3.6624,5.408 -3.6624,8.8694 0,6.9437 5.6291,12.5727 12.5728,12.5727 6.9438,0 12.5725,-5.629 12.5725,-12.5727 0,-6.9438 -5.6287,-12.5725 -12.5725,-12.5725 -2.2748,0 -4.4087,0.604 -6.2495,1.6608 l -10.7073,-10.7073 18.8787,-18.8788 c 0.9238,-0.9238 0.9238,-2.4358 0,-3.3596 l -21.0929,-21.0929 16.7338,-16.7335 c 0.9238,-0.9241 2.4355,-0.9241 3.3596,0 l 30.373,30.373 c -1.7912,2.1725 -2.8673,4.9572 -2.8673,7.9931 0,6.9435 5.6291,12.5725 12.5725,12.5725 6.9438,0 12.5728,-5.629 12.5728,-12.5725 0,-6.9437 -5.629,-12.5728 -12.5728,-12.5728 -2.7079,0 -5.216,0.8564 -7.2683,2.3128 l -32.8099,-32.8099 c -0.9241,-0.9238 -2.4358,-0.9238 -3.3596,0 l -19.0854,19.0857 -9.8371,-9.8371 c 1.1087,-1.8731 1.7456,-4.0583 1.7456,-6.3929 0,-6.9435 -5.629,-12.5723 -12.5728,-12.5723 -6.9434,0 -12.5725,5.6288 -12.5725,12.5723 0,6.944 5.6291,12.5727 12.5725,12.5727 3.4036,0 6.4908,-1.3527 8.7543,-3.5492 l 9.5581,9.5581 -18.8787,18.8788 c -0.9238,0.9238 -0.9238,2.4355 0,3.3596 l 21.0928,21.0929 -16.7334,16.7334 c -0.9241,0.9241 -2.4361,0.9241 -3.3599,0 L 60.3332,356.286 c 1.4536,-2.0508 2.3079,-4.5564 2.3079,-7.2615 0,-6.9434 -5.629,-12.5728 -12.5725,-12.5728 -6.944,0 -12.5728,5.6294 -12.5728,12.5728 0,6.9438 5.6288,12.5728 12.5728,12.5728 3.0388,0 5.8261,-1.0783 7.9994,-2.8726 z m 36.7461,-9.4884 18.741,18.741 16.5268,-16.5269 c 0.9241,-0.9238 0.9241,-2.4358 0,-3.3596 l -18.741,-18.741 -16.5268,16.5269 c -0.9241,0.9238 -0.9241,2.4358 0,3.3596"></path>
              </g>
            </g>
          </svg>
        </Link>
        
        {/* Right: Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/#domains" 
            onClick={(e) => handleAnchorClick(e, '/#domains')}
            className="nav-link"
          >
            {t('nav.domains')}
          </a>
          <a 
            href="/#services" 
            onClick={(e) => handleAnchorClick(e, '/#services')}
            className="nav-link"
          >
            {t('nav.services')}
          </a>
          <Link to="/projects" className="nav-link">
            {t('nav.projects')}
          </Link>
          <a 
            href="/#contact" 
            onClick={(e) => handleAnchorClick(e, '/#contact')}
            className="nav-link"
          >
            {t('nav.contact')}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile: Hamburger & Language */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden"
      >
        <div className="pt-4 pb-6 px-4 space-y-4 border-t border-border/30 mt-4">
          <a
            href="/#domains"
            onClick={(e) => handleAnchorClick(e, '/#domains')}
            className="block py-3 px-4 text-sm first-letter:uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-lg transition-all"
          >
            {t('nav.domains')}
          </a>
          <a
            href="/#services"
            onClick={(e) => handleAnchorClick(e, '/#services')}
            className="block py-3 px-4 text-sm first-letter:uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-lg transition-all"
          >
            {t('nav.services')}
          </a>
          <Link
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className="block py-3 px-4 text-sm first-letter:uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-lg transition-all"
          >
            {t('nav.projects')}
          </Link>
          <a
            href="/#contact"
            onClick={(e) => handleAnchorClick(e, '/#contact')}
            className="block py-3 px-4 text-sm first-letter:uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-lg transition-all"
          >
            {t('nav.contact')}
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
