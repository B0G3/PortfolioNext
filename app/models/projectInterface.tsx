import ProjectWindowInterface from "./projectWindowInterface";


export default interface ProjectInterface{
    onClick?: Function,
    title: string,
    stack: string,
    subtitle: string,
    icons?: {
        live?: string;
    }
    windows?: Array<ProjectWindowInterface>
}