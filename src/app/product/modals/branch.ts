import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";
import { Address } from "./address";
import { Clinic } from "./clinic";

export class Branch extends BaseObjectWithIdAndBranchId {
    code: string;
    name: string;
    address: Address;
    clinic: Clinic;
}