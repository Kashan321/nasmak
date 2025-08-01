import { NextResponse } from 'next/server'
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList: brand[] = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'Dribble',
  },
  {
    image: '/images/home/brand/brand-icon-5.svg',
    darkImg: '/images/home/brand/brand-darkicon-5.svg',
    title: 'Webflow',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Brand\nStrategy',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/blockchain.svg',
    title: 'Block\Chain',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'UI/UX\nDesign',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Analytics &\nReporting',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Web\nDevelopment',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: '/images/home/onlinePresence/analytics.png',
    title: 'Broker',
    tag: ['Blockchain', 'Web 3'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/proj-2.png',
    title: 'Online Order Management',
    tag: ['CMS', 'management'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Genome',
    tag: ['Brand identity design', 'UX Research'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'Hotto',
    tag: ['Visual Storytelling', 'Web & Mobile Design'],
    link: 'https://www.wrappixel.com/',
  },
]

const creativeMindList: creativeMind[] = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Logan Dang',
    position: 'WordPress Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Ana Belić',
    position: 'Social Media Specialist',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Brian Hanley',
    position: 'Product Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Darko Stanković',
    position: 'UI Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Creativity',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Strategy',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Starter',
    plan_descp: 'For companies who need design support. One request at a time',
    plan_price: '$2500',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Design Updates Every 2 Days',
      'Mid-level Designer',
      'SEO optimization',
      'Monthly analytics',
      '2x Calls Per Month',
      'License free assets',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Pro',
    plan_descp: '2x the speed. Great for an MVP, Web App or complex problem',
    plan_price: '$3800',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Design Updates Daily',
      'Senior-level Designer',
      'AI Advisory Framework',
      'Full-service Creative Team',
      '4x Calls Per Month',
      'License free assets',
    ],
  },
]

const faqList: faq[] = [
  {
    faq_que: 'What services does Nasmak Labs offer?',
    faq_ans:
      'We specialize in full-stack development, mobile applications, UI/UX design, and custom software solutions. Our services are tailored to startups, businesses, and enterprises seeking scalable digital products.',
  },
  {
    faq_que: 'How long does a typical project take?',
    faq_ans:
      'The timeline varies based on project complexity. A standard website or MVP can take 3 to 6 weeks, while larger platforms may require several months. We always provide an estimated timeline after project assessment.',
  },
  {
    faq_que: 'How is pricing structured at Nasmak Labs?',
    faq_ans:
      'Our pricing depends on the scope, technology stack, and timeline of your project. We offer both fixed-price packages and hourly engagement models after discussing your specific requirements.',
  },
  {
    faq_que: 'Do you offer ongoing support after project completion?',
    faq_ans:
      'Yes, we offer post-launch support including bug fixes, feature enhancements, and maintenance plans to keep your product stable and up-to-date.',
  },
  {
    faq_que: 'How often will I receive updates on my project?',
    faq_ans:
      'We maintain clear and regular communication. Clients typically receive updates weekly, or as milestones are completed, via project dashboards, Slack, or email.',
  },
  {
    faq_que: 'Can I request changes once the project is in progress?',
    faq_ans:
      'Absolutely. We follow an agile development process allowing flexibility. Any new features or changes are added to the backlog, estimated, and scheduled based on priority.',
  },
];


const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
