import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveApproveRejectComponent } from './leave-approve-reject/leave-approve-reject.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeaveRequestComponent,
    LeaveApproveRejectComponent,
    LeaveBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
