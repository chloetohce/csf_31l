import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-text',
  standalone: false,
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input()
  myText: string = ''

  @Output()
  totalClicks = new Subject<number>()

  protected counter = 0 // protected = only visible in the class

  protected textClicked() {
    this.counter++ //For typescript, every class variable needs to have this infront
  }

  protected clearCounter() {
    this.totalClicks.next(this.counter)
    this.counter = 0;
  }
}
