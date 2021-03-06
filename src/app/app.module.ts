import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PlanPage } from '../pages/plan/plan';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChecklistPage } from '../pages/checklist/checklist';

import { Checklist } from '../entities/checklist';
import { ChecklistItem } from '../entities/checklist-item';

import { ChecklistService } from '../entity-services/checklist-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PlanPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChecklistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlanPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChecklistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChecklistService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
