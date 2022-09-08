import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public status = new Subject<any>();
  constructor() { }

  setStatus(data: any){
    this.status.next(data);
  }
}
