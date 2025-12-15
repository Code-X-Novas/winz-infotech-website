import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import caseStudyBg from "../assets/case-bg.png";
import OrangeCard from "./OrangeCard";

const CaseStudyDetails = () => {
    const { slug } = useParams();
    const correct = slug.replace(/-/g, " ");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const location = useLocation();
    const caseStudy = location.state?.case_study;

    if (!caseStudy) return null;

    return (
        <div>
            {/* Image */}
            <section className="w-full mt-10 bg-white pt-10 pb-5">
                <div className="px-8 lg:px-20 xl:px-28">
                    <img
                        src={caseStudyBg}
                        alt={correct}
                        className="xl:h-[500px] lg:h-[400px] w-full lg:object-fill object-contain"
                    />
                </div>
            </section>

            {/* Content */}
            <section className="flex md:flex-row flex-col mb-10 xl:mb-0">
                {/* Left Side */}
                <div className="md:w-[45%] md:h-[40vh] h-[19vh] bg-white sticky top-16 flex flex-col items-start justify-start px-8 lg:px-16 xl:px-20 md:py-12 py-6 z-10">
                    <h1 className="xl:text-5xl lg:text-[38px] md:text-3xl text-2xl font-medium text-black mb-2 leading-snug capitalize">
                        {caseStudy.title}{" "}
                        <span className="text-[#F68D13]">{caseStudy.city}</span>
                    </h1>

                    <h3 className="text-black lg:text-4xl md:text-2xl text-lg md:mt-4 mt-0 font-normal">
                        {caseStudy.subtitle}
                    </h3>
                </div>

                {/* Right Side */}
                <div className="md:w-[55%] w-full bg-white overflow-y-auto">
                    <div className="px-8 lg:px-16 xl:px-20 md:py-12 py-6 space-y-10 pb-20">

                        {/* 🎯 Objective */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                                🎯{" "}
                                <span className="uppercase text-[#F68D13]">
                                    Objective
                                </span>
                            </h3>

                            {(() => {
                                const text = caseStudy.objective;
                                const firstDotIndex = text.indexOf(".");

                                if (firstDotIndex === -1) {
                                    return (
                                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                            {text}
                                        </p>
                                    );
                                }

                                const firstLine = text.slice(0, firstDotIndex + 1);
                                const remainingText = text
                                    .slice(firstDotIndex + 1)
                                    .trim();

                                return (
                                    <div className="space-y-2">
                                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                            {firstLine}
                                        </p>
                                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                            {remainingText}
                                        </p>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* ⚠️ The Challenge */}
                        {caseStudy.challenge && (
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                                    ⚠️{" "}
                                    <span className="uppercase text-[#F68D13]">
                                        The Challenge
                                    </span>
                                </h3>

                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                                    {caseStudy.challenge.heading}
                                </p>

                                <ul className="list-disc list-inside marker:text-[#F68D13] space-y-2 ml-2">
                                    {caseStudy.challenge.points.map((point, index) => (
                                        <li
                                            key={index}
                                            className="text-sm md:text-base text-gray-700 leading-relaxed"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {caseStudy.challenge.conclusion && (
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-3">
                                        {caseStudy.challenge.conclusion}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* 🛠️ The Strategy */}
                        {caseStudy.strategy && (
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                                    🛠️{" "}
                                    <span className="uppercase text-[#F68D13]">
                                        The Strategy (What We Fixed)
                                    </span>
                                </h3>

                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                                    {caseStudy.strategy.heading}
                                </p>

                                <ul className="list-disc list-inside marker:text-[#F68D13] space-y-4 ml-2">
                                    {caseStudy.strategy.points.map((point, index) => {
                                        const [title, description] = point.split(":");

                                        return (
                                            <li
                                                key={index}
                                                className="text-sm md:text-base text-gray-700 leading-relaxed"
                                            >
                                                <span className="font-semibold text-black">
                                                    {title.trim()}
                                                </span>
                                                {description && (
                                                    <>
                                                        <br />
                                                        <span className="text-gray-600">
                                                            {description.trim()}
                                                        </span>
                                                    </>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>

                                <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                                    {caseStudy.strategy.conclusion}
                                </p>
                            </div>
                        )}

                        {/* 📈 Results */}
                        {caseStudy.results && (
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                                    📈{" "}
                                    <span className="uppercase text-[#F68D13]">
                                        Results ({caseStudy.results.days})
                                    </span>
                                </h3>

                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                                    {caseStudy.results.heading}
                                </p>

                                <ul className="list-disc list-inside marker:text-[#F68D13] space-y-2 ml-2">
                                    {caseStudy.results.points.map((point, index) => (
                                        <li
                                            key={index}
                                            className="text-sm md:text-base text-gray-700 leading-relaxed"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* 🏁 Outcome */}
                        {caseStudy.outcome && (
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                                    🏁{" "}
                                    <span className="uppercase text-[#F68D13]">
                                        Outcome
                                    </span>
                                </h3>

                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    {caseStudy.outcome}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Orange Box */}
            <section className="bg-[#f5f5f5] py-5 md:py-10 px-8 lg:px-20 xl:px-28">
                <OrangeCard
                    title="Big ideas but stuck brand?"
                    description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver. Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                    buttonText="Speak to Experts"
                />
            </section>
        </div>
    );
};

export default CaseStudyDetails;
