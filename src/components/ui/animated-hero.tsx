
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send, Star } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      { word: "Clients?", color: "#8acf23" },
      { word: "Customers?", color: "#ed6b18" },
      { word: "Sales?", color: "#143f26" },
      { word: "ROI?", color: "#5e318a" },
      { word: "Visibility?", color: "#000000" },
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="text-center mb-16">
      <h1 className="text-7xl lg:text-9xl font-black mb-8 leading-tight tracking-tight text-zinc-950">
        <span>Struggling to Get</span>
        <br />
        <span className="relative inline-block h-[1.2em] w-full overflow-hidden mt-4">
          {titles.map((title, index) => (
            <motion.span
              key={index}
              className="absolute font-black left-1/2 top-0 transform -translate-x-1/2 w-full text-center"
              style={{ color: title.color }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              animate={
                titleNumber === index
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: titleNumber > index ? -50 : 50,
                      opacity: 0,
                    }
              }
            >
              {title.word}
            </motion.span>
          ))}
        </span>
      </h1>
      <p className="text-2xl lg:text-4xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
        We help small businesses get{' '}
        <span className="bg-[#8acf23] text-white px-2 py-1 font-black">7 paying customers</span>{' '}
        a month. Or you don't pay.
      </p>
      
      {/* Email Signup */}
      <div className="flex justify-center mb-8">
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
      </div>

      {/* Reviews */}
      <div className="flex justify-center items-center gap-2 mb-16">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3 h-3" style={{ color: "#ffc81a", fill: "#ffc81a" }} />
          ))}
        </div>
        <span className="text-xs text-gray-600">4.8 stars out of 3,367 reviews</span>
      </div>
    </div>
  );
}

export default AnimatedHero;
