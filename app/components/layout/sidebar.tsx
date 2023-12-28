
"use client"
import { useEffect, useState } from 'react'
export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(true);
    const [section, setSection] = useState("");

    const scrollTo = (section : string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const handleScroll = (event : Event) => {

            const sections = Array.from(document.querySelectorAll('section'));
            let current = "home"

            sections.forEach(e => {
                if(window.scrollY + window.innerHeight/2 >= e.offsetTop) { current = e.id; };
               
            })
            setSection(current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div className={"sidebar" + (collapsed?" collapsed":"")}>
            <div className='w-full h-auto p-8'>
                <div className="overflow-hidden">
                    <div className={"sidebar-header border-white text-center py-4 px-10 whitespace-nowrap border-b-2" + (collapsed?" border-opacity-0":" border-opacity-100")}>
                        <div className="w-fit mx-auto uppercase">
                            <div className="text-muted">MKUltra</div>
                            <div className="text-2xl -mt-2">Marcin Kostrzemski</div>
                        </div>
                    </div>
                </div>
                <ul className="mt-4 overflow-hidden uppercase">
                    <li className={"cursor-pointer" + (section==='home' ? ' active' : '')} onClick={()=>scrollTo('home')}>
                        <div className="icon cursor-pointer">
                            <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="478.61 233.74 478.61 200.35 445.22 200.35 445.22 166.96 411.83 166.96 411.83 133.56 378.44 133.56 378.44 100.17 345.04 100.17 345.04 66.783 311.65 66.783 311.65 33.391 278.26 33.391 278.26 0 233.74 0 233.74 33.391 200.35 33.391 200.35 66.783 166.96 66.783 166.96 100.17 133.56 100.17 133.56 133.56 100.17 133.56 100.17 166.96 66.783 166.96 66.783 200.35 33.391 200.35 33.391 233.74 0 233.74 0 512 178.09 512 178.09 300.52 333.91 300.52 333.91 512 512 512 512 233.74"/>
                            </svg>
                        </div>
                        Home
                    </li>
                    <li className={"cursor-pointer"  + (section==='about' ? ' active' : '')} onClick={()=>scrollTo('about')}>
                        <div className="icon">
                            <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m0 61.217v389.56h512v-389.56h-512zm256 222.61h-44.522v44.522h44.522v55.652h-178.09v-55.652h44.522v-44.522h-44.522v-122.44h33.391v-33.391h111.3v33.391h33.392v122.44zm178.09 77.913h-133.56v-33.391h133.56v33.391zm0-89.043h-133.56v-33.391h133.56v33.391zm0-89.044h-133.56v-33.391h133.56v33.391z"/>
                            </svg>

                        </div>
                        About me
                    </li>
                    <li className={"cursor-pointer"  + (section==='experience' ? ' active' : '')} onClick={()=>scrollTo('experience')}>
                        <div className="icon">
                            <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">	
                                <polygon points="512 166.96 512 166.96 478.61 166.96 378.43 166.96 378.43 133.57 345.04 133.57 345.04 89.045 311.65 89.045 311.65 33.393 278.26 33.393 278.26 2e-3 233.74 2e-3 233.74 33.393 200.35 33.393 200.35 89.045 166.96 89.045 166.96 133.57 133.56 133.57 133.56 166.96 33.391 166.96 33.391 166.96 0 166.96 0 256 3e-3 256 33.391 256 33.391 289.39 66.782 289.39 66.782 478.61 66.782 489.74 66.782 512 155.82 512 155.82 489.74 155.82 478.61 211.48 478.61 211.48 445.22 211.48 445.22 300.52 445.22 300.52 445.22 300.52 478.61 356.17 478.61 356.17 512 445.22 512 445.22 489.74 445.22 478.61 445.22 289.39 478.61 289.39 478.61 256 512 256 512 166.96"/>
                            </svg>
                        </div>
                        Experience
                    </li>
                    <li className={"cursor-pointer"  + (section==='projects' ? ' active' : '')} onClick={()=>scrollTo('projects')}>
                        <div className="icon">
                            <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m478.61 111.31v-33.402h-178.09v66.783h111.3v33.391h-144.7v-100.17h-33.391v-33.391h-200.35v33.396h-33.391v155.83h33.391v122.43h33.386v111.32h445.22v-0.011h7e-3v-356.16h-33.391zm0 244.86h-33.391v-89.043h-33.391v-89.042h33.391v89.042h33.391v89.043z"/>
                            </svg>
                        </div>
                        Projects
                    </li>
                </ul>
            </div>
        </div>
        <button className="hamburger" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? 
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shapeRendering="crispEdges">
                    <path d="M0 0h16M0 1h16M0 2h16M0 6h16M0 7h16M0 8h16M0 12h16M0 13h16M0 14h16" />
                </svg>
                :
                <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="365.71 231.62 365.71 195.05 402.29 195.05 402.29 158.48 438.86 158.48 438.86 121.9 475.43 121.9 475.43 85.333 512 85.333 512 36.571 475.43 36.571 475.43 0 426.67 0 426.67 36.571 390.1 36.571 390.1 73.143 353.52 73.143 353.52 109.71 316.95 109.71 316.95 146.29 280.38 146.29 280.38 182.86 231.62 182.86 231.62 146.29 195.05 146.29 195.05 109.71 158.48 109.71 158.48 73.143 121.9 73.143 121.9 36.571 85.333 36.571 85.333 0 36.571 0 36.571 36.571 0 36.571 0 85.333 36.571 85.333 36.571 121.9 73.143 121.9 73.143 158.48 109.71 158.48 109.71 195.05 146.29 195.05 146.29 231.62 182.86 231.62 182.86 280.38 146.29 280.38 146.29 316.95 109.71 316.95 109.71 353.52 73.143 353.52 73.143 390.1 36.571 390.1 36.571 426.67 0 426.67 0 475.43 36.571 475.43 36.571 512 85.333 512 85.333 475.43 121.9 475.43 121.9 438.86 158.48 438.86 158.48 402.29 195.05 402.29 195.05 365.71 231.62 365.71 231.62 329.14 280.38 329.14 280.38 365.71 316.95 365.71 316.95 402.29 353.52 402.29 353.52 438.86 390.1 438.86 390.1 475.43 426.67 475.43 426.67 512 475.43 512 475.43 475.43 512 475.43 512 426.67 475.43 426.67 475.43 390.1 438.86 390.1 438.86 353.52 402.29 353.52 402.29 316.95 365.71 316.95 365.71 280.38 329.14 280.38 329.14 231.62"/>
                </svg>
            }
        
        </button>
        </>
    )
  }
  