import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sale-equi',
  templateUrl: './sale-equi.component.html',
  styleUrls: ['./sale-equi.component.css']
})
export class SaleEquiComponent implements OnInit {

  formSaleEq: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formSale();
  }

  formSale(){
    this.formSaleEq = new FormGroup({
      donde: new FormControl( null ),
      tipoNegocio: new FormControl( null ),
      precioDesde: new FormControl( null ),
      precioHasta: new FormControl( null ),
      sinAntiguedad: new FormControl( null ),
      antiguedadPubl: new FormControl( null )
    })
  }

  consultar(){
    console.log(this.formSaleEq.value);
  }

}
