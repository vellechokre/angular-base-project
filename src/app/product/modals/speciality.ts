import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";
import { Branch } from "./branch";

export class Speciality extends BaseObjectWithIdAndBranchId {
    name: string;
    branchs: Branch[] = [];
    description: string;
}