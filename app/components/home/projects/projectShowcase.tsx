"use client"
import { useState } from "react"
import { Project } from "./project";
import ProjectInterface from "@/app/interfaces/projectInterface";
import React from "react";
import Typewriter from 'typewriter-effect';
const projectList : Array<ProjectInterface> = [
    {
        featured: true,
        title: 'Universe generator',
        stack: 'React, TS, ThreeJS + Fiber',        
        short_description: "A distinctive universe builder crafted using Three Fiber, React, and Typescript. Unlike imitating real-life physics with gravity and collision, this project focuses on the creative aspect of constructing star and planet constellations, with the added feature of customization.",
        description: "A distinctive universe builder is crafted using Three Fiber, React, and Typescript. Unlike simulating real-life physics with gravity and collision, this project focuses on the creative aspect of constructing star and planet constellations, with the added feature of customization. Regrettably, I've realized that Three Fiber may not be the optimal choice for a project of this complexity; instead, the foundational Three.js might be more suitable. Additionally, incorporating a state management library like Zustand or Redux would significantly aid in handling infinitely nested states, especially with celestial bodies and their satellites, which currently pose a considerable challenge. While I intend to rewrite the project, it's not the top priority at the moment.",
        icons: {
            live: 'https://b0g3.github.io/PlanetGen3D/',
            repo: 'https://github.com/B0G3/PlanetGen3D',
        },
        media: [
            '/planetgen/brown.avif',
        ]
    },
    {
        featured: false,
        title: 'Portfolio',
        stack: 'TS, React, NextJS, ThreeJS + Fiber, Tailwind',
        description: "This website - my personal portfolio. I just wanted to create a place where I could show off my skills and tell something about me. I used different technologies than usual - I wanted to learn something new and give myself a little challenge. \n This is, like, the nth version of my portfolio. I've got this little paranoia thing going on—I keep finding bits of the page I don't like and end up wanting to redo the whole thing.",
        icons: {
            repo: 'd',
            live: 'd'
        },
        media: [
            '/portfolio/about.avif',
        ]
    },
    {
        featured: false,
        title: 'Photovoltaic calculator',
        stack: 'Vue, JS, Laravel, PHP, MySQL, Tailwind',
        description: "An app designed to assist solar panel sales professionals in their work. The central concept revolves around a highly customizable calculator accessible through settings. This calculator serves to generate tailored offers for clients. There are multiple user types, different roles give access to different things. The tool also allows you to generate highly customizable PDF's.",
        icons: {
            repo: 'd',
            live: 'd'
        },
        media: [
            '/kpe/funding.avif',
            '/kpe/calculator.avif',
        ]
    },
    {
        featured: false,
        title: 'Hotel ERP',
        stack: 'Vue, JS, Laravel, PHP, MySQL, Tailwind',
        description: "A larger scale CRM web app tailored for a local inn, comprising various modules, including a knowledge base, warehouse management, work time tracking, an administrator suite, and more. This project stands out as one of my proudest achievements.",
        icons: {
            repo: 'd',
            live: 'd'
        },
        media: [
            '/harasowka/dashboard.avif',
        ]
    },
    {
        featured: false,
        title: 'Sports platform',
        stack: 'JQuery, JS, Laravel, PHP, MySQL, Multitenancy, Bootstrap',
        description: "I actively contribute to the development of the Sportigio platform, handling both front-end and back-end tasks. Sportigio is an online platform designed to meet the diverse needs of the sports community, connecting leagues, clubs, fans, and businesses while facilitating the monetization of digital sports. One of my recent significant tasks involved integrating the Verestro API. This enhancement enables users to create virtual cards, deposit funds, and utilize them seamlessly.",
        icons: {
            live: 'https://sportigio.com/spaces-list',
            repo: 'https://sportigio.com/spaces-list',
        },
        media: [
            '/sportigio/landing.avif',
        ]
    },
    {
        featured: false,
        title: 'Promotion system',
        stack: 'Vue, JS, Laravel, PHP, MySQL',
        description: "A highly scalable web app module designed for employee promotions. The system operates across multiple companies and their databases, depending on various settings. The entire framework is built upon distinct gratification profiles assigned to employees on a monthly or yearly basis. Through various settings and mechanisms, the system generates different reports, including employee bonuses.",
        icons: {
        },
        media: [
            '/premiowanie/dashboard.avif',
        ]
    },
    {
        featured: false,
        title: 'Travel agency',
        stack: 'Vue, JS, Laravel, PHP, MySQL',
        description: "Certainly not my proudest project – I was assigned the challenging task of completely rewriting the Togo.to website. The switch from jQuery to Vue and Inertia was a major overhaul, accompanied by significant backend improvements. I successfully eliminated numerous redundant tables, relations, and queries. However, the most formidable challenge was migrating the entire database to the new format. Why am I not entirely satisfied with this project? In short, it was rushed, and there was ample room for further improvements on both the front and backend.",
        icons: {
            live: 'https://togo.to/'
        },
        media: [
            '/togo/wycieczki.avif',
        ]
    },
    {
        featured: false,
        title: 'WhatsApp mass sender',
        stack: 'Vue, JS, Laravel, PHP, MySQL',
        description: "Totally acceptable by WhatsApp terms of service... Users can create message templates, manage recipient groups, and load recipients from external files. The application utilizes the Blueticks API to efficiently send scheduled messages to selected recipients in bulk. To overcome limitations imposed by the API per account, it heavily relies on Laravel's asynchronous queues, enabling the mass sending of messages from multiple accounts simultaneously.",
        icons: {
        },
        media: [
            '/masssender/schemas.avif',
        ]
    },
    {
        featured: false,
        title: 'Supply demand system',
        stack: 'Vue, JS, Laravel, PHP, MySQL',
        description: "The module is part of a larger system designed to manage supply requests. In essence, the entire process is divided into multiple steps, including the creation of supply demands, approval by various supervisors, sending offers to contractors, ordering items, and more. The functionality heavily relies on user permissions and the status of a given supply demand. Additionally, users can add contractors, items, and other elements. It's challenging to fully explain this intricate system in just a few words.",
        icons: {
        },
        media: [
            '/zapotrzebowania/order.avif',
        ]
    },
    {
        featured: false,
        other: true,
        title: 'Gmod addons',
        stack: 'LUA, 3D',
        description: "To this day, I continue to maintain some of my Garry's Mod scripts. These scripts alter various aspects of the game, with a dominant focus on enhancing roleplay gamemodes. Among the most well-received creations are the Ballistic Shields mod, the Need for Speed port, and a script facilitating cigarette production, to name a few. This was the first step that got me into some kind of commercial coding. After all, they raised over $20,000.",
        icons: {
        },
        media: [
            '/gmod/gmod.avif',
        ]
    },
    {
        featured: false,
        other: true,
        title: 'Game hacks',
        stack: 'C++, Reverse engineering',
        description: "Always been a fan of games, and with a little drive for non-ethical stuff, I started creating my own game hacks. I wouldn't really call them anything sophisticated; after all, it was just a little hobby of mine. I managed to create some basic hacks for popular games like CS:GO and GTA V. The thing is, these games had very easy-to-bypass anti-cheat detection. After realizing game hacking is more about reverse engineering and finding answers to mostly unanswerable questions, I quit. I grew out of playing video games, or I'd rather play single-player ones, so this topic no longer interests me.",
        icons: {
        },
        media: [
            '/csgo/csgo.avif',
        ]
    },
]

export default function ProjectShowcase(){
    const [showcasedProject, setShowcasedProject] = React.useState<number | null>(null);


    React.useEffect(() => {
        const handleScroll = (event : Event) => {
            const sections = Array.from(document.querySelectorAll('section'));
            let current = "home"

            sections.forEach(e => {
                if(window.scrollY + window.innerHeight/2 >= e.offsetTop) { current = e.id; };
               
            })
            if(current != 'projects') setShowcasedProject(null);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className="min-h-[50vh] fade pb-24">
                {projectList.map((e, i) => 
                    e.featured && <Project {...e} onClick={() => setShowcasedProject(i)} setClosed={() => setShowcasedProject(null)} showcased={showcasedProject === i} key={e.title}></Project>
                )}
                <div className="border-t border-neutral-700 w-full my-12 relative">
                    <div className="bg-neutral-950 px-4 w-fit text-2xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">WEBDEV</div>
                </div>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
                    {projectList.map((e, i) => 
                        (!e.featured && !e.other) && <div key={i} className="col-span-3">
                            <Project {...e} onClick={() => setShowcasedProject(i)} setClosed={() => setShowcasedProject(null)} showcased={showcasedProject === i}></Project>
                        </div>
                    )}
                </div>
                <div className="border-t border-neutral-700 w-full my-12 relative">
                    <div className="bg-neutral-950 px-4 w-fit text-2xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">OTHER</div>
                </div>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
                    <div className="col-span-3 hidden md:block"></div>
                    {projectList.map((e, i) => 
                        (!e.featured && e.other) && <div key={i} className="col-span-3">
                            <Project {...e} onClick={() => setShowcasedProject(i)} setClosed={() => setShowcasedProject(null)} showcased={showcasedProject === i}></Project>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-4">
                    <div className="col-span-1 hidden md:block"></div>
                    <div className="col-span-2 px-0 md:px-1 py-0.5">
                        <div className="bg-neutral-950 text-center text-white">
                        And many smaller projects not worth mentioning separately...
                        </div>
                    </div>
                </div>
                {/* <div className="mt-8 text-white text-center">And many other smaller projects not worth mentioning separately...</div> */}
                {/* <div className="text-muted text-center">(Or the ones not related to webdev)</div> */}
            </div>
        </>
    )
}