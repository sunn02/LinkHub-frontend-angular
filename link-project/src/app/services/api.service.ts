import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3005';

  constructor(private http: HttpClient) {}

  getLinks(tagFilter: string | null = null): Observable<any> {
    const url = tagFilter ? `${this.API_URL}/links/tags/${tagFilter}` : `${this.API_URL}/links`;
    return this.http.get(url);
  }

  getLinkDetails(linkId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/links/${linkId}`);
  }


  getComments(linkId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/comments/${linkId}`);
  }

  voteLink(linkId: string): Observable<any> {
    return this.http.put(`${this.API_URL}/links/vote/${linkId}`, { vote: 1 });
  }

  commentLink(linkId: string, content: string): Observable<any> {
    return this.http.post(`${this.API_URL}/comments/${linkId}`, { content });
  }

  saveLink(linkData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/links`, linkData);
  }
}
