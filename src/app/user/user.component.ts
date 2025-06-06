import { Component, Input, input, computed, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // // signal approach
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>(); -- stores the event emitter. output type must be defined explicitly
  

  // imagePath = computed(() => `assets/users/${this.avatar}`);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
