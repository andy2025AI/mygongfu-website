import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, BarChart3, TrendingUp, Search, CheckCircle2, Target, MessageSquare, Bot, Mail, ExternalLink } from 'lucide-react';

export default function Cases() {
  const diagnosisPlatforms = [
    { name: '百度百科', status: '缺失', impact: '高' },
    { name: '知乎', status: '覆盖不足', impact: '高' },
    { name: 'B站', status: '无内容', impact: '中' },
    { name: '抖音', status: '无内容', impact: '中' },
    { name: '微信公众号', status: '无内容', impact: '中' },
    { name: '小红书', status: '无内容', impact: '中' },
    { name: '微博', status: '无内容', impact: '低' },
  ];

  const aiEngines = [
    'DeepSeek', '豆包', 'Kimi', '通义千问', '文心一言', '智谱清言', '讯飞星火'
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-text">成功案例</span>
            </h1>
            <p className="text-xl text-gray-400">
              每一个案例都是真实的——因为我们自己就是第一个客户
            </p>
          </div>
        </div>
      </section>

      {/* ────────────── 案例1：朴风GEO 自家案例 ────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className=" rounded-3xl p-8 md:p-12 mb-8">
              {/* 标签 */}
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Search className="text-primary" size={14} />
                <span className="text-primary text-xs font-semibold">GEO · AI可见度优化</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                朴风GEO<span className="text-gray-500 text-lg ml-3 font-normal">自家案例</span>
              </h2>
              <p className="text-gray-400 text-base mb-8">
                2026年5月，mygongfu.com 上线。同时我们跑通了 GEO 自诊断工具——用自己当小白鼠。
              </p>

              {/* 阶段一：背景 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="text-primary" size={20} />
                  背景
                </h3>
                <div className="bg-black rounded-2xl p-6 border border-white/5">
                  <p className="text-gray-300 leading-relaxed">
                    朴风GEO 是一个真正的一人公司项目。创始人拥有二十多年景观设计背景，在AI搜索优化领域从零起步。
                    mygongfu.com 上线之前，品牌「朴风GEO」在AI搜索中几乎完全不可见——
                    在 DeepSeek、豆包、Kimi 等主流AI引擎中搜索「GEO」「AI搜索优化」「品牌可见度」等关键词，
                    没有任何内容关联到朴风GEO。
                  </p>
                </div>
              </div>

              {/* 阶段二：诊断过程 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="text-primary" size={20} />
                  诊断过程
                </h3>

                <div className="bg-black rounded-2xl p-6 border border-white/5 mb-4">
                  <p className="text-gray-300 mb-4">
                    使用 GEO 自诊断工具对朴风GEO进行全面扫描。工具向 AI 引擎发送针对性Prompt，
                    同时检索内容平台覆盖情况。
                  </p>
                  {/* API 返回数据模拟 */}
                  <div className="bg-black/40 rounded-xl p-4 md:p-6 font-mono text-sm border border-white/5 overflow-x-auto">
                    <div className="flex items-center gap-2 text-gray-500 mb-3">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-[#00E676]" />
                      <span className="ml-2">GEO 诊断报告 / 朴风GEO</span>
                    </div>
                    <pre className="text-gray-300 whitespace-pre-wrap">{`{
  "brand": "朴风GEO",
  "scanTime": "2026-05-01T10:00:00Z",
  "overallScore": 30,
  "maxScore": 100,
  "aiEngines": {
    "DeepSeek": { "mentionRate": "0%", "sentiment": null },
    "豆包":     { "mentionRate": "0%", "sentiment": null },
    "Kimi":     { "mentionRate": "0%", "sentiment": null },
    "通义千问": { "mentionRate": "0%", "sentiment": null },
    "文心一言": { "mentionRate": "0%", "sentiment": null },
    "智谱清言": { "mentionRate": "0%", "sentiment": null },
    "讯飞星火": { "mentionRate": "0%", "sentiment": null }
  },
  "contentPlatforms": {
    "百度百科":  { "status": "missing",     "weight": "high" },
    "知乎":      { "status": "insufficient", "weight": "high" },
    "B站":       { "status": "missing",     "weight": "medium" },
    "抖音":      { "status": "missing",     "weight": "medium" },
    "微信公众号": { "status": "missing",     "weight": "medium" },
    "小红书":    { "status": "missing",     "weight": "medium" },
    "微博":      { "status": "missing",     "weight": "low" }
  },
  "gaps": [
    "缺少百度百科词条，影响AI引用的权威信源",
    "知乎内容覆盖不足，高权重平台无品牌相关内容",
    "全平台内容缺失，AI引擎无法建立品牌关联"
  ],
  "recommendations": [
    "优先建立百度百科词条",
    "在知乎发布行业深度内容",
    "全平台内容布局策略"
  ]
}`}</pre>
                  </div>
                </div>

                {/* 诊断发现的Gaps可视化 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black rounded-2xl p-6 border border-white/5">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <MessageSquare className="text-[#FFD700]" size={16} />
                      7大内容平台诊断
                    </h4>
                    <div className="space-y-2">
                      {diagnosisPlatforms.map((p, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">{p.name}</span>
                          <div className="flex items-center gap-3">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              p.status === '缺失' ? 'bg-red-500/10 text-red-400' :
                              p.status === '覆盖不足' ? 'bg-yellow-500/10 text-[#FFD700]' :
                              'bg-gray-500/10 text-gray-500'
                            }`}>{p.status}</span>
                            <span className={`text-xs ${
                              p.impact === '高' ? 'text-red-400' :
                              p.impact === '中' ? 'text-[#FFD700]' : 'text-gray-500'
                            }`}>{p.impact}影响</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-black rounded-2xl p-6 border border-white/5">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <BarChart3 className="text-[#FFD700]" size={16} />
                      7大AI引擎诊断结果
                    </h4>
                    <div className="space-y-2">
                      {aiEngines.map((engine, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">{engine}</span>
                          <span className="text-red-400 text-xs">提及率 0%</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300 font-semibold">GEO评分</span>
                        <span className="text-red-400 font-bold text-lg">30/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 阶段三：行动 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="text-primary" size={20} />
                  行动
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: '建立百度百科词条', desc: '整理"朴风GEO"品牌资料，完成百度百科词条创建，建立AI搜索权威信源根基' },
                    { title: '知乎内容布局', desc: '围绕"AI搜索优化""GEO""一人公司"等关键词，撰写行业深度内容，布局知乎阵地' },
                    { title: '全平台内容同步', desc: '将mygongfu.com官网内容同步分发至B站、小红书、微信公众号等平台，扩大覆盖' },
                    { title: 'SEO基础优化', desc: '优化官网结构、Meta信息、结构化数据，提升搜索引擎和AI引擎的抓取效率' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black rounded-xl p-5 border border-white/5">
                      <div className="text-primary text-sm font-semibold mb-1">Step {i + 1}</div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 阶段四：效果 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-[#00E676]" size={20} />
                  效果
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#00E676]/10 border border-[#00E676]/20 rounded-2xl p-6 text-center">
                    <div className="text-gray-400 text-sm mb-1">上线后复检</div>
                    <div className="text-[#00E676] font-bold text-2xl">6天</div>
                    <div className="text-gray-500 text-xs mt-1">品牌从零到可检索</div>
                  </div>
                  <div className="bg-[#00E676]/10 border border-[#00E676]/20 rounded-2xl p-6 text-center">
                    <div className="text-gray-400 text-sm mb-1">AI引擎覆盖</div>
                    <div className="text-[#00E676] font-bold text-2xl">7+</div>
                    <div className="text-gray-500 text-xs mt-1">主流AI引擎可检索</div>
                  </div>
                  <div className="bg-[#00E676]/10 border border-[#00E676]/20 rounded-2xl p-6 text-center">
                    <div className="text-gray-400 text-sm mb-1">品牌提及率</div>
                    <div className="text-[#00E676] font-bold text-2xl">↑0→有</div>
                    <div className="text-gray-500 text-xs mt-1">持续上升中</div>
                  </div>
                </div>
                <div className="bg-black rounded-2xl p-6 border border-white/5">
                  <p className="text-gray-300 leading-relaxed">
                    朴风GEO的GEO评分从初诊的 <span className="text-red-400 font-semibold">30/100</span> 开始提升。
                    更重要的是，我们用自己的案例验证了 GEO 自诊断工具的有效性——
                    它能准确识别品牌在AI搜索中的盲区，并提供可执行的优化路径。
                    这个案例还在持续迭代中，评分也在不断改善。
                  </p>
                </div>
              </div>

              {/* 关键数据：产品体系 */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-gray-500 text-sm mb-3">案例中使用的产品</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/5 text-gray-300 text-sm px-4 py-2 rounded-full border border-white/10">¥299 GEO诊断</span>
                  <span className="bg-white/5 text-gray-300 text-sm px-4 py-2 rounded-full border border-white/10">¥6,000 FDE Core</span>
                  <span className="bg-white/5 text-gray-300 text-sm px-4 py-2 rounded-full border border-white/10">¥18,000起 FDE Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── 案例2：FDE 自家案例 ────────────── */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className=" rounded-3xl p-8 md:p-12">
              {/* 标签 */}
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-6">
                <Bot className="text-secondary" size={14} />
                <span className="text-secondary text-xs font-semibold">FDE · AI系统工程师</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                一人公司AI系统搭建<span className="text-gray-500 text-lg ml-3 font-normal">自家案例</span>
              </h2>
              <p className="text-gray-400 text-base mb-8">
                朴风GEO不仅是一套GEO服务，更是一人公司AI系统搭建的完整实践。
              </p>

              {/* 背景 */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-3">背景</h3>
                <p className="text-gray-300 leading-relaxed">
                  朴风GEO是一个典型的一人公司场景：创始人同时负责策略、内容、技术、运营。
                  要让这个模式跑通，必须用AI系统把各环节串联起来——从内容生产到分发监控，再到GEO诊断。
                </p>
              </div>

              {/* 搭建的系统 */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4">搭建的AI系统</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'GEO自诊断工具',
                      desc: '自动扫描AI搜索引擎和内容平台，输出品牌可见度报告。就是我们用来诊断自己的那个工具。',
                      icon: Search,
                    },
                    {
                      title: '内容生产Pipeline',
                      desc: 'AI辅助的内容创作-审核-分发工作流，覆盖知乎、B站、小红书等多平台，一人即可运营。',
                      icon: MessageSquare,
                    },
                    {
                      title: 'AI搜索监控系统',
                      desc: '持续追踪品牌在DeepSeek、豆包等AI引擎中的提及率和情感倾向，异常自动告警。',
                      icon: BarChart3,
                    },
                    {
                      title: '数据分析看板',
                      desc: '统一看板展示GEO评分变化、内容覆盖进度、AI引擎收录状态，一目了然。',
                      icon: TrendingUp,
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-black rounded-xl p-5 border border-white/5 flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#00E676] flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black rounded-2xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  这套系统让一个人就能完成原本需要3-5人团队才能做的事情。
                  GEO诊断从手动查询需要2小时缩短到<strong className="text-white">自动完成仅需5分钟</strong>；
                  内容分发从逐平台发布变为<strong className="text-white">一键多渠道同步</strong>。
                  这也是我们FDE服务的核心价值——用AI系统帮一人公司把效率拉满。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── CTA 联系我们 ────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className=" rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gold-text">让我们的案例成为你的起点</span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 max-w-xl mx-auto">
                无论你是想诊断品牌在AI搜索中的可见度，还是需要AI系统帮你提升效率——我们都可以聊聊。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="text-primary" size={18} />
                  <a href="mailto:esopin@QQ.com" className="text-white hover:text-primary transition-colors">
                    esopin@QQ.com
                  </a>
                </div>
                <span className="hidden sm:inline text-gray-600">|</span>
                <div className="text-gray-400 text-sm">
                  或直接体验 <a href="/geo/" className="text-primary hover:underline">GEO诊断</a>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="bg-white/5 text-gray-400 text-sm px-4 py-2 rounded-full border border-white/10">¥299 深度诊断</span>
                <span className="bg-white/5 text-gray-400 text-sm px-4 py-2 rounded-full border border-white/10">¥6,000 FDE Core</span>
                <span className="bg-white/5 text-gray-400 text-sm px-4 py-2 rounded-full border border-white/10">¥18,000 Pro全托管</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
