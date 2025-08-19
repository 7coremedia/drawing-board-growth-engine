import { Star, Play, Sparkles } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BusinessBlueprintSection() {
  const [isEasyMode, setIsEasyMode] = useState(false);
  const [showStars, setShowStars] = useState(false);

  const starColors = ['#ff7ff6', '#ed6b18', '#163b24'];

  const handleToggle = (checked: boolean) => {
    setIsEasyMode(checked);
    if (checked) {
      setShowStars(true);
      setTimeout(() => setShowStars(false), 2000);
    } else {
      setShowStars(false);
    }
  };

  const StarParticle = ({ delay, color }: { delay: number; color: string }) => (
    <motion.div
      initial={{ scale: 0, y: 0, x: 0, opacity: 1 }}
      animate={{
        scale: [0, 1.2, 0.2],
        y: [0, -3 + Math.random() * 6],
        x: [0, 20 + Math.random() * 30],
        opacity: [1, 1, 0]
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="absolute"
      style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <Star className={`w-3 h-3`} style={{ color, fill: color }} />
    </motion.div>
  );

  return (
    <section className="pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container with Border */}
        <div className="mx-4 sm:mx-8 lg:mx-16 bg-[#fbfbfb] border border-[#e0e0e0] rounded-t-[2rem] rounded-b-none">
          {/* Header */}
          <div className="text-center pt-12 pb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              The <span className="inline bg-black text-[#ff7ff6] px-[0.35rem] py-[0.15rem]">Business Blueprint</span>
            </h2>
            
            {/* Subtitle with toggle */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="inline-flex items-center gap-1">
                <p className="text-[18px] leading-tight">
                  <span className="font-bold">The-DrawingBoard,</span>{' '}
                  <span className="font-normal tracking-tight">Turn On</span>{' '}
                  <span className="font-normal tracking-tight">#easy</span>{' '}
                  <span className="font-bold tracking-tight" style={{ fontFamily: 'Brush Script MT, cursive' }}>mode*</span>
                </p>
              </div>
              <div className="relative inline-flex items-center">
                <div 
                  className="absolute inset-0 border-[1.5px] border-black/40 rounded-full transition-opacity duration-300" 
                  style={{ 
                    left: '-2px', 
                    right: '-2px', 
                    top: '-2px', 
                    bottom: '-2px',
                    opacity: isEasyMode ? 0 : 1
                  }}
                ></div>
                <Switch 
                  checked={isEasyMode} 
                  onCheckedChange={handleToggle} 
                  className="data-[state=checked]:bg-green-500 relative z-10 h-5 w-10 [&>span]:h-4 [&>span]:w-4 [&>span]:translate-x-[1px] data-[state=checked]:[&>span]:translate-x-5"
                />
                {showStars && (
                  <div className="absolute left-0 w-24 h-12 overflow-visible pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <StarParticle 
                        key={i}
                        delay={i * 0.1} 
                        color={starColors[i % starColors.length]}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-sm text-gray-600"></span>
              </div>
            </div>
            
            {/* Star ratings */}
            <div className="flex justify-center items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4" style={{
                color: "#ffc81a",
                fill: "#ffc81a"
              }} />)}
              </div>
              <span className="text-sm text-gray-600">4.8 stars out of 3,367 reviews</span>
            </div>
          </div>

          {/* Blog Cards Container */}
          <AnimatePresence>
            {isEasyMode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="px-4 sm:px-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {/* Card 1 */}
                <Card className="overflow-hidden border border-[#696969] rounded-3xl shadow-none flex-none w-[calc(50%-8px)] snap-start">
                  <div className="relative">
                    <img 
                      alt="Business strategy" 
                      src="/lovable-uploads/b9a5ed6d-adb4-43d8-b1eb-f5aa96f40839.png" 
                      className="h-[240px] w-full object-cover" 
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="bg-black text-white px-4 py-1 rounded-xl text-sm">
                        Strategy
                      </div>
                      <div className="text-sm text-gray-500">
                        12 min read
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      How to find your "IDEAL" customers WHEREVER" they Exist (The-DrawingBoard)
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span>15k likes</span>
                      <span>3k saves</span>
                      <span>2 wks ago</span>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Having a great product isn't enough. Learn the 3 psychological triggers that turn browsers into buyers.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-sm rounded-xl border-gray-200"
                      >
                        Read More
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex items-center gap-2 text-sm rounded-xl bg-[#143f26] text-[#d5e185] hover:bg-[#143f26]/90"
                      >
                        Watch Now
                        <div className="w-5 h-5 rounded-full bg-[#d5e185] flex items-center justify-center">
                          <Play size={12} className="fill-[#143f26] text-[#143f26] ml-0.5" />
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="overflow-hidden border border-[#696969] rounded-3xl shadow-none flex-none w-[calc(50%-8px)] snap-start">
                  <div className="relative">
                    <img 
                      alt="Business growth" 
                      src="/The-1B-in-360-daystdb.png"
                      className="h-[240px] w-full object-cover" 
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="bg-black text-white px-4 py-1 rounded-xl text-sm">
                        Growth
                      </div>
                      <div className="text-sm text-gray-500">
                        22 min read
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      How to scale any "BUSINESS" to "#1B" in 360 Days (The-Drawing-Board)
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span>3.2k likes</span>
                      <span>1k saves</span>
                      <span>15 min ago</span>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      The methods used to scale any business to #1B in a year can be summarized in one word "ATTENTION". But attention can...
                    </p>
                    <div className="flex justify-between items-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-sm rounded-xl border-gray-200"
                      >
                        Read More
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex items-center gap-2 text-sm rounded-xl bg-[#143f26] text-[#d5e185] hover:bg-[#143f26]/90"
                      >
                        Watch Now
                        <div className="w-5 h-5 rounded-full bg-[#d5e185] flex items-center justify-center">
                          <Play size={12} className="fill-[#143f26] text-[#143f26] ml-0.5" />
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Button */}
          <div className="text-center mt-12 mb-12">
            <div className="relative inline-block">
              {/* Black border */}
              <div className="absolute inset-0 bg-black rounded-3xl" style={{ 
                left: '-3px', 
                right: '-3px', 
                top: '-3px', 
                bottom: '-3px' 
              }}></div>
              
              {/* White border layer */}
              <div className="absolute inset-0 bg-white rounded-3xl" style={{ 
                left: '-1.5px', 
                right: '-1.5px', 
                top: '-1.5px', 
                bottom: '-1.5px' 
              }}></div>
              
              {/* Main button */}
              <button className="relative px-8 py-4 rounded-3xl bg-black text-[#ff7ff6] font-bold text-lg">
                <span>I want <span className="text-[#ff7ff6] font-extrabold">7</span> customers now</span>
                <span className="ml-2 inline-block text-[#ff7ff6]">▶</span>
              </button>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="text-center pb-16">
            <p className="text-gray-600 text-sm mb-8">TRUSTED BY</p>
            <div className="flex justify-center items-center gap-16 opacity-40">
              <span className="font-serif text-2xl tracking-wider grayscale">GUCCI</span>
              <span className="font-sans text-2xl font-light tracking-wide grayscale">The Ordinary</span>
              <span className="font-sans text-2xl uppercase tracking-wide grayscale">CeraVe</span>
              <span className="font-serif text-2xl uppercase tracking-widest grayscale">DIOR</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal Divider Line */}
      <div className="relative">
        <div className="absolute -top-[1px] left-0 right-0 mx-auto w-screen h-[1px] bg-[#e0e0e0]" />
      </div>
    </section>
  );
}

export default BusinessBlueprintSection;