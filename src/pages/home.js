import Navbar from "../components/navbar";
import cover from "../images/cover.jpg";
import LashExtensions from "../components/lashExtensions";
import Footer from "../components/footer";

function Home() {
    return (
        <div>
            <Navbar/>
            <div>
                <img 
                    src={cover} 
                    alt="" 
                    className="object-cover h-80 md:h-96 w-full"
                />
                <h6 
                    className="left-6 top-52 md:top-80 font-[Raleway] uppercase
                    tracking-widest text-[30px] text-center pt-10 pb-7"
                >
                    Eyelash Extensions
                </h6>
                <p className="text-center font-[Montserrat] px-8 md:px-16 lg:px-52 text-lg lg:text-xl">
                Beauté Cils offers long-lasting eyelash extensions, while maintaining the health of your natural lashes.
                Our eyelash extensions vary from natural to voluminous. The choice is yours!
                </p>
            </div>
            <LashExtensions/>
            <Footer/>
        </div>
    )
}

export default Home;