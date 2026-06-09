import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center">
                <span className="text-black font-bold text-xl font-display">朴</span>
              </div>
              <span className="text-xl font-bold text-[#FFD700] font-display tracking-tight" style={{color: '#FFD700'}}>朴风 Pu Feng</span>
            </Link>
            <p className="text-gray-400 mb-6">
              在AI搜索时代，让你的品牌被发现、被推荐、被记住。
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">服务</h4>
            <ul className="space-y-4">
              <li><a href="/geo/" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">GEO AI可见度诊断</a></li>
              <li><a href="/fde/" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">FDE AI系统搭建</a></li>
              <li><a href="https://pufeng.mygongfu.com" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">植物配置AI助手</a></li>
              <li><Link to="/#hero-diagnosis" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">免费诊断</Link></li>
              <li><Link to="/cases" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">成功案例</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">关于</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">关于我们</Link></li>
              <li><a href="https://pufeng.mygongfu.com" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">植物配置AI助手</a></li>
              <li><a href="https://dmd.mygongfu.com" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">旭辰DMD知识库</a></li>
              <li><Link to="/column" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">专栏</Link></li>
              <li><Link to="/methods" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">方法</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-[#FFD700]" />
                <span>esopin@QQ.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-[#FFD700] flex-shrink-0 mt-1" />
                <span>中国·珠海</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2026 朴风 Pu Feng
            </p>
            {/* TODO: 填入真实ICP备案号后取消注释 */}
            {/* <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">
              粤ICP备XXXXXXXX号
            </a> */}
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-[#FFD700] text-sm transition-colors duration-300">隐私政策</Link>
              <Link to="/terms" className="text-gray-500 hover:text-[#FFD700] text-sm transition-colors duration-300">服务条款</Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-[#FFD700] text-sm transition-colors duration-300">Cookie政策</Link>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            一人公司系统搭建？关注微信服务号「<span className="text-[#FFD700]">单兵系统</span>」· 微信号：danbingxitong
          </p>
        </div>
      </div>
    </footer>
  );
}
