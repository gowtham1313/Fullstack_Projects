import {Component} from '@angular/core';
import {RestService} from '../../service/rest.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  // [key: string]: any;

  selectedFiles: { file1?: File, file2?: File } = {};

  constructor(private fileUploadService: RestService) {
  }

  onFileSelected(event: any, fileType: string) {
    if (event.target.files.length > 0) {
      // @ts-ignore
      this.selectedFiles[fileType] = event.target.files[0];
    }
  }

  onUpload() {
    if (this.selectedFiles.file1 && this.selectedFiles.file2) {
      this.fileUploadService.uploadFiles(this.selectedFiles.file1, this.selectedFiles.file2)
        .subscribe((response: any) => {
          const url = window.URL.createObjectURL(response);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'new-file.ext';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove();
        });
    } else {
      alert('Please select both files.');
    }
  }
}


//{
//  "name": "dynamic-form",
//  "version": "0.0.0",
//  "scripts": {
//    "ng": "ng",
//    "start": "ng serve",
//    "start_port": "ng serve --port 1313",
//    "build": "ng build",
//    "watch": "ng build --watch --configuration development",
//    "test": "ng test"
//  },
//  "private": true,
//  "dependencies": {
//    "@angular/animations": "^15.2.5",
//    "@angular/cdk": "^15.2.5",
//    "@angular/common": "^15.2.0",
//    "@angular/compiler": "^15.2.0",
//    "@angular/core": "^15.2.0",
//    "@angular/forms": "^15.2.0",
//    "@angular/material": "^15.2.5",
//    "@angular/platform-browser": "^15.2.0",
//    "@angular/platform-browser-dynamic": "^15.2.0",
//    "@angular/router": "^15.2.0",
//    "angular-ng-autocomplete": "^2.0.12",
//    "ng-multiselect-dropdown": "^0.3.9",
//    "rxjs": "~7.8.0",
//    "tslib": "^2.3.0",
//    "zone.js": "~0.12.0"
//  },
//  "devDependencies": {
//    "@angular-devkit/build-angular": "^15.2.1",
//    "@angular/cli": "~15.2.1",
//    "@angular/compiler-cli": "^15.2.0",
//    "@types/jasmine": "~4.3.0",
//    "css-loader": "^6.7.3",
//    "jasmine-core": "~4.5.0",
//    "karma": "~6.4.0",
//    "karma-chrome-launcher": "~3.1.0",
//    "karma-coverage": "~2.2.0",
//    "karma-jasmine": "~5.1.0",
//    "karma-jasmine-html-reporter": "~2.0.0",
//    "typescript": "~4.9.4"
//  }
//}
