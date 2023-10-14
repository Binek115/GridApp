import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public constructor(private readonly httpClient: HttpClient) { }

  public getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://api.escuelajs.co/api/v1/users');
  }
}
