import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // private apiUrl = 'http://localhost:8575/upload';
  private apiUrl = 'http://localhost:8575/commonAPI/api/changeFieldName';

  constructor(private http: HttpClient) {}

  uploadFiles(file1: File, file2: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    return this.http.post(this.apiUrl, formData, { responseType: 'blob' });
  }
}
