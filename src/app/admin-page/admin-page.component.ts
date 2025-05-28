import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

export interface InboxItem {
  icon?: string;
  title: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule 
  ]
})
export class AdminPageComponent implements OnInit {

  public searchTerm: string = ''; 
  public inboxItems: InboxItem[] = [];
  public activeTab: string = 'hospitales';
  public adminUserName: string = "Admin Central";

  iconInfo = 'ℹ️';
  iconSearch = '🔍';

  constructor(private router: Router) {} 

  ngOnInit(): void {
    this.loadInboxItems();
  }

  loadInboxItems(): void {
    this.inboxItems = [
      {
        icon: this.iconInfo,
        title: 'Pago de Clinica Los Olivos',
        date: '27/06/2025',
        time: '18:08'
      },
      {
        icon: this.iconInfo,
        title: 'Pago pendiente Hospital Mexico',
        date: '30/06/2025',
        time: '13:20'
      }
    ];
  }

  searchStatistics(): void {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      console.log('Buscando estadísticas para (con ngModel):', this.searchTerm.trim());
    } else {
      console.log('Por favor, ingrese una palabra clave para buscar estadísticas.');
    }
  }

  selectTab(tabName: string): void {
    this.activeTab = tabName;
    console.log('Pestaña seleccionada:', tabName);
    if (tabName === 'hospitales') {
      console.log('Mostrando lista de hospitales y clínicas...');
    } else if (tabName === 'auditoria') {
      console.log('Mostrando sección de auditoría...');
    }
  }

  goToCalendario(): void {
    this.router.navigate(['/calendario-admin']);
    console.log('Navegando a la página de calendario...');
  }

  viewSystemLogs(): void {
    console.log('Viendo logs del sistema...');
  }

  manageUsers(): void {
    console.log('Gestionando usuarios del sistema...');
  }

}