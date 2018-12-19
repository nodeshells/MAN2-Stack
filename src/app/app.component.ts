import { Component } from "@angular/core";
import { SharedService } from "./shared/shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [SharedService]
})
export class AppComponent {
  public displayTextObject = { "hello": "" };
  public title = "app";

  constructor(private  sharedService: SharedService) {

  }

  getDisplayText() {
    this.sharedService.getHelloWorld().subscribe((res: any) => {
        this.displayTextObject = res;
      },
      error => {
        console.log(error);
      });
  }
}
