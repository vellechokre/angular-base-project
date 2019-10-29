import { PatientDetail } from "./patient";
import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";

export class Address extends BaseObjectWithIdAndBranchId {
    patient: PatientDetail;
    country:string;
    state: string;
    city: string;
    street: string;
    pincode:string;
}