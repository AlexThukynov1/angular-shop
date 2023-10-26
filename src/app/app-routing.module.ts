import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { BasketComponent } from './components/basket/basket.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent},
  {path:'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductInfoComponent},
  {path: 'basket', component: BasketComponent},

  {path: '**', redirectTo:'', component:MainLayoutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
