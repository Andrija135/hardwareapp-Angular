import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwaresComponent } from './components/hardwares/hardwares.component';
import { HardwareDetailComponent } from './components/hardware-detail/hardware-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  declarations: [AppComponent, HardwaresComponent, HardwareDetailComponent, ReviewsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
