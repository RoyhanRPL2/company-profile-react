import ContactCard from "../components/contact-card.jsx";
import Contactform from "./contact-form.jsx";

function contactSection() {
    return (
        <>
            <section className="flex lg:flex-row flex-col w-full">
                <ContactCard />
                <Contactform />
            </section>
        </>
    )
}

export default contactSection;