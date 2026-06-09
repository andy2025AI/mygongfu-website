import { Link } from 'react-router-dom';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookie';
}

const legalContent = {
  privacy: {
    title: '隐私政策',
    content: `朴风 Pu Feng（以下简称"我们"）深知个人信息对您的重要性，我们将按法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全。

我们收集的信息包括：您在使用我们的诊断工具时主动提供的品牌名称、网址和邮箱地址。这些信息仅用于生成诊断报告并与您联系，不会出售或分享给第三方。

我们使用行业标准的安全措施保护您的数据，但无法保证互联网传输的绝对安全。您有权随时要求我们删除您的个人信息，请联系 esopin@qq.com。

本隐私政策可能随时更新，更新后的政策将在本页面发布。`,
  },
  terms: {
    title: '服务条款',
    content: `欢迎使用朴风 Pu Feng 提供的服务。使用我们的网站和服务即表示您同意以下条款。

我们的GEO诊断服务提供品牌AI可见度评估。诊断结果基于当前AI搜索引擎的数据，可能存在时效性差异。我们不对诊断结果的绝对准确性做任何保证。

服务费用以网站公布的价格为准（GEO诊断¥299/完整报告，GEO Core ¥6,000/月，GEO Pro ¥18,000/月）。我们保留调整价格的权利。

未经我们书面许可，您不得复制、修改或分发我们的诊断报告和网站内容。

我们保留随时修改本条款的权利。`,
  },
  cookie: {
    title: 'Cookie政策',
    content: `我们的网站使用必要的Cookie来保证网站正常运行。

我们使用的Cookie类型：
• 会话Cookie：在您关闭浏览器后自动删除，用于维持网站基本功能
• 偏好Cookie：记住您的语言和地区偏好

我们不会使用Cookie进行跨站追踪或广告投放。您可以在浏览器设置中禁用Cookie，但这可能影响网站部分功能的使用。

如需了解更多信息，请联系 esopin@qq.com。`,
  },
};

export default function LegalPage({ type }: LegalPageProps) {
  const content = legalContent[type];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="text-[#FFD700] hover:underline text-sm mb-8 inline-block">
          ← 返回首页
        </Link>
        <h1 className="text-3xl font-bold text-[#FFD700] mb-8">{content.title}</h1>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
          {content.content}
        </div>
      </div>
    </div>
  );
}
