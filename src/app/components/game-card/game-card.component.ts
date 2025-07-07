import { Component, Input } from '@angular/core';
import { BoardGame, difficultyTooltips } from '../../models/board-game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
  standalone: true,
})
export class GameCardComponent {
  @Input() game!: BoardGame;

  difficultyTooltips = difficultyTooltips;
}
