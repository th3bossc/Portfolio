import { Injectable } from '@angular/core';
import { Observable, pipe, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface chips {
  name : string;
  icon : string;
};


interface link {
  label : string;
  href : string;
  style ?: string;
};

export interface project {
  title : string;
  date : string;
  desc : string;
  deployed ?: string;
  stack : chips[];
  links : link[];
};

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  databaseUrl : string = 'https://portfoliodatabase-14f98-default-rtdb.firebaseio.com/projects.json';
  constructor(private http : HttpClient) { }

  postData(newProject : project) : void {
    console.log(newProject);
    this.http.post<project>(this.databaseUrl, newProject).subscribe();
  }

  getData() : Observable<project[]> {
    return this.http.get<project[]>(this.databaseUrl).pipe(map((data) => {
      return Object.values(data).reverse();
    }))
  }
}
