function footer() {
    return (
        <footer className="lg:px-20 lg:py-20 px-5 py-14 bg-[#050f09] flex lg:flex-row flex-col lg:justify-between">
            <div className="title flex flex-col gap-3 h-fit mb-8">
                <h1 className="text-2xl text-white font-semibold">ELLC</h1>
                <p className="text-white">Facilitating Growth Via Our Ecosystem Network</p>
            </div>
            
            <div className="footer-links flex lg:flex-row flex-col justify-between lg:w-[60%] w-full h-fit">
                <div className="footer-links__section h-fit mb-8">
                    <ul className="flex lg:flex-col flex-row lg:gap-6 gap-8">
                        <li className="text-white"><a href="#">Home</a></li>
                        <li className="text-white"><a href="#">About Us</a></li>
                        <li className="text-white"><a href="#">Portfolio</a></li>
                    </ul>
                </div>
                <div className="footer-links__section h-fit mb-8">
                    <ul className="flex lg:flex-col flex-row lg:gap-6 gap-8">
                        <li className="text-white"><a href="#">Services</a></li>
                        <li className="text-white"><a href="#">Our team</a></li>
                        <li className="text-white"><a href="#">Our story</a></li>
                    </ul>
                </div>
                <div className="footer-links__section h-fit mb-8">
                    <ul className="flex lg:flex-col flex-row lg:gap-6 gap-8">
                        <li className="text-white"><a href="#">Jobs</a></li>
                        <li className="text-white"><a href="#">Legal</a></li>
                        <li className="text-white"><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div className="footer-links__section h-fit">
                    <ul className="flex lg:flex-col flex-row lg:gap-6 gap-8">
                        <li className="text-white"><a href="#">Linkedin</a></li>
                        <li className="text-white"><a href="#">Instagram</a></li>
                        <li className="text-white"><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default footer;