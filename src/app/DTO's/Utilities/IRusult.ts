import { ResultStatus } from "../Enums/ResultStatus";


export interface IResult {
    status: ResultStatus;
    message: string;
    exception: string;
}