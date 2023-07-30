import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonAdminComponent } from './components/amazon-admin/amazon-admin.component';
import { AmazonDetailsComponent } from './components/amazon-details/amazon-details.component';
import { AmazonElectronicsComponent } from './components/amazon-electronics/amazon-electronics.component';
import { AmazonHomeComponent } from './components/amazon-home/amazon-home.component';
import { AmazonIndexComponent } from './components/amazon-index/amazon-index.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonLoginComponent } from './components/amazon-login/amazon-login.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './components/amazon-womens/amazon-womens.component';
import { AmazonMoreDetailsComponent } from './components/amazon-more-details/amazon-more-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/components/about/about.component';
import { BlogsComponent } from './components/components/blogs/blogs.component';
import { ContactsComponent } from './components/components/contacts/contacts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AmazonAdminComponent,
    AmazonDetailsComponent,
    AmazonElectronicsComponent,
    AmazonHomeComponent,
    AmazonIndexComponent,
    AmazonJeweleryComponent,
    AmazonLoginComponent,
    AmazonMensComponent,
    AmazonWomensComponent,
    AmazonMoreDetailsComponent,
    NotfoundComponent,
    AboutComponent,
    BlogsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AmazonIndexComponent]
})
export class AppModule { }
