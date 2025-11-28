import { Check } from 'lucide-react';
import type { PricingPlan } from '../../assets/data';

interface PricingProps {
  pricingPlans: PricingPlan[];
}

const Pricing: React.FC<PricingProps> = ({ pricingPlans }) => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="mx-auto my-12 max-w-7xl px-14 sm:px-16 lg:px-8">
        <div className="text-center">
          <h2 className="pixelated text-3xl font-extrabold text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">Choose the plan that's right for you</p>
        </div>

        <div className="mt-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col overflow-hidden rounded-lg shadow-lg ${plan.highlighted ? 'border-main-500 scale-105 transform border-2' : 'border border-gray-200'}`}>
              <div className={`bg-white px-6 py-8 ${plan.highlighted ? 'from-main-50 bg-linear-to-br to-white' : ''}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="bg-main-200 text-main-800 inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-md mt-4 text-gray-500">{plan.description}</p>
                <p className="mt-8 inline-flex items-end-safe gap-2">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {Intl.NumberFormat('en-US', { style: 'currency', currency: plan.price.curr }).format(
                      plan.price.amount,
                    )}{' '}
                  </span>
                  <p className="text-md">/ month</p>
                </p>
              </div>
              <div className="jusitfy-between flex flex-1 flex-col space-y-6 bg-gray-50 px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="shrink-0">
                        <Check className="text-main-500 h-5 w-5"></Check>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="rounded-md shadow">
                  <button
                    className={`pixelated flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 font-medium ${
                      plan.highlighted
                        ? 'bg-main-500 hover:bg-main-600 text-white'
                        : 'text-main-600 hover:border-main-500 bg-white hover:bg-gray-50'
                    } transition-colors duration-200`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
