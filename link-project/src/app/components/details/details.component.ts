import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}
  
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.linkId = params['id']
      this.loadLinkDetails()
    })
  }

  loadLinkDetails(){
    this.apiService.getLinkDetails(this.linkId).subscribe(
      (data:any) => this.link = data
    )
  }
}
