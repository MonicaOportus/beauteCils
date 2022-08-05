import lash1 from "../images/lash1.jpg";
import lash2 from "../images/lash2.jpg";
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
                            className="text-[#16313D] pb-5 text-[40px] 
                            title font-semibold"
                        >
                            Classic
                        </h1>
                        <a
                            href="https://squareup.com/appointments/book/5sv8sknhsct21f/LKPZ691GW0XM9/start"
                            target="_blank"
                        >
                            <button 
                                className="myButton raleway text-[14px]"
                            >
                                Book now
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative bg-gray-400">
                    <img 
                        src={lash2} 
                        alt="lashes"
                        className="h-[470px] lg:h-[540px] w-full object-cover grayscale opacity-50"
                    />
                    <div className="absolute bottom-10 left-10">
                        <h1 
                            className="text-[#16313D] pb-5 
                            title text-[40px] font-semibold">
                            Volume
                        </h1>
                        <a
                            // href="https://squareup.com/appointments/book/5sv8sknhsct21f/LKPZ691GW0XM9/start"
                            // target="_blank"
                        >
                            <button 
                                className="disabledButton raleway text-[14px]"
                            >
                                Coming soon
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative bg-gray-400">
                    <img 
                        src={lash3} 
                        alt="lashes"
                        className="h-[470px] lg:h-[540px] w-full object-cover grayscale opacity-50"
                    />
                    <div className="absolute bottom-10 left-10">
                        <h1 
                            className="text-[#16313D] text-[40px] font-semibold pb-5 
                            title"
                        >
                            Refill
                        </h1>
                        <a 
                            // href="https://squareup.com/appointments/book/5sv8sknhsct21f/LKPZ691GW0XM9/start" 
                            // target="_blank"
                        >
                            <button 
                                className="disabledButton raleway text-[14px]"
                            >
                                Coming soon
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LashExtensions;