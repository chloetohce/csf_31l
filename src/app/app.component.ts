import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'csf_31l';

  texts: string[] = [];

  allClicks = 0;

  // Event handler
  whenTotalClicks(clicks: number, idx: number) {
    console.info("got totalClicks event", clicks)
    console.info(`Got ${clicks} from index ${idx}`) //String interpolation
    this.allClicks += clicks;
  }

  whenNewText(newText: string) {
    this.texts.push(newText)
  }
}
