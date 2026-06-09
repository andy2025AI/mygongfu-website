import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, UserCheck, XCircle, ArrowRight, Mail } from 'lucide-react';

export default function BookPage() {
  const chapters = [
    { num: '一', title: '基因', subtitle: '方案决定项目的命运', desc: '不是教你用工具。是告诉你做AI系统的第一步不用打开任何工具——先做场地调研。' },
    { num: '二', title: '手艺', subtitle: '把诗意翻译成工程语言', desc: '方案上的"一个水景"六个字，扩初展开成七个专业方向。AI系统的每个功能模块也一样。' },
    { num: '三', title: '握总', subtitle: '一个人协调所有专业', desc: '你不会画每一张图，但你要知道每一张图在整体里怎么对上。' },
    { num: '四', title: '落地', subtitle: '图纸再好，现场也会出问题', desc: '你不是去证明图纸没错的。是去解决问题的那个人。' },
    { num: '五', title: '闭环', subtitle: '做完不是结束', desc: '三个月后回去看树活了没有——系统上线了也要回去看。' },
    { num: '六', title: '工具箱', subtitle: '五个模板拿走直接用', desc: '业务诊断表、系统概念图、模块展开清单、接缝检查清单、系统审计清单。' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Gold line + tag — matching the "推荐" style */}
            <div className="relative flex items-center mb-12">
              <div className="h-[1px] flex-1 bg-[#FFD700]/40" />
              <div className="mx-4 px-5 py-1.5 rounded-full bg-[#FFD700] text-black text-xs font-bold tracking-widest">
                数字产品 · 方法论
              </div>
              <div className="h-[1px] flex-1 bg-[#FFD700]/40" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              像做设计一样<br />
              <span className="text-[#FFD700]">做AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl">
              一个风景园林设计师的AI全案策划方法论
            </p>
            <p className="text-base text-gray-500 mb-10">
              "我一个做景观设计的都能搭出自己的AI系统。你不会比我难。"
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="inline-flex items-center space-x-2 bg-[#FFD700] text-black font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg">
                <span>选版本 →</span>
                <ArrowRight size={20} />
              </a>
              <a href="#author" className="inline-flex items-center space-x-2 border border-white/40 text-gray-300 font-bold px-8 py-4 rounded-lg hover:bg-white/5 hover:text-white transition-colors text-lg">
                <span>了解作者</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#FFD700]">
              这些场景，你熟不熟悉？
            </h2>
            <div className="space-y-6">
              {[
                '注册了五六个AI账号，一个都没坚持用下去',
                '工具文章看了几十篇，不知道哪个适合自己',
                '觉得应该用AI，但不知道从哪里开始入手',
                '试了一些工具，用两天又回到原来的工作方式',
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-white/[0.02] border border-white/10 rounded-lg p-6">
                  <span className="text-[#FFD700] text-xl font-bold shrink-0">0{i + 1}</span>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">
                这本书不是又一门AI工具教程
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                是做了二十多年风景园林设计的人，把同一套思维用在了AI系统搭建上
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { from: '场地分析', to: '业务诊断', desc: '"去现场"的那套方法，用在"看流程"上' },
                { from: '概念方案', to: '系统架构', desc: '先分区再动线，跟先分层再串联是同一回事' },
                { from: '扩初·施工图', to: '配置·SOP', desc: '把诗意翻译成工程语言的能力，AI系统同样需要' },
                { from: '多专业协调', to: '工具链集成', desc: '协调水电/结构/绿化，跟协调API/数据是一样的' },
                { from: '施工配合', to: '部署陪跑', desc: '上线跟进场一样——总会遇到意料之外的事' },
                { from: '使用后评估', to: '系统审计', desc: '做完不是结束。三个月后回去看看' },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/10 rounded-lg p-6 hover:border-[#FFD700]/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">景观设计</span>
                    <ArrowRight size={16} className="text-[#FFD700]" />
                    <span className="text-[#FFD700] text-sm">AI系统</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-bold mb-2">
                    <span className="text-white">{item.from}</span>
                    <span className="text-[#FFD700]">→</span>
                    <span className="text-white">{item.to}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              适合谁读
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                '设计院、事务所、工作室的主理人',
                '传统行业想做AI化的创业者',
                '一人公司/OPC，急需系统化的AI方法',
                '觉得"技术的东西我听不懂"的人',
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 bg-white/[0.02] border border-white/10 rounded-lg p-5">
                  <UserCheck className="text-[#00E676] shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              不适合谁读
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '想学Prompt技巧的（这本书不讲这个）',
                '想找某个工具测评的（工具不是重点）',
                '技术背景很强、只需要代码的人',
                '想要"7天学会AI"速成方案的人',
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 bg-white/[0.02] border border-white/10 rounded-lg p-5">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              全书六个章节
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
              约18,000字。从思维到方法到工具，一条线走完
            </p>
            <div className="space-y-4">
              {chapters.map((ch, i) => (
                <details key={i} className="group bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center space-x-4">
                      <span className="text-[#FFD700] font-bold text-xl shrink-0">第{ch.num}章</span>
                      <div>
                        <span className="text-white font-bold">{ch.title}</span>
                        <span className="text-gray-400 ml-3 text-sm">{ch.subtitle}</span>
                      </div>
                    </div>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-5 pt-2 border-t border-white/5">
                    <p className="text-gray-400">{ch.desc}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              选适合你的版本
            </h2>
            <p className="text-gray-400 text-center mb-12">
              价格不是门槛。是不合适的人不会买，合适的人觉得值得。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

              {/* Complete - Highlight */}
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 flex flex-col relative">
                {/* "推荐" badge — line + pill */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center w-3/4 z-10">
                  <div className="h-[1px] flex-1 bg-[#FFD700]/30" />
                  <div className="mx-3 px-4 py-1 rounded-full bg-[#FFD700] text-black text-xs font-bold">
                    推荐
                  </div>
                  <div className="h-[1px] flex-1 bg-[#FFD700]/30" />
                </div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">完整版</h3>
                <p className="text-gray-400 text-sm mb-6">全六章PDF + 五个模板表</p>
                <div className="text-3xl font-bold text-white mb-8">
                  ¥299
                  <span className="text-sm font-normal text-gray-500 ml-2">一次买断</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    '全六章完整内容（约18,000字）',
                    '五个可编辑模板表（诊断/架构/清单）',
                    '适合反复翻阅的PDF格式',
                    '未来更新免费获取',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                      <CheckCircle2 className="text-[#00E676] shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/payment" className="block text-center bg-[#FFD700] text-black font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-colors">
                  购买完整版 · ¥299
                </Link>
              </div>

              {/* Book + Consult */}
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">深度版</h3>
                <p className="text-gray-400 text-sm mb-6">书 + 一次线上诊断（1h）</p>
                <div className="text-3xl font-bold text-white mb-8">
                  ¥499
                  <span className="text-sm font-normal text-gray-500 ml-2">少于一单设计费</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start space-x-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-[#00E676] shrink-0 mt-0.5" size={16} />
                    <span>完整版全部内容（书+模板）</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-[#00E676] shrink-0 mt-0.5" size={16} />
                    <span>一次线上诊断（1小时，腾讯会议）</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-[#00E676] shrink-0 mt-0.5" size={16} />
                    <span>用你的真实业务做一次"场地调研"</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-gray-300">
                    <CheckCircle2 className="text-[#00E676] shrink-0 mt-0.5" size={16} />
                    <span>诊断后出书面建议清单</span>
                  </li>
                </ul>
                <Link to="/payment" className="block text-center border border-white/40 text-gray-300 font-bold px-6 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
                  购买深度版 · ¥499
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                购买后通过邮件交付PDF + 模板。支持微信/支付宝转账。<br />
                有任何疑问，发邮件到 <a href="mailto:esopin@QQ.com" className="text-[#FFD700] hover:underline">esopin@QQ.com</a>
              </p>
            </div>

            {/* Payment QR Codes */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-gray-400 text-sm text-center mb-6">扫码直接付款</p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <img src="/wechat-pay.jpg" alt="微信支付" className="w-32 h-32 object-contain rounded-lg" />
                  <p className="text-gray-500 text-xs mt-2">微信支付</p>
                </div>
                <div className="text-center">
                  <img src="/alipay.jpg" alt="支付宝" className="w-32 h-32 object-contain rounded-lg" />
                  <p className="text-gray-500 text-xs mt-2">支付宝</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs text-center mt-4">
                付款后请将截图发邮件至 esopin@QQ.com，我确认后立即交付
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <section id="author" className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              关于作者
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              老张。做了二十多年风景园林设计。经营个人独资工作室十三年。
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              2003年入行。2013年注册朴风景观设计研究中心。2026年开始搭建自己的AI系统。
            </p>
            <p className="text-gray-400 leading-relaxed">
              从一个不会写代码的景观设计师，到用开源框架搭出六个AI智能体集群。
              不是技术出身，没有团队。一个人，一台电脑，一年多时间。
            </p>
            <div className="mt-8 text-[#FFD700] text-lg">
              "我一个做景观设计的都能搭出自己的AI系统。你不会比我难。"
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-black to-[#FFD700]/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">
              三件不用做的事
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { icon: '✕', text: '不用注册账号' },
                { icon: '✕', text: '不用学Prompt' },
                { icon: '✕', text: '不用懂技术术语' },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                  <div className="text-[#FFD700] text-2xl mb-1">{item.icon}</div>
                  <div className="text-gray-400 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-lg mb-8">
              需要的是一支笔、一张纸、一个愿意重新认识自己业务的心态
            </p>
            <a href="#pricing" className="inline-flex items-center space-x-2 bg-[#FFD700] text-black font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-colors text-lg">
              <span>选一个版本开始</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
