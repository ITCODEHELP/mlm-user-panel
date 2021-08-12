import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { MyEarningComponent } from './my-earning/my-earning.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { DemoComponent } from './demo/demo.component';
import { AuthGuard } from '../services/auth.guard';
import { ProfileComponent } from './profile-edit/profile/profile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path:'user-dashboard',
      canActivate:[AuthGuard],
      component:DemoComponent,
    },
    {
      path:'myearning',
      canActivate:[AuthGuard],
      component:MyEarningComponent,
    },
    {
      path:'history',
      canActivate:[AuthGuard],
      component:UserHistoryComponent,
    },
    {
      path:'bankdetails',
      canActivate:[AuthGuard],
      component:BankDetailsComponent,
    },
    {
      path:'transaction',
      canActivate:[AuthGuard],
      component:TransactionHistoryComponent,
    },
    {
      path:'profile',
      canActivate:[AuthGuard],
      component:ProfileComponent,
    },
    {
      path:'profile/update',
      component:ProfileEditComponent
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'user-dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
