import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "Nasmak Labs",
        tagline: "Your trusted partner in digital innovation.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/company/nasmak"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com"
            }
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/#aboutus" },
            { name: "Work", url: "/#work" },
            { name: "Services", url: "/#services" },
            // { name: "Pricing", url: "/#pricing" }
        ]
    },
    otherPages: {
        name: "Other Pages",
        links: [
            // { name: "Error 404", url: "/not-found" },
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
            { name: "Privacy Policy", url: "/privacy-policy" },
            // { name: "Documentation", url: "/documentation" }
        ]
    },
    contactDetails: {
        name:"Contact Details",
        address: "Okara | Lahore | Pakistan",
        email: "nasmaklabs@gmail.com",
        phone: "+923217098094"
    },
    copyright: `©${new Date().getFullYear()} Nasmak Labs. All rights reserved.`,
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};