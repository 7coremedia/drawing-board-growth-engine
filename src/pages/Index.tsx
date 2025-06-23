
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';

const Index = () => {
  const services = [
    {
      title: 'The 7Flow Engine™',
      description: 'Our proprietary system that guarantees 7 new customers every month or your money back.',
      icon: '🎯'
    },
    {
      title: 'The Godfather Offer System™',
      description: 'Create irresistible offers that make customers say yes before you even finish talking.',
      icon: '💰'
    },
    {
      title: 'The Client Magnet Blueprint™',
      description: 'Turn your business into a customer attraction machine that works 24/7.',
      icon: '🧲'
    },
    {
      title: 'TDB Growth Engine™',
      description: 'Scale from struggling to thriving with our proven business growth framework.',
      icon: '📈'
    },
  ];

  const targetAudience = [
    { title: 'Fashion & Beauty Brands', icon: '💄', description: 'Scale your style empire' },
    { title: 'Gym/Fitness Owners', icon: '💪', description: 'Build your fitness community' },
    { title: 'Coaches & Experts', icon: '🎓', description: 'Monetize your expertise' },  
    { title: 'Local Service Providers', icon: '🔧', description: 'Dominate your local market' },
    { title: 'Online Course Creators', icon: '📚', description: 'Turn knowledge into profit' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient tdb-pattern py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Struggling to Get{' '}
                <span className="text-primary">Clients?</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-medium">
                We help small businesses get{' '}
                <span className="text-primary font-bold">7 paying customers</span>{' '}
                a month. Or you don't pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg"
                  asChild
                >
                  <a href="#pricing">Start With This Plan</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg"
                  asChild
                >
                  <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  From Overlooked to Overbooked
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Client Results:</span>
                    <span className="font-bold text-primary">+284% Growth</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-bold text-primary">97%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Money-Back Guarantee:</span>
                    <span className="font-bold text-green-600">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Bring Brands Back From The Dead
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From overlooked to overbooked. Our proven systems transform struggling businesses 
              into customer-attracting machines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who This Is For
            </h2>
            <p className="text-xl text-gray-600">
              We specialize in helping these types of businesses get more customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{audience.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{audience.title}</h3>
                  <p className="text-sm text-gray-600">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing">
        <PricingTable />
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Want to grow your brand and get 7 customers every month?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Get weekly customer acquisition strategies & brand growth playbooks delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 flex-1"
            />
            <Button 
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 font-semibold px-8"
            >
              Get Growth Emails
            </Button>
          </div>
          
          <p className="text-sm text-gray-300 mt-4">
            Join 2,500+ business owners getting our weekly insights
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
