
import { AlertTriangle, TrendingDown, Users, MessageSquare, Eye, Zap } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [{
    icon: MessageSquare,
    text: "You post consistently but hear crickets",
    color: "text-red-500"
  }, {
    icon: TrendingDown,
    text: "You tried boosting your post — nothing happened",
    color: "text-orange-500"
  }, {
    icon: Users,
    text: "You've had some customers but no one sticks",
    color: "text-yellow-500"
  }, {
    icon: AlertTriangle,
    text: "Referrals are inconsistent",
    color: "text-purple-500"
  }, {
    icon: Eye,
    text: "Your business is invisible online",
    color: "text-blue-500"
  }, {
    icon: Zap,
    text: "You feel stuck",
    color: "text-gray-500"
  }];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're not alone. These are the struggles we hear from business owners every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`${point.color} mb-6`}>
                  <IconComponent className="h-12 w-12" />
                </div>
                <p className="text-lg text-gray-800 font-medium leading-relaxed">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
