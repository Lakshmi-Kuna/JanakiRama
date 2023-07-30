import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonHomeComponent } from './components/amazon-home/amazon-home.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './components/amazon-womens/amazon-womens.component';
import { AmazonAdminComponent } from './components/amazon-admin/amazon-admin.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonElectronicsComponent } from './components/amazon-electronics/amazon-electronics.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AmazonDetailsComponent } from './components/amazon-details/amazon-details.component';
import { AmazonMoreDetailsComponent } from './components/amazon-more-details/amazon-more-details.component';
import { AboutComponent } from './components/components/about/about.component';
import { BlogsComponent } from './components/components/blogs/blogs.component';
import { ContactsComponent } from './components/components/contacts/contacts.component';
import { AmazonLoginComponent } from './components/amazon-login/amazon-login.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},  
  {path:'home',component:AmazonHomeComponent},
  {path:'mens',component:AmazonMensComponent,canActivate:[AuthGuard]},
  {path:'womens',component:AmazonWomensComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AmazonAdminComponent},
  {path:'about',component:AboutComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'jewelery',component:AmazonJeweleryComponent,canActivate:[AuthGuard]},
  {path:'electronics',component:AmazonElectronicsComponent,canActivate:[AuthGuard]},
  {path:'login',component:AmazonLoginComponent},
  {path:'details/:id',component:AmazonDetailsComponent,
  children:[
    {path:'more/:productId',component:AmazonMoreDetailsComponent}
  ],canActivate:[AuthGuard]
},
  {path:'**',component:NotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
