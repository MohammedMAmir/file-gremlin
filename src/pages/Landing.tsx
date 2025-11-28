import CallToAction from '../components/landing/CallToAction';
import Features from '../components/landing/Features';
import Footer from '../components/landing/Footer';
import Hero from '../components/landing/Hero';
import Pricing from '../components/landing/Pricing';
import { features, pricingPlans } from '../assets/data';
import { useClerk, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  return (
    <div className="landing-page bg-linear-to-b from-gray-50 to-gray-100 text-xs">
      {/* Hero Section*/}
      <Hero openSignIn={openSignIn} openSignUp={openSignUp} />

      {/* Features Section*/}
      <Features features={features} />

      {/* Pricing Section*/}
      <Pricing pricingPlans={pricingPlans} />

      {/* CTA Section*/}
      <CallToAction />

      {/* Footer Section*/}
      <Footer />
    </div>
  );
};

export default Landing;
