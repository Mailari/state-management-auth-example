import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound, NotFoundModule } from './pages/not-found.page';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home.page').then((m) => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login.page').then((m) => m.LoginModule)
  },
  { path: '**', pathMatch: 'full', component: NotFound }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), NotFoundModule],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
