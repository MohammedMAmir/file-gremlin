import { useState } from 'react'

const Hero = () => {
    const [registerIndex, setRegisterIndex] = useState(0)
    const [signIndex, setSignIndex] = useState(0)

    const gremlinTranslationsRegister: string[] = [
        'top-2 left-4 group-hover:-translate-y-13 group-hover:scale-150',
        'top-2 left-4 rotate-225 group-hover:translate-y-10 group-hover:-translate-x-10 group-hover:scale-150',
        'top-6 left-10 rotate-180 group-hover:translate-y-10 group-hover:scale-150',
        'top-6 left-20 rotate-180 group-hover:translate-y-10 group-hover:scale-150',
        'top-2 left-20 group-hover:-translate-y-14 group-hover:scale-150',
        'top-3 left-3 rotate-315 group-hover:-translate-y-10 group-hover:-translate-x-10 group-hover:scale-150',
        'top-3 left-24 rotate-45 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:scale-150',
        'top-2 left-24 rotate-135 group-hover:translate-y-10 group-hover:translate-x-10 group-hover:scale-150',
        'top-2 left-3 rotate-270 group-hover:-translate-x-14 group-hover:scale-150'
    ]

    const gremlinTranslationsSign: string[] = [
        'top-2 left-4 group-hover:-translate-y-13 group-hover:scale-150',
        'top-2 left-3 rotate-225 group-hover:translate-y-10 group-hover:-translate-x-10 group-hover:scale-150',
        'top-6 left-10 rotate-180 group-hover:translate-y-10 group-hover:scale-150',
        'top-6 left-20 rotate-180 group-hover:translate-y-10 group-hover:scale-150',
        'top-2 left-20 group-hover:-translate-y-13 group-hover:scale-150',
        'top-3 left-3 rotate-315 group-hover:-translate-y-10 group-hover:-translate-x-10 group-hover:scale-150',
        'top-3 left-22 rotate-45 group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:scale-150',
        'top-2 left-22 rotate-135 group-hover:translate-y-10 group-hover:translate-x-10 group-hover:scale-150',
        'top-2 left-22 rotate-90 group-hover:translate-x-13 group-hover:scale-150',
    ]

    async function handleMouseEnterRegister() {
        setRegisterIndex(
            Math.floor(Math.random() * gremlinTranslationsRegister.length)
        )
    }

    async function handleMouseEnterSign() {
        setSignIndex(Math.floor(Math.random() * gremlinTranslationsSign.length))
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
                    <div className="sm:mx-w-none align-center mx-auto mt-15 h-20 max-w-sm sm:flex sm:justify-center">
                        <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:gap-8">
                            <div
                                className="group relative h-20"
                                onMouseEnter={handleMouseEnterRegister}
                            >
                                <button className="logo-bold shadow-lg hover:shadow-xl hover:bg-main-500 relative z-0 h-14 rounded-full bg-black px-5 py-3 text-base text-white sm:text-lg md:h-15">
                                    Register
                                </button>
                                {gremlinTranslationsRegister.map((item, i) => (
                                    <div
                                        key={i}
                                        className={
                                            `absolute inset-0 -z-10 h-10 w-10 opacity-0 transition-all duration-400 ease-in-out ` +
                                            (registerIndex == i
                                                ? item + ' group-hover:opacity-100'
                                                : item)
                                        }
                                    >
                                        <img className="object-fit" src="public/logo.svg"></img>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="group relative h-20"
                                onMouseEnter={handleMouseEnterSign}
                            >
                                <button className="logo-bold shadow-lg hover:shadow-xl b-main-200 text-main-500 hover:bg-main-500 bg-main-50 relative z-0 h-14 rounded-full border-3 border-gray-500 px-5 py-3 text-base hover:border-transparent hover:text-white sm:text-lg md:h-15">
                                    Sign In
                                </button>
                                {gremlinTranslationsSign.map((item, i) => (
                                    <div
                                        key={i}
                                        className={
                                            `absolute inset-0 -z-10 h-10 w-10 opacity-0 transition-all duration-400 ease-in-out ` +
                                            (signIndex == i
                                                ? item + ' group-hover:opacity-100'
                                                : item)
                                        }
                                    >
                                        <img className="object-fit" src="public/logo.svg"></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-w-16 rounded-lg shadow-xl overflow-hidden">
                        <img src="src/assets/pegasus-dungeon-soup.png" alt="filegremlin dashboard" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="mt-8 text-center"></div>
            </div>
        </div>
    )
}

export default Hero

interface Gremlin {
    initialClass: string // The initial html to be rendered for the gremlin image (location, rotation)
    hoverTransition: string // The css for the gremlins transition animation on hover
}
