import ProjectWindowInterface from "@/app/models/projectWindowInterface";
import Draggable from "react-draggable";

export default function ProjectWindow({
    title,
    content
}: ProjectWindowInterface){



    return (
        <Draggable>
            <div className="w-36 h-36 bg-red-500 absolute top-1/2 left-1/2">
                <div>{title}</div>
                <div>{content}</div>
            </div>
        </Draggable>
    )
}