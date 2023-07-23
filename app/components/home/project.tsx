"use client"
import ProjectInterface from "@/app/models/projectInterface";
import { useState } from "react"
import Draggable from "react-draggable";

export function Project({
    title, 
    subtitle, 
    stack,
    onClick,
    icons} : ProjectInterface){

    return (
        <>
            <div onClick={() => onClick?.()} className="grid grid-cols-12 gap-8">
                <div className="col-span-5">
                    <div className="w-full h-64 bg-primary"></div>
                </div>
                <div className="col-span-7 flex self-center">
                    <div className="">
                        <div className="bg-neutral-950 text-primary text-2xl p-1 w-fit flex items-center">
                            <svg className="fill-primary w-6 h-6 mr-2" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m478.61 111.31v-33.402h-178.09v66.783h111.3v33.391h-144.7v-100.17h-33.391v-33.391h-200.35v33.396h-33.391v155.83h33.391v122.43h33.386v111.32h445.22v-0.011h7e-3v-356.16h-33.391zm0 244.86h-33.391v-89.043h-33.391v-89.042h33.391v89.042h33.391v89.043z"/>
                            </svg>  
                            {title}
                        </div>
                        <div className="text-muted mt-2 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, urna ac cursus accumsan, lacus tortor molestie metus, quis eleifend enim felis vel orci. Maecenas tempus neque mauris, pharetra porta turpis facilisis eu. Morbi interdum justo erat, a elementum mauris commodo sit amet. 
                        </div>
                        <div>
                            Vue, JS, PHP
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-1 bg-neutral-950">
                    <div className="w-8 h-8 bg-neutral-950"></div>
                </div> */}
            </div>
        </>
    )
}