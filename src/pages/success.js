export default function Success() {
     return(
        <div className="flex justify-center text-center pt-24">
            <div>
                <i className="fa-solid fa-envelope-circle-check fa-10x pl-6"></i>
                <p
                    className="font-[Raleway] uppercase tracking-widest py-4 text-[40px]"
                >Thank you!</p>
                <p
                    className="font-[Raleway] uppercase tracking-widest text-[14px] pb-4"
                > 
                    Your message was successfully sent!
                </p>
                <button 
                    href="/" 
                    className="contactButton  font-[Raleway] uppercase 
                        tracking-[0.3em] text-[12px] w-[340px]"
                >Continue</button>
             </div>
        </div>
     );
 }