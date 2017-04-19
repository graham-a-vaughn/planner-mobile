import { Component } from '@angular/core';

import { PlanPage } from '../plan/plan';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlanPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
