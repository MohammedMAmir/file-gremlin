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
        name: "Free"
    },
    {
        highlighted: true,
        name: "Pro"
    },
    {
        highlighted: false,
        name: "Premium"
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
    name: string                                // The name of the current pricing plan
}