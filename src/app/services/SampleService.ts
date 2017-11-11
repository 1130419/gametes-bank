import { Sample} from './../models/sample/Sample';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SampleService {
   constructor(private http: Http) {
   }

   getSamples(): Sample[] {
      return [
          new Sample('0001', 'Para analisar', '101231283'),
          new Sample('0123', 'Para validar', '312012932'),
          new Sample('0127', 'Para validar', '121312312'),
          new Sample('0129', 'Para analisar', '032382838'),
          new Sample('0953', 'Para analisar', '192383838')
      ];
      /*this.http.get("https://jsonplaceholder.typicode.com/users")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
   }
}
