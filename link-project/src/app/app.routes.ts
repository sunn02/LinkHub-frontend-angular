import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SaveLinkComponent } from './components/save-link/save-link.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'save', component: SaveLinkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
