import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-liquidity',
  templateUrl: './liquidity.component.html',
  styleUrls: ['./liquidity.component.css']
})
export class LiquidityComponent implements OnInit {

  formLiquid : FormGroup;

  constructor() {}

  ngOnInit() {
    this.formLiquidity();
  }

  formLiquidity(){
    this.formLiquid = new FormGroup ({
      nombreNegocio : new FormControl( null ),
      tipoSocio : new FormControl( null ),
      tipoNegocio : new FormControl( null ),
      montoInv : new FormControl( null ),
      ventaMens : new FormControl( null ),
      gastosOper : new FormControl( null ),
      porcentaje: new FormControl( null ),
      ubicacion: new FormControl( null ),
      descripcion: new FormControl( null ),
      competidores: new FormControl( null )
    });
}

  consultar(){
    console.log('info', this.formLiquid.value);
  }

}
