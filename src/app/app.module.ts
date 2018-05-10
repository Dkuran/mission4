import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';


@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule, AuthenticationModule, HttpClientModule ],
	providers: [AuthService],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
