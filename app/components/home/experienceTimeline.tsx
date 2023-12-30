export function ExperienceTimeline() {
    const entries = {
        "gmod": {
            "date": "12.2017",
            "title": "Gmodstore",
            "description": "In December 2017, I started making paid mods and scripts for Garry's Mod. While doing that, I got better at complex programming and the basics of 3D graphics. To this day, my solutions remain in active use by numerous server owners.",
        },
        "appworks": {
            "date": "10.2021",
            "title": "AppWorks",
            "description": "During my time at AppWorks, I gained valuable knowledge and honed my web development skills. Over two years, I actively participated in numerous projects, often as the lead developer.",
        },
    }

    return (
        <>
            <div className="hidden md:grid grid-cols-12">
                <div className="col-start-1 col-end-12 md:col-end-7"></div>
                <div className="col-start-1 col-end-1 md:col-start-7 md:col-end-12 border-dashed border-l-2 border-primary relative">
                    <div className="bg-neutral-950 w-fit p-1 border-l-2 border-primary -translate-x-[2px]">{entries['appworks'].date}</div>
                    <div className="p-3">
                        <div className="text-2xl">{entries['appworks'].title}</div>
                        <div className="text-muted text-justify">
                            {entries['appworks'].description}
                        </div>
                    </div>

                    <div className="pulse-waves absolute bottom-0 left-0 w-3 h-3 -translate-x-1.5 translate-y-2 bg-primary"></div>
                </div>
                <div className="col-start-1 col-end-2 border-dashed border-t-2 border-primary"></div>
                <div className="col-start-2 col-end-7 border-solid border-t-2 border-primary relative">
                    <div className="border-l-2 border-primary border-dashed">
                        <div className="p-3">
                            <div className="text-2xl">{entries['gmod'].title}</div>
                            <div className="text-muted text-justify">
                                {entries['gmod'].description}
                            </div>
                        </div>
                        <div className="bg-neutral-950 w-fit p-1 border-l-2 border-primary -translate-x-[2px]">{entries['gmod'].date}</div>
                    </div>
                    <div className="pulse-waves absolute top-0 left-0 w-3 h-3 -translate-x-1.5 -translate-y-2 bg-primary"></div>
                </div>
                <div className="col-start-7 col-end-13 border-solid border-t-2 border-primary relative">

                    <svg className="w-4 h-4 fill-primary absolute top-0 right-0 translate-x-2 -translate-y-2" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(169.33 -118.75)">
                            <path d="m-166.16 119.28v11.641h1.0588v-1.0588h1.0583v-1.0584h1.0588v-1.0578h1.0578v-1e-3h5.3e-4v-1.0563h-5.3e-4v-1e-3h5.3e-4v1e-3h1.0588v-1.0588h-1e-3v-5.3e-4h1e-3v5.3e-4h1.0563v-1.0583c-0.35256 5.2e-4 -0.70428-5.3e-4 -1.0563-5.3e-4v-1.0583h-1.0588v-1.0583h-1.0584v-1.0589h-1.0588v-1.0583h-1.0583v-1.0568z" solid-color="rgb(0,0,0)" font-feature-settings="normal" font-variant-alternates="normal" font-variant-caps="normal" font-variant-ligatures="normal" font-variant-numeric="normal" font-variant-position="normal" mix-blend-mode="normal" paintOrder="normal" shape-padding="0" text-decoration-color="rgb(0,0,0)" text-decoration-line="none" text-decoration-style="solid" text-indent="0" text-orientation="mixed" text-transform="none" white-space="normal" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="grid md:hidden grid-cols-12 mt-4">
                <div className="col-span-2 h-16 border-r-2 border-dashed border-primary">
                </div>
                <div className="col-span-10">
                </div>
                <div className="col-span-2 border-r-2 border-solid border-primary overflow-hidden">
                    <div className="bg-neutral-950 text-center h-8 flex justify-center items-center">
                        {entries['gmod'].date}
                    </div>
                </div>
                <div className="col-span-10">
                    <div className="text-2xl flex items-center">
                        <div className='w-2 h-4 bg-primary pulse-waves mr-2'></div>
                        {entries['gmod'].title}
                    </div>
                    <div className="pl-4 text-muted text-justify">
                        {entries['gmod'].description}
                    </div>
                </div>
                <div className="col-span-2 h-16 border-r-2 border-solid border-primary">
                </div>
                <div className="col-span-10">
                    <div className="text-muted p-1 bg-neutral-950 mt-4 w-fit">+4 years...</div>
                </div>
                <div className="col-span-2 border-r-2 border-solid border-primary overflow-hidden">
                    <div className="bg-neutral-950 text-center h-8 flex justify-center items-center">
                        {entries['appworks'].date}
                    </div>
                </div>
                <div className="col-span-10">
                    <div className="text-2xl flex items-center">
                        <div className='w-2 h-4 bg-primary pulse-waves mr-2'></div>
                            {entries['appworks'].title}
                    </div>
                    <div className="pl-4 text-muted text-justify">
                        {entries['appworks'].description}
                    </div>
                </div>
                <div className="col-span-2 h-16 border-r-2 border-solid border-primary relative">
                    <svg className="w-4 h-4 fill-primary absolute bottom-0 right-0 rotate-90 translate-x-2 translate-y-2" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(169.33 -118.75)">
                            <path d="m-166.16 119.28v11.641h1.0588v-1.0588h1.0583v-1.0584h1.0588v-1.0578h1.0578v-1e-3h5.3e-4v-1.0563h-5.3e-4v-1e-3h5.3e-4v1e-3h1.0588v-1.0588h-1e-3v-5.3e-4h1e-3v5.3e-4h1.0563v-1.0583c-0.35256 5.2e-4 -0.70428-5.3e-4 -1.0563-5.3e-4v-1.0583h-1.0588v-1.0583h-1.0584v-1.0589h-1.0588v-1.0583h-1.0583v-1.0568z" solid-color="rgb(0,0,0)" font-feature-settings="normal" font-variant-alternates="normal" font-variant-caps="normal" font-variant-ligatures="normal" font-variant-numeric="normal" font-variant-position="normal" mix-blend-mode="normal" paintOrder="normal" shape-padding="0" text-decoration-color="rgb(0,0,0)" text-decoration-line="none" text-decoration-style="solid" text-indent="0" text-orientation="mixed" text-transform="none" white-space="normal" />
                        </g>
                    </svg>
                </div>
                <div className="col-span-10">
                </div>
            </div>
        </>
    )
}