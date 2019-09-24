import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

const materialComponents=[
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatBadgeModule
]

@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class NgMaterialModule { }
