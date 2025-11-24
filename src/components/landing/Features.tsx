import { ArrowUpCircle, BrickWallShield, Clock, CreditCard, FileText, Share2, Shield, Wallet } from "lucide-react"
import { type Feature } from '../../assets/data'

interface FeaturesProps {
  features: Feature[]
}

const Features: React.FC<FeaturesProps> = ({features}) => {
  const renderIcon = (iconName: string, iconColor: string) => {
    const iconProps = {className: iconColor + ' w-full h-full'}

    switch (iconName) {
      case 'ArrowUpCircle':
        return <ArrowUpCircle {...iconProps} />;
      case 'Shield':
        return <BrickWallShield {...iconProps} />;
      case 'Share2':
        return <Share2 {...iconProps} />;
      case 'CreditCard':
        return <CreditCard {...iconProps} />;
      case 'FileText':
        return <FileText {...iconProps} />;
      case 'Clock':
        return <Clock {...iconProps} />;
      default:
        return <FileText {...iconProps} />;
    }
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl pixelated font-extrabold text-gray-900 sm:text-4xl">
            All your file sharing needs!
          </h2>
          <p className="mt-4 mx-w-2xl mx-auto text-xl text-gray-500">
            FileGremlin provides all the tools you need to manage your digital content
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-5 border border-gray-100 rounded-lg shadow-md hover:shadow-lg hover:shadow-main-300 transition-shadow duration-300 bg-zinc-50">
                <div className="flow-root bg-gray rounded-lg px-6 pb-8">
                  <div className="w-full h-full grid grid-cols-3 gap-5 items-center">
                    <div className="inline-flex w-full h-full col-span-1 items-center justify-center p-4 rounded-md">
                      {renderIcon(feature.iconName, feature.iconColor)}
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-xl font bold text-main-500 pixelated tracking-tight leading-6">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
