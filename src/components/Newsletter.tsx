import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
              <Mail className="text-white" size={32} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">订阅GEO周报</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              每周获取最新的AI搜索趋势、品牌优化技巧和独家案例分析。让你的品牌始终走在AI时代前沿。
            </p>

            {isSubscribed ? (
              <div className="flex items-center justify-center space-x-3 text-green-400">
                <CheckCircle2 size={28} />
                <span className="text-xl font-semibold">订阅成功！感谢您的关注</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="输入您的邮箱地址"
                    required
                    className="flex-1 px-6 py-4 bg-dark border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <span>订阅</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            )}

            <p className="text-gray-500 text-sm mt-6">
              我们尊重您的隐私，随时可以取消订阅
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
