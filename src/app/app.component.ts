import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe_app';

  loadedFeature = 'recipe' // stores which feature should be displayed

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
