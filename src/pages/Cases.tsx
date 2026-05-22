import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, BarChart3, TrendingUp } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      name: '科技初创公司A',
      industry: 'SaaS',
      before: 'AI搜索提及率几乎为0',
      after: '3个月内AI搜索提及率提升300%',
      description: '通过GEO服务，该品牌在DeepSeek等平台的推荐率大幅提升，自然流量增长250%。',
    },
    {
      name: '电商品牌B',
      industry: '电子商务',
      before: '竞品推荐排名靠后',
      after: '成为AI推荐Top3',
      description: '优化后，在相关产品推荐中，该品牌从无到有，进入Top3推荐榜单。',
    },
    {
      name: '咨询公司C',
      industry: '专业服务',
      before: 'AI搜索负面评价较多',
      after: '情感倾向从40%正面提升至85%正面',
      description: '通过声誉管理，大幅改善了AI搜索中的品牌形象。',
    },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      <section className="hero-bg min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">成功案例</span>
            </h1>
            <p className="text-xl text-gray-400">
              看看我们如何帮助品牌在AI搜索时代获得成功
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {cases.map((item, index) => (
              <div key={index} className="glass rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-primary text-sm font-semibold mb-2">{item.industry}</div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{item.name}</h3>
                    <p className="text-gray-400 mb-6">{item.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                      <div className="text-gray-400 text-sm mb-2">优化前</div>
                      <div className="text-white font-semibold">{item.before}</div>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                      <div className="text-gray-400 text-sm mb-2">优化后</div>
                      <div className="text-white font-semibold">{item.after}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-light/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {[
              { number: '500+', label: '服务品牌' },
              { number: '300%', label: '平均提升' },
              { number: '98%', label: '客户满意度' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}