import { Technology } from "./technology.interface";

export interface Skill{
    id: number;
    name : string;
    technologies : Technology[];
}