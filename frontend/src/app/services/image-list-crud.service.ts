import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { ImageItem } from "../models/Image";

@Injectable({
  providedIn: "root"
})

export class ImageListCrudService {
  private url = "http://localhost:3000/images";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json " }),
  }

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }

  fetchAll(): Observable<ImageItem[]> {
    return this.http
      .get<ImageItem[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched images")),
        catchError(
          this.errorHandlerService.handleError<ImageItem[]>("fetchAll", [])
        )
      );
  }


}