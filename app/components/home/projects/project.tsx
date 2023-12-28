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
                    <div onClick={()=> (showcased ? (setClosed()): (onClick ? onClick() : null) )} className={"w-full aspect-video bg-primary cursor-pointer group relative border-2 border-neutral-950 hover:grayscale-0 relative" + (showcased?'':' grayscale')}>
                        {
                                (media && media[0]) &&
                                <Image src={media[0]} alt="me" fill 
                                sizes="100%"/>
                        }
                        <div className="absolute top-4 left-0 bg-neutral-950 text-2xl px-4">Featured</div>
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
                    <div>
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