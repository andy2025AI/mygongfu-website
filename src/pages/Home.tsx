import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import FounderSection from '../components/FounderSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: 'search' as const,
      title: '朴风GEO · AI可见度诊断',
      description: '品牌在AI搜索里还活着吗？一键扫描DeepSeek、豆包、Kimi等15+AI引擎，获取品牌可见度完整报告。',
      features: [
        '15+ AI引擎全面覆盖',
        '品牌提及率深度分析',
        '情感倾向智能评估',
        '竞品对比与优化路线图',
      ],
      path: '/geo/',
      gradient: 'bg-gradient-to-br from-primary to-primary-dark',
      price: '¥299',
      cta: '立即诊断',
    },
    {
      icon: 'bot' as const,
      title: 'FDE · AI系统搭建',
      description: '一人公司的AI技术合伙人。从系统诊断到Agent部署，帮你搭建全套AI工作流，释放人力聚焦核心。',
      features: [
        'FSD系统诊断',
        '定制AI工作流搭建',
        'Agent开发+工具链接入',
        '2周调优+持续技术支持',
      ],
      path: '/fde/',
      gradient: 'bg-gradient-to-br from-secondary to-secondary-dark',
      price: '¥999~¥68,000',
      cta: '了解详情',
    },
    {
      icon: 'leaf' as const,
      title: '朴风景观AI · 植物配置助手',
      description: '输入项目条件，AI智能推荐最佳植物配置方案。23年景观设计经验训练的专业Agent，面向设计师和业主。',
      features: [
        '乔木/灌木/地被/棕榈四层知识库',
        '项目条件智能匹配',
        '华南气候优先优化',
        '配置方案+养护建议一键生成',
      ],
      path: 'https://pufeng.mygongfu.com',
      gradient: 'bg-gradient-to-br from-[#00E676] to-[#00C853]',
      price: '¥18,000/次',
      cta: '了解详情',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      {/* 三产品线管道式布局 */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gold-text">一人公司AI工具箱</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
              从景观设计师到AI系统工程师<br className="hidden sm:inline" />
              GEO品牌诊断 · FDE系统搭建 · 植物配置AI
            </p>
          </div>

          {/* 三列管道 */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <ServiceCard {...service} />
                {/* 管道连接箭头（桌面端显示） */}
                {index < services.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowDown className="text-white/20 -rotate-90" size={32} />
                  </div>
                )}
                {/* 移动端箭头 */}
                {index < services.length - 1 && (
                  <div className="flex md:hidden justify-center py-2">
                    <ArrowDown className="text-white/20" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 底部管道流程说明 */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-black px-6 py-3 rounded-full border border-white/10">
              <span className="text-gray-500 text-sm">📋 诊断</span>
              <span className="text-[#FFD700]">→</span>
              <span className="text-gray-500 text-sm">🔧 搭建</span>
              <span className="text-[#FFD700]">→</span>
              <span className="text-gray-300 text-sm">🌿 行业应用</span>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              不是「平台」，是帮人做出好景观的AI工具站
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
    </div>
  );
}
