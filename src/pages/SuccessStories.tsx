
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Sarah\'s Fashion Boutique',
      industry: 'Fashion & Beauty',
      beforeRevenue: '₦150K/month',
      afterRevenue: '₦850K/month',
      growth: '+467%',
      testimonial: 'I went from struggling to pay rent to having a 3-month waiting list. TDB didn\'t just get me customers—they transformed my entire business.',
      timeframe: '4 months',
      challenge: 'Low foot traffic, no online presence',
      solution: 'The 7Flow Engine + Social Media Strategy',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop'
    },
    {
      name: 'FitZone Gym',
      industry: 'Fitness',
      beforeRevenue: '₦250K/month',
      afterRevenue: '₦1.2M/month',
      growth: '+380%',
      testimonial: 'The Client Magnet Blueprint filled my gym to capacity. Now I\'m opening a second location thanks to TDB\'s systems.',
      timeframe: '6 months',
      challenge: 'Seasonal membership drops, low retention',
      solution: 'Growth Engine + Retention Workflow',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      name: 'Coach Michael\'s Consulting',
      industry: 'Business Coaching',
      beforeRevenue: '₦80K/month',
      afterRevenue: '₦650K/month',
      growth: '+713%',
      testimonial: 'I had the knowledge but couldn\'t get clients. TDB\'s Godfather Offer System changed everything. My calendar is fully booked 3 months out.',
      timeframe: '5 months',
      challenge: 'Inconsistent client acquisition, low pricing power',
      solution: 'Godfather Offer System + Brand Positioning',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      name: 'Lagos Catering Co.',
      industry: 'Food Service',
      beforeRevenue: '₦180K/month',
      afterRevenue: '₦900K/month',
      growth: '+400%',
      testimonial: 'From small parties to corporate events. TDB helped us scale our catering business beyond what I thought was possible.',
      timeframe: '7 months',
      challenge: 'Limited to word-of-mouth referrals',
      solution: 'Digital Marketing + Customer Acquisition System',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    },
    {
      name: 'TechSkills Academy',
      industry: 'Online Education',
      beforeRevenue: '₦120K/month',
      afterRevenue: '₦750K/month',
      growth: '+525%',
      testimonial: 'My courses were great but no one knew about them. TDB\'s systems brought me hundreds of students and consistent revenue.',
      timeframe: '4 months',
      challenge: 'Low course enrollment, poor conversion',
      solution: 'Content Marketing + Sales Funnel Optimization',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'
    },
    {
      name: 'Elite Property Services',
      industry: 'Real Estate Services',
      beforeRevenue: '₦300K/month',
      afterRevenue: '₦1.5M/month',
      growth: '+400%',
      testimonial: 'We went from chasing leads to having clients chase us. The transformation has been incredible.',
      timeframe: '8 months',
      challenge: 'High competition, inconsistent leads',
      solution: 'Brand Empire Package + Local SEO',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Proof Over Promises
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200">
            Real businesses. Real results. Real transformation stories from our clients 
            who went from struggling to thriving.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">97%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">450%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₦2.8B</div>
              <div className="text-gray-600">Additional Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              From Overlooked to Overbooked
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses like yours achieved extraordinary growth with our proven systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary">{story.industry}</Badge>
                        <span className="text-2xl font-bold text-green-600">{story.growth}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{story.name}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Before:</span>
                          <span className="font-medium">{story.beforeRevenue}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">After:</span>
                          <span className="font-medium text-primary">{story.afterRevenue}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Timeframe:</span>
                          <span className="font-medium">{story.timeframe}</span>
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 italic mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      
                      <div className="text-xs text-gray-500 mb-4">
                        <div><strong>Challenge:</strong> {story.challenge}</div>
                        <div><strong>Solution:</strong> {story.solution}</div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of businesses who transformed their customer acquisition 
            and achieved extraordinary growth with our proven systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4"
              asChild
            >
              <a href="/#pricing">I Want These Results Too</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4"
              asChild
            >
              <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                Book Free Strategy Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
