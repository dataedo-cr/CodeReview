import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeReview';
  scriptExampleValue = 'SELECT [Name], [Age] FROM [People] WHERE [Age] > 18;';
}
