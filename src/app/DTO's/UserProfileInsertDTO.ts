import { Gender } from "./Enums/gender";


export interface UserProfileInsertDTO {
    firstName: string | null;
    lastName: string | null;
    gender: Gender;
    address: string | null;
    mobilePhone: string | null;
    workPhone: string | null;
    homePhone: string | null;
}