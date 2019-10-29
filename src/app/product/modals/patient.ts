import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";

export class PatientDetail extends BaseObjectWithIdAndBranchId {
    firstname: string;
    lastname: string;
    number: string;
    emailId: string;
    gender: string;
    dob:string;
    preferredLanguage: string;
    weight:number;
    bloodGroup: string;
    sendWelcomeMessage:boolean;
    sendAddress:boolean;
    totalAmount: number;
    pendingAmount: number;
}