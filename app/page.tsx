import Portrait from './components/home/portrait';
import { ExperienceTimeline } from './components/home/experienceTimeline';
import ProjectShowcase from './components/home/projects/projectShowcase';
import TypewriterText from './components/typewriterText';

export default function Home() {

  return (
    <>
    <section id="home" className="flex">
      <div className="mx-auto container flex items-center justify-center mt-16 md:mt-0">
        <div className="flex overflow-hidden flex-col md:flex-row md:items-normal items-center">
          <Portrait></Portrait>
          <div className="flex flex-col content-center md:text-left text-center uppercase">
            <div className='w-fit md:mx-0 mx-auto'>
              <h1 className="text-4xl mt-4 md:mt-0">Marcin Kostrzemski</h1>
              <h2 className="text-2xl m-auto md:m-0 w-full text-primary bg-neutral-950 p-1">       
                <TypewriterText
                  options={{
                    strings: ['Software developer', 'An IT enthusiast'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </div>
            <p className="text-muted max-w-md mt-0 md:mt-2 p-4 md:p-0">Passionate Full-Stack Developer | Bridging Creativity and Code</p>
            <ul className="flex md:mt-2 justify-center md:justify-normal">
              <li>
                <a href="https://www.linkedin.com/in/marcin-kostrzemski/" target="_blank">
                  <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11.13" y="166.96" width="111.3" height="345.04"/>
                    <polygon points="100.17 33.391 100.17 0 33.391 0 33.391 33.391 0 33.391 0 100.17 33.391 100.17 33.391 133.56 100.17 133.56 100.17 100.17 133.56 100.17 133.56 33.391"/>
                    <polygon points="478.61 233.74 478.61 200.35 445.22 200.35 445.22 166.96 289.39 166.96 289.39 200.35 256 200.35 256 166.96 155.83 166.96 155.83 512 267.13 512 267.13 300.52 300.52 300.52 300.52 267.13 367.3 267.13 367.3 300.52 400.7 300.52 400.7 512 512 512 512 233.74"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/marcin.kostrzemski" target="_blank">
                  <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="411.83 122.44 411.83 0 233.74 0 233.74 33.391 200.35 33.391 200.35 66.783 166.96 66.783 166.96 166.96 100.17 166.96 100.17 289.39 166.96 289.39 166.96 512 300.52 512 300.52 289.39 367.3 289.39 367.3 166.96 300.52 166.96 300.52 122.44"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:marcin.kostrzemski@gmail.com">
                  <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="0 61.217 0 116.87 55.652 116.87 55.652 150.26 100.17 150.26 100.17 183.65 144.7 183.65 144.7 217.04 189.22 217.04 189.22 250.44 233.74 250.44 233.74 283.83 278.26 283.83 278.26 250.44 322.78 250.44 322.78 217.04 367.3 217.04 367.3 183.65 411.83 183.65 411.83 150.26 456.35 150.26 456.35 116.87 512 116.87 512 61.217"/>
                      <polygon points="456.35 150.26 456.35 183.65 411.83 183.65 411.83 217.04 367.3 217.04 367.3 250.44 322.78 250.44 322.78 283.83 278.26 283.83 278.26 317.22 233.74 317.22 233.74 283.83 189.22 283.83 189.22 250.44 144.7 250.44 144.7 217.04 100.17 217.04 100.17 183.65 55.652 183.65 55.652 150.26 0 150.26 0 450.78 512 450.78 512 150.26"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="about" className="flex">
      <div className="mx-auto container flex items-center justify-center px-8">
        <div className="w-full">
          <span className="bg-neutral-950 p-1 w-fit text-2xl block">About</span>
          <h2 className="text-4xl mt-2">About me</h2>
          <div className="grid gap-0 sm:gap-8 grid-cols-12">
            <div className="col-span-12 sm:col-span-7 lg:col-span-9"> 
              <p className="text-muted text-justify mt-2">
                {`Hey! My name is Marcin and I'm from Poland, however language is not a barrier for me. I'm a huge computer science enthusiast. When it comes to programming, my first attempts to enter the market began in late 2017. Back in the day, I used to create and monetize mods for a popular game called Garry's Mod. 
                The results were great; I had enough money to continue my studies without working a 9-5 job. Knowing it wouldn't last forever, I eventually started to shift away from the "gamedev" topic. The web development industry is something that has caught my eye. 
                In October 2021, I landed my first job as a software developer.`}
              </p>
              <p className="text-muted text-justify mt-4">
                {`I consider myself a full-stack developer, finding enjoyment in both the front and back end of applications. Programming is not just a profession but a hobby for me. I regularly work on side projects to further explore my interests. I see myself as versatile, always eager to learn and adapt to new technologies.
                Recently, I've been diving deep into React, Typescript, and Three.js.`}
              </p>
            </div>
            <div className="col-span-12 sm:col-span-5 lg:col-span-3 text-2xl overflow-clip mt-2 lg:mt-0">
                <ul>
                  <li className="flex justify-between">
                    <div className="">Name:</div>
                    <div className="text-muted">Marcin</div>
                  </li>
                  <li className="flex justify-between">
                    <div className="">Age:</div>
                    <div className="text-muted">24</div>
                  </li>
                  <li className="flex justify-between">
                    <div className="">Nationality:</div>
                    <div className="text-muted">Poland</div>
                  </li>
                  <li className="flex justify-between">
                    <div className="">Degree:</div>
                    <div className="text-muted">Engineer</div>
                  </li>
                  <li className="flex justify-between">
                    <div className="">Phone:</div>
                    <div className="text-muted">+48 721139254</div>
                  </li>
                  {/* <li className="flex justify-between">
                    <div className="">Open to work:</div>
                    <div className="text-muted">Yup!</div>
                  </li> */}
                  <li>
                    <a href="/cv.pdf" download="cv" className="group bg-neutral-950 text-primary w-full mt-2 uppercase hover:bg-primary hover:text-neutral-950 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2 fill-primary group-hover:fill-neutral-950" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="m512 66.785h-33.392v-33.394h-33.391v-33.391h-445.21v512h512v-445.22h-2e-3zm-133.56 411.82h-244.87v-244.87h244.87v244.87zm1e-3 -378.43h-244.87v-66.782h244.87v66.782z"/>
                      </svg>
                      Download CV</a>
                  </li>
                </ul>
            </div>
          </div>
          <hr className="my-8 border-neutral-700"></hr>
          <div className="grid grid-cols-12 gap-0 sm:gap-8">
            <div className="col-span-12 sm:col-span-8">
              <div className="bg-neutral-950 p-1 w-fit text-2xl">Knowledge</div>
              <ul className="mt-2">
                <li>
                  <svg className="w-3 h-3 -mt-1 fill-primary inline mr-2" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(169.33 -118.75)">
                    <path d="m-166.16 119.28v11.641h1.0588v-1.0588h1.0583v-1.0584h1.0588v-1.0578h1.0578v-1e-3h5.3e-4v-1.0563h-5.3e-4v-1e-3h5.3e-4v1e-3h1.0588v-1.0588h-1e-3v-5.3e-4h1e-3v5.3e-4h1.0563v-1.0583c-0.35256 5.2e-4 -0.70428-5.3e-4 -1.0563-5.3e-4v-1.0583h-1.0588v-1.0583h-1.0584v-1.0589h-1.0588v-1.0583h-1.0583v-1.0568z" solid-color="rgb(0,0,0)" font-feature-settings="normal" font-variant-alternates="normal" font-variant-caps="normal" font-variant-ligatures="normal" font-variant-numeric="normal" font-variant-position="normal" mix-blend-mode="normal" paintOrder="normal" shape-padding="0" text-decoration-color="rgb(0,0,0)" text-decoration-line="none" text-decoration-style="solid" text-indent="0" text-orientation="mixed" text-transform="none" white-space="normal"/>
                    </g>
                  </svg>
                  <span>FRONTEND: </span>
                  <span className="text-muted">JS, Vue, JQuery, React, Bootstrap, Tailwind, Three.js, SAAS, Vite, Webpack</span>
                </li>
                <li>
                  <svg className="w-3 h-3 -mt-1 fill-primary inline mr-2" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(169.33 -118.75)">
                    <path d="m-166.16 119.28v11.641h1.0588v-1.0588h1.0583v-1.0584h1.0588v-1.0578h1.0578v-1e-3h5.3e-4v-1.0563h-5.3e-4v-1e-3h5.3e-4v1e-3h1.0588v-1.0588h-1e-3v-5.3e-4h1e-3v5.3e-4h1.0563v-1.0583c-0.35256 5.2e-4 -0.70428-5.3e-4 -1.0563-5.3e-4v-1.0583h-1.0588v-1.0583h-1.0584v-1.0589h-1.0588v-1.0583h-1.0583v-1.0568z" solid-color="rgb(0,0,0)" font-feature-settings="normal" font-variant-alternates="normal" font-variant-caps="normal" font-variant-ligatures="normal" font-variant-numeric="normal" font-variant-position="normal" mix-blend-mode="normal" paintOrder="normal" shape-padding="0" text-decoration-color="rgb(0,0,0)" text-decoration-line="none" text-decoration-style="solid" text-indent="0" text-orientation="mixed" text-transform="none" white-space="normal"/>
                    </g>
                  </svg>
                  <span>BACKEND: </span>
                  <span className="text-muted">PHP, JS, Laravel, NextJS, NodeJS, MySQL, MongoDB </span>
                </li>
                <li>
                  <svg className="w-3 h-3 -mt-1 fill-primary inline mr-2" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(169.33 -118.75)">
                    <path d="m-166.16 119.28v11.641h1.0588v-1.0588h1.0583v-1.0584h1.0588v-1.0578h1.0578v-1e-3h5.3e-4v-1.0563h-5.3e-4v-1e-3h5.3e-4v1e-3h1.0588v-1.0588h-1e-3v-5.3e-4h1e-3v5.3e-4h1.0563v-1.0583c-0.35256 5.2e-4 -0.70428-5.3e-4 -1.0563-5.3e-4v-1.0583h-1.0588v-1.0583h-1.0584v-1.0589h-1.0588v-1.0583h-1.0583v-1.0568z" solid-color="rgb(0,0,0)" font-feature-settings="normal" font-variant-alternates="normal" font-variant-caps="normal" font-variant-ligatures="normal" font-variant-numeric="normal" font-variant-position="normal" mix-blend-mode="normal" paintOrder="normal" shape-padding="0" text-decoration-color="rgb(0,0,0)" text-decoration-line="none" text-decoration-style="solid" text-indent="0" text-orientation="mixed" text-transform="none" white-space="normal"/>
                    </g>
                  </svg>
                  <span>OTHER: </span>
                  <span className="text-muted">Rest, Git, Lua, 3D</span>
                </li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-4 mt-2 sm:mt-0">
              <div className="bg-neutral-950 p-1 w-fit text-2xl">Interests</div>
              <ul className="mt-2">
                <li>
                  <svg className="w-3 h-3 -mt-1 fill-primary inline mr-2" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(169.33 -118.75)">
                    <path d="m-166.16 119.28v11.641h1.0588v-1.0588h1.0583v-1.0584h1.0588v-1.0578h1.0578v-1e-3h5.3e-4v-1.0563h-5.3e-4v-1e-3h5.3e-4v1e-3h1.0588v-1.0588h-1e-3v-5.3e-4h1e-3v5.3e-4h1.0563v-1.0583c-0.35256 5.2e-4 -0.70428-5.3e-4 -1.0563-5.3e-4v-1.0583h-1.0588v-1.0583h-1.0584v-1.0589h-1.0588v-1.0583h-1.0583v-1.0568z" solid-color="rgb(0,0,0)" font-feature-settings="normal" font-variant-alternates="normal" font-variant-caps="normal" font-variant-ligatures="normal" font-variant-numeric="normal" font-variant-position="normal" mix-blend-mode="normal" paintOrder="normal" shape-padding="0" text-decoration-color="rgb(0,0,0)" text-decoration-line="none" text-decoration-style="solid" text-indent="0" text-orientation="mixed" text-transform="none" white-space="normal"/>
                    </g>
                  </svg>
                  <span className="text-muted">Programming</span>
                </li>
                <li>
                  <svg className="w-3 h-3 -mt-1 fill-primary inline mr-2" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(169.33 -118.75)">
                    <path d="m-166.16 119.28v11.641h1.0588v-1.0588h1.0583v-1.0584h1.0588v-1.0578h1.0578v-1e-3h5.3e-4v-1.0563h-5.3e-4v-1e-3h5.3e-4v1e-3h1.0588v-1.0588h-1e-3v-5.3e-4h1e-3v5.3e-4h1.0563v-1.0583c-0.35256 5.2e-4 -0.70428-5.3e-4 -1.0563-5.3e-4v-1.0583h-1.0588v-1.0583h-1.0584v-1.0589h-1.0588v-1.0583h-1.0583v-1.0568z" solid-color="rgb(0,0,0)" font-feature-settings="normal" font-variant-alternates="normal" font-variant-caps="normal" font-variant-ligatures="normal" font-variant-numeric="normal" font-variant-position="normal" mix-blend-mode="normal" paintOrder="normal" shape-padding="0" text-decoration-color="rgb(0,0,0)" text-decoration-line="none" text-decoration-style="solid" text-indent="0" text-orientation="mixed" text-transform="none" white-space="normal"/>
                    </g>
                  </svg>
                  <span className="text-muted">Game modding</span>
                </li>
                <li>
                  <svg className="w-3 h-3 -mt-1 fill-primary inline mr-2" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(169.33 -118.75)">
                    <path d="m-166.16 119.28v11.641h1.0588v-1.0588h1.0583v-1.0584h1.0588v-1.0578h1.0578v-1e-3h5.3e-4v-1.0563h-5.3e-4v-1e-3h5.3e-4v1e-3h1.0588v-1.0588h-1e-3v-5.3e-4h1e-3v5.3e-4h1.0563v-1.0583c-0.35256 5.2e-4 -0.70428-5.3e-4 -1.0563-5.3e-4v-1.0583h-1.0588v-1.0583h-1.0584v-1.0589h-1.0588v-1.0583h-1.0583v-1.0568z" solid-color="rgb(0,0,0)" font-feature-settings="normal" font-variant-alternates="normal" font-variant-caps="normal" font-variant-ligatures="normal" font-variant-numeric="normal" font-variant-position="normal" mix-blend-mode="normal" paintOrder="normal" shape-padding="0" text-decoration-color="rgb(0,0,0)" text-decoration-line="none" text-decoration-style="solid" text-indent="0" text-orientation="mixed" text-transform="none" white-space="normal"/>
                    </g>
                  </svg>
                  <span className="text-muted">Gym</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="experience" className="flex">
    <div className="mx-auto container flex items-center justify-center px-8">
        <div className="w-full">
          <span className="bg-neutral-950 p-1 w-fit text-2xl block">Experience</span>
          <h2 className="text-4xl mt-2">My experience</h2>
          <ExperienceTimeline></ExperienceTimeline>
        </div>
      </div>
    </section>
    <section id="projects" className="flex">
    <div className="mx-auto container flex items-center justify-center px-8 pt-16">
        <div className="w-full">
          <span className="bg-neutral-950 p-1 w-fit text-2xl">Projects</span>
          <h2 className="text-4xl mt-2">My projects</h2>
          <div className="mt-4">
            <ProjectShowcase/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
