
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Talk Growth
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600">
            Ready to get 7 new customers this month? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Email Us</h4>
                    <a 
                      href="mailto:thedrawingboad.news@gmail.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      thedrawingboad.news@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Quick Response</h4>
                    <Button 
                      asChild
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                        Chat with TDB on WhatsApp
                      </a>
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-gray-600 text-sm">
                      We typically respond within 2-4 hours during business hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/20">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-primary mb-3">Need Immediate Help?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Book a free 15-minute strategy call to discuss your business goals 
                    and see if we're a good fit.
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Book Free Strategy Call
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Tell us about your business
                  </CardTitle>
                  <p className="text-gray-600">
                    The more we know about your situation, the better we can help you get 7 new customers this month.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" type="text" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" type="text" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" required />
                    </div>

                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <Input id="business" type="text" required />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                        Industry/Business Type *
                      </label>
                      <Input id="industry" type="text" placeholder="e.g., Fashion, Fitness, Coaching, etc." required />
                    </div>

                    <div>
                      <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Monthly Revenue (approximately)
                      </label>
                      <Input id="revenue" type="text" placeholder="e.g., ₦100,000 - ₦500,000" />
                    </div>

                    <div>
                      <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-2">
                        What's your biggest customer acquisition challenge? *
                      </label>
                      <Textarea 
                        id="challenge" 
                        rows={4}
                        placeholder="Tell us what's currently preventing you from getting consistent customers..."
                        required 
                      />
                    </div>

                    <div>
                      <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                        What would getting 7 new customers monthly mean for your business?
                      </label>
                      <Textarea 
                        id="goals" 
                        rows={3}
                        placeholder="Describe the impact this would have on your business and life..."
                      />
                    </div>

                    <div className="bg-accent/20 p-4 rounded-lg">
                      <p className="text-sm text-primary font-medium mb-2">
                        🎯 Ready to guarantee 7 new customers this month?
                      </p>
                      <p className="text-sm text-gray-600">
                        If you're serious about growth and ready to invest in proven systems, 
                        we'll show you exactly how to get 7 paying customers—or you don't pay us.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message & Get Response Within 4 Hours
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
