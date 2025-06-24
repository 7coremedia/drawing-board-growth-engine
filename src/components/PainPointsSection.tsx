
import { AlertTriangle, TrendingDown, Users, MessageSquare, Eye, Zap } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    { icon: MessageSquare, text: "You post consistently but hear crickets", color: "text-red-500" },
    { icon: TrendingDown, text: "You tried boosting your post — nothing happened", color: "text-orange-500" },
    { icon: Users, text: "You've had some customers but no one sticks", color: "text-yellow-500" },
    { icon: AlertTriangle, text: "Referrals are inconsistent", color: "text-purple-500" },
    { icon: Eye, text: "Your business is invisible online", color: "text-blue-500" },
    { icon: Zap, text: "You feel stuck", color: "text-gray-500" }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/20 to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-accent rounded-full animate-pulse"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 2 + 3 + 's'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-satoshi font-bold mb-8 leading-tight">
            If You're Great at What You Do,<br />
            <span className="text-accent">Why Are Customers So Hard to Find?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <point.icon className={`${point.color} mb-4`} size={32} />
              <p className="text-lg">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-accent/20 backdrop-blur-sm p-12 rounded-3xl border border-accent/30">
            <h3 className="text-3xl font-satoshi font-bold mb-6 text-accent">Truth Bomb:</h3>
            <div className="space-y-4 text-xl">
              <p>Customers don't just show up. They follow systems.</p>
              <p>They follow signals.</p>
              <p className="font-satoshi font-bold text-2xl">
                And if your brand isn't sending the right signal at the right time — you'll be skipped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
