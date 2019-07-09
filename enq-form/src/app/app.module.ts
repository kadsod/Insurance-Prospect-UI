import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { FormBean } from './model/form';
import { BackendApiService } from './services/backend-api.service';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EnquiryFormComponent, FormBean, BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
