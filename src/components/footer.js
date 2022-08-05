
function Footer() {
    const date = new Date();
    let thisYear = date.getFullYear();

    return(
        <div className="raleway tracking-wider text-center pt-14 bg-[#16313D] w-full">
            <h6 
                className="text-[17px]"
            >
                Follow us on social media!
            </h6>
            <div className="gap-10 pt-8 flex justify-center">
                <a
                    target="_blank"
                    href=""
                >
                    <i className="fa-lg fa-brands fa-instagram text-[#EBCCA4] hover:scale-110"></i>
                </a>
                <a
                    target="_blank"
                    href=""
                >
                    <i className="fa-lg fa-brands fa-facebook text-[#EBCCA4] hover:scale-110"></i>
                </a>
                <a
                    target="_blank"
                    href="/contact"
                >
                    <i className="fa-lg fa-solid fa-envelope text-[#EBCCA4] hover:scale-110"></i>
                </a>
            </div>
            <div>
                <p
                    className="pt-10 text-[13px]"
                >
                    © {thisYear}, lash beauty 
                </p>
                {/* <p
                    className="text-gray-500"
                >
                    123 Lash Drive<br/>Blainville, QC <br/>H7J 1A9
                </p> */}
            </div>
            <div>
                <p 
                    className="pt-12 pb-4 text-[13px] normal-case text-gray-500 hover:text-gray-400"
                >
                    <a 
                        className="text-[#EBCCA4] hover:opacity-80"
                        target="_blank"
                        href="https://monicadev.com"
                    >
                        Made by Monica
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;