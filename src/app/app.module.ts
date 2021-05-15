import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSupplierComponent } from './Components/Supplier/add-Supplier/add-supplier/add-supplier.component';
import { ListSupplierComponent } from './Components/Supplier/list-Supplier/list-supplier/list-supplier.component';
import { EditSupplierComponent } from './Components/Supplier/edit-supplier/edit-supplier.component';
import { AddProductComponent } from './Components/Product/add-product/add-product.component';
import { ListProductComponent } from './Components/Product/list-product/list-product.component';
import { EditProductComponent } from './Components/Product/edit-product/edit-product.component';
import { ListEmployeeComponent } from './Components/Employee/list-employee/list-employee.component';
import { AddCustomerComponent } from './Components/Customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './Components/Customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './Components/Customer/edit-customer/edit-customer.component';
import { ListCategoryComponent } from './Components/Category/list-category/list-category.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LoginComponent } from './Components/login/login.component';
import { ListOrderComponent } from './Components/order/list-order/list-order.component';
import { DetailOrderComponent } from './Components/order/detail-order/detail-order.component';
import { AddOrderComponent } from './Components/order/add-order/add-order.component';
import { LigneComponent } from './Components/order/ligne/ligne.component';
import { CustOrderComponent } from './Components/Customer/cust-order/cust-order.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    AddSupplierComponent,
    ListSupplierComponent,
    EditSupplierComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    ListEmployeeComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    ListCategoryComponent,
    SidebarComponent,
    LoginComponent,
    ListOrderComponent,
    DetailOrderComponent,
    AddOrderComponent,
    LigneComponent,
    CustOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
