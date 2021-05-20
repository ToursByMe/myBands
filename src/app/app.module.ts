import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

// location
import localeESP from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// comunicating with back-end
import { HttpClient, HttpClientModule } from '@angular/common/http';

// popUps UI/UX answers
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// reactive forms if needed
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';


// where are we
registerLocaleData(localeESP);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    HttpClientModule,
    // ngx-toastr
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    ReactiveFormsModule, // !important, do not remove


  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
     FooterComponent,
     NavbarComponent,
     HomeComponent]
})
export class AppModule { }

