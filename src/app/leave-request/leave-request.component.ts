import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from '../model/leaverequest';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
  isLeaveRemaining: boolean = false;
  data:any;
  leave:any;
  anualLeaveCount: number = 0;
  sickLeaveCount: number = 0;
  unpaidlLeaveCount: number = 0;
  leaveRequests: LeaveRequest[] = [];
   leaveRequest: LeaveRequest = {
     id: 1,
     employeeName: "Shubham Shukla",
     startDate: new Date,
     endDate: new Date,
     type: "",
     status: "Pending",
     annualLeave: 0,
     sickleave: 0,
     unpaidLeave: 0
   };
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

  submitLeaveRequest() {
     const start = new Date( this.leaveRequest.startDate.toString());
     const end = new Date( this.leaveRequest.endDate.toString());
     start.setHours(0, 0, 0, 0);
     end.setHours(0, 0, 0, 0);
     if (start > end)
     {
     // this.isLeaveRemaining = false;
      alert('start date must be less then endare');
     }
  //   const diffInMs = Math.abs(end.getTime() - start.getTime());

  //   // Convert milliseconds to days
  //  const numberOfDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  //   switch(this.leaveRequest.type){
  //     case 'a':
  //       this.leaveRequest.annualLeave =numberOfDays;
  //        break;
  //      case 's':
  //       this.leaveRequest.sickleave = numberOfDays;
  //       break;
  //      case 'u':
  //       this.leaveRequest.unpaidLeave = numberOfDays;
  //       break;
  //       default:
  //         break;    
  //   }
    const leavreq =  window.localStorage.getItem("leavereq");
    let data: LeaveRequest[] = [] ;
    if(leavreq)
    {
       const leaves = JSON.parse(leavreq);
      if (leaves.length >= 1){
        data = leaves;
      }else{
       data.push(leaves);
      }
    }
    data.push(this.leaveRequest);
    window.localStorage.setItem("leavereq", JSON.stringify(data));
   this.getLeaveRequests();
  }

  checkRemainLeave(leaveType: string)
  {
    const emp =  window.localStorage.getItem("employee");
    const leave =  window.localStorage.getItem("leavereq");
    if(emp)
    {
      this.data = JSON.parse(emp);
    }
    if(leave)
      {
        this.leave = JSON.parse(leave);
        
       this.leave.map((x:any) =>{
        this.anualLeaveCount += x.annualLeave;
        this.unpaidlLeaveCount += x.unpaidLeave;
        this.sickLeaveCount += x.sickleave;
      });
      this.anualLeaveCount = this.data.annualLeave - this.anualLeaveCount;
      this.sickLeaveCount = this.data.sickleave - this.sickLeaveCount;
      this.unpaidlLeaveCount = this.data.unpaidLeave - this.unpaidlLeaveCount;
     switch(leaveType)
     {
      case 'a':
        this.isLeaveRemaining = this.anualLeaveCount > 0;
      break;  
      case 's':
        this.isLeaveRemaining = this.sickLeaveCount > 0;
      break;  
      case 'u':
        this.isLeaveRemaining = this.unpaidlLeaveCount > 0;
      break;  
     default:
       
      break;  
     }
  } else{
    this.isLeaveRemaining = true;
  }

  }
}
