import {Component, Inject} from '@angular/core';
import { Router} from "@angular/router";
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-popUp',
  templateUrl: './popUp.component.html',
  styleUrls: ['./popUp.component.css']
})
export class PopUpComponent {

  constructor(private router: Router, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  showDetails() {
    this.dialog.closeAll();
    this.router.navigate(['success', {params: JSON.stringify(this.data)}], {})
  }

  ok() {
    this.dialog.closeAll();
  }

}
