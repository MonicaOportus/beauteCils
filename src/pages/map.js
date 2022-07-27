import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Map() {
    return(
    <div>
        <Navbar/>
        <h1 
            className="subtitle font-[Raleway] uppercase
            tracking-widest text-[30px] text-center pt-6 pb-7"
        >
            Location
        </h1>
        {/* <p 
            className="text-center"
        >
            71 rue Milhaud, <br/> Laval QC, <br/>H7J 1A9
        </p> */}
        <div className="flex justify-center pb-16">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.1137896582522!2d-73.87516488445468!3d45.66861592780108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9282faf79bb75%3A0x3489969447d4c864!2s821%20Bd%20du%20Cur%C3%A9-Labelle%2C%20Blainville%2C%20QC%20J7C%202K7!5e0!3m2!1sen!2sca!4v1658793135291!5m2!1sen!2sca" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <Footer/>
    </div>
    );
}

export default Map;