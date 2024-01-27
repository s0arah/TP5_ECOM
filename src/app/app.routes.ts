import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminTemplateComponent, canActivate:[AuthenticationGuard], children: [
      {path: 'products', component: ProductsComponent},
      {path: 'newProduct', component: NewProductComponent, canActivate:[AuthorizationGuard]},
      {path: 'editProduct/:id', component: EditProductComponent, canActivate:[AuthorizationGuard]},
      {path: 'notAuthorized', component: NotAuthorizedComponent}
    ]},
  {path: 'login', component: LoginComponent},
];
