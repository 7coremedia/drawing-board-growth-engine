
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: 'Strategy',
      description: 'Every move is calculated, every decision backed by data and proven frameworks.',
      icon: '🎯'
    },
    {
      title: 'Creative',
      description: 'Stand out in a crowded market with bold, memorable brand experiences.',
      icon: '🎨'
    },
    {
      title: 'Growth',
      description: 'Sustainable, measurable results that compound over time.',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-satoshi font-bold text-gray-900 mb-6">
            What Drives{' '}
            <span className="text-primary">The Drawing Board</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 font-medium">
            We believe every business deserves customers, clarity, and control.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-satoshi font-bold text-gray-900 mb-8">From Survival to Systems</h2>
            
            <p className="text-gray-600 mb-6">
              The Drawing Board wasn't born from theory—it was forged in the fires of real business struggles. 
              We started as entrepreneurs who knew what it felt like to pour everything into a business, only to 
              watch it struggle to attract customers.
            </p>
            
            <p className="text-gray-600 mb-6">
              After years of trial, error, and breakthrough, we discovered something powerful: 
              <strong className="font-satoshi text-primary"> most businesses fail not because they lack great products or services, 
              but because they lack the right systems to attract and convert customers consistently.</strong>
            </p>
            
            <p className="text-gray-600 mb-8">
              That's when The Drawing Board evolved from survival to systems. We began codifying what worked, 
              eliminating what didn't, and building repeatable frameworks that guarantee results. 
              Today, we help small businesses get 7 paying customers a month—or they don't pay us a dime.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-satoshi font-bold text-gray-900 mb-4">
              The TDB Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategy + Creative + Growth = Results. This isn't just our formula—it's our promise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-satoshi font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-satoshi font-bold mb-8">Brand Manifesto</h2>
          
          <div className="space-y-6 text-lg">
            <p className="text-gray-200">
              We don't believe in empty promises or overnight miracles.
            </p>
            <p className="text-gray-200">
              We believe in systems that work, strategies that scale, and results you can measure.
            </p>
            <p className="text-gray-200">
              We believe every struggling business is just one good system away from breakthrough.
            </p>
            <p className="text-accent font-satoshi font-bold text-xl">
              We believe in turning the overlooked into the overbooked.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
