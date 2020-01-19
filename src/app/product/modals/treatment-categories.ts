import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";
import { TreatmentType } from "./treatment-type";

export class TreatmentCategories extends BaseObjectWithIdAndBranchId {
    description: string;
    treatmentType: TreatmentType;
    charge: number;
}