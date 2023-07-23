"use client"
import { useState } from "react"
import { Project } from "./project";
import ProjectInterface from "@/app/models/projectInterface";
import ProjectWindowInterface from "@/app/models/projectWindowInterface";
import ProjectWindow from "./projectWindow";

const projectList : Array<ProjectInterface> = [
    {
        title: 'Sports platform',
        stack: 'Laravel, JQuery, MySQL',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        windows: [
            {
                title: 'huj',
                content: 'dupa'
            },
            {
                title: 'japa',
                content: 'cipa'
            }
        ]
    },
]
export default function ProjectShowcase(){
    const [windows, setWindows] = useState<Array<ProjectWindowInterface>>([]);

    const openProjectWindows = (index : number) => {
        console.log(projectList[index]);
        const windows_list : Array<ProjectWindowInterface> = [];
        projectList[index].windows?.forEach(e => windows_list.push(e));
        setWindows(windows_list);

        console.log(windows_list.length)
        if(windows_list.length){
            console.log('dupa')
             document.body.style.overflow = "hidden"}
        // console.log(windows); 
    }

    return (
        <>
            {windows?.length > 0 && <div className="z-20 fixed top-0 left-0 w-screen h-full bg-neutral-950 bg-opacity-50 overflow-y-hidden">
                {windows.map((e,i) => (
                    <ProjectWindow {...e} key={i}></ProjectWindow>
                ))}
            </div>}
            {projectList.map((e, i) => 
                <Project {...e} onClick={()=>openProjectWindows(i)} key={i}></Project>
            )}
            
        </>
    )
}