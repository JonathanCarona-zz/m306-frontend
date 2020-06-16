import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JetonexchangeComponent } from './jetonexchange/jetonexchange.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CasinoDashboardComponent } from './casino-dashboard/casino-dashboard.component';
import { SlotmachineComponent } from './slotmachine/slotmachine.component';

@NgModule({
  declarations: [
    AppComponent,
    JetonexchangeComponent,
    CasinoDashboardComponent,
    SlotmachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
