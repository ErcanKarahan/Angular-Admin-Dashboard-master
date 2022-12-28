import {IRole} from '@shared/model/role.model';
import {ITestCenter} from '@shared/model/test-center.model';

export interface IUser {
    id?: string;
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
    roles?: IRole[];
    active?: boolean;
    lastUpdateTime?: Date;
    version?: number;
    createdDate?: Date;
    activated?: boolean;
    activationKey?: string;
    activationExpires?: Date;
    resetKey?: string;
    resetExpires?: Date;
    testCenters?: ITestCenter[];
}


export class User implements IUser {
    constructor(public id?: string,
                public name?: string,
                public surname?: string,
                public email?: string,
                public password?: string,
                public roles?: IRole[],
                public active?: boolean,
                public lastUpdateTime?: Date,
                public version?: number,
                public createdDate?: Date,
                public activated?: boolean,
                public activationKey?: string,
                public activationExpires?: Date,
                public resetKey?: string,
                public resetExpires?: Date,
                public testCenters?: ITestCenter[]
    ) {
    }

}
