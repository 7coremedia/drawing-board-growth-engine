import { Star } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
function BusinessBlueprintSection() {
  return <section className="bg-gray-100 rounded-t-3xl pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            The <span className="bg-black-100 text-purple 400  px-0 py-0 text-6xl font-bold ">Business Blueprint</span>
          </h2>
          
          {/* Subtitle with toggle */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-lg">On</span>
            <span className="font-bold text-lg">The-DrawingBoard,</span>
            <span className="text-lg">use</span>
            <span className="font-bold text-lg">easy mode</span>
            <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
          </div>
          
          {/* Star ratings */}
          <div className="flex justify-center items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5" style={{
              color: "#ffc81a",
              fill: "#ffc81a"
            }} />)}
            </div>
            <span className="text-sm text-gray-600">4.8 stars out of 3,367 reviews</span>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <Card className="overflow-hidden shadow-lg">
            <div className="relative">
              <img alt="Business strategy" src="/lovable-uploads/b9a5ed6d-adb4-43d8-b1eb-f5aa96f40839.png" className="h-60 left-2 w-full w-full right-0 object-cover right object-contain " />
              <div className="absolute top-4 left-4">
                
              </div>
            </div>
            <CardContent className="p-6 ">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                If You're Great at What You Do, <span className="500 text-white px-2 py-1 ">Why are Customers So Hard to Find?</span>
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>10k likes</span>
                <span>3k views</span>
                <span>2 wks ago</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Having a great product isn't enough. Learn the 3 psychological triggers that turn browsers into buyers.
              </p>
              <div className="flex gap-56">
                <Button variant="outline" size="sm" className="text-sm">
                  Read More
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-sm">
                  Sign Up For $4
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="overflow-hidden shadow-lg">
            <div className="relative">
              <img alt="Business growth" src="/lovable-uploads/7c2b4570-f61e-4d65-b6ce-0ba8cda305be.png" className="h-60 left-2 w-full w-full right-0 object-cover right object-contain " />
              
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                How to scale any "BUSINESS" to "#1B" in 360 Days (The-Drawing-Board)
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>5.5k likes</span>
                <span>1k views</span>
                <span>15 min ago</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The methods used to scale any business to #1B in a year can be summarized in one word "ATTENTION". But attention can...
              </p>
              <div className="flex gap-56">
                <Button variant="outline" size="sm" className="text-sm">
                  Read More
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-sm">
                  Sign Up For $4
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Button size="lg" className="px-8 py-4 font-bold text-[d2fd00] text-[#d2fd00] rounded-2xl bg-black">
            I want 7 customers now ▶
          </Button>
        </div>

        {/* Trusted By Section */}
        <div className="text-center pb-16">
          <p className="text-gray-600 text-sm mb-8">TRUSTED BY</p>
          <div className="flex justify-center items-center gap-50 opacity-60 py-[52px] px-[50px] mx-0 my-0">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Microsoft" className="h-8 grayscale" />
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Airbnb" className="h-8 grayscale" />
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Partner" className="h-8 grayscale" />
          </div>
        </div>
      </div>
    </section>;
}
export default BusinessBlueprintSection;