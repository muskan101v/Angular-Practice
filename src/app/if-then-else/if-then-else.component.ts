import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-then-else',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-then-else.component.html',
  styleUrls: ['./if-then-else.component.scss'],
})
export class IfThenElseComponent {
  /* NgIf or [hidden]?
It’s interesting to note that even though NgIf “hides” our content, it actually gets completely destroyed
 by Angular whenever it needs to render or remove the template or component we bind it to.
If we’d like our content to still be visible in the DOM, however remain hidden, 
then we should introduce the hidden attribute:
*/

  hidden = true;

  hidden2 = true;
  hidden3: any;
  hidden4: any = true;

  isLoggedIn = true;

  toggle() {
    this.hidden = !this.hidden;
  }

  toggle2() {
    this.hidden2 = !this.hidden2;
  }
  toggle3() {
    this.hidden3 = !this.hidden3;
  }

  toggle4() {
    this.hidden4 = !this.hidden4;
  }
}
