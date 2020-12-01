import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/guards/auth.guard';
import { environment } from '../environments/environment';

const withGuard = {
  path: '', canActivate: [AuthGuard],
  loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule)
};

const withoutGuard = {
  path: '',
  loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule)
};

const routes: Routes = [];

if (environment.simulated) {
  routes.push(withoutGuard);
} else {
  routes.push(withGuard);
}

routes.push(
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  }
);

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
