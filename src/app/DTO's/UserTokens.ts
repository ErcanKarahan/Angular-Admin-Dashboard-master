import { UserRole } from "./Enums/UserRolse";


export interface UserTokens {
    token: string;
    role: UserRole;
    validaty: string;
    refreshToken: string;
    id: number;
    emailId: string;
    guidId: string;
    expiredTime: string;
}