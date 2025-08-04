import { useLocation, useParams } from "react-router-dom";
import caseStudyBg from "../assets/case-bg.png";
import OrangeCard from "./OrangeCard";

const CaseStudyDetails = () => {
    const { slug } = useParams();
    const correct = slug.replace(/-/g, " "); // Convert slug back to readable format

    window.scrollTo({ top: 0, behavior: "smooth" });
    const location = useLocation();
    const caseStudy = location.state?.case_study;

    return (
        <div>
            {/* image */}
            <section className="w-full mt-20 bg-white pt-10 pb-5">
                <div className="lg:px-10 xl:px-12 px-5">
                    <img src={caseStudyBg} alt={correct} className="xl:h-[500px] lg:h-[400px] w-full lg:object-fill object-contain" />
                </div>
            </section>

            {/* content */}
            <section className="xl:h-[85vh] h-screen flex md:flex-row flex-col">
                {/* Left Side - Fixed */}
                <div className="md:w-1/2 md:h-[30vh] h-[18vh] bg-white sticky top-16 flex items-start justify-start md:pl-12 md:py-12 p-6 z-1">
                    <h1 className="xl:text-5xl lg:text-[38px] capitalize text-3xl font-medium text-black mb-4 leading-snug">
                        {caseStudy?.title} <span className="text-[#F68D13]">{caseStudy?.city}</span>
                    </h1>
                </div>

                {/* Right Side - Scrollable Content */}
                <div className="w-full xl:h-[85vh] h-screen pt-30 md:pt-0 absolute overflow-y-auto bg-white">
                    <div className="mx-auto flex md:justify-end">
                        <div className="md:w-1/2 md:p-12 p-6 lg:space-y-10 space-y-4">

                            {/* Objective */}
                            <div>
                                <h3 className="text-[#F68D13] lg:text-xl font-medium mb-2"><span className="text-[#F68D13] uppercase">Objective</span></h3>
                                <p className=" lg:text-base text-sm">
                                    {caseStudy?.objective}
                                </p>
                            </div>
                            
                            {/* Challenge */}   
                            <div>
                                <h3 className="text-[#F68D13] lg:text-xl font-medium mb-2"><span className="text-[#F68D13] uppercase">Challenge</span></h3>
                                <p className=" lg:text-base text-sm">
                                    {caseStudy?.challenge}
                                </p>
                            </div>
                            
                            {/* Solution */}
                            <div>
                                <h3 className="text-[#F68D13] lg:text-xl font-medium mb-2"><span className="text-[#F68D13] uppercase">Solution</span></h3>
                                <p className=" lg:text-base text-sm">
                                    {caseStudy?.solution}
                                </p>
                            </div>
                            
                            {/* Results */}
                            <div>
                                {
                                    caseStudy?.results && caseStudy.results.length > 0 &&
                                    <div>
                                        <h3 className="text-[#F68D13] lg:text-xl font-medium mb-2 uppercase">
                                            Results
                                        </h3>
                                        <ul className="list-disc list-inside marker:text-[#F68D13]">
                                            {caseStudy.results.map((result, index) => (
                                                <li key={index} className="lg:text-base text-sm">
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Orange Box */}
            <section className="bg-[#f5f5f5] py-5 md:py-10 lg:px-10 xl:px-16 px-6 mb-96">
                <OrangeCard
                    title="Big ideas? Stuck brand? Half-done website?"
                    description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                    buttonText="Speak to Experts"
                    onButtonClick={() => console.log("Button Clicked")}
                />
            </section>
        </div>
    )
}

export default CaseStudyDetails