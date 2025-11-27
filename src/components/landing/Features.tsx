import { ArrowUpCircle, BrickWallShield, Clock, CreditCard, FileText, Share2 } from 'lucide-react';
import { type Feature } from '../../assets/data';

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  const renderIcon = (iconName: string, iconColor: string) => {
    const iconProps = { className: iconColor + ' w-full h-full' };

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
  };

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="pixelated text-3xl font-extrabold text-gray-900 sm:text-4xl">All your file sharing needs!</h2>
          <p className="mx-w-2xl mx-auto mt-4 text-xl text-gray-500">
            FileGremlin provides all the tools you need to manage your digital content
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="hover:shadow-main-300 rounded-lg border border-gray-100 bg-zinc-50 pt-5 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="bg-gray flow-root rounded-lg px-6 pb-8">
                  <div className="grid h-full w-full grid-cols-3 items-center gap-5">
                    <div className="col-span-1 inline-flex h-full w-full items-center justify-center rounded-md p-4">
                      {renderIcon(feature.iconName, feature.iconColor)}
                    </div>
                    <div className="col-span-2">
                      <h3 className="font bold text-main-500 pixelated text-xl leading-6 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
