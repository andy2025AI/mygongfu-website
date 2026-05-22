import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PricingCard from '../components/PricingCard';
import FounderSection from '../components/FounderSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  const services = [
    {
      icon: 'search' as const,
      title: '朴风GEO · AI可见度优化',
      description: '提升你的品牌在DeepSeek、豆包、Kimi等AI搜索平台的可见度，让AI主动推荐你的品牌。',
      features: [
        '15+ AI平台全面覆盖',
        '品牌提及率深度分析',
        '情感倾向智能评估',
        '专属优化建议报告',
      ],
      path: '/services/geo',
      gradient: 'bg-gradient-to-br from-primary to-primary-dark',
    },
    {
      icon: 'bot' as const,
      title: 'FDE · AI系统工程师',
      description: '一人公司的AI技术合伙人，帮你搭建AI工作流、自动化系统、效率工具，释放人力，聚焦核心。',
      features: [
        '定制化AI工作流搭建',
        '业务流程自动化',
        '智能助手开发',
        '持续技术支持',
      ],
      path: '/services/fde',
      gradient: 'bg-gradient-to-br from-secondary to-secondary-dark',
    },
  ];

  const pricingPlans = [
    {
      name: 'AI可见度诊断',
      price: '¥99',
      description: '快速了解你的品牌在AI搜索中的表现',
      features: [
        '7大AI平台诊断',
        '品牌提及率分析',
        '核心优化建议',
        '48小时内交付PDF',
      ],
      buttonText: '立即诊断',
    },
    {
      name: 'GEO Core',
      price: '¥6,000',
      description: '适合成长中的品牌',
      features: [
        '月度品牌可见度报告',
        'AI内容策略与撰写',
        '品牌关键词优化',
        '竞品可见度对比',
        '每月2次咨询',
      ],
      isPopular: true,
      buttonText: '开始使用',
    },
    {
      name: 'GEO Pro',
      price: '¥18,000',
      description: '专业级品牌AI营销服务',
      features: [
        '全部Core功能',
        '内容创作与分发',
        '全平台关系管理',
        '季度战略复盘',
        '专属顾问服务',
        '无限次咨询',
      ],
      buttonText: '联系我们',
    },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">我们的服务</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              从AI可见度优化到AI系统搭建，我们提供全方位的AI时代品牌增长解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-dark-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">GEO品牌可见度服务</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              选择适合你的方案，开启AI搜索时代的品牌增长之旅
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
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
