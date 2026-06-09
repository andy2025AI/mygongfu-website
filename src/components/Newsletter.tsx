import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const SUBSCRIBE_URL = 'https://andy2025ai--pufeng-geo-diagnosis-fastapi-app.modal.run/subscribe';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubscribed(true);
        setTimeout(() => {
          setEmail('');
          setIsSubscribed(false);
        }, 3000);
      } else {
        setError(data.error || '订阅失败');
      }
    } catch {
      setError('网络错误，请稍后重试');
    } finally {
      setLoading(false);
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
          <div className=" rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
              <Mail className="text-white" size={32} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gold-text">订阅GEO周报</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              每周获取最新的AI搜索趋势、品牌优化技巧和独家案例分析。让你的品牌始终走在AI时代前沿。
            </p>

            {isSubscribed ? (
              <div className="flex items-center justify-center space-x-3 text-[#00E676]">
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
                    disabled={loading}
                    className="flex-1 px-6 py-4 bg-black border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all duration-300 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 whitespace-nowrap disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <ArrowRight size={20} />
                    )}
                    <span>{loading ? '提交中…' : '订阅'}</span>
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
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
