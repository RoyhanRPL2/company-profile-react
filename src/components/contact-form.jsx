function contactForm() {
  return (
    <>
      <section className="contact-form-wrapper lg:w-[50%] w-full lg:px-20 lg:py-16 px-5 py-14 bg-[#f0f1ec]">
        <h1 className="text-4xl w-[80%] lg:mb-24 mb-14">Contact us</h1>
        <form className="contact-form flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="full-name" className="text-xl">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              className="contact-input p-3"
              placeholder="Enter your name here"
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-xl">
                Email Address
              </label>
              <input type="email" id="email" className="contact-input p-3" placeholder="Enter your email address" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phone" className="text-xl">
                Phone Number
              </label>
              <input type="tel" id="phone" className="contact-input p-3" placeholder="Enter your phone number"/>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="full-name" className="text-xl">
              Company Name
            </label>
            <input
              type="text"
              id="full-name"
              className="contact-input p-3"
              placeholder="Enter company name here"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="full-name" className="text-xl">
              Message
            </label>
            <textarea
              id="message"
              className="contact-input p-3"
              placeholder="Enter your message here"
            />
          </div>
          <button className="contact-btn px-8 py-4 bg-[#0f4023] lg:w-fit text-white rounded font-semibold">Send us Message</button>
        </form>
      </section>
    </>
  );
}

export default contactForm;
