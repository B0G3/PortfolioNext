"use client"
import { useRef, useState } from "react"
import FsLightbox from "fslightbox-react";
import Image from 'next/image'
import Typewriter from "typewriter-effect";

interface Props{
    featured : Boolean,
    title: string, 
    short_description?: string, 
    description : string, 
    stack: string,
    onClick: () => void,
    setClosed: () => void,
    icons?: {
        live?: string;
        repo?: string;
    }
    media?: Array<string>
    showcased: boolean
}

export function Project({
    featured,
    title, 
    short_description, 
    description, 
    stack,
    onClick,
    setClosed,
    icons,
    media,
    showcased
} : Props){
    const [showGallery, setShowGallery] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            {featured && 
            <div className="grid grid-cols-12 gap-0 md:gap-8 mb-8">
                <div className="col-span-12 md:col-span-5 self-center">
                    <div className={"w-full aspect-video bg-primary cursor-pointer group relative border-2 border-neutral-950 hover:grayscale-0 relative" + (showcased?'':' grayscale')}>
                        {
                                (media && media[0]) &&
                                <Image src={media[0]} alt="me" fill 
                                sizes="100%"/>
                        }
                        <div onClick={()=> (showcased ? (setClosed()): (onClick ? onClick() : null) )} className={"absolute w-full h-full bg-neutral-950 bg-opacity-20 group-hover:flex flex justify-center items-center" + (showcased?'':' hidden')}>
                            <div className="w-12 h-12 p-2 bg-neutral-950">
                                {showcased?(
                                    <svg className="w-full h-full fill-primary" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="365.71 231.62 365.71 195.05 402.29 195.05 402.29 158.48 438.86 158.48 438.86 121.9 475.43 121.9 475.43 85.333 512 85.333 512 36.571 475.43 36.571 475.43 0 426.67 0 426.67 36.571 390.1 36.571 390.1 73.143 353.52 73.143 353.52 109.71 316.95 109.71 316.95 146.29 280.38 146.29 280.38 182.86 231.62 182.86 231.62 146.29 195.05 146.29 195.05 109.71 158.48 109.71 158.48 73.143 121.9 73.143 121.9 36.571 85.333 36.571 85.333 0 36.571 0 36.571 36.571 0 36.571 0 85.333 36.571 85.333 36.571 121.9 73.143 121.9 73.143 158.48 109.71 158.48 109.71 195.05 146.29 195.05 146.29 231.62 182.86 231.62 182.86 280.38 146.29 280.38 146.29 316.95 109.71 316.95 109.71 353.52 73.143 353.52 73.143 390.1 36.571 390.1 36.571 426.67 0 426.67 0 475.43 36.571 475.43 36.571 512 85.333 512 85.333 475.43 121.9 475.43 121.9 438.86 158.48 438.86 158.48 402.29 195.05 402.29 195.05 365.71 231.62 365.71 231.62 329.14 280.38 329.14 280.38 365.71 316.95 365.71 316.95 402.29 353.52 402.29 353.52 438.86 390.1 438.86 390.1 475.43 426.67 475.43 426.67 512 475.43 512 475.43 475.43 512 475.43 512 426.67 475.43 426.67 475.43 390.1 438.86 390.1 438.86 353.52 402.29 353.52 402.29 316.95 365.71 316.95 365.71 280.38 329.14 280.38 329.14 231.62"/>
                                    </svg>
                                ):(
                                    <svg className="w-full h-full fill-primary" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M478.609,100.174V66.783h-33.391V33.391h-33.391V0H200.348v33.391h-33.391v33.391h-33.391v33.391h-33.391v244.87H66.783    v33.391H33.391v33.391H0v66.783h33.391V512h66.783v-33.391h33.391v-33.391h33.391v-33.391h244.87v-33.391h33.391v-33.391h33.391    v-33.391H512V100.174H478.609z M445.217,278.261h-33.391v33.391h-33.391v33.391H233.739v-33.391h-33.391v-33.391h-33.391V133.565    h33.391v-33.391h33.391V66.783h144.696v33.391h33.391v33.391h33.391V278.261z"/>
                                    </svg>
                                )}
                            </div>
                        </div>
                        <div className="absolute top-4 left-0 bg-neutral-950 text-2xl px-4 pointer-events-none">Featured</div>
                        <div className="absolute bottom-0 right-4 flex items-end">
                            {icons?.live &&
                                <a href={icons.live} target="_blank" className="mr-2 bg-neutral-950 p-2 hover:pb-3 transition-all h-fit">
                                    <svg className="w-6 h-6 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 32 32" shapeRendering="crispEdges">
                                        <path className="stroke-primary" d="M6 5h1M25 5h2M5 6h3M24 6h4M4 7h3M25 7h4M3 8h4M26 8h3M3 9h3M26 9h4M2 10h3M10 10h2M20 10h3M27 10h3M2 11h3M9 11h3M20 11h3M28 11h3M2 12h2M8 12h4M21 12h3M28 12h3M1 13h3M8 13h3M21 13h3M28 13h3M1 14h3M8 14h2M14 14h4M22 14h3M28 14h3M1 15h3M7 15h3M14 15h4M22 15h3M28 15h3M1 16h3M7 16h3M14 16h5M22 16h3M28 16h3M1 17h3M7 17h3M14 17h4M22 17h3M28 17h3M1 18h3M8 18h3M16 18h1M22 18h3M28 18h3M1 19h3M8 19h3M21 19h3M28 19h3M2 20h3M9 20h3M20 20h4M28 20h3M2 21h3M9 21h3M20 21h3M27 21h3M3 22h3M10 22h2M21 22h1M27 22h3M3 23h3M26 23h3M3 24h4M25 24h4M4 25h4M25 25h3M5 26h3M25 26h2" />
                                    </svg>
                                </a>
                            }
                            {icons?.repo && 
                                <a href={icons.repo} target="_blank" className="bg-neutral-950 p-2 hover:pb-3 transition-all h-fit">
                                    <svg className="w-6 h-6 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 32 32" shapeRendering="crispEdges">
                                        <path className="stroke-primary" d="M16 0h1M15 1h3M14 2h5M13 3h7M13 4h8M14 5h8M10 6h2M15 6h8M9 7h4M16 7h8M8 8h6M18 8h7M7 9h7M19 9h7M6 10h8M19 10h8M5 11h10M20 11h8M4 12h12M21 12h8M3 13h13M18 13h1M22 13h8M2 14h14M18 14h2M24 14h7M1 15h15M18 15h3M25 15h7M0 16h16M18 16h3M26 16h6M1 17h15M18 17h3M26 17h6M2 18h14M18 18h4M25 18h6M3 19h13M18 19h12M4 20h12M18 20h11M5 21h10M18 21h10M6 22h8M19 22h8M7 23h7M19 23h7M8 24h6M19 24h6M9 25h6M18 25h6M10 26h13M11 27h11M12 28h9M13 29h7M14 30h5M15 31h3" />
                                    </svg>
                                </a>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 flex self-center">
                    <div className="md:mt-0 mt-4">
                        <div className="bg-neutral-950 text-primary text-2xl p-1 w-fit flex items-center">
                            <svg className="fill-primary w-6 h-6 mr-3" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m478.61 111.31v-33.402h-178.09v66.783h111.3v33.391h-144.7v-100.17h-33.391v-33.391h-200.35v33.396h-33.391v155.83h33.391v122.43h33.386v111.32h445.22v-0.011h7e-3v-356.16h-33.391zm0 244.86h-33.391v-89.043h-33.391v-89.042h33.391v89.042h33.391v89.043z"/>
                            </svg>  
                            {title}
                        </div>

                        <div className="mt-2">
                            {stack}
                        </div>
                        <div className="text-muted text-justify">
                            {short_description}
                        </div>
                    </div>
                </div>
            </div>}
            {!featured && 
            <div className="flex flex-col">
                    <div className="bg-neutral-950 text-center py-0.5 whitespace-nowrap overflow-hidden">{title}</div>
                    <div onClick={()=> (showcased ? (setClosed()): (onClick ? onClick() : null) )} className={"w-full aspect-video bg-primary cursor-pointer group relative border-2 border-neutral-950 hover:grayscale-0" + (showcased?'':' grayscale')}>
                       {
                            (media && media[0]) &&
                            <Image className="object-cover object-top" src={media[0]} alt="me" fill 
                            sizes="100%"/>
                       }
                        <div className={"absolute w-full h-full bg-neutral-950 bg-opacity-20 group-hover:flex flex justify-center items-center" + (showcased?'':' hidden')}>
                            <div className="w-12 h-12 p-2 bg-neutral-950">
                                {showcased?(
                                    <svg className="w-full h-full fill-primary" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="365.71 231.62 365.71 195.05 402.29 195.05 402.29 158.48 438.86 158.48 438.86 121.9 475.43 121.9 475.43 85.333 512 85.333 512 36.571 475.43 36.571 475.43 0 426.67 0 426.67 36.571 390.1 36.571 390.1 73.143 353.52 73.143 353.52 109.71 316.95 109.71 316.95 146.29 280.38 146.29 280.38 182.86 231.62 182.86 231.62 146.29 195.05 146.29 195.05 109.71 158.48 109.71 158.48 73.143 121.9 73.143 121.9 36.571 85.333 36.571 85.333 0 36.571 0 36.571 36.571 0 36.571 0 85.333 36.571 85.333 36.571 121.9 73.143 121.9 73.143 158.48 109.71 158.48 109.71 195.05 146.29 195.05 146.29 231.62 182.86 231.62 182.86 280.38 146.29 280.38 146.29 316.95 109.71 316.95 109.71 353.52 73.143 353.52 73.143 390.1 36.571 390.1 36.571 426.67 0 426.67 0 475.43 36.571 475.43 36.571 512 85.333 512 85.333 475.43 121.9 475.43 121.9 438.86 158.48 438.86 158.48 402.29 195.05 402.29 195.05 365.71 231.62 365.71 231.62 329.14 280.38 329.14 280.38 365.71 316.95 365.71 316.95 402.29 353.52 402.29 353.52 438.86 390.1 438.86 390.1 475.43 426.67 475.43 426.67 512 475.43 512 475.43 475.43 512 475.43 512 426.67 475.43 426.67 475.43 390.1 438.86 390.1 438.86 353.52 402.29 353.52 402.29 316.95 365.71 316.95 365.71 280.38 329.14 280.38 329.14 231.62"/>
                                    </svg>
                                ):(
                                    <svg className="w-full h-full fill-primary" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M478.609,100.174V66.783h-33.391V33.391h-33.391V0H200.348v33.391h-33.391v33.391h-33.391v33.391h-33.391v244.87H66.783    v33.391H33.391v33.391H0v66.783h33.391V512h66.783v-33.391h33.391v-33.391h33.391v-33.391h244.87v-33.391h33.391v-33.391h33.391    v-33.391H512V100.174H478.609z M445.217,278.261h-33.391v33.391h-33.391v33.391H233.739v-33.391h-33.391v-33.391h-33.391V133.565    h33.391v-33.391h33.391V66.783h144.696v33.391h33.391v33.391h33.391V278.261z"/>
                                    </svg>
                                )}

                            </div>
                        </div>
                        <div className="absolute left-0 bottom-2 flex flex-col items-start">
                            {icons?.live &&
                                <a href={icons.live} target="_blank" className="mb-1 bg-neutral-950 p-1 hover:pl-2 transition-all h-fit">
                                    <svg className="w-4 h-4 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 32 32" shapeRendering="crispEdges">
                                        <path className="stroke-primary" d="M6 5h1M25 5h2M5 6h3M24 6h4M4 7h3M25 7h4M3 8h4M26 8h3M3 9h3M26 9h4M2 10h3M10 10h2M20 10h3M27 10h3M2 11h3M9 11h3M20 11h3M28 11h3M2 12h2M8 12h4M21 12h3M28 12h3M1 13h3M8 13h3M21 13h3M28 13h3M1 14h3M8 14h2M14 14h4M22 14h3M28 14h3M1 15h3M7 15h3M14 15h4M22 15h3M28 15h3M1 16h3M7 16h3M14 16h5M22 16h3M28 16h3M1 17h3M7 17h3M14 17h4M22 17h3M28 17h3M1 18h3M8 18h3M16 18h1M22 18h3M28 18h3M1 19h3M8 19h3M21 19h3M28 19h3M2 20h3M9 20h3M20 20h4M28 20h3M2 21h3M9 21h3M20 21h3M27 21h3M3 22h3M10 22h2M21 22h1M27 22h3M3 23h3M26 23h3M3 24h4M25 24h4M4 25h4M25 25h3M5 26h3M25 26h2" />
                                    </svg>
                                </a>
                            }
                            {icons?.repo && 
                                <a href={icons.repo} target="_blank" className="bg-neutral-950 p-1 hover:pl-2 transition-all h-fit">
                                    <svg className="w-4 h-4 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 32 32" shapeRendering="crispEdges">
                                        <path className="stroke-primary" d="M16 0h1M15 1h3M14 2h5M13 3h7M13 4h8M14 5h8M10 6h2M15 6h8M9 7h4M16 7h8M8 8h6M18 8h7M7 9h7M19 9h7M6 10h8M19 10h8M5 11h10M20 11h8M4 12h12M21 12h8M3 13h13M18 13h1M22 13h8M2 14h14M18 14h2M24 14h7M1 15h15M18 15h3M25 15h7M0 16h16M18 16h3M26 16h6M1 17h15M18 17h3M26 17h6M2 18h14M18 18h4M25 18h6M3 19h13M18 19h12M4 20h12M18 20h11M5 21h10M18 21h10M6 22h8M19 22h8M7 23h7M19 23h7M8 24h6M19 24h6M9 25h6M18 25h6M10 26h13M11 27h11M12 28h9M13 29h7M14 30h5M15 31h3" />
                                    </svg>
                                </a>
                            }
                        </div>
                    </div>
            </div>}

            <div className={"project-bar " + ((!!showcased)?'':'collapsed')}>
                <button className="btn-close" onClick={() => setClosed()}>
                        <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="365.71 231.62 365.71 195.05 402.29 195.05 402.29 158.48 438.86 158.48 438.86 121.9 475.43 121.9 475.43 85.333 512 85.333 512 36.571 475.43 36.571 475.43 0 426.67 0 426.67 36.571 390.1 36.571 390.1 73.143 353.52 73.143 353.52 109.71 316.95 109.71 316.95 146.29 280.38 146.29 280.38 182.86 231.62 182.86 231.62 146.29 195.05 146.29 195.05 109.71 158.48 109.71 158.48 73.143 121.9 73.143 121.9 36.571 85.333 36.571 85.333 0 36.571 0 36.571 36.571 0 36.571 0 85.333 36.571 85.333 36.571 121.9 73.143 121.9 73.143 158.48 109.71 158.48 109.71 195.05 146.29 195.05 146.29 231.62 182.86 231.62 182.86 280.38 146.29 280.38 146.29 316.95 109.71 316.95 109.71 353.52 73.143 353.52 73.143 390.1 36.571 390.1 36.571 426.67 0 426.67 0 475.43 36.571 475.43 36.571 512 85.333 512 85.333 475.43 121.9 475.43 121.9 438.86 158.48 438.86 158.48 402.29 195.05 402.29 195.05 365.71 231.62 365.71 231.62 329.14 280.38 329.14 280.38 365.71 316.95 365.71 316.95 402.29 353.52 402.29 353.52 438.86 390.1 438.86 390.1 475.43 426.67 475.43 426.67 512 475.43 512 475.43 475.43 512 475.43 512 426.67 475.43 426.67 475.43 390.1 438.86 390.1 438.86 353.52 402.29 353.52 402.29 316.95 365.71 316.95 365.71 280.38 329.14 280.38 329.14 231.62"/>
                        </svg>
                </button>
                <div className="flex flex-col justify-center p-8 w-full sm:w-[32rem] flex-shrink-0 mx-auto">
                    <div className="text-2xl text-center whitespace-nowrap">{title}</div>
                    <div className="relative">
                        {/* onClick={()=> setShowGallery(!showGallery)}  */}
                         <div className="mx-auto h-36 sm:h-64 aspect-video bg-primary group relative border-2 border-neutral-950 relative mt-2">
                        {
                                (media && media[0]) &&
                                <Image className="object-cover object-top" src={media[0]} alt="me" fill 
                                sizes="100%"/>
                        }
                        {/* <div className="absolute w-full h-full bg-neutral-950 bg-opacity-20 hidden group-hover:flex flex justify-center items-center">
                            <div className="w-12 h-12 p-2 bg-neutral-950">
                                <svg className="w-full h-full fill-primary" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M478.609,100.174V66.783h-33.391V33.391h-33.391V0H200.348v33.391h-33.391v33.391h-33.391v33.391h-33.391v244.87H66.783    v33.391H33.391v33.391H0v66.783h33.391V512h66.783v-33.391h33.391v-33.391h33.391v-33.391h244.87v-33.391h33.391v-33.391h33.391    v-33.391H512V100.174H478.609z M445.217,278.261h-33.391v33.391h-33.391v33.391H233.739v-33.391h-33.391v-33.391h-33.391V133.565    h33.391v-33.391h33.391V66.783h144.696v33.391h33.391v33.391h33.391V278.261z"/>
                                </svg>
                            </div>
                        </div> */}
                        <div className="absolute bottom-0 right-4 flex items-end">
                            {icons?.live &&
                                <a href={icons.live} target="_blank" className="mr-2 bg-neutral-950 p-2 hover:pb-3 transition-all h-fit">
                                    <svg className="w-6 h-6 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 32 32" shapeRendering="crispEdges">
                                        <path className="stroke-primary" d="M6 5h1M25 5h2M5 6h3M24 6h4M4 7h3M25 7h4M3 8h4M26 8h3M3 9h3M26 9h4M2 10h3M10 10h2M20 10h3M27 10h3M2 11h3M9 11h3M20 11h3M28 11h3M2 12h2M8 12h4M21 12h3M28 12h3M1 13h3M8 13h3M21 13h3M28 13h3M1 14h3M8 14h2M14 14h4M22 14h3M28 14h3M1 15h3M7 15h3M14 15h4M22 15h3M28 15h3M1 16h3M7 16h3M14 16h5M22 16h3M28 16h3M1 17h3M7 17h3M14 17h4M22 17h3M28 17h3M1 18h3M8 18h3M16 18h1M22 18h3M28 18h3M1 19h3M8 19h3M21 19h3M28 19h3M2 20h3M9 20h3M20 20h4M28 20h3M2 21h3M9 21h3M20 21h3M27 21h3M3 22h3M10 22h2M21 22h1M27 22h3M3 23h3M26 23h3M3 24h4M25 24h4M4 25h4M25 25h3M5 26h3M25 26h2" />
                                    </svg>
                                </a>
                            }
                            {icons?.repo && 
                                <a href={icons.repo} target="_blank" className="bg-neutral-950 p-2 hover:pb-3 transition-all h-fit">
                                    <svg className="w-6 h-6 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 32 32" shapeRendering="crispEdges">
                                        <path className="stroke-primary" d="M16 0h1M15 1h3M14 2h5M13 3h7M13 4h8M14 5h8M10 6h2M15 6h8M9 7h4M16 7h8M8 8h6M18 8h7M7 9h7M19 9h7M6 10h8M19 10h8M5 11h10M20 11h8M4 12h12M21 12h8M3 13h13M18 13h1M22 13h8M2 14h14M18 14h2M24 14h7M1 15h15M18 15h3M25 15h7M0 16h16M18 16h3M26 16h6M1 17h15M18 17h3M26 17h6M2 18h14M18 18h4M25 18h6M3 19h13M18 19h12M4 20h12M18 20h11M5 21h10M18 21h10M6 22h8M19 22h8M7 23h7M19 23h7M8 24h6M19 24h6M9 25h6M18 25h6M10 26h13M11 27h11M12 28h9M13 29h7M14 30h5M15 31h3" />
                                    </svg>
                                </a>
                            }
                        </div>
                    </div>
                </div>
                   
                <div className="mt-2 text-center whitespace-nowrap overflow-hidden">{stack}</div>
                    
                <div className="text-muted text-justify max-h-42 overflow-hidden mt-4">
                    {showcased && 
                    <Typewriter
                        options={{
                            strings: description,
                            autoStart: true,
                            loop: false,
                            delay: 0.25
                            }}
                    />}
                </div>
            </div>
            </div>
            <FsLightbox
                    toggler={showGallery}
                    sources={media}
                />
        </>
    )
}