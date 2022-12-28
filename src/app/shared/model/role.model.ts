export interface IRole {
    id?: string;
    name?: string;
}

export class Role implements IRole {
    constructor(public id?: string,
                public name?: string) {
    }
}
