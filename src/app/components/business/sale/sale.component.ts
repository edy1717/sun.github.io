import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  formSale: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formSaleTras();
  }

  formSaleTras(){
    this.formSale = new FormGroup ({
      nombreNegocio : new FormControl( null ),
      tipoNegocio : new FormControl( null ),
      montoInv : new FormControl( null ),
      ventaMens : new FormControl( null ),
      gastosOper : new FormControl( null ),
      ubicacion: new FormControl( null ),
      descripcion: new FormControl( null ),
      competidores: new FormControl( null )
    })
  }

  consultar(){
    console.log('info', this.formSale.value);
  }

}
