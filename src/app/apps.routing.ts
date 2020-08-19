import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WatchDogs2Component } from './readmoreCard/watch-dogs2/watch-dogs2.component';
import { DarkSoulRemasterdComponent } from './readmoreCard/dark-soul-remasterd/dark-soul-remasterd.component';
import { BatmanComponent } from './readmoreCard/batman/batman.component';
import { MassEffectComponent } from './readmoreCard/mass-effect/mass-effect.component';

import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';


  export const routes = RouterModule.forRoot([

      {path:'', component:HomePageComponent},
      {path: 'AboutUs',component: AboutusPageComponent},
      {path: 'Products',component: ProductsComponent},
      {path : 'shoppingCart', component : ShoppingCartComponent ,canActivate: [AuthGuardService] },
      {path: 'login', component: LoginWithGoogleComponent},
      {path: 'contactUs', component: ContactUsComponent},

      { path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuardService] 
      },

      { path: 'order-success/:id', 
        component:  OrderSuccessComponent, 
        canActivate: [AuthGuardService] 
      },


      {   
        path: 'my/orders' , 
        component: MyOrdersComponent ,
        canActivate: [AuthGuardService] 
      },

      {
        path: 'admin/orders' ,
        component: AdminOrdersComponent ,
        canActivate: [AuthGuardService ,AdminAuthGuardService]
      },
      
      {
        path:'admin/products/admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService , AdminAuthGuardService]
      },

      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService , AdminAuthGuardService]
      },
      
      { 
        path: 'admin/products',
        component: ManageProductsComponent , 
        canActivate: [AuthGuardService ,AdminAuthGuardService]
      },



      {path: 'watchDogs2', component: WatchDogs2Component},
      {path: 'darkSoulRemasterd', component: DarkSoulRemasterdComponent},
      {path: 'batmanArakhamNight', component: BatmanComponent},
      {path: 'MassEffectAndromeda', component: MassEffectComponent},

  ], {scrollPositionRestoration: 'enabled'})