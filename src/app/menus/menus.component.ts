import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router, private dialog: MatDialog) {


  }


  toProfile(){
    this.route.navigate(['/dados']);
  }

  toMed(){
    this.route.navigate(['/produtos']);
  }

  toLogin(){
    this.route.navigate(['/login']);
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CartModalComponent, dialogConfig);
  }

}
