import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class DataService {

  constructor(private http: Http) { }
getUsers(): Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  .map((res: Response) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Service Error'));
}

getAlbums(id): Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/albums?' + 'userId=' + id)
  .map((res: Response) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Service Error'));
}
getPhotos(id): Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/photos?' + 'albumId=' + id)
  .map((res: Response) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Service Error'));
}
}
