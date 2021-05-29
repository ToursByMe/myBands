import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BandListComponent } from './views/bands/band-list/band-list.component';
import { BandDetailComponent } from './views/bands/band-detail/band-detail.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'bands', component: BandListComponent },
  { path: 'bands/:id', component: BandDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
