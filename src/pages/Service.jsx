import OrangeCard from "../components/OrangeCard"
import ServiceCard from "../components/ServiceCard"

const Service = () => {
    return (
        <div className="bg-gray-100 md:mt-85 sm:mt-65 mt-75">
            {/* Header Section */}
            <header className="fixed top-18 left-0 w-full -z-1 bg-white mt-10 lg:px-10 xl:px-16 px-6">
                <h1 className="xl:text-6xl lg:text-5xl lg:leading-16 md:text-4xl text-3xl font-medium">Our <span className="text-[#F68D13]">Services</span></h1>
                <p className="max-w-3xl md:text-[17px] text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6">
                    We deliver design, branding, and marketing solutions tailored to elevate your digital presence. Thoughtfully built. Creatively executed.We deliver design, branding, and marketing solutions tailored to elevate your digital presence.
                </p>
            </header>

            {/* Card + Box */}
            <div className="relative z-10 ">
                {/* Services Card */}
                <section className="max-w-7xl p-6 mx-auto mt-8">
                    <ServiceCard />
                </section>

                {/* Orange Box */}
                <section className="max-w-7xl md:p-6 mx-auto mt-8">
                    <OrangeCard
                        title="Big ideas? Stuck brand? Half-done website?"
                        description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                        buttonText="Speak to Experts"
                        onButtonClick={() => console.log("Button Clicked")}
                    />
                </section>
            </div>
        </div>
    )
}

export default Service