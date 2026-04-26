import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { Error404Component } from './component/error404/error404.component';
import { DataProtectionComponent } from './component/data_protection/data-protection.component';
import { PrivacyComponent } from './component/privacy/privacy.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'feature', component: HomeComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
