import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { CheckCircle2, Copy, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const digitalProducts = [
  {
    id: 'diagnosis',
    name: 'AI可见度诊断 · 完整报告',
    price: '¥299',
    period: '一次买断',
    desc: '品牌AI可见度全面扫描报告（PDF格式即时生成）',
    features: [
      'DeepSeek/豆包/Kimi 三引擎扫描',
      '竞品对比分析',
      '情感倾向分析',
      '可执行优化路线图',
    ],
    note: '诊断+品牌名',
  },
  {
    id: 'book-standard',
    name: '《像做设计一样做AI》标准版',
    price: '¥299',
    period: '一次买断',
    desc: '全六章PDF + 五个模板表',
    features: [
      '全六章完整内容（约18,000字）',
      '五个可编辑模板表',
      '适合反复翻阅的PDF格式',
      '未来更新免费获取',
    ],
    note: '标准版+邮箱',
  },
  {
    id: 'book-deep',
    name: '《像做设计一样做AI》深度版',
    price: '¥499',
    period: '一次买断',
    desc: '书 + 一次线上诊断（1h）',
    features: [
      '标准版全部内容',
      '一次线上诊断（1小时，腾讯会议）',
      '用你的真实业务做一次"场地调研"',
      '诊断后出书面建议清单',
    ],
    note: '深度版+邮箱',
  },
];

const geoProducts = [
  {
    id: 'fde-core',
    name: 'FDE Core',
    price: '¥6,000',
    period: '/月',
    desc: '一人公司AI系统搭建服务',
    features: [
      'FSD系统诊断',
      'AI工作流搭建',
      '内容Pipeline搭建',
      '全套SOP+模板',
      '月度迭代与维护',
    ],
  },
  {
    id: 'fde-pro',
    name: 'FDE Pro',
    price: '¥18,000起',
    period: '/次',
    desc: '定制AI Agent搭建服务',
    features: [
      'FSD系统诊断',
      '定制Agent角色设计',
      'Agent部署+工具链接入',
      '2周免费调优',
      '操作手册+知识库交付',
    ],
  },
];

export default function PaymentPage() {
  const copyNote = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const [selectedProduct, setSelectedProduct] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [expandedQr, setExpandedQr] = useState<string | null>(null);

  const handleConfirmPayment = () => {
    if (!selectedProduct || !userEmail) return;
    const product = digitalProducts.find(p => p.id === selectedProduct);
    if (!product) return;
    const subject = encodeURIComponent(`付款确认：${product.name}`);
    const body = encodeURIComponent(
      `我已购买 ${product.name} ${product.price}${product.period}\n` +
      `付款备注：${product.note}\n` +
      `交付邮箱：${userEmail}\n\n` +
      `请确认收款后发货。`
    );
    window.location.href = `mailto:esopin@QQ.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="relative flex items-center justify-center mb-6">
                <div className="h-[1px] flex-1 bg-[#FFD700]/40" />
                <div className="mx-4 px-5 py-1.5 rounded-full bg-[#FFD700] text-black text-xs font-bold tracking-widest">
                  全部产品 · 统一价格
                </div>
                <div className="h-[1px] flex-1 bg-[#FFD700]/40" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                所有产品与价格
              </h1>
              <p className="text-gray-400 max-w-xl mx-auto">
                数字产品扫码直接付款。GEO服务请发邮件咨询。
              </p>
            </div>

            {/* 数字产品 */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="h-[1px] w-8 bg-[#FFD700]/30" />
                <h2 className="text-xl font-bold text-white ml-4">数字产品（扫码直接付款）</h2>
                <div className="h-[1px] flex-1 bg-[#FFD700]/30 ml-4" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {digitalProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col relative"
                  >
                    <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{product.desc}</p>
                    <div className="text-3xl font-bold text-[#FFD700] mb-6">
                      {product.price}
                      <span className="text-sm font-normal text-gray-500 ml-2">{product.period}</span>
                    </div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                          <CheckCircle2 className="text-[#00E676] shrink-0 mt-0.5" size={14} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/[0.04] border border-white/10 rounded-lg p-3">
                      <p className="text-gray-500 text-xs mb-1">付款备注填：</p>
                      <div className="flex items-center justify-between">
                        <code className="text-[#FFD700] text-sm font-mono">{product.note}</code>
                        <button
                          onClick={() => copyNote(product.note)}
                          className="text-gray-500 hover:text-[#FFD700] transition-colors shrink-0 ml-2"
                          title="复制备注"
                        >
                          <Copy size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GEO服务 */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="h-[1px] w-8 bg-[#FFD700]/30" />
                <h2 className="text-xl font-bold text-white ml-4">FDE服务（发邮件咨询）</h2>
                <div className="h-[1px] flex-1 bg-[#FFD700]/30 ml-4" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {geoProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-col relative"
                  >
                    <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{product.desc}</p>
                    <div className="text-3xl font-bold text-[#FFD700] mb-6">
                      {product.price}
                      <span className="text-sm font-normal text-gray-500 ml-2">{product.period}</span>
                    </div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                          <CheckCircle2 className="text-[#00E676] shrink-0 mt-0.5" size={14} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="mailto:esopin@QQ.com"
                      className="flex items-center justify-center space-x-2 text-sm text-gray-300 hover:text-[#FFD700] transition-colors border border-zinc-700 rounded-lg py-3"
                    >
                      <Mail size={16} />
                      <span>发邮件咨询</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment QR Codes */}
            <div className="border-t border-white/5 pt-12">
              <h2 className="text-2xl font-bold text-center text-white mb-2">扫码付款</h2>
              <p className="text-gray-400 text-center text-sm mb-8">
                数字产品扫码付款，备注填对应「付款备注」
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
                <div className="text-center">
                  <button
                    onClick={() => setExpandedQr('/wechat-pay.jpg')}
                    className="bg-white/5 rounded-xl p-4 inline-block cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <img src="/wechat-pay.jpg" alt="微信支付" className="w-40 h-40 object-contain" />
                  </button>
                  <p className="text-gray-300 font-bold mt-3">微信支付</p>
                  <p className="text-gray-500 text-xs mt-1">推荐</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setExpandedQr('/alipay.jpg')}
                    className="bg-white/5 rounded-xl p-4 inline-block cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <img src="/alipay.jpg" alt="支付宝" className="w-40 h-40 object-contain" />
                  </button>
                  <p className="text-gray-300 font-bold mt-3">支付宝</p>
                  <p className="text-gray-500 text-xs mt-1">支持信用卡·花呗</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mt-6">
                手机用户：点二维码放大 → 长按保存到相册 → 打开App从相册扫码
              </p>
            </div>

            {/* 付款确认表单 */}
            <div className="mt-12 border-t border-white/5 pt-12">
              <h2 className="text-2xl font-bold text-center text-white mb-2">付款确认</h2>
              <p className="text-gray-400 text-center text-sm mb-8">
                扫码付款后，在这里提交确认信息，一键生成确认邮件
              </p>

              <div className="max-w-xl mx-auto bg-white/[0.02] border border-white/10 rounded-xl p-6">
                <div className="mb-4">
                  <label className="text-gray-400 text-sm block mb-2">我购买的是</label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors appearance-none"
                  >
                    <option value="">请选择产品</option>
                    {digitalProducts.map(p => (
                      <option key={p.id} value={p.id}>{p.name} — {p.price}{p.period}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="text-gray-400 text-sm block mb-2">交付邮箱</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>
                <button
                  onClick={handleConfirmPayment}
                  className="w-full bg-[#FFD700] text-black font-bold py-3 rounded-lg hover:bg-[#FFD700]/90 transition-colors disabled:opacity-70"
                >
                  生成确认邮件
                </button>
                <p className="text-gray-500 text-xs text-center mt-3">
                  点击后自动打开邮箱，核对后点「发送」即可，无需截图
                </p>
              </div>
            </div>

            {/* 购买流程说明 */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl">
                <p className="text-[#FFD700] font-bold mb-3">数字产品三步搞定</p>
                <ol className="space-y-2 text-gray-400 text-sm">
                  <li>1. 选产品 → 复制「付款备注」</li>
                  <li>2. 扫码付款，备注填付款备注</li>
                  <li>3. 填邮箱选产品 → 一键发确认邮件</li>
                </ol>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-gray-500 text-xs">交付时效</p>
                  <p className="text-gray-300 text-sm mt-1">
                    诊断报告 — 即时生成<br />
                    标准版电子书 — 1-24小时内<br />
                    深度版 — 书1-24小时 + 诊断3天内约时
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl">
                <p className="text-[#FFD700] font-bold mb-3">GEO服务咨询流程</p>
                <ol className="space-y-2 text-gray-400 text-sm">
                  <li>1. 点「发邮件咨询」</li>
                  <li>2. 说明品牌名称和需求</li>
                  <li>3. 确认方案后付款</li>
                  <li>4. 启动服务</li>
                </ol>
              </div>
            </div>

            {/* Back link */}
            <div className="text-center mt-8">
              <Link to="/book" className="text-gray-500 hover:text-[#FFD700] transition-colors text-sm">
                ← 返回书籍详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QR放大弹窗 */}
      {expandedQr && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-8"
          onClick={() => setExpandedQr(null)}
        >
          <img src={expandedQr} alt="支付二维码" className="max-w-[85vw] max-h-[70vh] object-contain" />
          <p className="text-gray-400 text-sm mt-6">点击任意处关闭</p>
          <p className="text-gray-500 text-xs mt-2">长按图片可保存到相册</p>
        </div>
      )}

      <Footer />
    </div>
  );
}
