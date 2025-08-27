import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Shared {
  private dataSource = new BehaviorSubject<any>(null);
  data$ = this.dataSource.asObservable;

  sendData(data: any) {
    this.dataSource.next(data);
  }
}
