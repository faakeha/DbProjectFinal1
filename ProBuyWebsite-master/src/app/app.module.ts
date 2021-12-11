import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { OilngheeComponent } from './components/categories/oilnghee/oilnghee.component';
import { SpicessaltsugarComponent } from './components/categories/spicessaltsugar/spicessaltsugar.component';
import { RicenflourComponent } from './components/categories/ricenflour/ricenflour.component';
import { TeaComponent } from './components/categories/tea/tea.component';
import { MilkComponent } from './components/categories/milk/milk.component';
import { SaucesComponent } from './components/categories/sauces/sauces.component';
import { FrozenfoodsComponent } from './components/categories/frozenfoods/frozenfoods.component';
import { BeveragesComponent } from './components/categories/beverages/beverages.component';
import { InstantfoodComponent } from './components/categories/instantfood/instantfood.component';
import { ChipsComponent } from './components/categories/chips/chips.component';
import { BakeryComponent } from './components/categories/bakery/bakery.component';
import { DairyComponent } from './components/categories/dairy/dairy.component';
import { ShampooncondComponent } from './components/categories/shampooncond/shampooncond.component';
import { SkincareComponent } from './components/categories/skincare/skincare.component';
import { DetergentsComponent } from './components/categories/detergents/detergents.component';
import { FloornbathComponent } from './components/categories/floornbath/floornbath.component';
import { TrackerComponent } from './components/tracker/tracker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    CheckoutComponent,
    UserAccountComponent,
    LoginComponent,
    CategoriesComponent,
    OilngheeComponent,
    SpicessaltsugarComponent,
    RicenflourComponent,
    TeaComponent,
    MilkComponent,
    SaucesComponent,
    FrozenfoodsComponent,
    BeveragesComponent,
    InstantfoodComponent,
    ChipsComponent,
    BakeryComponent,
    DairyComponent,
    ShampooncondComponent,
    SkincareComponent,
    DetergentsComponent,
    FloornbathComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
