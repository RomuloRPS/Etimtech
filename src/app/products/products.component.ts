import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  
  public mobile = true;
  public alert = Swal

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {

      return [
        { price: 'R$ 6,07', title: 'Doril Enxaqueca 4 Comprimidos', subtitle: 'ácido acetilsalicílico, paracetamol e cafeína  ', image: 'https://ultrafarma-storage.azureedge.net/static/produtos/804704/large-804704.jpg', cols: 1, rows: 1 },
        { price: 'R$ 4,42', title: 'Dorflex 24 Comprimidos', subtitle: 'dipirona monoidratada e citrato de orfenadrina e cafeína anidra', image: 'https://img.drogaraia.com.br/catalog/product/d/o/dorflex_analgesico_36_comprimidos.jpg?width=520&height=520&quality=50&type=resize',cols: 1, rows: 1 },
        { price: 'R$ 10,99', title: 'MultiGrip 20 Capsulas',subtitle: 'fenilefrina, clorfeniramina, paracetamol', image: 'https://images.tcdn.com.br/img/img_prod/579568/multigrip_caixa_com_20_capsulas_703_1_20170825131128.jpg', cols: 1, rows: 1 },
        { price: 'R$ 17,35', title: 'Tylenol 750mg', subtitle: '750 mg de paracetamol', image: 'https://drogariasp.vteximg.com.br/arquivos/ids/321668-500-500/Tylenol-750Mg-20-Comprimidos-Drogaria-SP-19119.jpg?v=636753815548670000', cols: 1, rows: 1 }
      ];
    })
    
  );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private route: Router) {}

  reportWindowSize(event){
      if (window.screen.width  < 900) { // 768px portrait
        console.log('a');
        this.mobile = true;      
      }else{
        console.log('b');
        this.mobile = false;      
      }
  }

  ngOnInit() {
    window.addEventListener('resize', this.reportWindowSize.bind(this), true);
    console.log(window.screen.width)
    if (window.screen.width  < 1000) { // 768px portrait
      this.mobile = true;
 
    }
    else{
      this.mobile = false;
      console.log('aa');
    }
  }

  toLogin(){
    this.route.navigate(['login']);
  }

 

}
