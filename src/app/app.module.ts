import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent  },
  {path: 'item/:id', component : ItemComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
