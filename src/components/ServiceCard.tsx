import { Search, Bot, Leaf, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: 'search' | 'bot' | 'leaf';
  title: string;
  description: string;
  features: string[];
  path: string;
  gradient: string;
}

export default function ServiceCard({ icon, title, description, features, path, gradient }: ServiceCardProps) {
  const iconMap = { search: Search, bot: Bot, leaf: Leaf };
  const IconComponent = iconMap[icon];

  return (
    <div className="bg-black rounded-3xl p-8 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group">
      <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="text-white" size={32} />
      </div>

      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3 text-gray-300">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={path}
        className="inline-flex items-center space-x-2 text-primary font-semibold hover:space-x-4 transition-all duration-300"
      >
        <span>了解详情</span>
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
      </a>
    </div>
  );
}
