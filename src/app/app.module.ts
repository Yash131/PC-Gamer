// NgMaterial Theme-------------------------------------------------------
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from "@angular/material/checkbox"
// ------------------------ngBootstrap----------------------------------------

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//----------------------Toster and extras---------------------------------------
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomFormsModule } from "ng2-validation";
import { DataTableModule } from 'ng-angular8-datatable';

// -----------Firebase----------------------------------------------------


import { AngularFireModule } from "angularfire2"
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";


// -----------------------------Components------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DarkSoulRemasterdComponent } from './readmoreCard/dark-soul-remasterd/dark-soul-remasterd.component';
import { BatmanComponent } from './readmoreCard/batman/batman.component';
import { MassEffectComponent } from './readmoreCard/mass-effect/mass-effect.component';
import { WatchDogs2Component } from './readmoreCard/watch-dogs2/watch-dogs2.component';
import { routes } from './apps.routing';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';

import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { UsernameComponent } from './username/username.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { BsFooterComponent } from './bs-footer/bs-footer.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryService } from './categories.service';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WatchDogs2Component,
    DarkSoulRemasterdComponent,
    BatmanComponent,
    MassEffectComponent,
    AboutusPageComponent,
    LoginWithGoogleComponent,
    ManageProductsComponent,
    UsernameComponent,
    BsNavbarComponent,
    BsFooterComponent,
    ProductFormComponent,
    ProductsComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    ProductQuantityComponent,
    ContactUsComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyOrdersComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminOrdersComponent

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // -----------------------------------------
    CustomFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    routes,
    BrowserAnimationsModule,
    DataTableModule,
    ToastrModule.forRoot(
      {
        timeOut: 4000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }
    ),
    // material-themes-------------------------
    MatRadioModule,
    MatCheckboxModule,
    NgbModule
    
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
