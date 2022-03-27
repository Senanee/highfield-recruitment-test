import { formatDateFormData } from "src/app/utilities/generic-list/utils";

export interface userDTO {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: Date;
    favouriteColour: string;
    //agePlusTwentyDTO: AgePlusTwentyDTO
    originalAge: number;
    agePlusTwenty: number;
}
export interface AgePlusTwentyDTO {
    userId: string;
    originalAge: number;
    agePlusTwenty: number;
}

export interface TopColoursDTO {
    colour: string;
    count: number;
}

export interface ResponseDTO {
    users: userDTO[];
    ages: AgePlusTwentyDTO[];
    topColours: TopColoursDTO[];
}

export interface userDisplayDTO {
    id: string;
    name: string;
    email: string;
    dob: String;
    favouriteColour: string;
    originalAge: number;
    agePlusTwenty: number;
}
