import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  links: any[] = [];
  tagFilter: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadLinks();
  }

  loadLinks(): void {
    this.apiService.getLinks(this.tagFilter).subscribe(
      (data) => (
        console.log(data),
        this.links = data),
      (error) => console.error('Error al cargar los enlaces:', error)
    );
  }

  applyFilter(): void {
    this.loadLinks();
  }

  viewDetails(id:string): void{
    console.log('ID seleccionado:', id); 
    window.location.href = `/details/${id}`;
  }
}
