import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../enviroment/environment';

const apiUrl = environment.baseApiUrl;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) {
  }

  postData<T>(data: T, url: string): Observable<any> {
    return this.http.post<any>(`${apiUrl}` + url, data)
      .pipe(map(response => {
          return response;
        }
      ));
  }


  uploadFiles(file1: File, file2: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    return this.http.post(apiUrl, formData, {responseType: 'blob'});
  }


  // postDataNewAppService<T>(data: T, url: string): Observable<any> {
  //   const fingerPrintId = window.localStorage.fp;
  //   if (!!App.clientNo) {
  //     const headers = new HttpHeaders({client_no: App.clientNo});
  //     return this.http.post<any>(`${newAppServiceURL}` + url, data,
  //       {
  //         headers
  //       })
  //       .pipe(map(response => {
  //           return response;
  //         }
  //       ));
  //   } else {
  //     const headers = new HttpHeaders();
  //     return this.http.post<any>(`${newAppServiceURL}` + url, data,
  //       {
  //         headers
  //       })
  //       .pipe(map(response => {
  //           return response;
  //         }
  //       ));
  //   }
  // }

  // downloadFileFromNewAppService<T>(data: T, url: string, fileName: string) {
  //   const headers = new HttpHeaders({client_no: App.clientNo});
  //   return this.http.post(`${newAppServiceURL}` + url, data, {
  //     headers,
  //     observe: 'response',
  //     responseType: 'blob',
  //   }).pipe(map(response => {
  //     if (navigator.appVersion.toString().indexOf('.NET') > 0) {
  //       /*
  //               window.navigator.msSaveBlob(response.body, fileName); //Fix for IE for file download
  //       */
  //     } else {
  //       const blob = new Blob([response.body], {type: response.body.type});
  //       let a = document.createElement('a');
  //       a.href = URL.createObjectURL(blob);
  //       a.download = fileName;
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //       return response;
  //     }
  //     return response;
  //   }));
  // }

  // downloadFileFromUrl(url: string): void {
  //   window.open(url, '_blank');
  // }

  // openHelpDocument(page: string): void {
  //   window.open('/help-doc?show=' + page, '_blank');
  // }

}
