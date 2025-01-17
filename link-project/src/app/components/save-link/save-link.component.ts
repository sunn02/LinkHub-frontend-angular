import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-link',
  imports: [CommonModule, FormsModule],
  templateUrl: './save-link.component.html',
  styleUrls: ['./save-link.component.css']
})
export class SaveLinkComponent {
  link = { title: '', url: '', description: '', tags: ''};

  constructor(private apiService: ApiService, private router: Router) {}

  AddLink() {
    const newLink = {
      ...this.link,
      tags: this.link.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    this.apiService.saveLink(newLink).subscribe(() => {
      console.log('Enlace creado con éxito');
      this.router.navigate(['/']);
    });
  }
}
