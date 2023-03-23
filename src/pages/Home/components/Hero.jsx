import { Link } from "react-router-dom";
import gradient from "../../../assets/images/header.png";
import { ButttonGlowing, Terminal, Tooltip } from "../../../components";
export const Hero = () => {
    return (

        <div className=" max-w-[1240px] mx-auto font-SFPRODISPLAYMEDIUM " >
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 min-h-screen items-center justify-center flex-col">
                    {/* terminal */}
                    <Terminal p1="Making a word wide web better..." />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl pt-4 font-medium text-white  ">You Are <span className="bg-gradient-to-r from-cyan-500 to-violet-400 bg-clip-text text-transparent " >Amazing Like Us</span></h1>
                        <p className="mb-8 leading-relaxed text-slate-400 ">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                        <div className="flex justify-center">
                            <div className="flex flex-row  " >
                                <Tooltip textH1="Get started!" textP="For Start Your Journy" >
                                    <ButttonGlowing>
                                        Get started
                                    </ButttonGlowing>
                                </Tooltip>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
