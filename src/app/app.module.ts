import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { MembershipComponent } from './membership/membership.component';
import { EventsComponent } from './events/events.component';
import { OfferingsComponent } from './offerings/offerings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    AllcoursesComponent,
    PartnershipComponent,
    MembershipComponent,
    EventsComponent,
    OfferingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
