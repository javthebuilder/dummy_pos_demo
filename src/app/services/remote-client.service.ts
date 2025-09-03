import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { MyEventsService } from './my-events.service';
import { TranslateService } from '@ngx-translate/core';
import { Country } from '../models/country.models';

@Injectable({
  providedIn: 'root'
})
export class RemoteClientService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>('./assets/json/countries.json').pipe(
      tap(data => {
        let indiaIndex = -1;
        // if (data) {
        //   for (let i = 0; i < data.length; i++) {
        //     if (data[i].name == "India") {
        //       indiaIndex = i;
        //       break;
        //     }
        //   }
        // }
        if (indiaIndex != -1) data.unshift(data.splice(indiaIndex, 1)[0]);
      })
    );
  }

}


@Injectable()
export class RemoteInterceptor implements HttpInterceptor {
    constructor(private myEventsService: MyEventsService) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(error => this.handleError(error)));
  }
  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status == 401) {
      //this.translateService.get(["logged_out", "logged_out_msg"]).subscribe(values => this.toastService.error(values["logged_out_msg"], values["logged_out"]));
      this.myEventsService.setDoData("do:logout");
    }
    return throwError(() => error);
  }
}
