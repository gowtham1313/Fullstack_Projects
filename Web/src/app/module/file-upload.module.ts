import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FileUploadComponent} from '../component/file-upload/file-upload.component';
import {CommonModule} from '@angular/common';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FileUploadRoutingModule} from '../router/file-upload-routing.module';


@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    ReactiveFormsModule,
    FileUploadRoutingModule,
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatAutocompleteModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatRadioModule],
  providers: [HttpClient],
  bootstrap: [],
})
export class FileUploadModule {
}
