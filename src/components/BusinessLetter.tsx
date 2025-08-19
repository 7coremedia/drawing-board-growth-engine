
import * as React from "react";

function BusinessLetter() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top right text */}
        <div className="absolute top-0 right-4 text-right">
          <p className="text-[21px] leading-tight">
            <span className="font-light">you</span>{' '}
            <span className="font-normal">need</span>{' '}
            <span className="font-normal">#easy</span>{' '}
            <span className="font-normal" style={{ fontFamily: 'Brush Script MT, cursive' }}>mode*</span>
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Dear Business Owner,</h2>
          
          <div className="text-2xl text-gray-800 leading-relaxed space-y-6">
            <p>
              Running a business can be fuc#ing hard, we know, but it doesn't have to be.
            </p>
            
            <p>
              You shouldn't have to think of where the next customer would be coming from, or the next purchase. Sales is predictable but you don't just need strategy or the best ad, or the best copy, hell! you don't even need the best reviews, not that it doesn't help there are thousands of shit products that are sold for thousands of cash using systems and a deep understanding of consumer psychology and what makes people stand in line for the same product in a different packaging.
            </p>
            
            <p>
              What you need as a business owner is a system that prints money on command and that system is what we have created. That fuck yeah! it prints MONEY! and it does it BIG!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessLetter;
