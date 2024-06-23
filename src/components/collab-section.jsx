function collabSection() {
  return (
    <>
      <section className="collaboration-section flex my-20 lg:flex-row flex-col">
        <div className="left-section lg:px-14 lg:py-6 flex flex-col gap-6 lg:w-[50%] lg:justify-end p-4 mb-4">
          <h1 className="lg:text-5xl text-4xl">Powering Startups with a Network of Industry Pioneers</h1>
          <p className="text-[1.1rem] lg:w-[80%] text-[#9c9a9a] text-justify">
            We collaborate with industry leaders and organizations to provide
            startups with access to valuable resources. Learn about our network
            of strategic partners
          </p>
          <button className="w-fit px-8 py-3 bg-[#0f4023] text-white rounded font-semibold text-[1rem]">Learn More</button>
        </div>
        <div className="right-section lg:px-7 p-4">
          <div className="top-col flex">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" className="w-[250px] h-[200px] object-cover lg:flex hidden"></img>
            <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[300px] h-[200px] object-cover lg:flex hidden"></img>
            <div className="p-5 flex flex-col justify-center bg-[#0f4023] gap-2">
              <h1 className="text-white text-5xl">78%</h1>
              <p className="text-white">Increase in Startup Growth with Partner Support</p>
            </div>
          </div>
          <div className="middle-col flex lg:justify-end">
            <img src="https://images.unsplash.com/photo-1533850595620-7b1711221751?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[250px] h-[200px] object-cover lg:flex hidden"></img>
            <img src="https://images.unsplash.com/photo-1525875975471-999f65706a10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[250px] h-[200px] object-cover lg:flex hidden"></img>
            <div className="lg:p-[1rem] bg-[#fffaf4] flex flex-col gap-2 justify-center lg:w-[31%] w-full p-5">
              <h1 className="text-5xl">$15M</h1>
              <p className="">Unlocking Capital through Partnership</p>
            </div>
          </div>
          <div className="top-col flex lg:justify-end">
            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwZXJzb258ZW58MHx8MHx8fDA%3D" className="w-[250px] h-[200px] object-cover lg:flex hidden"></img>
            <div className="lg:p-[1rem] bg-[#0f4023] flex flex-col gap-2 justify-center lg:w-[31%] w-full p-5">
              <h1 className="text-white text-5xl">40+</h1>
              <p className="text-white">Collaborative Projects Launched</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default collabSection;
