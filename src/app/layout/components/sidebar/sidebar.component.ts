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
      access: ['Pracownik', 'Kierownik', 'Admin']
    },
    {
      group: 'Panel kierownika',
      links: [{ name: 'Raporty', href: 'layout/leader-panel' }],
      access: ['Kierownik', 'Admin']
    },
    {
      group: 'Panel admina',
      links: [{ name: 'Użytkownicy', href: 'layout/admin-panel' }],
      access: ['Admin']
    },
  ];

  ngOnInit() {
    this.userStatus = localStorage.getItem('status');
  }
}
