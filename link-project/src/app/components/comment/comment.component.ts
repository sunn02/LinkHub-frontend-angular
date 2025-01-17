import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment',
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit{
  linkId!:string
  newComment = '';
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.linkId = params['id'];
      console.log('Link ID:', this.linkId);
    });
  }
  
  AddComment() {
    if (this.newComment.trim()) {
      this.apiService.commentLink(this.linkId, this.newComment).subscribe(
        response => {
          console.log('Comentario agregado con éxito:', response);
          this.newComment = '';
        },
        error => {
          console.error('Error al agregar el comentario:', error);
        }
      );
    } else {
      console.error('El comentario no puede estar vacío');
    }
  }
}
