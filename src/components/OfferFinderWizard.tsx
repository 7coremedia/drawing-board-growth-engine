import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface BusinessData {
  stage: string;
  productPrice: number;
  targetCustomers: number;
  monthlyRevenue: number;
  industry: string;
  challenges: string[];
  email: string;
}

interface OfferFinderWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5;

const OfferFinderWizard = ({ isOpen, onClose }: OfferFinderWizardProps) => {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<BusinessData>({
    stage: '',
    productPrice: 0,
    targetCustomers: 7,
    monthlyRevenue: 0,
    industry: '',
    challenges: [],
    email: ''
  });
  const [recommendedOffer, setRecommendedOffer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  useEffect(() => {
    // Calculate projected revenue
    const projectedRevenue = data.productPrice * data.targetCustomers;
    setData(prev => ({ ...prev, monthlyRevenue: projectedRevenue }));

    // Determine recommended offer based on inputs
    if (step === totalSteps) {
      setLoading(true);
      setTimeout(() => {
        let offer = '7flow';
        
        if (data.productPrice < 5000) {
          offer = 'godfather';
        } else if (data.stage === 'scaling' && data.monthlyRevenue > 1000000) {
          offer = 'growth';
        } else if (data.challenges.includes('no_leads')) {
          offer = 'magnet';
        }
        
        setRecommendedOffer(offer);
        setLoading(false);
      }, 1500);
    }
  }, [step, data.productPrice, data.targetCustomers, data.stage, data.challenges]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = () => {
    if (step < totalSteps) {
      setStep((step + 1) as Step);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const handleInputChange = (field: keyof BusinessData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-hidden flex items-end justify-center"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-white w-full h-[90vh] rounded-t-[32px] relative flex flex-col"
        >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-8 top-8 text-gray-400 hover:text-gray-600 transition-colors z-50"
            >
              <X size={32} />
            </button>

            {/* Progress Bar - Moved to top inside container */}
            <div className="w-full px-8 md:px-16 pt-20 pb-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(progress)}% to unlocking your perfect offer</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-2xl overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full bg-[#163b24] rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Main Content Area - Scrollable with more height */}
            <div className="flex-1 overflow-y-auto px-8 md:px-16 pb-6">
              <div className="max-w-4xl mx-auto">
                {/* Step 1: Business Stage */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tell us about your business stage</h2>
                    <p className="text-lg text-gray-600">This helps us understand where you are in your journey.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      {[
                        { value: 'starting', label: 'Just Starting', description: 'Less than 1 year in business' },
                        { value: 'growing', label: 'Growing', description: '1-3 years, steady customers' },
                        { value: 'scaling', label: 'Ready to Scale', description: 'Proven model, need more customers' },
                        { value: 'established', label: 'Established', description: '3+ years, looking to optimize' }
                      ].map(stage => (
                        <div
                          key={stage.value}
                          onClick={() => handleInputChange('stage', stage.value)}
                          className={`p-8 rounded-2xl border-2 cursor-pointer transition-all ${
                            data.stage === stage.value
                              ? 'border-[#163b24] bg-[#163b24]/5'
                              : 'border-gray-100 hover:border-[#163b24]/30'
                          }`}
                        >
                          <h3 className="text-xl font-bold text-gray-900">{stage.label}</h3>
                          <p className="text-base text-gray-600 mt-2">{stage.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Product/Service Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Your Product or Service</h2>
                    <p className="text-gray-600">Help us understand your offering better.</p>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What's your lowest priced product/service?
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                          <input
                            type="number"
                            value={data.productPrice || ''}
                            onChange={(e) => handleInputChange('productPrice', Number(e.target.value))}
                            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="e.g. 10000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          How many new customers do you want per month?
                        </label>
                        <input
                          type="range"
                          min="7"
                          max="35"
                          value={data.targetCustomers}
                          onChange={(e) => handleInputChange('targetCustomers', Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                          <span>7 customers</span>
                          <span>{data.targetCustomers} selected</span>
                          <span>35 customers</span>
                        </div>
                      </div>

                      {/* Projected Revenue Display */}
                      <div className="bg-primary/5 p-6 rounded-xl mt-6">
                        <h3 className="text-lg font-bold text-gray-900">Projected Monthly Revenue</h3>
                        <p className="text-3xl font-bold text-primary mt-2">
                          ₦{(data.monthlyRevenue).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Based on {data.targetCustomers} customers × ₦{data.productPrice.toLocaleString()} per customer
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Industry & Challenges */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Your Industry & Challenges</h2>
                    <p className="text-gray-600">This helps us tailor the perfect solution.</p>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select your industry
                        </label>
                        <select
                          value={data.industry}
                          onChange={(e) => handleInputChange('industry', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="">Select an industry</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="services">Professional Services</option>
                          <option value="tech">Technology</option>
                          <option value="retail">Retail</option>
                          <option value="health">Health & Wellness</option>
                          <option value="education">Education</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What are your biggest challenges? (Select all that apply)
                        </label>
                        <div className="space-y-2">
                          {[
                            { id: 'no_leads', label: 'Not enough leads' },
                            { id: 'low_conversion', label: 'Low conversion rates' },
                            { id: 'pricing', label: 'Pricing strategy' },
                            { id: 'competition', label: 'High competition' },
                            { id: 'retention', label: 'Customer retention' }
                          ].map(challenge => (
                            <label key={challenge.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                              <input
                                type="checkbox"
                                checked={data.challenges.includes(challenge.id)}
                                onChange={(e) => {
                                  const newChallenges = e.target.checked
                                    ? [...data.challenges, challenge.id]
                                    : data.challenges.filter(c => c !== challenge.id);
                                  handleInputChange('challenges', newChallenges);
                                }}
                                className="h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
                              />
                              <span className="text-gray-700">{challenge.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Information */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Almost there!</h2>
                    <p className="text-gray-600">Where should we send your personalized recommendation?</p>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your email address
                      </label>
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl mt-6">
                      <h3 className="text-lg font-bold text-gray-900">What happens next?</h3>
                      <ul className="mt-4 space-y-3">
                        <li className="flex items-center text-gray-700">
                          <Check size={20} className="text-primary mr-2" />
                          We'll analyze your business profile
                        </li>
                        <li className="flex items-center text-gray-700">
                          <Check size={20} className="text-primary mr-2" />
                          Match you with the perfect growth engine
                        </li>
                        <li className="flex items-center text-gray-700">
                          <Check size={20} className="text-primary mr-2" />
                          Send you a detailed recommendation
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Step 5: Recommendation */}
                {step === 5 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Your Personalized Recommendation</h2>
                    
                    {loading ? (
                      <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="text-gray-600 mt-4">Analyzing your business profile...</p>
                      </div>
                    ) : recommendedOffer && (
                      <div className="space-y-6">
                        <div className="bg-primary/5 p-6 rounded-xl">
                          <h3 className="text-xl font-bold text-gray-900">
                            {recommendedOffer === '7flow' && "The 7Flow Engine™"}
                            {recommendedOffer === 'godfather' && "The Godfather Offer System™"}
                            {recommendedOffer === 'magnet' && "The Client Magnet Blueprint™"}
                            {recommendedOffer === 'growth' && "TDB Growth Engine™"}
                          </h3>
                          <p className="text-gray-600 mt-2">
                            Based on your business profile, this is the perfect solution for your growth goals.
                          </p>
                          
                          <div className="mt-6 space-y-4">
                            <h4 className="font-medium text-gray-900">Why this is perfect for you:</h4>
                            <ul className="space-y-2">
                              {recommendedOffer === '7flow' && (
                                <>
                                  <li className="flex items-center text-gray-700">
                                    <Check size={16} className="text-primary mr-2" />
                                    Guaranteed 7 new customers every month
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <Check size={16} className="text-primary mr-2" />
                                    Perfect for your current price point
                                  </li>
                                  <li className="flex items-center text-gray-700">
                                    <Check size={16} className="text-primary mr-2" />
                                    Matches your growth stage
                                  </li>
                                </>
                              )}
                              {/* Add similar blocks for other offers */}
                            </ul>
                          </div>

                          <div className="mt-6">
                            <Button size="lg" className="w-full bg-primary text-white rounded-2xl">
                              Learn More About This Offer
                            </Button>
                          </div>
                        </div>

                        <div className="text-sm text-gray-600">
                          We've sent a detailed breakdown to {data.email}. Check your inbox!
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer with buttons - Fixed at bottom */}
            <div className="border-t border-gray-100 bg-white">
              <div className="max-w-4xl mx-auto px-8 md:px-16 py-6">
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="rounded-2xl px-8 py-3 text-base"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Back
                  </Button>

                  {step < totalSteps && (
                    <Button
                      onClick={handleNext}
                      className="rounded-2xl px-8 py-3 bg-[#163b24] hover:bg-[#163b24]/90 text-base"
                      disabled={
                        (step === 1 && !data.stage) ||
                        (step === 2 && (!data.productPrice || !data.targetCustomers)) ||
                        (step === 3 && (!data.industry || data.challenges.length === 0)) ||
                        (step === 4 && !data.email)
                      }
                    >
                      Next
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OfferFinderWizard; 