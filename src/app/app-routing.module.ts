import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveApproveRejectComponent } from './leave-approve-reject/leave-approve-reject.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';

const routes: Routes = [
  {
    path: '\leave-request', component: LeaveRequestComponent
  },
  {
    path: '\leave-balance', component: LeaveBalanceComponent
  },
  {
    path: '\leave-approve', component: LeaveApproveRejectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
