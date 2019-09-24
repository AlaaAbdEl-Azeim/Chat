import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

const materialComponents=[
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatBadgeModule,
  MatMenuModule,
  MatToolbarModule
]

@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class NgMaterialModule { }
