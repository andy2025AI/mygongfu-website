import { useState, useEffect } from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [brandName, setBrandName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const fullText = '你的品牌在AI搜索里还活着吗？';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (brandName.trim()) {
      alert(`正在诊断品牌 "${brandName}" 的AI可见度...\n\n（这是一个演示，实际功能需要后端支持）`);
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8">
              <Sparkles className="text-primary" size={18} />
              <span className="text-gray-300 text-sm">在AI搜索时代，让品牌被发现</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="gradient-text">
              {typingText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.6s' }}>
            朴风GEO服务，专注于AI搜索优化，让你的品牌在DeepSeek、豆包、Kimi等AI平台中获得更多曝光和推荐机会。
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="输入品牌名，比如 腾讯、小米、字节跳动…"
                  className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center space-x-2 whitespace-nowrap animate-pulse-glow"
              >
                <Search size={20} />
                <span>免费诊断</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-gray-400 text-sm mt-1">AI平台覆盖</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">200%</div>
              <div className="text-gray-400 text-sm mt-1">品牌提升</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-gray-400 text-sm mt-1">客户满意</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
