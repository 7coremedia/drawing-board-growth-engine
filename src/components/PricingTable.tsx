
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const PricingTable = () => {
  const plans = [
    {
      name: 'Plan A',
      subtitle: '7 or Free',
      price: '₦35,000',
      period: '/month',
      description: 'Get 7 new customers or your money back',
      features: [
        { name: 'Guaranteed New Customers / Month', value: '7 Customers or Free', included: true },
        { name: 'Client Retention Services', value: '', included: false },
        { name: 'Social Media Promo Support', value: '1 Platform', included: true },
        { name: 'Branding Strategy Optimization', value: '', included: false },
        { name: 'Funnel Optimization', value: '', included: false },
        { name: 'Access to Helpdesk + Talent Pool', value: 'Basic Access', included: true },
        { name: 'WhatsApp/Email Marketing Integration', value: '', included: false },
        { name: 'Website & Landing Page Review', value: '', included: false },
        { name: 'Business Scaling Consultation', value: '', included: false },
        { name: 'Cancellation Flexibility', value: 'Anytime', included: true },
      ],
      popular: true,
    },
    {
      name: 'Plan B',
      subtitle: 'Growth Engine',
      price: '₦95,000',
      period: '/month',
      description: 'Comprehensive growth system for scaling brands',
      features: [
        { name: 'Guaranteed New Customers / Month', value: '15–20 Verified Leads', included: true },
        { name: 'Client Retention Services', value: 'Basic Retention Workflow', included: true },
        { name: 'Social Media Promo Support', value: 'Up to 3 Platforms', included: true },
        { name: 'Branding Strategy Optimization', value: 'Monthly Review', included: true },
        { name: 'Funnel Optimization', value: 'Quarterly Optimization', included: true },
        { name: 'Access to Helpdesk + Talent Pool', value: 'Priority Access', included: true },
        { name: 'WhatsApp/Email Marketing Integration', value: 'Basic Setup', included: true },
        { name: 'Website & Landing Page Review', value: '1x Quarterly', included: true },
        { name: 'Business Scaling Consultation', value: '', included: false },
        { name: 'Cancellation Flexibility', value: '14 Days Notice', included: true },
      ],
      popular: false,
    },
    {
      name: 'Plan C',
      subtitle: 'Brand Empire',
      price: '₦250,000',
      period: '/month',
      description: 'Full-service brand transformation and scaling',
      features: [
        { name: 'Guaranteed New Customers / Month', value: '30+ Verified Leads', included: true },
        { name: 'Client Retention Services', value: 'Advanced CRM & Retargeting', included: true },
        { name: 'Social Media Promo Support', value: 'Full SMM Management', included: true },
        { name: 'Branding Strategy Optimization', value: 'Monthly Creative Audits', included: true },
        { name: 'Funnel Optimization', value: 'Full Funnel Rebuild', included: true },
        { name: 'Access to Helpdesk + Talent Pool', value: 'Dedicated Manager', included: true },
        { name: 'WhatsApp/Email Marketing Integration', value: 'With Automation Setup', included: true },
        { name: 'Website & Landing Page Review', value: 'Monthly + CRO Strategy', included: true },
        { name: 'Business Scaling Consultation', value: '2 Strategy Sessions/Month', included: true },
        { name: 'Cancellation Flexibility', value: '30 Days Notice', included: true },
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From guaranteed customers to full brand transformation. Pick the plan that fits your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-lg font-medium text-primary">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                          {feature.name}
                        </p>
                        {feature.value && feature.included && (
                          <p className="text-xs text-gray-600 font-medium">
                            {feature.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                    {plan.popular ? 'Start With This Plan' : 'Get Started'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
              Book Your Free Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
