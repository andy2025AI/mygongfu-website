import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, BarChart3, TrendingUp, Users, Zap, ShieldCheck } from 'lucide-react';

export default function GeoService() {
  const features = [
    {
      icon: Search,
      title: '15+ AI平台覆盖',
      description: '全面监控DeepSeek、豆包、Kimi、通义千问等主流AI搜索平台',
    },
    {
      icon: BarChart3,
      title: '品牌提及率分析',
      description: '深入分析品牌在AI回答中的提及频率和位置',
    },
    {
      icon: TrendingUp,
      title: '情感倾向评估',
      description: 'AI对品牌的评价是正面、中性还是负面？我们帮你量化分析',
    },
    {
      icon: Users,
      title: '竞品对比分析',
      description: '与竞争对手的AI可见度对比，找到突破机会',
    },
    {
      icon: Zap,
      title: '关键词优化',
      description: '针对AI搜索算法优化品牌关键词，提高被推荐概率',
    },
    {
      icon: ShieldCheck,
      title: '品牌声誉管理',
      description: '及时发现和应对AI搜索中的负面信息',
    },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      <section className="hero-bg min-h-[70vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8">
              <Search className="text-primary" size={18} />
              <span className="text-gray-300 text-sm">GEO · AI可见度优化</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">让AI主动推荐你的品牌</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              在AI搜索时代，我们帮助品牌在DeepSeek等AI平台获得更多曝光和正面推荐
            </p>
            <button className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">
              立即开始
            </button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">全面的AI可见度优化</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              从诊断到优化，我们提供端到端的GEO服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
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
              <span className="gradient-text">GEO服务流程</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              简单四步，提升你的品牌AI可见度
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: '品牌诊断', desc: '全面分析品牌在AI搜索中的现状' },
                { step: 2, title: '策略制定', desc: '定制专属的AI可见度提升方案' },
                { step: 3, title: '优化执行', desc: '内容创作、关键词优化、平台关系' },
                { step: 4, title: '持续监控', desc: '月度报告，持续优化改进' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}