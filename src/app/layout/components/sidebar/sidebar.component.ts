import { Component, OnInit } from '@angular/core';
import { SidebarLink } from '../../models/sidebar-link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  userStatus: string;
  sidebarLinks: SidebarLink[] = [
    {
      group: 'Raporty',
      links: [{ name: 'Raporty', href: 'layout' }],
      access: ['pracownik', 'lider', 'admin']
    },
    {
      group: 'Panel kierownika',
      links: [{ name: 'Raporty', href: 'layout/leader-panel' }],
      access: ['lider', 'admin']
    },
    {
      group: 'Panel admina',
      links: [{ name: 'Użytkownicy', href: 'layout/admin-panel' }],
      access: ['admin']
    },
  ];

  ngOnInit() {
    this.userStatus = localStorage.getItem('status');
  }
}
