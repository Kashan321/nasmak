import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Terms & Condition | Nasmak Labs",
};

export default function Page() {
    return (
        <section>
            <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-[#b2d8c5] before:via-[#e0f2e9] before:to-[#c2ede1] before:rounded-full before:top-24 before:blur-3xl before:opacity-20 before:-z-10 dark:before:from-[#4d6659] dark:before:via-[#009444] dark:before:to-[#38f9d7] dark:before:rounded-full dark:before:blur-3xl dark:before:opacity-20 dark:before:-z-10">
                <div className="container relative z-10">
                    <div className='flex flex-col gap-5'>
                        <h1 className='md:text-6xl text-4xl font-medium text-center'>
                            Terms & Conditions
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                            <p>
                                These Terms and Conditions ("Agreement") govern the access to and use of services provided by <strong>Nasmak Labs</strong> ("we", "our", or "us") via our website <strong>(nasmaklabs.com)</strong> and associated platforms. By accessing our website or using our services, you agree to be bound by this Agreement. If you do not agree with any part of these terms, please do not use our services.
                            </p>

                            <div className="my-6">
                                <h4 className="font-semibold">1. Use of Services</h4>
                                <p className="mt-6">
                                    You may use our website and services only for lawful purposes. You are responsible for all activities conducted under your account and for ensuring that any users accessing our services through your authorization comply with these terms.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">2. Intellectual Property</h4>
                                <p className="mt-6">
                                    All content, designs, code, and other intellectual property on our website and within our services are owned by Nasmak Labs or licensed appropriately. You may not copy, reproduce, or distribute any part of our materials without explicit written permission.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">3. Privacy</h4>
                                <p className="mt-6">
                                    Our collection and use of personal information is governed by our <strong>Privacy Policy</strong>. By using our services, you consent to such processing and warrant that all data provided is accurate.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">4. Limitation of Liability</h4>
                                <p className="mt-6">
                                    To the extent permitted by law, Nasmak Labs shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">5. Changes to the Terms</h4>
                                <p className="mt-6">
                                    We reserve the right to update or change these Terms at any time. Continued use of our services after such modifications constitutes acceptance of the new terms. We encourage users to review this page periodically.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">6. Governing Law</h4>
                                <p className="mt-6">
                                    These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law principles.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">7. Contact</h4>
                                <p className="mt-6">
                                    If you have any questions regarding these Terms, please contact us at <strong>contact@nasmaklabs.com</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
