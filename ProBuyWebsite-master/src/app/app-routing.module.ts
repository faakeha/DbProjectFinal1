import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { LoginComponent } from './components/login/login.component';
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

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path: 'home',component: HomeComponent
  },
  {
    path:'products/:id', component: ProductComponent
  },
  {
    path:'categories', component: CategoriesComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'checkout', component: CheckoutComponent
  },
  {
    path:'tracker', component: TrackerComponent
  },
  {
    path:'user-account', component: UserAccountComponent
  },
  {
    path: 'home/:name',component: HomeComponent
  },
  {
    path:'categories/oilnghee', component: OilngheeComponent
  },
  {
    path:'categories/spicessaltsugar', component: SpicessaltsugarComponent
  },
  {
    path:'categories/ricenflour', component: RicenflourComponent
  },
  {
    path:'categories/tea', component: TeaComponent
  },
  {
    path:'categories/milk', component: MilkComponent
  }, 
  {
    path:'categories/sauces', component: SaucesComponent
  },
  {
    path:'categories/frozenfoods', component: FrozenfoodsComponent
  },
  {
    path:'categories/beverages', component: BeveragesComponent
  },
  {
    path:'categories/instantfood', component: InstantfoodComponent
  },
  {
    path:'categories/chips', component: ChipsComponent
  },
  {
    path:'categories/bakery', component: BakeryComponent
  },
  {
    path:'categories/dairy', component: DairyComponent
  },
  {
    path:'categories/shampooncond', component: ShampooncondComponent
  },
  {
    path:'categories/skincare', component: SkincareComponent
  },
  {
    path:'categories/detergents', component: DetergentsComponent
  },
  {
    path:'categories/floornbath', component: FloornbathComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
