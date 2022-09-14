import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerServiceService } from './spinner-service.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay" *ngIf="isLoading$ | async">
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent  {
  isLoading$ = this.spinerSvc.isLoading$;
  constructor(private spinerSvc:SpinnerServiceService) { }


}
