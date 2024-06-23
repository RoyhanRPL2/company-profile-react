function benefit() {
  return (
    <>
      <section className="benefit-section flex lg:justify-between lg:flex-row flex-col">
        <div className="benefit-content bg-[#0f4023] lg:w-[70%] lg:p-12 p-8">
          <h1 className="text-white lg:text-5xl text-4xl lg:w-[80%] lg:mb-20 mb-14">
            We are committed to fostering and supporting the next wave of
            groundbreaking innovators.
          </h1>
          <ul className="flex flex-col gap-8 mb-6">
            <li>
              <h2 className="text-white text-2xl mb-2">Investment</h2>
              <p className="text-[#708e7b] text-[1.1rem]">
                We invest in companies that are solving the world’s most
                pressing challenges.
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl mb-2">Support</h2>
              <p className="text-[#708e7b] text-[1.1rem]">
                We provide the resources and mentorship needed to help founders
                succeed.
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl mb-2">Community</h2>
              <p className="text-[#708e7b] text-[1.1rem]">
                We offer a network of like-minded individuals who are passionate
                about making a difference.
              </p>
            </li>
          </ul>
        </div>
        <div className="founder-container lg:w-[60%] h-full lg:flex hidden">
          <div className="relative group/item overflow-hidden">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="company-detail absolute opacity-0 group-hover/item:opacity-100 bottom-0 p-4 backdrop-blur-lg transition-opacity duration-500 transform group-hover/item:translate-y-0 translate-y-full">
              <p className="text-white text-justify mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit placerat urna. Sed vulputate lectus quis odio facilisis dignissim. Nullam tincidunt purus ut tellus ullamcorper, et varius sem venenatis. Etiam pulvinar condimentum fringilla. Aenean volutpat, nulla a elementum accumsan, leo mauris sagittis enim, eu imperdiet ex purus eu tellus. Integer vitae sollicitudin orci, dictum fermentum metus.</p>
              <h1 className="text-white mt-4 text-[1.3rem] font-semibold">Steve Jobs</h1>
              <p className="text-white">Founder of Apple</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default benefit;
