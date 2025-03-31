export interface LeaveRequest {
    id: number;
    employeeName: string;
    startDate: Date;
    endDate: Date;
    type: string;
    status: string;
    annualLeave:number ;
    sickleave:number;
    unpaidLeave:number;
  }
  