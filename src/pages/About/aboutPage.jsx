import { Transition } from "../../components"
import Profile from "../../assets/images/profilePic.jpg"
export const AboutPage = () => {
    return (
        <div className="bg-black font-SFPRODISPLAYMEDIUM h-screen grid place-content-center " >
            <Transition>
                <section className="text-gray-600 body-font  ">
                    <div className="container px-5  mx-auto flex flex-col">
                        <div className=" mx-auto bg-black ">
                            <div className="text-center" >
                                <h1 className="lg:text-9xl text-7xl text-white  font-Caveat " >
                                    mongi<span className="text-orange-400 font " >Shop</span>
                                </h1>
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img src={Profile} alt="profilePic" className="rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-white text-lg">
                                            Sobhan Hadikhah
                                        </h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                        <p className="text-base text-purple-500 ">
                                            Front End Developer
                                        </p>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed text-gray-400 text-lg mb-4">
                                        I started my path to Android world by starting with Java and Road.
                                        I gained significant experience in Gill Marketing Company and changed my
                                        path to the world of web and web applications. I entered ReactJS in 2020 and I am improving my
                                        level of knowledge is in this framework.
                                    </p>
                                    <a href="https://github.com/sobhanhadikhah" target="_blank" className="text-indigo-500 inline-flex items-center">
                                        GitHub Page
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Transition>

        </div>)
}
