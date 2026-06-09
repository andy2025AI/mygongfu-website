import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Newspaper, PenSquare, ExternalLink, FileText, ArrowRight } from 'lucide-react';

const categories = [
  { name: 'GEO品牌可见度', count: 12, icon: FileText, color: 'from-cyan-500 to-blue-500' },
  { name: 'FDE系统搭建', count: 8, icon: BookOpen, color: 'from-purple-500 to-pink-500' },
  { name: '一人公司实战', count: 10, icon: PenSquare, color: 'from-amber-500 to-orange-500' },
  { name: 'DMD科普', count: 7, icon: Newspaper, color: 'from-green-500 to-emerald-500' },
];

const platforms = [
  {
    name: 'AI摆渡人老张',
    type: '公众号',
    desc: '一人公司AI系统工程师的实战记录',
    url: '',
    articles: [
      '我是老张。AI农民。',
      '我给一人公司请了14个合伙人',
      '多账号系统：不是管的号越多越厉害',
      '一个人管5个号的3次翻车',
    ],
  },
  {
    name: '朴风GEO',
    type: '服务号',
    desc: 'AI搜索时代的品牌可见度优化',
    url: '',
    articles: [
      '自家案例·朴风GEO品牌自诊全记录',
      '我帮一人公司把AI用起来——聊聊FDE',
      '用DeepSeek搜了自己公司，后背发凉',
    ],
  },
  {
    name: '旭辰爸爸',
    type: '小红书',
    desc: 'DMD患儿家长的日常与资讯',
    url: '',
    articles: [
      '七年了都轮不到DMD。今年，终于等到了。',
      '拿到DMD基因报告那天，我一个字都看不懂',
      '51号缺失的DMD孩子，有一个新药在路上了',
    ],
  },
  {
    name: 'AI农民老张',
    type: '小红书',
    desc: '日更——AI工具和翻车日常',
    url: '',
    articles: [
      'AI突然编了个数据，差点发出去',
      '三个号的缓存全归零了，我没慌',
      '试了4个AI写稿工具，最该选的不止工具',
    ],
  },
];

const recentArticles = [
  { title: 'AI突然编了个数据，差点发出去', platform: 'AI农民老张', date: '6/5', type: '小红书' },
  { title: '多账号系统：不是管的号越多越厉害', platform: 'AI摆渡人老张', date: '6/5', type: '公众号' },
  { title: '我把自己的知识库搬进了IMA', platform: 'AI农民老张', date: '6/3', type: '小红书' },
  { title: '七年了都轮不到DMD。今年，终于等到了。', platform: '旭辰爸爸', date: '6/3', type: '小红书' },
  { title: 'FSD三看实战案例', platform: '单兵系统', date: '6/3', type: '服务号' },
  { title: '五维诊断自查实操版', platform: '知乎GEO', date: '6/3', type: '知乎' },
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg min-h-[50vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-text">全部文章</span>
            </h1>
            <p className="text-xl text-gray-400">
              一个人，6个账号，37+篇内容。关于AI、GEO、FDE和一人公司的真实记录。
            </p>
          </div>
        </div>
      </section>

      {/* 分类标签 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-[#FFD700]/10 text-[#FFD700] text-sm px-5 py-2 rounded-full border border-[#FFD700]/20 font-medium">
                全部 · 37篇
              </span>
              {categories.map((cat) => (
                <span
                  key={cat.name}
                  className="bg-white/5 text-gray-300 text-sm px-5 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {cat.name} · {cat.count}篇
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 近期发布 */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FFD700] rounded-full inline-block"></span>
              近期发布
            </h2>
            <div className="space-y-3">
              {recentArticles.map((article, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${
                      article.type === '公众号' || article.type === '服务号' ? 'bg-[#00E676]/10 text-[#00E676]' :
                      article.type === '小红书' ? 'bg-red-500/10 text-red-400' :
                      'bg-blue-500/10 text-blue-400'
                    }`}>{article.type}</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors truncate">{article.title}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="text-gray-500 text-xs">{article.platform}</span>
                    <span className="text-gray-600 text-xs">{article.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 各平台内容区 */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FFD700] rounded-full inline-block"></span>
              内容平台
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((platform, i) => (
                <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">{platform.name}</h3>
                      <span className="text-gray-500 text-xs">{platform.type}</span>
                    </div>
                    <span className="text-gray-500 text-xs px-2 py-1 rounded-full bg-white/5">{platform.desc}</span>
                  </div>
                  <ul className="space-y-2">
                    {platform.articles.map((title, j) => (
                      <li key={j} className="text-gray-400 text-sm hover:text-gray-200 transition-colors cursor-default flex items-start gap-2">
                        <span className="text-gray-600 mt-1">·</span>
                        <span>{title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl p-10 md:p-14 text-center border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="gold-text">先试试你的品牌在AI搜得到吗</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                输入品牌名，30秒出诊断报告。覆盖7大AI引擎和7大内容平台。
              </p>
              <Link to="/#hero-diagnosis" className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-full font-semibold">
                免费诊断
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
