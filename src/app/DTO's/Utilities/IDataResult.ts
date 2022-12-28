import { IResult } from "./IRusult";


export interface IDataResult<T> extends IResult {
    data: T;
}