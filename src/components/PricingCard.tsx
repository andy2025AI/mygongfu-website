import { Check, Star } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export default function PricingCard({ name, price, description, features, isPopular, buttonText }: PricingCardProps) {
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
        {price !== '免费' && <span className="text-gray-400 ml-2">/月</span>}
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
        className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
          isPopular
            ? 'btn-primary text-white'
            : 'border border-white/20 text-white hover:border-primary hover:text-primary'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
