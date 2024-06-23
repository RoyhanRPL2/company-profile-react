function hero() {
  return (
    <>
      <section className="lg:px-20 lg:py-7 flex justify-between lg:flex-row flex-col p-6 gap-4">
        <div className="title-container lg:w-[50%] lg:m-0 flex flex-col items-center lg:items-start">
            <h1 className="title lg:text-7xl text-5xl w-fit lg:leading-[5.5rem] mb-5 lg:text-left text-center">Facilitating Growth Via Our Ecosystem Network</h1>
            <p className="text-[1rem] lg:w-[75%] mb-8 text-[#9c9a9a] lg:text-left text-center">Discover how our extensive global network empowers startups and fuels innovation. We connect visionary founders with the resources they need to thrive</p>
            <button className="w-fit px-8 py-3 bg-[#0f4023] text-white rounded font-semibold text-[1rem]">Learn More</button>
        </div>
        <div className="number-data-container lg:grid lg:grid-cols-2 lg:gap-x-4 gap-8 lg:w-fit flex flex-col items-center my-[5rem]">
            <div className="data h-fit flex flex-col items-center">
                <h2 className="text-5xl font-medium mb-2">$2B</h2>
                <p className="text-[1rem] lg:w-[50%] text-[#9c9a9a]">Assets under the management</p>
            </div>
            <div className="data h-fit flex flex-col items-center">
                <h2 className="text-5xl font-medium mb-2">70</h2>
                <p className="text-[1rem] lg:w-[50%] text-[#9c9a9a]">Acquisitions by our companies</p>
            </div>
            <div className="data h-fit flex flex-col items-center">
                <h2 className="text-5xl font-medium mb-2">20+</h2>
                <p className="text-[1rem] lg:w-[50%] text-[#9c9a9a]">Nexsphere year track record</p>
            </div>
            <div className="data h-fit flex flex-col items-center">
                <h2 className="text-5xl font-medium mb-2">100+</h2>
                <p className="text-[1rem] lg:w-[55%] text-[#9c9a9a]">Company sector in which we invest</p>
            </div>
        </div>
      </section>
    </>
  );
}
export default hero;
