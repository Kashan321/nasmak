import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Nasmak Labs",
};

export default function Page() {
    return (
        <section>
            <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-[#b2d8c5] before:via-[#e0f2e9] before:to-[#c2ede1] before:rounded-full before:top-24 before:blur-3xl before:opacity-20 before:-z-10 dark:before:from-[#4d6659] dark:before:via-[#009444] dark:before:to-[#38f9d7] dark:before:rounded-full dark:before:blur-3xl dark:before:opacity-20 dark:before:-z-10">
                <div className="container relative z-10">
                    <div className='flex flex-col gap-5'>
                        <h1 className='md:text-6xl text-4xl font-medium text-center'>
                            Privacy Policy
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                            <p className="text-opacity-60">
                                This Privacy Statement explains how personal information about our users, clients, and visitors is collected, used, and disclosed by <strong>Nasmak Labs</strong> ("we", "our", or "us"). It outlines our practices regarding data collected through our website (
                                <Link href="https://nasmaklabs.com" className="text-dark_black">https://nasmaklabs.com</Link>), services, and interactions related to our software development and technology solutions.
                            </p>

                            <p className="text-opacity-60">
                                By using our services or interacting with our website, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy.
                            </p>

                            <p className="text-opacity-60">
                                Our website may contain links to third-party services. We are not responsible for the privacy practices or content of such services and encourage you to review their privacy policies.
                            </p>

                            <p className="text-opacity-60">
                                This policy may be updated periodically. Significant changes will be communicated through updates to this page and may be accompanied by direct notifications. We encourage you to review our Privacy Policy regularly to stay informed.
                            </p>

                            <div className="my-6">
                                <h4 className="font-semibold">Information We Collect</h4>
                                <p className="mt-6">
                                    We may collect personally identifiable information when you fill out forms, contact us, or use our services. This includes your name, email address, phone number, company name, and any other details you provide.
                                </p>
                                <p className="mt-6 text-opacity-60">
                                    We may also collect technical data such as IP addresses, browser type, device information, and usage patterns using cookies or analytics tools to improve our website and services.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">How We Use Your Information</h4>
                                <p className="mt-6 text-opacity-60">
                                    Your information is used to provide and improve our services, communicate with you, respond to inquiries, and analyze usage for better user experience. We do not sell or rent your personal data to third parties.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">Data Security</h4>
                                <p className="mt-6 text-opacity-60">
                                    We implement standard security measures to protect your data, but no method of transmission over the Internet is 100% secure. We recommend users also take precautions when sharing information online.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">Contact Us</h4>
                                <p className="mt-6 text-opacity-60">
                                    If you have any questions about this Privacy Policy or your personal data, please contact us at <strong>contact@nasmaklabs.com</strong>.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
