import HeaderComponent from "../src/components/header.jsx";
import HeroSectionComponent from "../src/components/hero-section.jsx";
import CompanyList from "../src/components/company-list.jsx";
import BenefitSectionComponent from "../src/components/benefit.jsx";
import CollabSection from "../src/components/collab-section.jsx";
import NewsSectionComponent from "../src/components/news-section.jsx";
import ContactSectionComponent from "./components/contact-section.jsx";
import FooterComponent from "./components/footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <section className="top-section bg-[#fffaf4] lg:pb-20">
        <HeaderComponent />
        <HeroSectionComponent />
      </section>
      <section className="middle-section">
        <CompanyList />
        <BenefitSectionComponent />
        <CollabSection />
        <NewsSectionComponent />
        <ContactSectionComponent />
      </section>
      <section className="bottom-section">
        <FooterComponent />
      </section>
    </>
  );
}

export default App;
