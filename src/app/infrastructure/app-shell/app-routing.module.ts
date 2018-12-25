import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/individuals',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'individuals',
  //   loadChildren: 'src/app/areas/individuals/individuals.module#IndividualsModule'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {
}
