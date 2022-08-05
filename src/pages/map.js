import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Map() {
    return(
    <div>
        <Navbar/>
        <h1 
            className="subtitle title uppercase
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.3717728286733!2d-73.57885748445715!3d45.5830706335248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91e91bc2b3243%3A0xa848b279f49d85bd!2s7172%20Bd%20Lacordaire%2C%20Saint-L%C3%A9onard%2C%20QC%20H1S%202A4!5e0!3m2!1sen!2sca!4v1659483887097!5m2!1sen!2sca"
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