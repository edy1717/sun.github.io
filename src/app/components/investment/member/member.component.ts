import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

formMember: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formMembe();
  }

  formMembe(){
    this.formMember = new FormGroup({
      donde : new FormControl( null ),
      tipoSocio: new FormControl( null ),
      tipoNegocio: new FormControl( null ),
      masSocio: new FormControl( null ),
      precioDesde: new FormControl( null ),
      precioHasta: new FormControl( null ),
      sinAntiguedad: new FormControl( null ),
      antiguedadPubl : new FormControl( null )
    })
  }

  consultar(){
    console.log(this.formMember.value);
  }

}
