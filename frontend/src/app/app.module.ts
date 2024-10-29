import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './services/http/http-intercepter-basic-auth.service';

@NgModule({
    declarations: [AppComponent, LogoutComponent, TodoComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        WelcomeComponent,
        LoginComponent,
        ErrorComponent,
        MenuComponent, 
        FooterComponent,
        HttpClientModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi:true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
