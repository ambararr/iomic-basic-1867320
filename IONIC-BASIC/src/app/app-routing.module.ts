import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from './service/auth-guard.guard';

const routes: Routes = [
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/main/receta',
    pathMatch: 'full'
  },
  /*{
    path: 'receta',
    loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule),
    canActivate: [AutGuardGuard]
  },
  {
    path: 'detalle-receta',
    loadChildren: () => import('./detalle-receta/detalle-receta.module').then( m => m.DetalleRecetaPageModule),
    canActivate: [AutGuardGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AutGuardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'presupuesto',
    loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule),
    canActivate: [AutGuardGuard]
  },
  {
    path: 'destinos',
    loadChildren: () => import('./destinos/destinos.module').then( m => m.DestinosPageModule),
    canActivate: [AutGuardGuard]
  }*/
  {
    path: 'main',
    children:[
      {
        path: 'presupuesto',
        loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
      },
      {
        path: 'destinos',
        loadChildren: () => import('./destinos/destinos.module').then( m => m.DestinosPageModule)
      },
      {
        path: 'receta',
        loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule)
      },
      {
        path: 'detalle-receta',
        loadChildren: () => import('./detalle-receta/detalle-receta.module').then( m => m.DetalleRecetaPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path: 'destinos-api',
        loadChildren: () => import('./destinos-api/destinos-api.module').then( m => m.DestinosApiPageModule)
      },
      {
        path: 'galeria',
        loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
      }
    ],
    canActivate: [AutGuardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }