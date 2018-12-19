import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";

export const export_decreation = [AppComponent, TestComponent];

const myRoutes = [
  {
    path: "", component: AppComponent
  },
  { path: "test", component: TestComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(myRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
