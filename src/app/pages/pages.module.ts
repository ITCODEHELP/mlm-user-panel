import { NgModule } from '@angular/core';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbInputModule, NbMenuModule, NbOptionModule, NbProgressBarModule, NbRouteTabsetModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';
import {HttpClientModule} from '@angular/common/http'
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { MyEarningComponent } from './my-earning/my-earning.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { AuthGuard } from '../services/auth.guard';
import { ProfileComponent } from './profile-edit/profile/profile.component';

@NgModule({
  declarations: [
    PagesComponent,
    MyEarningComponent,
    UserHistoryComponent,
    BankDetailsComponent,
    TransactionHistoryComponent,
    ProfileEditComponent,
    DemoComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    NbCheckboxModule,
    NbSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    NbOptionModule,
    NbMenuModule,
    MiscellaneousModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbButtonModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    NbCardModule,
    NbAccordionModule,
    NbDialogModule.forRoot(),
    NbProgressBarModule
  ],
  providers:[AuthGuard]
})
export class PagesModule {
}
