function contactCard() {
    return (
        <>
            <section className="contact-card-wrapper lg:px-20 lg:py-16 lg:w-[50%] w-full px-5 py-14">
                <h1 className="lg:text-6xl text-5xl lg:w-[80%] lg:mb-24 mb-16">We&apos;d love to hear from you</h1>
                <section className="contact-content flex flex-col gap-10">
                    <div className="contact-item">
                        <p className="text-[#6b6b6b] mb-1">Email Address</p>
                        <h2 className="text-2xl">Ellc@gmail.com</h2>
                    </div>
                    <div className="contact-item">
                        <p className="text-[#6b6b6b] mb-1">Phone Number</p>
                        <h2 className="text-2xl">123-456-7890</h2>
                    </div>
                    <div className="contact-item">
                        <p className="text-[#6b6b6b] mb-1">Headquarters Address</p>
                        <h2 className="text-2xl">1234 Elm St. New York, NY 10001</h2>
                    </div>
                    <div className="contact-item">
                        <p className="text-[#6b6b6b] mb-1">Business Hours</p>
                        <h2 className="text-2xl">Monday - Friday 9am - 5pm</h2>
                    </div>
                </section>
            </section>
        </>
    )
}

export default contactCard;