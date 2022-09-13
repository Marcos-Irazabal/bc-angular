import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {
  isLoading$= new Subject<boolean>();

  constructor() { }

  show(){
    return this.isLoading$.next(true);
  }
  
  hide(){
    return this.isLoading$.next(false);
  }
}
