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
                    className="title pt-24 px-6 md:top-80
                     text-[40px] text-center pb-5 tracking-widest"
                >
                    EYELASH EXTENSIONS
                </h6>
                <p className="raleway text-center px-8 md:px-16 text-[20px] md:text-[25px] tracking-wider">
                    Lash Beauty's priority is to provide quality eyelash extensions that suit your preferences and enhance your natural beauty.
                </p>
            </div>
            <LashExtensions/>
            <Footer/>
        </div>
    )
}

export default Home;