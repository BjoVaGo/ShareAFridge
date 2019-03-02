import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'AddDrinks',
        children: [
          {
            path: '',
            loadChildren: '../AddDrinks/AddDrinks.module#AddDrinksPageModule'
          }
        ]
      },
      {
        path: 'FridgeStats',
        children: [
          {
            path: '',
            loadChildren: '../FridgeStats/FridgeStats.module#FridgeStatsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: './tabs/AddDrinks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/AddDrinks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
