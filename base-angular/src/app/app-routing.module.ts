import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { NotfoundComponent } from './pages/notfound/notfound.component'; 
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { PagdetailComponent } from './pages/pagdetail/pagdetail.component';
import { DetaillocationComponent } from './pages/location/detaillocation/detaillocation.component'
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
  {
    path: '', component: LayoutClientComponent,
    children: [
      { path: '', component: HomeComponent }, 
      { path: 'pagedetail', component: PagdetailComponent }, 
      { path: 'lienhe', component: LienheComponent },
      { path: 'locantion', component: LocationComponent },
      { path: 'locantion/detail/:id', component: DetaillocationComponent },  
    ]
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent }
    ],
  },

  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
