import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { PagdetailComponent } from './pages/pagdetail/pagdetail.component';
import { DetaillocationComponent } from './pages/location/detaillocation/detaillocation.component'
import { LocationComponent } from './pages/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FooterComponent, 
    LayoutClientComponent, 
    LayoutAdminComponent, 
    NotfoundComponent, 
    HomeComponent, 
    DashboardComponent, 
    ProductsComponent,  
    LienheComponent,
    PagdetailComponent,
    LocationComponent,
    DetaillocationComponent
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
