import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { MembershipComponent } from './membership/membership.component';
import { EventsComponent } from './events/events.component';
import { OfferingsComponent } from './offerings/offerings.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
   {
    path: 'allcourses',
    component: AllcoursesComponent
  }, {
    path: 'partnership',
    component: PartnershipComponent
  }, {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path:'offerings',
    component:OfferingsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
