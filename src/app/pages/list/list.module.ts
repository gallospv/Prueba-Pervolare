import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule],
})
export class ListModule {}
