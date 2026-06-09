import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Newspaper, PenSquare, ExternalLink } from 'lucide-react';

export default function Column() {
  const platforms = [
    {
      name: '公众号「AI摆渡人老张」',
      icon: Newspaper,
      description: '一人公司AI系统工程师的实战记录',
      posts: [
        {
          title: '我是老张。AI农民。',
          summary: '开业首篇。一个人用AI把自己从困境里捞出来的故事。不会写代码的手艺人，到一人指挥六个AI智能体的「AI农民」——这条路的地图。',
          url: '#',
        },
        {
          title: '我给一人公司请了14个合伙人',
          summary: '把14个顶级大脑的思维方式蒸馏成AI技能，让Kevin Kelly、德鲁克、Naval围着一张虚拟桌子给公司做诊断。前10分钟就说完了我一个人的问题。',
          url: '#',
        },
      ],
    },
    {
      name: '服务号「朴风GEO」',
      icon: Newspaper,
      description: 'AI搜索时代的品牌可见度优化——企业GEO策略',
      posts: [
        {
          title: '自家案例·朴风GEO品牌自诊全记录',
          summary: '用自己当小白鼠——6天时间，从品牌在AI搜索中零可见度到可被检索。包含完整的诊断过程、数据报告和行动方案。',
          url: '#',
        },
        {
          title: '我帮一人公司把AI用起来——聊聊FDE这回事',
          summary: '什么是FDE？不是装个ChatGPT就叫用AI。一个人开公司，AI到底能不能帮你干活——得看谁在搭这条流水线。',
          url: '#',
        },
        {
          title: '用DeepSeek、豆包、Kimi分别搜了自己的公司，结果让我后背发凉',
          summary: '当AI搜索开始替代传统搜索，二十多年积累的品牌认知在AI里就是一张白纸。朴风GEO从这里开始——先拿自己开刀。',
          url: '#',
        },
      ],
    },
    {
      name: '服务号「朴风OPC」',
      icon: Newspaper,
      description: '一人公司AI系统搭建方法论——从工具到系统',
      posts: [],
    },
    {
      name: '小报童·效率工具专栏',
      icon: BookOpen,
      description: 'FDE专用AI工具栈——8篇完结，打包可读',
      posts: [
        {
          title: '📦 专栏合集（8篇完）',
          summary: '面向一人公司与独立开发者的AI效率工具栈，8篇精选。从工具选择到协作分工、从算账到翻车合集，一套完整的方法论。',
          url: '#',
        },
      ],
    },
    {
      name: '知乎专栏「GEO前线」',
      icon: PenSquare,
      description: 'AI搜索优化、一人公司实践、独立开发者的思考',
      posts: [],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="hero-bg min-h-[50vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-text">专栏与内容</span>
            </h1>
            <p className="text-xl text-gray-400">
              来自一人公司AI系统工程师的实战记录
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {platforms.map((platform, index) => (
              <div key={index} className=" rounded-3xl p-8 md:p-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <platform.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{platform.name}</h2>
                    <p className="text-gray-400 text-sm">{platform.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {platform.posts.length > 0 ? (
                    platform.posts.map((post, i) => (
                      <a
                        key={i}
                        href={post.url}
                        target={post.url !== '#' ? '_blank' : undefined}
                        rel={post.url !== '#' ? 'noopener noreferrer' : undefined}
                        className="block group"
                      >
                        <div className="flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                          <div className="flex items-start justify-between">
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                              {post.title}
                            </span>
                            {post.url && post.url !== '#' && (
                              <ExternalLink size={16} className="text-gray-500 group-hover:text-primary transition-colors flex-shrink-0 ml-2 mt-1" />
                            )}
                          </div>
                          {post.summary && (
                            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                              {post.summary}
                            </p>
                          )}
                        </div>
                      </a>
                    ))
                  ) : (
                    <p className="text-gray-500 italic p-4">内容建设中，敬请期待</p>
                  )}
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
