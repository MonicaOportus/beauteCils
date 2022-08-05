export default function Success() {
     return(
        <div className="flex justify-center text-center pt-24">
            <div>
                <i className="fa-solid fa-envelope-circle-check fa-10x pl-6"></i>
                <p
                    className="title tracking-widest py-4 text-[40px]"
                >THANK YOU!</p>
                <p
                    className="raleway tracking-widest text-[18px] pb-4"
                > 
                    Your message was successfully sent!
                </p>
                <a href="/" >
                    <button 
                        className="contactButton raleway uppercase 
                            tracking-[0.3em] text-[12px] w-[340px]"
                    >Continue
                    </button>
                </a>
             </div>
        </div>
     );
 }