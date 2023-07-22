import { Technology } from "./technology.interface";

export interface Project{
    id : number;
    title : string;
    description : string;
    technologies : Technology[];
}