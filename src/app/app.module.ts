import { importProvidersFrom , NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';

// import { MAT_DATE_FORMATS } from '@angular/material/core';
import { LoginComponent } from './From/login/login.component';
import { RegisterComponent } from './From/register/register.component';
import { MainPageComponent } from './From/main-page/main-page.component';
// export const MY_DATE_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'dd/MM/yyyy',
//     monthYearLabel: 'MM/YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MM/YYYY',
//   },
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent, 
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],

  // providers: [
  //   { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntlService },
  //   provideFirebaseApp(() => initializeApp(environment.firebase)),
  //   provideDatabase(() => getDatabase()),
  //   { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  //   DatePipe
  // ],
  bootstrap: [AppComponent],

})
export class AppModule { }
