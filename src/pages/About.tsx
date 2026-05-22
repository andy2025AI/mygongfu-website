import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Zap, Heart } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: '老张',
      role: '创始人 & GEO专家',
      bio: '10年数字营销经验，AI搜索优化先驱，帮助500+品牌提升AI可见度',
    },
    {
      name: '小李',
      role: '技术总监',
      bio: '前大厂AI工程师，专注AI系统搭建和自动化流程设计',
    },
    {
      name: '小王',
      role: '内容策略师',
      bio: '精通AI内容优化，帮助品牌创作AI友好内容',
    },
  ];

  const values = [
    {
      icon: Zap,
      title: '创新',
      description: '走在AI时代前沿，不断探索新技术新方法',
    },
    {
      icon: Heart,
      title: '专注',
      description: '深度聚焦AI搜索优化领域，做深做透',
    },
    {
      icon: Users,
      title: '共赢',
      description: '与客户共同成长，实现互利共赢',
    },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      <section className="hero-bg min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">关于朴风</span>
            </h1>
            <p className="text-xl text-gray-400">
              在AI搜索时代，让你的品牌被发现、被推荐、被记住
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="gradient-text">我们的故事</span>
            </h2>
            <div className="glass rounded-3xl p-8 md:p-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                2023年，当AI大模型开始改变人们获取信息的方式时，我们意识到一个全新的品牌营销时代正在到来。传统的SEO已经不够，品牌需要一种全新的方式来在AI搜索中获得曝光和推荐。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                朴风应运而生。我们专注于GEO（Generative Engine Optimization），帮助品牌在AI搜索时代建立优势。我们的使命是让每一个优质品牌都能被AI看见、被AI推荐。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-light/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">我们的价值观</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">我们的团队</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <div className="text-primary text-sm mb-4">{member.role}</div>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}