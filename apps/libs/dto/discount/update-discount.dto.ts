export class UpdateDiscountDto {
    name?: string;
    status?: number;
    userId?: string | null;
    validationUserId?: string | null;
    validationDate?: Date | null;
    expire?: Date;
    discount?: number;
    type?: number;
    referenceId?: string | null;
    minAge?: number | null;
    maxAge?: number | null;
    neighborhood?: number | null;
    gender?: number | null;
  }
  