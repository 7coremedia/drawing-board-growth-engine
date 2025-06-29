import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => [{
    word: "Clients?",
    color: "#8acf23"
  }, {
    word: "Customers?",
    color: "#ed6b18"
  }, {
    word: "Sales?",
    color: "#143f26"
  }, {
    word: "ROI?",
    color: "#5e318a"
  }, {
    word: "Visibility?",
    color: "#000000"
  }], []);
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
  return <div className="text-center mb-16">
      <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-zinc-950">
        <span>Struggling to Get{' '}</span>
        <span className="relative inline-block h-[1.2em] w-[280px] lg:w-[350px] align-middle overflow-hidden text-base">
          {titles.map((title, index) => <motion.span key={index} style={{
          color: title.color
        }} initial={{
          opacity: 0,
          y: 50
        }} transition={{
          type: "spring",
          stiffness: 50,
          damping: 20
        }} animate={titleNumber === index ? {
          y: 0,
          opacity: 1
        } : {
          y: titleNumber > index ? -50 : 50,
          opacity: 0
        }} className="absolute font-black left-0 top-0 w-full text-5xl">
              {title.word}
            </motion.span>)}
        </span>
      </h1>
      <p className="text-2xl lg:text-4xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
        We help small businesses get{' '}
        <span className="text-primary font-black">7 paying customers</span>{' '}
        a month. Or you don't pay.
      </p>
      
      {/* Email Signup */}
      <div className="flex justify-center mb-16">
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
          <div className="relative flex items-center w-full">
            <Input type="email" placeholder="Enter your email address..." className="pr-4 sm:pr-44 h-14 text-lg rounded-full border-gray-300" />
            <Button type="submit" size="lg" className="sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2 bg-[#2d4e39] hover:bg-[#234035] text-[#d5e185] rounded-full px-6 py-3 h-auto font-bold text-sm sm:text-base mt-3 sm:mt-0">
              Get 7 Customers Now
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>;
}
export default AnimatedHero;