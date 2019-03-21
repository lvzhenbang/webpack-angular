/**
 * module about admin
 * by lzb
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// admin route
import { AdminRoutingModule } from '../routes/admin.route';

// admin component
import { LoginComponent } from '../components/admin';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [],
})

export class AdminModule { }
