import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bot, Settings, Zap, Layers, Users, Shield } from 'lucide-react';

export default function FdeService() {
  const features = [
    {
      icon: Bot,
      title: 'AI工作流搭建',
      description: '为你的业务设计和设计定制专属的AI工作流程',
    },
    {
      icon: Settings,
      title: '业务流程自动化',
      description: '将重复性工作自动化，释放人力专注高价值工作',
    },
    {
      icon: Zap,
      title: '智能助手开发',
      description: '定制化的智能助手，提升团队效率',
    },
    {
      icon: Layers,
      title: '系统集成',
      description: '将AI能力无缝集成到现有业务系统中',
    },
    {
      icon: Users,
      title: 'AI培训',
      description: '团队AI培训，提升全员AI应用能力',
    },
    {
      icon: Shield,
      title: '持续技术支持',
      description: '7x24小时技术支持，确保系统稳定运行',
    },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      <section className="hero-bg min-h-[70vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8">
              <Bot className="text-secondary" size={18} />
              <span className="text-gray-300 text-sm">FDE · AI系统工程师</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">你的专属AI技术合伙人</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              一人公司的AI系统工程师服务，帮你搭建AI工作流、自动化系统、效率工具
            </p>
            <button className="btn-secondary px-8 py-4 rounded-full text-white font-semibold text-lg">
              了解更多
            </button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">全方位的AI技术服务</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              从咨询到实施，我们提供端到端的AI系统服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">我们能帮你做什么</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: '智能客服系统',
                desc: '7x24小时AI客服，自动回答常见问题，提升用户满意度提升50%+',
              },
              {
                title: '内容创作工具',
                desc: 'AI辅助内容自动生成，社交媒体、产品描述、营销文案等',
              },
              {
                title: '数据分析平台',
                desc: '自动分析业务数据，生成洞察报告，辅助决策',
              },
              {
                title: '流程自动化',
                desc: 'RPA+AI，自动化处理订单、邮件、报表等重复性工作',
              },
            ].map((item, index) => (
              <div key={index} className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}