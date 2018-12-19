import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {

  constructor(private http: HttpClient) {
  }

  getHelloWorld() {
    return this.http.get("http://localhost:3000/api/hello").pipe(map((res: any) => {
        return res;
      }
    ))
      ;

  }
}
