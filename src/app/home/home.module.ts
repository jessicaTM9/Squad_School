import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule],
    exports: [],
})

export class HomeModule{

}