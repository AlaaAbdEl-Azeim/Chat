import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';

const materialComponents=[
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatCardModule,
  MatIconModule
]

@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class NgMaterialModule { }
