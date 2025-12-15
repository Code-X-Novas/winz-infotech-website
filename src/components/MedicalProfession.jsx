import ContactForm from "./hook/Contact";
import Footer from "./hook/Footer";
import Groth from "./hook/Groth";
import GrowthFAQ from "./hook/GrothFAQ";
import ClinicPromo from "./hook/Home";
import Include from "./hook/Include";
import Page from "./hook/Page";
import Results from "./hook/Result";
import SideShow from "./hook/SideShow";
import Testimonial from "./hook/Testimonials";

function MedicalProfession() {
    return (
        <div>
            <ClinicPromo />
            <Page />
            <Groth />
            <Include />
            <Testimonial />
            <SideShow />
            <Results />

            <GrowthFAQ />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default MedicalProfession;
