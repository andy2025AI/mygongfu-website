import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">朴</span>
              </div>
              <span className="text-xl font-bold gradient-text">朴风 Pu Feng</span>
            </Link>
            <p className="text-gray-400 mb-6">
              在AI搜索时代，让你的品牌被发现、被推荐、被记住。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">服务</h4>
            <ul className="space-y-4">
              <li><Link to="/services/geo" className="text-gray-400 hover:text-primary transition-colors duration-300">GEO AI可见度优化</Link></li>
              <li><Link to="/services/fde" className="text-gray-400 hover:text-primary transition-colors duration-300">FDE AI系统工程师</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300">免费诊断</Link></li>
              <li><Link to="/cases" className="text-gray-400 hover:text-primary transition-colors duration-300">成功案例</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">关于</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">关于我们</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300">团队介绍</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300">GEO周报</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300">加入我们</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-primary" />
                <span>hello@mygongfu.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-primary" />
                <span>+86 138 8888 8888</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span>北京市朝阳区科技园区</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 朴风 Pu Feng. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">隐私政策</Link>
              <Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">服务条款</Link>
              <Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">Cookie政策</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
