import lash1 from "../images/lash1.png";
import lash2 from "../images/lash2.png";
import lash3 from "../images/lash3.jpg";

function LashExtensions() {
    return (
        <div id="lashExtensions">
            <div 
                className="py-12 px-8 gap-8 grid grid-cols-1 sm:grid-cols-2 
                lg:grid-cols-3">
                <div className="relative">
                    <img 
                        src={lash1} 
                        alt="lashes" 
                        className="h-[470px] lg:h-[540px] w-full object-cover"
                    />
                     <div className="absolute bottom-10 left-10">
                        <h1 
                            className="text-white pb-5 text-[20px] 
                            font-[Raleway] uppercase tracking-[0.3em]"
                        >
                            Classic
                        </h1>
                        <a
                            href="https://squareup.com/appointments/book/5sv8sknhsct21f/LKPZ691GW0XM9/start"
                            target="_blank"
                        >
                            <button 
                                className="myButton font-[Raleway] uppercase 
                                tracking-[0.3em] text-[12px]"
                            >
                                Book now
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img 
                        src={lash2} 
                        alt="lashes"
                        className="h-[470px] lg:h-[540px] w-full object-cover"
                    />
                    <div className="absolute bottom-10 left-10">
                        <h1 
                            className="text-white pb-5 text-[20px] 
                            font-[Raleway] uppercase tracking-[0.3em]">
                            Volume
                        </h1>
                        <a
                            href="https://squareup.com/appointments/book/5sv8sknhsct21f/LKPZ691GW0XM9/start"
                            target="_blank"
                        >
                            <button 
                                className="myButton font-[Raleway] uppercase 
                                tracking-[0.3em] text-[12px]"
                            >
                                Book now
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img 
                        src={lash3} 
                        alt="lashes"
                        className="h-[470px] lg:h-[540px] w-full object-cover"
                    />
                    <div className="absolute bottom-10 left-10">
                        <h1 
                            className="text-white text-[20px] pb-5 
                            font-[Raleway] uppercase tracking-[0.3em]"
                        >
                            Refill
                        </h1>
                        <a 
                            href="https://squareup.com/appointments/book/5sv8sknhsct21f/LKPZ691GW0XM9/start" 
                            target="_blank"
                        >
                            <button 
                                className="myButton font-[Raleway] uppercase 
                                tracking-[0.3em] text-[12px]"
                            >
                                Book now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LashExtensions;