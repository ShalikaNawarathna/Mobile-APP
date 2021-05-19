import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my-listings',
    loadChildren: () => import('../my-listings/my-listings.module').then( m => m.MyListingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
  },
  /*
  {
    path: 'my-listings-add',
    loadChildren: () => import('./my-listings-add/my-listings-add.module').then( m => m.MyListingsAddPageModule)
  },
  */
  /*
      {
        path: 'home',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'my-listing',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      */
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
