import { BaseObjectWithIdAndBranchId } from "./baseobjectwithidandbranchid";
import { Address } from "./address";

export class Clinic extends BaseObjectWithIdAndBranchId {
    code: string;
    name: string;
    logoUrl: string;
    hasBranch: boolean;
    address: Address;
}