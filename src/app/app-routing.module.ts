import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EspComponent } from './components/esp/esp.component';
import { LiquidityComponent } from './components/business/liquidity/liquidity.component';
import { SaleComponent } from './components/business/sale/sale.component';
import { SaleEquipmentComponent } from './components/business/sale-equipment/sale-equipment.component';
import { MemberComponent } from './components/investment/member/member.component';
import { SaleEquiComponent } from './components/investment/sale-equi/sale-equi.component';
import { TranferComponent } from './components/investment/tranfer/tranfer.component';
import { MembershipComponent } from './components/membership/membership.component';


const routes: Routes = [
  { path : 'user/login', component : LoginComponent },
  { path : 'user/register', component : RegisterComponent },
  { path : 'esp', component : EspComponent },
  { path : 'liquidity', component : LiquidityComponent },
  { path : 'sale', component : SaleComponent },
  { path : 'sale-equipment', component : SaleEquipmentComponent },
  { path : 'investment/member', component : MemberComponent },
  { path : 'investment/sale', component : SaleEquiComponent },
  { path : 'investment/transfer', component : TranferComponent },
  { path : 'membership', component : MembershipComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
