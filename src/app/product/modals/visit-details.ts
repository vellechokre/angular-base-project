import { PatientDetail } from "./patient";
import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";

export class VisitDetails extends BaseObjectWithIdAndBranchId{
    patient: PatientDetail;
    category: string;
    subCategory: string;
    amount: number;
    discount:number;
    netAmount:number;
    printBill:boolean;
    sendBill:boolean;
}