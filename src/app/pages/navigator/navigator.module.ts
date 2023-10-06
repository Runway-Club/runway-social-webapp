import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { NavigatorRoutingModule } from './navigator-routing.module';
import { NavigatorComponent } from './navigator.component';

@NgModule({
  declarations: [NavigatorComponent],
  imports: [CommonModule, NavigatorRoutingModule, SharedModule],
})
export class NavigatorModule {}
