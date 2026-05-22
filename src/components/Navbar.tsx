import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '专栏', path: '/column' },
    { name: 'GEO服务', path: '/services/geo' },
    { name: 'FDE服务', path: '/services/fde' },
    { name: '案例', path: '/cases' },
    { name: '关于', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/90 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">朴</span>
            </div>
            <span className="text-xl font-bold gradient-text">朴风 Pu Feng</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/"
              className="btn-primary px-6 py-2 rounded-full text-white font-medium"
            >
              <span className="flex items-center space-x-2">
                <Search size={18} />
                <span>免费诊断</span>
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 fade-in-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary px-6 py-3 rounded-full text-white font-medium text-center"
              >
                免费诊断
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
