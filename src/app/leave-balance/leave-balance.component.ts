import { Component, OnInit } from '@angular/core';
import { LeaveBalance } from '../model/leavebalance';
import { LeaveRequest } from '../model/leaverequest';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.css']
})
export class LeaveBalanceComponent implements OnInit {
  leaveBalances: LeaveBalance[] = [];
  annualLeave: number = 0;
  sickLeave: number = 0;
  unpaidLeave: number = 0;
  annualLeaveTotal: number = 0;
  sickLeaveTotal: number = 0;
  unpaidLeaveTotal: number = 0
  data:any;
  constructor() { }

  ngOnInit(): void {
    this.getLeaveBalances();
  }
  getLeaveBalances(): void {
    debugger;
    const emp =  window.localStorage.getItem("employee");
    const leave =  window.localStorage.getItem("leavereq");
    if(emp)
    {
      this.data = JSON.parse(emp);
    }
    if (leave)
    {
      const leavereq = JSON.parse(leave);
      leavereq.map((x:any) =>{
        this.annualLeave += x.annualLeave;
        this.unpaidLeave += x.unpaidLeave;
        this.sickLeave += x.sickleave;
      });
      this.annualLeave = this.data.annualLeave - this.annualLeave;
      this.sickLeave = this.data.sickleave - this.sickLeave;
      this.unpaidLeave = this.data.unpaidLeave - this.unpaidLeave;
    }
  }
}
