import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileUploadModule} from './module/file-upload.module';

const routes: Routes = [
  {path: '', redirectTo: '/changeFieldNames', pathMatch: 'full'},
  {path: 'changeFieldNames', loadChildren: () => FileUploadModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FileUploadModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
