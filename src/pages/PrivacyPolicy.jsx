import { Mail, MapPinHouse, Phone } from 'lucide-react';
import React, { useEffect } from 'react';

export default function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="px-4 lg:pt-25 pt-20 sm:px-6 md:px-10 py-10 max-w-6xl mx-auto text-gray-800">
            <h1 className="md:text-3xl text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
                <span className="text-[#F68D13]">Winz Infotech</span> Privacy Policy
            </h1>

            <p className='md:mb-8 mb-6 md:text-base text-sm'>At Winz Infotech, your privacy is our priority. This Privacy Policy explains how we 
                collect, use, and safeguard your information when you visit our website or engage
                with our services. By using our site and services, you agree to the practices outlined below.
            </p>

            {/* 1. Information We Collect */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">1. Information We Collect</h2>
                <p className='pb-3 md:text-base text-sm'>We may collect the following types of information when you use our website or services:</p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>
                        <strong className="text-[#2980b9]">Personal Information:</strong> Name, email address, phone number, business details, billing information, or other details you provide via forms, emails, or calls.
                    </li>
                    <li>
                        <strong className="text-[#2980b9]">Non-Personal Information:</strong> Browser type, device information, IP address, cookies, and usage data to help us improve website performance.
                    </li>
                    <li>
                        <strong className="text-[#2980b9]">Project & Business Information:</strong> Information you share with us related to design, marketing, branding, or project requirements.
                    </li>
                </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">2. How We Use Your Information</h2>
                <p className='pb-3 md:text-base text-sm'>We use the information we collect to:</p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Provide and deliver our services effectively</li>
                    <li>Personalize campaigns, creatives, and strategies for your brand</li>
                    <li>Respond to your inquiries and communicate project updates</li>
                    <li>Process payments and invoices securely</li>
                    <li>Improve our website experience and service offerings</li>
                    <li>Share case studies or testimonials (only with your permission)</li>
                    <li>Send marketing updates, newsletters, or promotions (you can opt out anytime)</li>
                </ul>
            </section>

            {/* 3. Sharing of Information */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">3. Sharing of Information</h2>
                <p className='md:text-base text-sm'>We respect your confidentiality. Your information will never be sold, rented, or traded to third parties. </p>
                <p className='py-3 md:text-base text-sm'>We may share your information only with:</p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Trusted service providers who assist in delivering our services (e.g., payment gateways, hosting providers) </li>
                    <li>Legal authorities if required by law or to protect our rights and security</li>
                    <li>Team members or partners directly working on your project</li>
                </ul>
            </section>

            {/* 4. Data Security */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">4. Data Security</h2>
                <p className="text-sm md:text-base">We take appropriate security measures to protect your personal and business data against unauthorized access, alteration, disclosure, or destruction. However, no online method is 100% secure, and we cannot guarantee absolute protection.</p>
            </section>

            {/* 5. Cookies & Tracking Technologies */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">5. Cookies & Tracking Technologies</h2>
                <p className='pb-3 md:text-base text-sm'>Our website may use cookies and similar technologies to:</p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Track website performance and analytics</li>
                    <li>Understand user behavior and preferences</li>
                    <li>Improve user experience</li>
                </ul>
                <p className="py-3 md:text-base text-sm">You can disable cookies through your browser settings, but some features may not function properly. </p>
            </section>

            {/* 6. Your Privacy Rights */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">6. Your Privacy Rights</h2>
                <p className='pb-3 md:text-base text-sm'>You have the right to:</p>
                <ul className="list-disc md:pl-10 pl-5 md:space-y-2 space-y-1 text-sm md:text-base">
                    <li>Request access to the personal data we hold about you</li>
                    <li>Request corrections or updates to your information</li>
                    <li>Opt-out of promotional communications</li>
                    <li>Request deletion of your personal data (subject to business/legal obligations)</li>
                </ul>
                <h4 className='py-3 md:text-base text-sm'>To exercise these rights, contact us at info@winzinfotech.com </h4>

            </section>

            {/* 7. Third-Party Links */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">7. Third-Party Links</h2>
                <p className="text-sm md:text-base">Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their privacy policies.</p>
            </section>

            {/* 8. Policy Updates */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">8. Policy Updates</h2>
                <p className="text-sm md:text-base">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated <strong className="text-[#2980b9]">“30 July 2025”</strong> date.</p>
            </section>

            {/* 9. Contact Us */}
            <section className="md:mb-8 mb-6">
                <h2 className="md:text-xl text-lg font-semibold md:mb-2 mb-1 text-[#F68D13]">9. Contact Us</h2>
                <h4 className='md:text-base text-sm'>For any questions about this Privacy Policy or how your data is handled, contact us at: </h4>
                <ul className="md:pl-5 pl-3 mt-2 text-sm md:text-base">
                    <li className='flex gap-2'><Mail className='size-5'/><strong>Email:</strong> <a href="mailto:info@winzinfotech.com" className="text-blue-600 underline">info@winzinfotech.com</a></li>
                    <li className='flex gap-2'><Phone className='size-5'/><strong>Phone:</strong> +91 720 30 30 730</li>
                    <li className='flex gap-2'><MapPinHouse className='size-5' /><strong>Address:</strong> 306, Shivam Infinity, Opp. S.T. Workshop Dharampur Road, Abrama, Valsad - Gujarat 396001</li>
                </ul>
            </section>
        </div>
    );
}
