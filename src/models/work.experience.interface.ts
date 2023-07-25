
import { Company } from "./company.interface";
import { Role } from "./role.interface";

export interface WorkExperience{
    role : Role;
    company : Company;
    description : string;
    start_date : Date;
    end_date : Date;
}