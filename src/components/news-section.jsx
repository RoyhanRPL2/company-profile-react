import ArrowIcon from "../assets/arrow.svg";

function news() {
  return (
    <>
      <section className="news-section lg:px-20 lg:py-20 bg-[#fffaf4] px-5 py-10">
        <h2 className="text-center lg:text-4xl text-3xl font-semibold text-[#515d53] mb-3">
          Stay Informed with Our Latest Insights and News
        </h2>
        <p className="text-center text-[#9c9a9a]">
          Stay connected with the latest developments in the world of innovation
          and venture capital
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-8">
          <div className="news-card">
            <div className="news-card__img">
              <img
                src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww"
                alt="News"
              />
            </div>
            <div className="news-card__content mt-6">
              <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                How Our Hands-On Approach Benefits Portfolio Companies
              </h3>
              <div className="flex justify-between">
                <p className="text-[#6b6b6b]">
                  February 15, 2024
                </p>
                <img src={ArrowIcon} className="w-[24px] h-[24px]"></img>
              </div>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card__img">
              <img
                src="https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fHww"
                alt="News"
              />
            </div>
            <div className="news-card__content mt-6">
              <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                Sustainability Spotlight: Investing in the Green Tech Revolution
              </h3>
              <div className="flex justify-between">
                <p className="text-[#6b6b6b]">
                  February 15, 2024
                </p>
                <img src={ArrowIcon} className="w-[24px] h-[24px]"></img>
              </div>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card__img">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="News"
              />
            </div>
            <div className="news-card__content mt-6">
              <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                How Our Hands-On Approach Benefits Portfolio Companies
              </h3>
              <div className="flex justify-between">
                <p className="text-[#6b6b6b]">
                  February 15, 2024
                </p>
                <img src={ArrowIcon} className="w-[24px] h-[24px]"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default news;
