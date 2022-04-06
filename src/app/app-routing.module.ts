import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound, NotFoundModule } from './pages/not-found.page';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login.page').then((m) => m.LoginModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home.page').then((m) => m.HomeModule)
  },
  {
    path: 'notes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/notes.page').then((m) => m.NotesModule)
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
