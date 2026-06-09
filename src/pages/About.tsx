import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User, Target, Shield, Mail, MapPin, BookOpen, Cpu, Leaf } from 'lucide-react';

const facts = [
  { label: '所在地', value: '广东·珠海', icon: MapPin },
  { label: '联系邮箱', value: 'esopin@QQ.com', icon: Mail },
];

const services = [
  {
    name: 'AI可见度诊断',
    price: '¥299',
    desc: '一键获取7大AI引擎品牌可见度完整分析报告，含竞品对比与优化路线图。',
  },
  {
    name: 'FDE Core',
    price: '¥6,000/月',
    desc: '一人公司AI系统搭建服务，含系统诊断、工作流搭建、SOP模板。',
  },
  {
    name: 'FDE Pro',
    price: '¥18,000起/次',
    desc: '定制AI Agent搭建服务，含角色设计、部署、工具链接入、2周调优。',
  },
  {
    name: '植物配置AI助手',
    price: '¥18,000/次',
    desc: '面向景观设计的专业AI Agent。输入项目条件，智能推荐最佳植物配置方案。',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-text">关于朴风</span>
            </h1>
            <p className="text-xl text-gray-400">
              一个人，三条路。让好品牌在AI搜索时代被看见。
            </p>
          </div>
        </div>
      </section>

      {/* 创始人故事 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gold-text">创始人故事</span>
            </h2>

            <div className=" rounded-3xl p-8 md:p-12 space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                老张，从2003年入行景观设计，一做就是二十多年。在珠海创办了朴风景观设计研究中心。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                2017年，孩子确诊DMD（杜氏肌营养不良）。这个变故改变了很多事。他开始用「旭辰爸爸」这个身份做DMD科普自媒体，也重新思考自己能做什么、该做什么。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                与此同时，AI大模型正在重塑信息分发的方式。做了二十多年设计的老张比大多数人都清楚"被搜不到"是什么感觉。他做了一个决定——从景观设计师转型为AI系统工程师，一人公司，重新出发。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                "朴风"这个名字取自"朴素的风"。不搞花活，踏踏实实把事做成。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                2026年开始布局AI搜索优化，先在GitHub Pages上建站跑通模型，再部署到阿里云服务器，一步步验证、迭代。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 做什么 */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gold-text">做什么</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className=" rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-5">
                  <Target className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">GEO品牌可见度优化</h3>
                <p className="text-gray-400 leading-relaxed">
                  帮品牌在ChatGPT、豆包、Kimi等AI搜索中获得更好的曝光和推荐。
                </p>
              </div>

              <div className=" rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-5">
                  <Cpu className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">FDE AI系统工程师</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI应用落地、系统集成、自动化流程，把技术变成可用的产品。
                </p>
              </div>

              <div className=" rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                  <BookOpen className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">自媒体内容</h3>
                <p className="text-gray-400 leading-relaxed">
                  旭辰爸爸（DMD科普）、AI摆渡人老张（AI实战）、朴风GEO（行业观察）。
                </p>
              </div>
            </div>

            {/* 服务定价简表 */}
            <div className="mt-12 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">服务定价</h3>
              <div className="space-y-5">
                {services.map((s) => (
                  <div
                    key={s.name}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-5 last:border-0 last:pb-0"
                  >
                    <div>
                      <span className="text-white font-semibold">{s.name}</span>
                      <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
                    </div>
                    <span className="text-cyan-400 font-bold text-lg mt-2 sm:mt-0 sm:ml-4 shrink-0">
                      {s.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 为什么值得信任 */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gold-text">为什么值得信任</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className=" rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">二十多年实战出身</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  不是理论派。做了二十多年设计、管过项目、经历过从零到一，知道什么是真实的市场竞争。
                </p>
              </div>

              <div className=" rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">先跑通自己</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  先拿自己的网站和自媒体做试验田，跑通了再帮别人做。一人公司，自己就是产品。
                </p>
              </div>

              <div className=" rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">专注AI搜索</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  不做大而全。所有精力集中在GEO这一个方向，持续迭代方法论和实操经验。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系 CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className=" rounded-3xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gold-text">联系老张</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                如果你也在关注AI搜索，或者想聊聊GEO、AI系统、一人公司——
                <br />直接发邮件，老张亲自回。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 text-gray-300">
                    <f.icon className="w-5 h-5 text-cyan-400" />
                    <span>{f.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:esopin@QQ.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5" />
                发送邮件
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
