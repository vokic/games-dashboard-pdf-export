import { Component, Input } from '@angular/core';
import { BoardGame, difficultyTooltips } from '../../models/board-game.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class GameCardComponent {
  @Input() game!: BoardGame;

  difficultyTooltips = difficultyTooltips;

  getStarsForRating(): string[] {
    const fullStars = Array(this.game.rating).fill('star');
    const emptyStars = Array(5 - this.game.rating).fill('star_border');
    return fullStars.concat(emptyStars);
  }
}
