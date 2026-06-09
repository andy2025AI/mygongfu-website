import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const methodItems = [
  {
    title: 'FSD三看诊断法',
    desc: '看品牌、看内容、看技术——系统化诊断品牌AI可见度的核心方法论。',
    icon: '🔍',
  },
  {
    title: 'GEO五维评估框架',
    desc: '从提及率、排名、情感、覆盖、一致性五个维度评估品牌AI表现。',
    icon: '📊',
  },
  {
    title: 'FDE系统搭建方法论',
    desc: 'Founder-Driven Engineering——一人公司AI系统的搭建原则与最佳实践。',
    icon: '⚙️',
  },
  {
    title: '多账号内容运营体系',
    desc: '一人管理6个账号的内容策略、节奏控制与跨平台协同。',
    icon: '📱',
  },
];

export default function Methods() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg min-h-[40vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-text">方法</span>
            </h1>
            <p className="text-xl text-gray-400">
              一人公司AI系统的方法论与实战框架。从GEO诊断到FDE搭建，可复用的方法论沉淀。
            </p>
          </div>
        </div>
      </section>

      {/* 方法卡片 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {methodItems.map((item, i) => (
                <div key={i} className="bg-black rounded-2xl p-8 border border-white/10 hover:border-[#FFD700]/30 transition-colors group">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#FFD700] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl p-10 md:p-14 text-center border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="gold-text">想了解这些方法在你的业务中如何落地？</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                预约一次免费诊断，看看你的品牌在AI搜索中的真实表现。
              </p>
              <Link to="/#hero-diagnosis" className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-full font-semibold">
                免费诊断
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
