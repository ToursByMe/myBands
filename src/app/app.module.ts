import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

// location
import localeESP from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// comunicating with back-end
import { HttpClientModule } from '@angular/common/http';

// popUps UI/UX answers
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// reactive forms if needed
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BandListComponent } from './views/bands/band-list/band-list.component';
import { BandDetailComponent } from './views/bands/band-detail/band-detail.component';
import { ImagesPipe } from './pipes/images.pipe';

// where are we
registerLocaleData(localeESP);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    BandListComponent,
    BandDetailComponent,
    ImagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ngx-toastr
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    FormsModule,
    ReactiveFormsModule, // !important, do not remove
    FontAwesomeModule

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
     HomeComponent,
     BandListComponent,
     BandDetailComponent]
})
export class AppModule { }

