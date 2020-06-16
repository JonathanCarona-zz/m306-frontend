import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JetonexchangeComponent } from './jetonexchange/jetonexchange.component';

const routes: Routes = [
  { path: '', redirectTo: 'jeton', pathMatch: 'full' },
  { path: 'jeton', component: JetonexchangeComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
