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
  return <section className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary"></div>
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => <div key={i} className="absolute bg-accent rounded-full animate-pulse" style={{
          width: Math.random() * 4 + 2 + 'px',
          height: Math.random() * 4 + 2 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 3 + 's',
          animationDuration: Math.random() * 2 + 3 + 's'
        }} />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div>
            <div className="text-center lg:text-left mb-20">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                If You're Great at What You Do,<br />
                <span className="text-accent font-black">Why Are Customers So Hard to Find?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {painPoints.map((point, index) => <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-105" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <point.icon className={`${point.color} mb-6`} size={40} />
                  <p className="text-lg font-medium leading-relaxed">{point.text}</p>
                </div>)}
            </div>

            <div className="max-w-2xl">
              <div className="bg-accent/20 backdrop-blur-sm p-10 border border-accent/30 rounded-3xl py-[60px] px-[40px] my-0 mx-0">
                <h3 className="text-3xl font-black mb-8 text-accent">Truth Bomb:</h3>
                <div className="space-y-6 text-xl">
                  <p>Customers don't just show up. They follow systems.</p>
                  <p>They follow signals.</p>
                  <p className="font-black text-2xl">
                    And if your brand isn't sending the right signal at the right time — you'll be skipped.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:order-last">
            <div className="relative">
              <div className="aspect-[4/5] w-full">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" alt="Business struggles" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
                
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
                    <p className="text-accent font-black text-xl">
                      "I know I'm good at what I do, but where are my customers?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PainPointsSection;