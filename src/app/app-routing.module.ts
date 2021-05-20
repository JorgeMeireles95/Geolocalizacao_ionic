import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exemplo1',
    loadChildren: () => import('./exemplo1/exemplo1.module').then( m => m.Exemplo1PageModule)
  },
  {
    path: 'exemplo2',
    loadChildren: () => import('./exemplo2/exemplo2.module').then( m => m.Exemplo2PageModule)
  },
  {
    path: 'exemplo3',
    loadChildren: () => import('./exemplo3/exemplo3.module').then( m => m.Exemplo3PageModule)
  },
  {
    path: 'exemplo4',
    loadChildren: () => import('./exemplo4/exemplo4.module').then( m => m.Exemplo4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
