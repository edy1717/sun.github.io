import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tranfer',
  templateUrl: './tranfer.component.html',
  styleUrls: ['./tranfer.component.css']
})
export class TranferComponent implements OnInit {

  formTranfer: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formTranfe()
  }

  formTranfe(){
    this.formTranfer = new FormGroup({
      donde: new FormControl( null ),
      tipoNegocio: new FormControl( null ),
      precioDesde: new FormControl( null ),
      precioHasta: new FormControl( null ),
      sinAntiguedad: new FormControl( null ),
      antiguedadPubl: new FormControl( null )
    })
  }

  consultar(){
    console.log(this.formTranfer.value);
  }

}
