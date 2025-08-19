import { Send, Star } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedHero() {
  const words = [
    { text: "Customers", color: "#8acf23" },
    { text: "Clients", color: "#ff7ff6" },
    { text: "ROI", color: "#ed6b18" },
    { text: "Visibility", color: "#143f26" },
    { text: "Sales", color: "#8acf23" }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 30000); // Change word every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const wordVariants = {
    enter: { opacity: 0, y: 50 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <div className="text-center mb-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight tracking-tight text-zinc-950"
      >
        <motion.div 
          className="flex flex-col items-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>Struggling to Get</span>
          <div className="h-[1.2em] relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                variants={wordVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                style={{ color: words[currentIndex].color }}
                className="absolute"
              >
                {words[currentIndex].text}?
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
      >
        We help small businesses get{' '}
        <span className="relative inline-flex items-center">
          <span className="relative font-bold text-black" style={{ 
            background: '#8acf23',
            padding: '0.1em 0.3em',
            paddingLeft: '0.3em',
            boxDecorationBreak: 'clone',
            WebkitBoxDecorationBreak: 'clone',
            lineHeight: '1.4',
            display: 'flex',
            alignItems: 'center',
            gap: '0.2em'
          }}>
            <span className="inline-block w-[2px] h-[1em] bg-black" />
            7 paying customers
          </span>
        </span>{' '}
        a month.
        <br />
        Or you don't pay.
      </motion.p>
      
      {/* Email Signup */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex justify-center mb-8"
      >
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
          <div className="relative flex items-center w-full">
            <Input
              type="email"
              placeholder="Enter your email address..."
              className="pr-4 sm:pr-44 h-14 text-lg rounded-full border-gray-300"
            />
            <Button
              type="submit"
              size="lg"
              className="sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2 bg-black hover:bg-gray-800 text-[#8acf23] rounded-full px-6 py-3 h-auto font-bold text-sm sm:text-base mt-3 sm:mt-0"
            >
              Get 7 Customers Now
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Reviews */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex justify-center items-center gap-2 mb-16"
      >
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3 h-3" style={{ color: "#ffc81a", fill: "#ffc81a" }} />
          ))}
        </div>
        <span className="text-xs text-gray-600">4.8 stars out of 3,367 reviews</span>
      </motion.div>
    </div>
  );
}

export default AnimatedHero;
