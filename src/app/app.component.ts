import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private _title: string = "Curso de Angular + Spring";

    public clicked(): void {
        console.log("Hello World, I`m here. ");
    }

    get title(): string {
        return this._title.toUpperCase();
    }
}
