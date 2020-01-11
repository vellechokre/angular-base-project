import { PatientDetail } from "./patient";
import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";

export class VisitDetails extends BaseObjectWithIdAndBranchId{
    patient: PatientDetail;
    category: string;
    subcategory: string;
    amount: number;
    discount:number;
    netAmount:number;
    printBill:boolean;
    sendBill:boolean;
}