import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DescriptionComponent } from './description/description.component';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataService } from './Services/fetch-data.service';
import { AboutSiteComponent } from './about-site/about-site.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DetailsComponent,
    DescriptionComponent,
    ProjectsComponent,
    AboutSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CardModule,
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
