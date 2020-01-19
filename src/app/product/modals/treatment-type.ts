import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";
import { Speciality } from "./speciality";

export class TreatmentType extends BaseObjectWithIdAndBranchId {
    description: string;
    speciality: Speciality
}