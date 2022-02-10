import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/pages/home/home.module';
import { LoginModule } from './components/pages/login/login.module';
import { RegisterModule } from './components/pages/register/register.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderModule } from './shared/components/header/header.module';
// SERVICES
import { Butler } from './shared/services/butler.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
    Butler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
