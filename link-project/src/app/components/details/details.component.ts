import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit { 
  link: any
  linkId!: string;
  comments: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}
  
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.linkId = params['id']
      this.loadLinkDetails()
    })
  }

  loadLinkDetails() {
    this.apiService.getLinkDetails(this.linkId).subscribe(
      (link) => {
        this.link = link; 
        this.apiService.getComments(this.linkId).subscribe(
          (comments) => {
            this.comments = comments;  
          },
          (error) => {
            console.error('Error al cargar los comentarios:', error);
          }
        );
      },
      (error) => {
        console.error('Error al cargar los detalles:', error);
      }
    );
  }
  

  async handleVotes() {
    try {
      this.apiService.voteLink(this.linkId).subscribe(
        (result) => {
          this.link.votes = result.votes; 
        },
        (error) => {
          console.error('Error al votar:', error);
        }
      );
    } catch (error) {
      console.error('Error al votar:', error);
    }
  }

  async handleAddComment(id:string) {
    this.router.navigate(['/comment', id]);
  }
  
  
}
