
function Footer() {
    const date = new Date();
    let thisYear = date.getFullYear();

    return(
        <div className="text-center font-[Raleway] uppercase tracking-[0.15em] p-10 bg-gray-50 w-full">
            <h6 
                className="text-xs "
            >
                Follow us on social media!
            </h6>
            <div className="gap-10 pt-8 flex justify-center">
                <a
                    href="https://www.instagram.com/extension_de_cils_beaute_cils/"
                >
                    <i className="fa-lg fa-brands fa-instagram text-gray-600 hover:scale-110"></i>
                </a>
                <a
                    href="https://www.facebook.com/dianamaria.perez.125"
                >
                    <i className="fa-lg fa-brands fa-facebook text-gray-600 hover:scale-110"></i>
                </a>
                <a
                    href="/contact"
                >
                    <i className="fa-lg fa-solid fa-envelope text-gray-600 hover:scale-110"></i>
                </a>
            </div>
            <div>
                <p
                    className="pt-12 text-[11px]"
                >
                    © {thisYear}, beauté cils 
                </p>
                {/* <p
                    className="text-gray-500"
                >
                    123 Lash Drive<br/>Blainville, QC <br/>H7J 1A9
                </p> */}
            </div>
        </div>
    );
}

export default Footer;