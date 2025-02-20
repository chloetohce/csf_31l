import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Output()
  onNewText = new Subject<string>()

  private text = '';

  handleKeyPress(event: any) {
    console.info(event.target.value);
    this.text = event.target.value;
  }

  handleClick() {
    this.onNewText.next(this.text);
  }
}
