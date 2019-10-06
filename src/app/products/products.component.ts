import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  
  public mobile = true;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Paracetamol', subtitle: 'acetaminofeno', image: 'https://www.medquimica.ind.br/wp-content/uploads/produto/Paracetamol-Gotas-Mesclado.jpg',  cols: 1, rows: 1 },
          { title: 'Dorflex', subtitle: 'acetaminofeno', image: 'https://img.drogaraia.com.br/catalog/product/d/o/dorflex_analgesico_36_comprimidos.jpg?width=520&height=520&quality=50&type=resize', cols: 1, rows: 1 },
          { title: 'MultiGrip', subtitle: 'acetaminofeno', image: 'https://images.tcdn.com.br/img/img_prod/579568/multigrip_caixa_com_20_capsulas_703_1_20170825131128.jpg', cols: 1, rows: 1 },
          { title: 'Tylenol',  subtitle: 'acetaminofeno', image: 'https://drogariasp.vteximg.com.br/arquivos/ids/321668-500-500/Tylenol-750Mg-20-Comprimidos-Drogaria-SP-19119.jpg?v=636753815548670000', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Paracetamol', subtitle: 'acetaminofeno', image: 'https://www.medquimica.ind.br/wp-content/uploads/produto/Paracetamol-Gotas-Mesclado.jpg', cols: 1, rows: 1 },
        { title: 'Dorflex', subtitle: 'acetaminofeno', image: 'https://img.drogaraia.com.br/catalog/product/d/o/dorflex_analgesico_36_comprimidos.jpg?width=520&height=520&quality=50&type=resize',cols: 1, rows: 1 },
        { title: 'MultiGrip',subtitle: 'acetaminofeno', image: 'https://images.tcdn.com.br/img/img_prod/579568/multigrip_caixa_com_20_capsulas_703_1_20170825131128.jpg', cols: 1, rows: 1 },
        { title: 'Tylenol', subtitle: 'acetaminofeno', image: 'https://drogariasp.vteximg.com.br/arquivos/ids/321668-500-500/Tylenol-750Mg-20-Comprimidos-Drogaria-SP-19119.jpg?v=636753815548670000', cols: 1, rows: 1 }
      ];
    })
    
  );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  ngOnInit() {
    console.log(window.screen.width)
    if (window.screen.width  < 768) { // 768px portrait
      this.mobile = true;
      this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
          if (matches) {
            return [
              { title: 'Paracetamol', subtitle: 'acetaminofeno', image: 'https://www.medquimica.ind.br/wp-content/uploads/produto/Paracetamol-Gotas-Mesclado.jpg',  cols: 2, rows: 1 },
              { title: 'Dorflex', subtitle: 'acetaminofeno', image: 'https://img.drogaraia.com.br/catalog/product/d/o/dorflex_analgesico_36_comprimidos.jpg?width=520&height=520&quality=50&type=resize',cols: 2, rows: 1 },
              { title: 'MultiGrip', subtitle: 'acetaminofeno', image: 'https://images.tcdn.com.br/img/img_prod/579568/multigrip_caixa_com_20_capsulas_703_1_20170825131128.jpg',cols: 2, rows: 1 },
              { title: 'Tylenol',subtitle: 'acetaminofeno', image: 'https://drogariasp.vteximg.com.br/arquivos/ids/321668-500-500/Tylenol-750Mg-20-Comprimidos-Drogaria-SP-19119.jpg?v=636753815548670000', cols: 2, rows: 1 }
            ];
          }
    
          return [
            { title: 'Paracetamol', subtitle: 'acetaminofeno', image: 'https://www.medquimica.ind.br/wp-content/uploads/produto/Paracetamol-Gotas-Mesclado.jpg',cols: 2, rows: 1 },
            { title: 'Dorflex',subtitle: 'acetaminofeno', image: 'https://img.drogaraia.com.br/catalog/product/d/o/dorflex_analgesico_36_comprimidos.jpg?width=520&height=520&quality=50&type=resize', cols: 2, rows: 1 },
            { title: 'MultiGrip',subtitle: 'acetaminofeno', image: 'https://images.tcdn.com.br/img/img_prod/579568/multigrip_caixa_com_20_capsulas_703_1_20170825131128.jpg', cols: 2, rows: 1 },
            { title: 'Tylenol',subtitle: 'acetaminofeno', image: 'https://drogariasp.vteximg.com.br/arquivos/ids/321668-500-500/Tylenol-750Mg-20-Comprimidos-Drogaria-SP-19119.jpg?v=636753815548670000', cols: 2, rows: 1 }
          ];
        })
      );
    
    }
    else{
      console.log('aa');
    }
  }
}
