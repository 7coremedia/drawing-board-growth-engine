
import { Button } from '@/components/ui/button';

const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-satoshi font-bold text-gray-900 mb-8 leading-tight">
            The One Thing Every Business Needs to Stay Alive
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 text-lg lg:text-xl leading-relaxed">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 mb-6">
              Running a business isn't just about the logo, your Instagram grid, or some motivational quote on your wall.
            </p>
            <p className="text-gray-700 mb-6">
              It's about staying in business.
            </p>
            <p className="text-gray-700 mb-6">
              That means one thing above all else: <span className="font-satoshi font-bold text-primary text-2xl">Customers.</span>
            </p>
          </div>

          <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
            <p className="mb-4">You can survive poor branding. You can survive bad ads. You might even survive a bad month.</p>
            <p className="mb-6">But the moment you run out of customers — <span className="font-satoshi font-bold text-accent text-xl">it's game over.</span></p>
            <div className="bg-accent/20 p-6 rounded-xl">
              <p className="font-satoshi font-bold text-2xl text-accent">Rule #1 of Business: Don't go out of business.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 mb-6">
              And yet every day, thousands of businesses shut their doors. Not because they're not talented. 
              Not because they're not good at what they do.
            </p>
            <p className="text-gray-700 mb-6">
              But because they couldn't get customers.
            </p>
            <div className="text-center">
              <p className="font-satoshi font-bold text-primary text-2xl">
                You don't have to be one of them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
