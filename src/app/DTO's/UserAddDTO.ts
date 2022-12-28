import { UserInsertDTO } from "./userInsertDTO";
import { UserProfileInsertDTO } from "./userProfileInsertDTO";

export interface UserAddDTO {
    userInsertDTO: UserInsertDTO;
    userProfileInsertDTO: UserProfileInsertDTO;
}