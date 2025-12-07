interface CallToActionProps {
  openSignUp: any;
}

const CallToAction: React.FC<CallToActionProps> = ({ openSignUp: openSignUp }) => {
  return (
    <div className="bg-black">
      <div className="lg-items-center mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:justify-between lg:px-8 lg:py-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="pixelated block">Ready to get started?</span>
          <span className="text-main-400 block">Create your account today.</span>
        </h2>
        <div className="lg:-shrink-0 mt-8 flex lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={() => openSignUp()}
              className="text-main-500 pixelated hover:bg-main-500 inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 font-medium transition-colors duration-200 hover:border-gray-500 hover:text-gray-100">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
