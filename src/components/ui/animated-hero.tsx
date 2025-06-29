
import { Send, Star } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AnimatedHero() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight tracking-tight text-zinc-950">
        <div className="flex flex-col items-center">
          <span>Struggling to Get</span>
          <span style={{ color: "#8acf23" }}>Customers?</span>
        </div>
      </h1>
      <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
        Growing a business is hard. We make it a whole lot easier,
        <br />
        more predictable, less stressful, and more fun.
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
