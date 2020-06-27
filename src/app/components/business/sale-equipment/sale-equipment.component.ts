import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sale-equipment',
  templateUrl: './sale-equipment.component.html',
  styleUrls: ['./sale-equipment.component.css']
})
export class SaleEquipmentComponent implements OnInit {

  formSale : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formEqui();
  }

  formEqui(){
    this.formSale = new FormGroup ({
      nombreNegocio : new FormControl( null ),
      tipoNegocio : new FormControl( null ),
      montoTotal : new FormControl( null ),
      ubicacion: new FormControl( null ),
      descripcion : new FormControl( null )
    })
  }

  consultar(){
    console.log(this.formSale.value);
  }

}
