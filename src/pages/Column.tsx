import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Newspaper, PenSquare, ExternalLink } from 'lucide-react';

export default function Column() {
  const platforms = [
    {
      name: '公众号「AI摆渡人老张」',
      icon: Newspaper,
      description: '一人公司的AI系统工程师日常——从DMD爸爸到AI农民的转型实录',
      posts: [
        { title: 'FDE——当独立开发者开始专注一人公司AI系统', url: 'https://mp.weixin.qq.com/s/xxx02' },
        { title: '从审美到AI——13年景观设计师到一人公司AI系统工程师', url: 'https://mp.weixin.qq.com/s/xxx05' },
        { title: 'DMD十年——当疾病成为时间的朋友，你能做什么？', url: 'https://mp.weixin.qq.com/s/xxx06' },
      ],
    },
    {
      name: '公众号「朴风GEO」',
      icon: Newspaper,
      description: 'AI搜索时代的品牌可见度优化——企业GEO策略',
      posts: [
        { title: '朴风GEO自家案例：6天从0到有', url: 'https://mp.weixin.qq.com/s/xxx04' },
      ],
    },
    {
      name: '小报童·效率工具专栏',
      icon: BookOpen,
      description: 'FDE专用AI工具栈——8篇完结，打包可读',
      posts: [
        { title: '📦 专栏合集（8篇完）', url: 'https://xiaobot.net/post/xxx' },
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
    <div className="min-h-screen bg-dark">
      <Navbar />

      <section className="hero-bg min-h-[50vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">专栏与内容</span>
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
              <div key={index} className="glass rounded-3xl p-8 md:p-10">
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <span className="text-gray-300 group-hover:text-white transition-colors">{post.title}</span>
                        <ExternalLink size={18} className="text-gray-500 group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
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
