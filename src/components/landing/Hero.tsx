import { useState } from 'react'

const Hero = () => {
  const [index, setIndex] = useState(0)

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay))
  }

  async function handleMouseLeaveRegister() {
    await timeout(3000)
    setIndex(Math.floor(Math.random() * gremlinTranslationsRegister.length))
  }

  return (
    <div className="landing-page-content relative">
      <div className="from-secondary-50 to-main-50 pointer-events-none absolute inset-0 z-0 bg-linear-to-r opacity-80"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-16 sm:pb-20 lg:pt-12 lg:pb-28">
          <div className="text-center">
            <h1 className="text-1xl font-normal tracking-tight text-gray-500 sm:text-2xl md:text-3xl">
              <span className="block">
                Share files securely through the cloud with your
              </span>
              <p className="logo-bold block text-5xl text-black sm:text-6xl md:text-7xl">
                FILE<span className="logo-bold text-main-500">GREMLIN</span>
              </p>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-base md:mt-3 md:max-w-3xl md:text-lg">
              Upload, manage, and share files anywhere, anytime. Let the gremlin
              handle the rest.
            </p>
          </div>
          <div className="sm:mx-w-none align-center mx-auto mt-20 h-20 max-w-sm sm:flex sm:justify-center">
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:gap-8">
              <div
                className="group relative h-20"
                onMouseLeave={handleMouseLeaveRegister}
              >
                <button className="logo-bold hover:bg-main-500 relative z-0 h-14 rounded-full bg-black px-5 py-3 text-base text-white sm:text-lg md:h-15">
                  Register
                </button>
                <img
                  className={`absolute inset-0 top-2 left-4 -z-10 h-12 w-12 opacity-0 transition-all duration-400 ease-in-out group-hover:-translate-y-15 group-hover:scale-150 group-hover:opacity-100`}
                  src="public/logo.svg"
                ></img>
              </div>
              <div className="group relative h-20">
                <button className="logo-bold b-main-200 text-main-500 hover:bg-main-500 bg-main-50 relative z-0 h-14 rounded-full border-3 border-gray-500 px-5 py-3 text-base hover:border-transparent hover:text-white sm:text-lg md:h-15">
                  Sign In
                </button>
                <img
                  className={`absolute inset-0 top-2 left-20 -z-10 h-12 w-12 rotate-135 opacity-0 transition-all duration-400 ease-in-out group-hover:translate-x-10 group-hover:translate-y-10 group-hover:scale-150 group-hover:opacity-100`}
                  src="public/logo.svg"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="relative"></div>

        <div className="mt-8 text-center"></div>
      </div>
    </div>
  )
}

export default Hero
