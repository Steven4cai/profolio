import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        id: '1',
       title: 'Property Pulse',
        description: 'Property Pulse is a full-stack real estate platform built with Next.js, MongoDB, and Tailwind CSS. It allows users to list, search, and manage properties with features like NextAuth Google authentication, Cloudinary image uploads, real-time availability tracking, and internal messaging for seamless communication.',
        bgImage: '/propertypulse.jpg',
        website:'https://propertypulse-rosy-eight.vercel.app/',
        github:'https://github.com/Steven4cai/propertypulse'
    },
    {
        id: '2',
        title: 'BookIt – Room Booking System',
        description: 'ookIt is a meeting room booking system built with Next.js, Appwrite, and Tailwind CSS. Users can list, edit, and manage rooms with features like built-in authentication, Appwrite database, real-time availability tracking, and booking validation to prevent double booking.',
        bgImage: '/bookit.png',
        website:'https://bookit-sandy.vercel.app/',
        github:'https://github.com/Steven4cai/bookit'
    },
    {
        id: '3',
        title: 'Github Finder',
        description: 'GitHub User Finder is a React-based web app built with React, GitHub REST API, and Tailwind CSS. Users can search GitHub profiles and explore repositories with features like real-time API fetching, user statistics, repository insights, and a responsive UI for an optimized browsing experience.',
        bgImage: '/work-3.png',
        website:'https://github-finder-one-sepia.vercel.app/',
        github:'https://github.com/Steven4cai/github-finder'
    },

]

export const serviceData = [
    { icon: assets.web_icon, title: 'Frontend Development', description: 'Building modern, responsive, and interactive web applications using React.js, Next.js, and Tailwind CSS to ensure seamless user experience.', link: '' },
    { icon: assets.mobile_icon, title: 'Full-Stack Development', description: 'Developing scalable web applications with Next.js, Appwrite, MongoDB, and Firebase, handling both frontend and backend efficiently.', link: '' },
    { icon: assets.ui_icon, title: 'API Development & Integration', description: 'Creating and integrating RESTful APIs to enable smooth data communication between systems, ensuring high performance and security.', link: '' },
    { icon: assets.graphics_icon, title: 'Authentication & Security', description: 'Implementing secure authentication using NextAuth.js, OAuth, JWT, and Firebase Auth, ensuring data protection and user privacy.', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Master of Information Technology' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, C++, Python' },

    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Developed multiple web applications with modern tech stack | Specializing in frontend & full-stack development' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];