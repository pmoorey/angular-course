import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParticipantsComponent} from './participants/participants.component';
import { QuestionsComponent } from './questions/questions.component';
import { BannerComponent } from './banner/banner.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    QuestionsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
