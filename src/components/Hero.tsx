import { useState, useEffect } from 'react';
import { Search, ArrowRight, Sparkles, X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const API_URL = 'https://andy2025ai--pufeng-geo-diagnosis-v3-fastapi-app.modal.run/api/diagnose';

interface DiagnosisResult {
  brand_name: string;
  score: number;
  scores: { overall: number; platform_coverage: number; ai_awareness: number };
  keyword_scores: Record<string, { score: number; results: number }>;
  platform_coverage: Record<string, { found: boolean; status?: number }>;
  ai_awareness: Record<string, { found: boolean }>;
  gaps: string[];
  actions: string[];
  generated_at: string;
}

export default function Hero() {
  const [brandName, setBrandName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<DiagnosisResult | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    const kwList = keywords.trim()
      ? keywords.split('\n').map(k => k.trim()).filter(k => k)
      : ['品牌'];

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brand_name: brandName.trim(), keywords: kwList }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.error || '诊断失败，请重试');
      }
    } catch (err: any) {
      setError('网络错误：' + (err.message || '请稍后重试'));
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setResult(null);
    setError('');
    setBrandName('');
    setKeywords('');
  };

  const scoreColor = (s: number) => {
    if (s >= 70) return 'text-green-400';
    if (s >= 40) return 'text-yellow-400';
    return 'text-red-400';
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

          {/* Input Form */}
          {!result && (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl text-gray-400 mb-6">
                朴风GEO服务，专注于AI搜索优化，让你的品牌在DeepSeek、豆包、Kimi等AI平台中获得更多曝光和推荐机会。
              </p>
              <div className="relative flex flex-col sm:flex-row gap-4 mb-3">
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="输入品牌名，比如 腾讯、小米、字节跳动…"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all duration-300 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !brandName.trim()}
                  className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center space-x-2 whitespace-nowrap animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Search size={20} />
                  )}
                  <span>{loading ? '诊断中…' : '免费诊断'}</span>
                  <ArrowRight size={20} />
                </button>
              </div>
              <details className="text-left">
                <summary className="text-gray-500 text-xs cursor-pointer hover:text-gray-300">关联关键词（可选，默认"品牌"）</summary>
                <textarea
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="每行一个关键词&#10;景观设计&#10;园林工程"
                  rows={3}
                  className="mt-2 w-full px-4 py-3 bg-dark-light border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50"
                />
              </details>
            </form>
          )}

          {/* Loading */}
          {loading && (
            <div className="fade-in-up py-12">
              <Loader2 size={40} className="animate-spin text-primary mx-auto mb-4" />
              <p className="text-gray-300">正在查AI怎么看你…</p>
              <p className="text-gray-500 text-sm mt-2">扫描7大内容平台 + 查询通义千问</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="fade-in-up max-w-xl mx-auto">
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertCircle className="text-red-400" size={24} />
                  <p className="text-red-300">{error}</p>
                </div>
                <button onClick={resetForm} className="text-gray-400 hover:text-white text-sm underline">
                  重新输入
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          {result && !loading && (
            <div className="fade-in-up max-w-2xl mx-auto">
              <div className="glass rounded-3xl p-6 md:p-8 mb-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{result.brand_name}</h3>
                  <button onClick={resetForm} className="text-gray-500 hover:text-white p-1">
                    <X size={20} />
                  </button>
                </div>

                {/* Score cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/5 rounded-xl p-4 text-center border border-primary/30">
                    <div className={`text-3xl font-bold ${scoreColor(result.score)}`}>{result.score}</div>
                    <div className="text-gray-400 text-xs mt-1">综合可见度</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className={`text-2xl font-bold ${scoreColor(result.scores.platform_coverage)}`}>{result.scores.platform_coverage}</div>
                    <div className="text-gray-400 text-xs mt-1">平台覆盖</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className={`text-2xl font-bold ${scoreColor(result.scores.ai_awareness)}`}>{result.scores.ai_awareness}</div>
                    <div className="text-gray-400 text-xs mt-1">AI认知度</div>
                  </div>
                </div>

                {/* Platform coverage */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 text-left">内容平台覆盖</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(result.platform_coverage).map(([name, info]) => (
                      <div key={name} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                        info.found ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'
                      }`}>
                        <span>{info.found ? '✅' : '❌'}</span>
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gaps */}
                {result.gaps.length > 0 && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-4 text-left">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">待优化项</h4>
                    <ul className="space-y-1">
                      {result.gaps.map((g, i) => (
                        <li key={i} className="text-yellow-200 text-sm">• {g}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                {result.actions.length > 0 && (
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">建议行动</h4>
                    <ul className="space-y-1">
                      {result.actions.map((a, i) => (
                        <li key={i} className="text-gray-300 text-sm">• {a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <p className="text-gray-500 text-xs">
                数据仅供参考 · 基于公开内容平台检测 · {result.generated_at?.slice(0, 10)}
              </p>
            </div>
          )}

          {/* Platform list (shown when no result) */}
          {!result && !loading && (
            <div className="mt-12 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="text-gray-400 text-sm">
                覆盖DeepSeek、豆包、Kimi、通义千问、文心一言、智谱清言、讯飞星火等国内主流AI平台
              </div>
            </div>
          )}
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
