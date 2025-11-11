import CallToAction from "../components/landing/CallToAction";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import Pricing from "../components/landing/Pricing";

const Landing = () => {
    return (
        <div className="landing-page bg-linear-to-b from-gray-50 to-gray-100 text-xs">
            {/* Hero Section*/}
            <Hero />

            {/* Features Section*/}
            <Features />

            {/* Pricing Section*/}
            <Pricing />

            {/* CTA Section*/}
            <CallToAction />

            {/* Footer Section*/}
            <Footer />
        </div>
    )
}

export default Landing;