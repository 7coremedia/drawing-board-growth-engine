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
              {painPoints.map((point, index) => <div key={index} style={{
              animationDelay: `${index * 100}ms`
            }} className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 px-[19px] py-[19px] rounded-3xl mx-0 my-0 ">
                  <point.icon className={`${point.color} mb-6`} size={40} />
                  <p className="text-lg font-medium leading-relaxed">{point.text}</p>
                </div>)}
            </div>

            <div className="bg-transparent border-none backdrop-blur-0">
              <div className="text-centerflex items-center justify-center h-screen bg-transparent border-none backdrop-blur-0 ">
                <h3 className="text-3xl font-black mb-8 text-accent text-left py-0 px-0 mx-0 my-0">Truth Bomb:</h3>
                <div className="space-y-6 text-xl">
                  <p className="text-left">Customers don't just show up. They follow systems.</p>
                  <p className="text-left px-0 py-0">They follow signals.</p>
                  <p className="font-black text-2xl text-left">
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
                <img alt="Business struggles" src="/lovable-uploads/77667891-1f4d-4a91-9418-ec08432d5629.png" className="absolute top-0 left-0 w-full h-full object-cover scale-125 z-0 -translate-y- [80px]" />
                
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-8 py-[31px] px-[26px] mx-0 my-[2px] rounded-3xl">
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