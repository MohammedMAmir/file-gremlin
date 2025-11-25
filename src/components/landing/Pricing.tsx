import type { PricingPlan } from "../../assets/data"

interface PricingProps {
    pricingPlans: PricingPlan[]
}

const Pricing: React.FC<PricingProps> = ({pricingPlans}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="text-center">
            <h2 className="pixelated text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Simple, Transparent Pricing
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Choose the plan that's right for you
            </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid-cols-3 lg:gap-8">
            {pricingPlans.map((plan, index) => (
                <div key={index} className={`flex flex-col rounded-lg shadow-lg overflow-hidden 
                    ${plan.highlighted ? 'border-2 border-main-500 transform-scale-105' : 'border border-gray-200'}`}>
                        <div className={`px-6 py-8 bg-white ${plan.highlighted ? 'bg-linear-to-br from-main-50 to-white' : ''}`}>
                            <div className="flex justify-between item-center">
                                <h3 className="text-2xl font-medium text-gray-900">
                                    {plan.name}
                                </h3>
                                {plan.highlighted && (
                                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-main-200 text-main-800">
                                        Popular
                                    </span>
                                ) }
                            </div>
                            <p className="mt-4 text-sm text-gray-500">

                            </p>
                            <p className="mt-8">

                            </p>
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing
