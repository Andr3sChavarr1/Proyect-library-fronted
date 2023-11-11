import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidt: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-libro-front';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidt;
    this.isSideNavCollapsed = data.collapsed;
    
  }
}
