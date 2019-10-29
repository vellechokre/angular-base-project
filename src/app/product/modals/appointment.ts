import { PatientDetail } from "./patient";
import { ConsultantDetails } from "./consultant";
import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";

export class AppointmentDetails extends BaseObjectWithIdAndBranchId {
    patient: PatientDetail;
    consultant: ConsultantDetails;
    appointmentDate:string;
    appointmentStartDate:Date = new Date();
    appointmentEndDate:Date = new Date();
    note:string;
    
}