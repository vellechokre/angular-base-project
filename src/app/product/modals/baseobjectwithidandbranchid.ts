export class BaseObjectWithIdAndBranchId {
    id: number;
    branchId: number = 1;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
    isActive: boolean;
}