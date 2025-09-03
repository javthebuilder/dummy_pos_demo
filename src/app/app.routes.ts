import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component'; 
import { ChangeLanguageComponent } from './change-language/change-language.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { OrdersStatusComponent } from './orders-status/orders-status.component';
import { PeopleComponent } from './people/people.component'; 
import { TransactionsComponent } from './transactions/transactions.component';
import { UploadItemComponent } from './upload-item/upload-item.component'; 
import { AddItemComponent } from './add-item/add-item.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { RecieptComponent } from './reciept/reciept.component';
import { SettingsComponent } from './settings/settings.component';


export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },

  { path: "authentication", component: AuthenticationComponent }, 
  { path: "change-language", component: ChangeLanguageComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "home", component: HomeComponent },
  { path: "items", component: ItemsComponent },
  { path: "login", component: LoginComponent },
  { path: "orders-status", component: OrdersStatusComponent },
  { path: "people", component: PeopleComponent }, 
  { path: "transactions", component: TransactionsComponent },
  { path: "upload-item", component: UploadItemComponent }, 
  { path: "add-item", component: AddItemComponent },
  { path: "add-category", component: AddCategoryComponent },
  { path: "add-people", component: AddPeopleComponent },
  { path: "reciept", component: RecieptComponent },
  { path: "add-expense", component: AddExpenseComponent },
  { path: "settings", component: SettingsComponent },
];
