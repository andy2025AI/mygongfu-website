import { Quote, Mail } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-dark-light to-dark-lighter border border-white/10">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                        <span className="text-6xl font-bold text-white">张</span>
                      </div>
                      <p className="text-gray-400">创始人</p>
                      <p className="text-gray-500 text-sm mt-1">📍 珠海 · 一人公司</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-secondary opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-20"></div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                <Quote className="text-primary" size={16} />
                <span className="text-gray-300 text-sm">来自创始人</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gold-text">为什么要做朴风？</span>
              </h2>

              <blockquote className="text-xl text-gray-300 mb-8 leading-relaxed">
                "做了二十多年景观设计，我比大多数人都更清楚'被搜不到'是什么感觉。
                当AI搜索开始替代传统搜索，我发现自己二十多年积累的品牌认知在AI里就是一张白纸。
                朴风GEO就是从这里开始的——先拿自己开刀，跑通了再帮别人做。"
              </blockquote>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">张</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">老张</h4>
                    <p className="text-gray-400">AI系统工程师 · 从景观设计转行</p>
                  </div>
                </div>

                <div className="flex space-x-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold gradient-text">20+</div>
                    <div className="text-gray-400 text-sm">年景观设计经验</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">1</div>
                    <div className="text-gray-400 text-sm">个人独资企业</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">1</div>
                    <div className="text-gray-400 text-sm">个人FDE服务</div>
                  </div>
                </div>
              </div>

              {/* 从做什么到为什么选择我 */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <h3 className="text-lg font-semibold text-white">三个方向，一个落点</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">▸</span>
                    <span><strong className="text-gray-300">GEO</strong> — 帮品牌在AI搜索里被找到</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">▸</span>
                    <span><strong className="text-gray-300">FDE</strong> — 用AI重构工作流，一人顶一队</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">▸</span>
                    <span><strong className="text-gray-300">自媒体</strong> — 记录一人公司的真实打法</span>
                  </li>
                </ul>
                <p className="text-gray-500 text-xs">
                  做长期有价值的事，答案会自己浮现。
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="mailto:esopin@QQ.com"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-light transition-colors"
                >
                  <Mail size={16} />
                  <span>欢迎联系：esopin@QQ.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
