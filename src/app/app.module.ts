import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { WindowComponent } from './window/window.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { IssueGroupComponent } from './issue-group/issue-group.component';
import { IssueComponent } from './issue/issue.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    WindowComponent,
    SidenavComponent,
    IssueListComponent,
    ActionButtonsComponent,
    NavItemComponent,
    IssueGroupComponent,
    IssueComponent,
    StarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
