import HambugerIcon from "../assets/hamburger.svg";

function header() {
  return (
    <>
      <header className="lg:px-20 lg:py-7 p-6 mb-6 h-full hidden lg:flex justify-between items-center">
        <h1 className="text-2xl font-semibold h-fit lg:flex hidden">ELLC</h1>
        <nav className="h-fit lg:flex hidden">
          <ul className="flex gap-10">
            <li className="hover:font-bold hover:text-[#20984e]">
              <a href="#">Home</a>
            </li>
            <li className="hover:font-bold hover:text-[#20984e]">
              <a href="#">About Us</a>
            </li>
            <li className="hover:font-bold hover:text-[#20984e]">
              <a href="#">Portfolio</a>
            </li>
            <li className="hover:font-bold hover:text-[#20984e]">
              <a href="#">Services</a>
            </li>
            <li className="hover:font-bold hover:text-[#20984e]">
              <a href="#">Our team</a>
            </li>
            <li className="hover:font-bold hover:text-[#20984e]">
              <a href="#">Our story</a>
            </li>
          </ul>
        </nav>
        <button className="border-[2px] border-[#cdcdcc] rounded px-5 py-2 text-[1rem]">
          Get in touch
        </button>
      </header>

      <header className="lg:hidden mb-10">
        <ul className=" w-full flex-col gap-4 items-center justify-center h-screen bg-white lg:hidden hidden">
          <li className="hover:font-bold hover:text-[#20984e]">
            <a href="#">Home</a>
          </li>
          <li className="hover:font-bold hover:text-[#20984e]">
            <a href="#">About Us</a>
          </li>
          <li className="hover:font-bold hover:text-[#20984e]">
            <a href="#">Portfolio</a>
          </li>
          <li className="hover:font-bold hover:text-[#20984e]">
            <a href="#">Services</a>
          </li>
          <li className="hover:font-bold hover:text-[#20984e]">
            <a href="#">Our team</a>
          </li>
          <li className="hover:font-bold hover:text-[#20984e]">
            <a href="#">Our story</a>
          </li>
        </ul>
        <div className="flex justify-between lg:hidden p-6">
          <img
            src={HambugerIcon}
            alt="Hamburger Icon"
            className="lg:hidden w-[34px] h-[34px]"
          />
          <button className="border-[2px] border-[#cdcdcc] rounded px-5 py-2 text-[1rem]">
            Get in touch
          </button>
        </div>
      </header>
    </>
  );
}

export default header;
