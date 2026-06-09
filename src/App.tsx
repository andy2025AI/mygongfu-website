import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Component, useEffect, type ReactNode } from "react";
import Home from "@/pages/Home";
import GeoService from "@/pages/GeoService";
import FdeService from "@/pages/FdeService";
import Methods from "@/pages/Methods";
import Articles from "@/pages/Articles";
import Cases from "@/pages/Cases";
import About from "@/pages/About";
import Column from "@/pages/Column";
import BookPage from './pages/BookPage';
import PaymentPage from './pages/PaymentPage';
import LegalPage from './pages/LegalPage';

// ============================================================
// Route meta — 每个路由的唯一 title + meta description
// ============================================================
const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "朴风·一人公司AI工具箱",
    description: "GEO诊断+FDE搭建+植物配置AI",
  },
  "/services/geo": {
    title: "GEO品牌AI可见度诊断",
    description: "¥299起，30分钟出报告",
  },
  "/services/fde": {
    title: "FDE系统搭建服务",
    description: "AI工作流搭建，¥6,000/月",
  },
  "/methods": {
    title: "方法论与方法",
    description: "FSD/火龙决策边界/定价源",
  },
  "/articles": {
    title: "文章与洞察",
    description: "一人公司AI实践",
  },
  "/cases": {
    title: "案例研究",
    description: "客户实践",
  },
  "/about": {
    title: "关于朴风",
    description: "二十多年景观+AI探索",
  },
  "/column": {
    title: "专栏",
    description: "深度内容",
  },
  "/book": {
    title: "数字产品",
    description: "即刻获取",
  },
  "/payment": {
    title: "支付",
    description: "选择套餐",
  },
  "/privacy": {
    title: "隐私政策",
    description: "",
  },
  "/terms": {
    title: "服务条款",
    description: "",
  },
  "/cookie-policy": {
    title: "Cookie政策",
    description: "",
  },
};

// ============================================================
// RouteMeta — 监听路由变化，动态更新 <title> 和 meta description
// ============================================================
function RouteMeta() {
  const location = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[location.pathname];
    if (meta) {
      document.title = meta.title;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", meta.description);
    }
  }, [location.pathname]);

  return null;
}

// ============================================================
// ErrorBoundary — 捕获渲染错误，显示品牌回退 UI
// ============================================================
interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "40px",
          textAlign: "center",
          background: "#000",
          color: "#FFD700",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <h1 style={{ margin: 0 }}>朴风 · 一人公司AI工具箱</h1>
          <p style={{ color: "#a0a0a0", marginTop: "20px" }}>
            页面加载出错，请刷新页面重试。
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              marginTop: "24px",
              padding: "10px 28px",
              background: "#FFD700",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            重试
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ============================================================
// App
// ============================================================
export default function App() {
  return (
    <Router>
      <RouteMeta />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/services/geo" element={<GeoService />} />
          <Route path="/services/fde" element={<FdeService />} />
          <Route path="/geo" element={<Navigate to="https://geo.mygongfu.com" replace />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/fde" element={<Navigate to="https://fde.mygongfu.com" replace />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/about" element={<About />} />
          <Route path="/column" element={<Column />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/cookie-policy" element={<LegalPage type="cookie" />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
