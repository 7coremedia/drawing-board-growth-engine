import { useState, useEffect } from 'react';
import { X, ArrowDown, Check, ChevronRight, Play, Target, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface StepIndicator {
  label: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

interface FormData {
  overview: {
    price: string;
    discountEnabled: boolean;
    discountAmount: string;
  };
  details: {
    [key: string]: string;
  };
}

interface EngineStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface EngineOutcome {
  metric: string;
  value: string;
  trend: string;
}

interface EngineData {
  id: string;
  title: string;
  icon: string;
  description: string;
  steps: {
    overview: {
      title: string;
      price: string;
      discount?: {
        isEnabled: boolean;
        amount: string;
      };
    };
    details: {
      title: string;
      fields: {
        label: string;
        type: string;
        value: string;
      }[];
    };
    confirmation: {
      title: string;
      summary: {
        label: string;
        value: string;
      }[];
    };
  };
}

interface InteractiveEnginePopupProps {
  engines: EngineData[];
  activeEngine: string | null;
  onEngineHover: (id: string | null) => void;
  onEngineClick: (id: string) => void;
  expandedEngine: string | null;
  onCloseExpanded: () => void;
}

const InteractiveEnginePopup = ({ 
  engines, 
  activeEngine, 
  onEngineHover, 
  onEngineClick,
  expandedEngine,
  onCloseExpanded 
}: InteractiveEnginePopupProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    overview: {
      price: "",
      discountEnabled: false,
      discountAmount: ""
    },
    details: {}
  });

  const steps: StepIndicator[] = [
    { label: "Overview", isCompleted: currentStep > 0, isCurrent: currentStep === 0 },
    { label: "Details", isCompleted: currentStep > 1, isCurrent: currentStep === 1 },
    { label: "Confirmation", isCompleted: currentStep > 2, isCurrent: currentStep === 2 }
  ];

  useEffect(() => {
    if (!expandedEngine) return;

    const engine = engines.find(e => e.id === expandedEngine);
    if (!engine) return;

    // Initialize form data when engine is selected
    setFormData({
      overview: {
        price: engine.steps.overview.price,
        discountEnabled: engine.steps.overview.discount?.isEnabled || false,
        discountAmount: engine.steps.overview.discount?.amount || ""
      },
      details: engine.steps.details.fields.reduce((acc, field) => ({
        ...acc,
        [field.label]: field.value
      }), {})
    });

    const handleScroll = () => {
      const popup = document.getElementById('expanded-popup');
      if (!popup) return;

      const scrollTop = popup.scrollTop;
      const scrollHeight = popup.scrollHeight - popup.clientHeight;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);
    };

    const popup = document.getElementById('expanded-popup');
    popup?.addEventListener('scroll', handleScroll);
    return () => popup?.removeEventListener('scroll', handleScroll);
  }, [expandedEngine, engines]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (section: keyof FormData, field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  if (expandedEngine) {
    const engine = engines.find(e => e.id === expandedEngine);
    if (!engine) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-xl mx-4 overflow-hidden"
          >
            {/* Header with close button */}
            <div className="relative border-b border-gray-100 p-6">
              <button
                onClick={onCloseExpanded}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-satoshi font-bold text-gray-900">
                Let's configure your {engine.title}
              </h2>
            </div>

            {/* Progress Steps */}
            <div className="px-6 pt-6">
              <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                  <div key={step.label} className="flex items-center">
                    {/* Connector line */}
                    {index > 0 && (
                      <div 
                        className={`h-[2px] w-full -mx-2 ${
                          step.isCompleted || step.isCurrent 
                            ? 'bg-primary' 
                            : 'bg-gray-200'
                        }`}
                      />
                    )}
                    {/* Step indicator */}
                    <div className="flex flex-col items-center gap-2">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                          step.isCompleted 
                            ? 'border-primary bg-primary text-white'
                            : step.isCurrent
                              ? 'border-primary text-primary'
                              : 'border-gray-200 text-gray-400'
                        }`}
                      >
                        {step.isCompleted ? (
                          <Check size={16} />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      <span 
                        className={`text-sm ${
                          step.isCurrent 
                            ? 'text-primary font-medium' 
                            : 'text-gray-500'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-6">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Please provide your RRP
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="text"
                        value={formData.overview.price}
                        onChange={(e) => handleInputChange('overview', 'price', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">
                      Do you wish to offer a discount?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="discount" 
                          checked={formData.overview.discountEnabled}
                          onChange={() => handleInputChange('overview', 'discountEnabled', true)}
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary/20" 
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="discount" 
                          checked={!formData.overview.discountEnabled}
                          onChange={() => handleInputChange('overview', 'discountEnabled', false)}
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary/20" 
                        />
                        <span className="text-gray-700">Not now</span>
                      </label>
                    </div>
                  </div>

                  {formData.overview.discountEnabled && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Please provide your desired discount amount
                      </label>
                      <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <input
                            type="text"
                            value={formData.overview.discountAmount}
                            onChange={(e) => handleInputChange('overview', 'discountAmount', e.target.value)}
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                        {formData.overview.discountAmount && (
                          <span className="text-sm font-medium text-green-600">
                            ${formData.overview.discountAmount} Discount
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  {engine.steps.details.fields.map((field, index) => (
                    <div key={index} className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        {field.label}
                      </label>
                      {field.type === 'text' && (
                        <input
                          type="text"
                          value={formData.details[field.label] || ''}
                          onChange={(e) => handleInputChange('details', field.label, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                      )}
                      {field.type === 'number' && (
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <input
                            type="text"
                            value={formData.details[field.label] || ''}
                            onChange={(e) => handleInputChange('details', field.label, e.target.value)}
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="0.00"
                          />
                        </div>
                      )}
                      {field.type === 'select' && (
                        <select 
                          value={formData.details[field.label] || ''}
                          onChange={(e) => handleInputChange('details', field.label, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="">Select {field.label.toLowerCase()}</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                      )}
                      {field.type === 'textarea' && (
                        <textarea
                          value={formData.details[field.label] || ''}
                          onChange={(e) => handleInputChange('details', field.label, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[100px]"
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    {engine.steps.confirmation.summary.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-medium text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                    <p className="text-sm text-green-800">
                      Your configuration is ready! Click continue to proceed with the setup.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer with buttons */}
            <div className="border-t border-gray-100 p-6 flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="px-6"
              >
                Back
              </Button>
              <Button
                onClick={currentStep === steps.length - 1 ? onCloseExpanded : handleNext}
                className="px-6"
              >
                {currentStep === steps.length - 1 ? 'Complete Setup' : 'Continue'}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
      {engines.map((engine) => (
        <div
          key={engine.id}
          className={`relative overflow-hidden cursor-pointer transition-all duration-700 ${
            activeEngine === engine.id 
              ? 'scale-105 z-20' 
              : activeEngine && activeEngine !== engine.id 
                ? 'scale-95 opacity-50' 
                : 'scale-100'
          }`}
          onMouseEnter={() => onEngineHover(engine.id)}
          onMouseLeave={() => onEngineHover(null)}
          onClick={() => onEngineClick(engine.id)}
        >
          <div className={`bg-white rounded-[32px] p-8 border-2 transition-all duration-500 ${
            activeEngine === engine.id 
              ? 'border-primary' 
              : 'border-gray-100 hover:border-primary/30'
          }`}>
            <div className="text-4xl mb-4">{engine.icon}</div>
            <h3 className="text-xl font-satoshi font-bold text-primary mb-3">
              {engine.title}
            </h3>
            <p className="text-gray-600">{engine.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveEnginePopup;
