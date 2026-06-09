import { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const services = [
  { name: 'GEO品牌诊断', price: '¥299', path: '/geo/', desc: 'AI搜索可见度扫描' },
  { name: 'FDE系统搭建', price: '¥999起', path: '/fde/', desc: '一人公司AI工作流' },
  { name: '植物配置AI', price: '¥18K/次', path: 'https://pufeng.mygongfu.com', desc: '景观设计专业Agent', external: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const scrollToDiagnosis = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById('hero-diagnosis')?.scrollIntoView({ behavior: 'smooth' });
    }
    // If not on home, Link to / will take user there, then the page load will show hero
  };

  const handleServiceClick = (service: typeof services[0]) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    // If external, let the anchor handle it
    // If internal, React Router handles it
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled ? 'border-b border-white/10' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center">
              <span className="text-black font-bold text-xl font-display">朴</span>
            </div>
            <span className="text-xl font-bold text-[#FFD700] font-display tracking-tight">朴风</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {/* 首页 */}
            <Link to="/" className="text-gray-300 hover:text-gold transition-colors duration-300 font-medium">
              首页
            </Link>

            {/* 服务 (Dropdown) */}
            <div className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-gold transition-colors duration-300 font-medium">
                <span>服务</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/50 overflow-hidden fade-in-up">
                  <div className="p-2 space-y-1">
                    {services.map((s) => (
                      s.external ? (
                        <a
                          key={s.name}
                          href={s.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div>
                            <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">{s.name}</div>
                            <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
                          </div>
                          <span className="text-cyan-400 text-xs font-semibold shrink-0 ml-3">{s.price}</span>
                        </a>
                      ) : (
                        <Link
                          key={s.name}
                          to={s.path}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div>
                            <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">{s.name}</div>
                            <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
                          </div>
                          <span className="text-cyan-400 text-xs font-semibold shrink-0 ml-3">{s.price}</span>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 文章 */}
            <Link to="/articles" className="text-gray-300 hover:text-gold transition-colors duration-300 font-medium">
              文章
            </Link>

            {/* 方法 */}
            <Link to="/methods" className="text-gray-300 hover:text-gold transition-colors duration-300 font-medium">
              方法
            </Link>

            {/* 案例 */}
            <Link to="/cases" className="text-gray-300 hover:text-gold transition-colors duration-300 font-medium">
              案例
            </Link>

            {/* 关于 */}
            <Link to="/about" className="text-gray-300 hover:text-gold transition-colors duration-300 font-medium">
              关于
            </Link>

            {/* CTA — 免费诊断 */}
            <Link
              to={isHome ? '#hero-diagnosis' : '/'}
              onClick={scrollToDiagnosis}
              className="btn-gold px-5 py-2 rounded-full font-medium flex items-center space-x-2"
            >
              <Search size={16} />
              <span>免费诊断</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 fade-in-up">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-primary transition-colors py-2">首页</Link>

              {/* 服务 (mobile: expandable) */}
              <div className="py-2">
                <div className="text-gray-300 font-medium mb-2">服务</div>
                <div className="pl-4 space-y-2">
                  {services.map((s) => (
                    s.external ? (
                      <a key={s.name} href={s.path} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-between text-gray-400 hover:text-white py-1.5 text-sm"
                      >
                        <span>{s.name}</span>
                        <span className="text-cyan-400 text-xs">{s.price}</span>
                      </a>
                    ) : (
                      <Link key={s.name} to={s.path}
                        className="flex items-center justify-between text-gray-400 hover:text-white py-1.5 text-sm"
                      >
                        <span>{s.name}</span>
                        <span className="text-cyan-400 text-xs">{s.price}</span>
                      </Link>
                    )
                  ))}
                </div>
              </div>

              <Link to="/articles" className="text-gray-300 hover:text-primary transition-colors py-2">文章</Link>
              <Link to="/methods" className="text-gray-300 hover:text-primary transition-colors py-2">方法</Link>
              <Link to="/cases" className="text-gray-300 hover:text-primary transition-colors py-2">案例</Link>
              <Link to="/about" className="text-gray-300 hover:text-primary transition-colors py-2">关于</Link>

              <Link
                to={isHome ? '#hero-diagnosis' : '/'}
                onClick={(e) => { scrollToDiagnosis(e); setIsMobileMenuOpen(false); }}
                className="btn-gold px-6 py-3 rounded-full font-medium text-center flex items-center justify-center space-x-2"
              >
                <Search size={16} />
                <span>免费诊断</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
