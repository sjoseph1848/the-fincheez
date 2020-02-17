import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddStockComponent,
    StockDetailsComponent,
    StocksComponent,
    DashboardComponent,
    EditStockComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    SettingsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
