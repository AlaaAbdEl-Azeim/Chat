import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';

const materialComponents=[
  MatButtonModule,
  MatSidenavModule,
  MatInputModule
]

@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class NgMaterialModule { }
