import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from '../model/leaverequest';

@Component({
  selector: 'app-leave-approve-reject',
  templateUrl: './leave-approve-reject.component.html',
  styleUrls: ['./leave-approve-reject.component.css']
})
export class LeaveApproveRejectComponent implements OnInit {

  
  // Define an array of leaveRequest
  leaveRequests: LeaveRequest[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getLeaveRequests();
  }
  getLeaveRequests(): void {
    const leaveRequest = window.localStorage.getItem("leavereq");
    if (leaveRequest) {
     const data: [] = JSON.parse(leaveRequest);
    if( data.length >= 1)
    {
      this.leaveRequests=  JSON.parse(leaveRequest);
    }else{
      this.leaveRequests.push(JSON.parse(leaveRequest));
    }
      
    }
  }

  updateLeaveStatus(leaveType: string, status: string, index:number): void {
    const emp =  window.localStorage.getItem("employee");
    const leavreq =  window.localStorage.getItem("leavereq");
    if(leavreq)
    {
      const data = JSON.parse(leavreq);
    //   const start = new Date(data.startDate.toString());
    //   const end = new Date(data.endDate.toString());
    //   const diffInMs = Math.abs(end.getTime() - start.getTime());

    //   // Convert milliseconds to days
    //  const numberOfDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    const start = new Date( data[index].startDate.toString());
    const end = new Date( data[index].endDate.toString());
    const diffInMs = Math.abs(end.getTime() - start.getTime());

    // Convert milliseconds to days
   const numberOfDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
   numberOfDays === 0 ? 1 : numberOfDays
  
  
    data[index].status = status;
      if (status ===  'Approved')
        {
          switch(leaveType){
            case 'a':
              data[index].annualLeave =numberOfDays;
               break;
             case 's':
              data[index].sickleave = numberOfDays;
              break;
             case 'u':
              data[index].unpaidLeave = numberOfDays;
              break;
              default:
                break;    
          }
    }
    else{
       if (this.leaveRequests[index].status === 'Approved')
       {
        switch(leaveType){
          case 'a':
            data[index].annualLeave = 0;
             break;
           case 's':
            data[index].sickleave = 0;
            break;
           case 'u':
            data[index].unpaidLeave = 0
            break;
            default:
              break;    
        }
       }
    }

    window.localStorage.removeItem("leavereq");
    window.localStorage.setItem("leavereq",JSON.stringify(data));
    this.getLeaveRequests();
    }
  }
}
