import { ReactElement } from "react";


export default interface ProjectInterface{
    title: string,
    stack: string,
    featured: boolean,
    other?: boolean,
    short_description?: string,
    description: string,
    icons?: {
        live?: string;
        repo?: string;
    }
    media?: Array<string>
}