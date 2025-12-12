import { Mail, Phone } from 'lucide-react';
import React, { useEffect } from 'react';

export default function TermCondition() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="px-4 lg:pt-25 pt-20 sm:px-6 md:px-10 py-10 max-w-6xl mx-auto text-gray-800">
            <h1 className="md:text-3xl text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
                <span className="text-[#F68D13]">Winz Infotech</span> - Terms of services
            </h1>

            <p className="md:text-base text-sm">Welcome to Winz Infotech.</p>
            <p className="md:mb-6 mb-4 md:text-base text-sm">
                These Terms & Conditions (“Terms”) govern your use of our website, services, and any related content Provided by Backbencher Networks (Brand Name -  Winz Infotech) (“we,” “us,” or “our”). By accessing or using our services, you agree to comply with and be bound by these Terms.
            </p>

            

            {/* 1. Acceptance of Terms */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">1. Acceptance of Terms</h2>
                <p className="text-sm md:text-base">By using our website or services, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, please do not use our services.</p>
            </section>

            {/* 2. Services Provided */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">2. Services Provided</h2>
                <p className="text-sm md:text-base pb-3">Winz Infotech is a digital marketing and creative solutions agency offering, but not limited to:</p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Logo Design</li>
                    <li>Graphic Design</li>
                    <li>Branding</li>
                    <li>Social Media Management</li>
                    <li>Influencer Marketing</li>
                    <li>UGC/CGi Videos</li>
                    <li>Performance Marketing</li>
                    {/* <li>Lead Generation</li> */}
                    <li>Website Development</li>
                    <li>Print Media</li>
                </ul>
                <p className="pt-3 text-sm md:text-base">We may update or modify our services at any time without prior notice.</p>
            </section>

            {/* 3. Use of Content */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">3. Use of Content</h2>
                <p className='text-sm md:text-base pb-3'>All content on this website — including text, graphics, logos, images, and creative works — is the property of Winz Infotech and protected by copyright laws.</p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>You may not copy, reproduce, distribute, or use our content without prior written consent.</li>
                    <li>Unauthorized use of our content is strictly prohibited. </li>
                </ul>
            </section>

            {/* 4. Client Responsibilities */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">4. Client Responsibilities</h2>
                <p className='text-sm md:text-base pb-3'>By engaging our services, you agree to: </p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Provide accurate, complete, and timely information. </li>
                    <li>Review and approve designs, campaigns, and deliverables within agreed timelines.</li>
                    <li>Make payments as per the agreed terms.</li>
                </ul>
                <p className='text-sm md:text-base py-3'> Delays in feedback or payment may affect project timelines and results.</p>
            </section>

            {/* 5. Payments & Refund Policy */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">5. Payments & Refund Policy</h2>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Payments must be made as per the agreed proposal or invoice. </li>
                    <li>Due to the nature of our work, payments made are non-refundable. </li>
                    <li>In case of project cancellation, you will be billed for work completed up to the cancellation date.</li>
                </ul>
            </section>

            {/* 6. Confidentiality */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">6. Confidentiality</h2>
                <p className="text-sm md:text-base">Both parties agree to maintain confidentiality regarding business, creative, or technical information shared during the project. </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">7. Limitation of Liability</h2>
                <p className='text-sm md:text-base pb-3'>While we aim to deliver high-quality and result-oriented services, Winz Infotech is not liable for:</p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Loss of profits, revenues, or business opportunities.</li>
                    <li>Any errors or delays caused by third-party platforms (e.g., Meta, Google, hosting services). </li>
                    <li>Factors beyond our control, including sudden platform policy changes or market fluctuations. </li>
                </ul>
            </section>

            {/* 8. Revisions & Deliverables */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">8. Revisions & Deliverables</h2>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Deliverables are provided as per the scope of work agreed. </li>
                    <li>Additional revisions or requirements beyond the scope may incur extra charges. </li>
                </ul>
            </section>

            {/* 9. Termination of Services */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">9. Termination of Services</h2>
                <p className="text-sm md:text-base pb-3">We reserve the right to terminate or suspend services if: </p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>You breach these Terms.</li>
                    <li>Payments are delayed or withheld.</li>
                    <li>There is a misuse of our intellectual property.</li>
                </ul>   
            </section>

            {/* 10. Governing Law */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">10. Governing Law</h2>
                <p className="text-sm md:text-base">These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts located in Valsad, Gujarat. </p>
            </section>

            {/* 11. Updates to Terms */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">11. Updates to Terms</h2>
                <p className="text-sm md:text-base">We may update this Terms periodically. The updated version will be posted on this page with a revised <strong className="text-[#2980b9]">“30 July 2025”</strong> date.</p>
            </section>

            {/* 12. Contact Us */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">12. Contact Us</h2>
                <ul className="md:pl-5 pl-3 mt-2 text-sm md:text-base">
                    <li className='flex gap-2'><Mail className='size-5'/> <strong>Email:</strong> <a href="mailto:info@winzinfotech.com" className="text-blue-600 underline">info@winzinfotech.com</a></li>
                    <li className='flex gap-2'><Phone className='size-5' /> <strong>Phone:</strong> +91 720 30 30 730</li>
                </ul>
            </section>
        </div>
    );
}
