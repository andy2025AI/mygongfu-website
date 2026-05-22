import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
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
                2023年，当AI大模型开始改变人们获取信息的方式时，我意识到一个全新的品牌营销时代正在到来。
                做了13年景观设计，我比大多数人都更清楚"被搜不到"是什么感觉。
                传统的SEO已经不够，品牌需要一种全新的方式来在AI搜索中获得曝光和推荐。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                朴风GEO就是从这里开始的——一个一人公司，一个AI系统工程师。
                先拿自己开刀，跑通了再帮别人做。这就是朴风。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}