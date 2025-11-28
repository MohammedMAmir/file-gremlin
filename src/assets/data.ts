/**
 * This object contains all of the features offered by FileGremlin and displayed on the features page
 */
export const features: Feature[] = [
    {
        iconName: "ArrowUpCirlce",
        iconColor: "text-black-500",
        title: "Easy File Upload",
        description: "Quickly upload your files with our intuitive drag-and-drop interface."
    },
    {
        iconName: "Shield",
        iconColor: "text-black-500",
        title: "Secure Storage",
        description: "Your file are encrypted and stored securely in our cloud infrastructure."
    },
    {
        iconName: "Share2",
        iconColor: "text-black-500",
        title: "Simple Sharing",
        description: "Share files with anyone using secure links that you control."
    },
    {
        iconName: "CreditCard",
        iconColor: "text-black-500",
        title: "Flexible Credits",
        description: "Pay only for what you use with our credit-based system."
    },
    {
        iconName: "FileText",
        iconColor: "text-black-500",
        title: "File Management",
        description: "Organize, preview, and manage your files from any device."
    },
    {
        iconName: "Clock",
        iconColor: "text-black-500",
        title: "Transaction History",
        description: "Keep track of all your credit purchase and usage."
    }
];

export const pricingPlans: PricingPlan[] = [
    {
        highlighted: false,
        name: "Free",
        description: "Perfect for starters wanting to demo the product",
        price: {
            amount: 0,
            curr: 'CAD'
        },
        features: [
            '5 file uploads',
            'Basic file sharing',
            '7-day file retention',
            'Email support'
        ],
        cta: "Get Started"
    },
    {
        highlighted: true,
        name: "Pro",
        description: "Designed for individuals with larger file storage needs",
        price: {
            amount: 2,
            curr: 'CAD'
        },
        features: [
            '500 file uploads',
            'Advanced file sharing',
            '30-day file retention',
            'Priority email support',
            'File analytics',
        ],
        cta: "Go Pro Gremlin"
    },
    {
        highlighted: false,
        name: "Premium",
        description: "For teams and businesses who want to unleash their gremlin and store unlimited files",
        price: {
            amount: 5,
            curr: 'CAD'
        },
        features: [
            '5000 file uploads',
            'Team sharing capability',
            'Unlimited file retention',
            '24/7 priority support',
            'Advanced analytics',
            'API access'
        ],
        cta: "Get A Premium Gremlin"
    },
];

export interface Feature {
    iconName: string,                           // The lucide icon used to represent this feature
    iconColor: string,                          // The color of the icon to import
    title: string,                              // The title of the feature
    description: string                         // The description of the feature
}

export interface PricingPlan {
    highlighted: boolean,                       // Whether the current pricing plan is currently highlighted or not
    name: string,                               // The name of the current pricing plan
    description: string                         // Description of the pricing plan
    price: Price                                // Price of the current pricing plan
    features: string[]                          // A list of features for this specific plan
    cta: string                                 // Call to action to display in button
}

export interface Price {
    amount: number,                             // The numerical price
    curr: string                                // The currency of the price
}