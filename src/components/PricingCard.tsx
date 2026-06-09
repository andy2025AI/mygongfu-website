import { Check, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  action?: 'scroll' | 'link' | 'external';
  path?: string;
  isMonthly?: boolean;
}

export default function PricingCard({ name, price, description, features, isPopular, buttonText, action, path, isMonthly }: PricingCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (action === 'external' && path) {
      window.location.href = path;
    } else if (action === 'link' && path) {
      navigate(path);
    } else if (action === 'scroll') {
      const heroSection = document.getElementById('hero-diagnosis');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className={`relative glass rounded-3xl p-8 transition-all duration-500 hover:transform hover:-translate-y-2 ${
      isPopular
        ? 'border-2 border-primary shadow-2xl shadow-primary/20'
        : 'border border-white/10'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
            <Star size={16} fill="currentColor" />
            <span>最受欢迎</span>
          </div>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="mb-8">
        <span className="text-4xl font-bold gradient-text">{price}</span>
        {isMonthly && price !== '免费' && <span className="text-gray-400 ml-2">/月</span>}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="text-primary flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
          isPopular
            ? 'btn-gold'
            : 'border border-white/40 text-gray-300 hover:border-primary hover:text-primary'
        }`}
      >
        <span>{buttonText}</span>
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
