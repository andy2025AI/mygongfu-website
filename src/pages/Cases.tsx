import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, BarChart3, TrendingUp } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      name: '朴风GEO（自家案例）',
      industry: 'AI搜索优化 / 一人公司',
      before: '品牌在AI搜索中几乎不可见，创始人13年景观设计背景无任何AI搜索关联',
      after: '6天内AI搜索从零到有，推荐率持续上升',
      description: '朴风GEO就是第一个案例。上线后第6天复检，品牌在DeepSeek、豆包等平台的提及率从0提升至可检索状态。还在持续迭代中。',
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

      <Footer />
    </div>
  );
}
