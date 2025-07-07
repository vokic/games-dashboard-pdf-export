import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- import this
import { GameCardComponent } from './components/game-card/game-card.component';
import { BoardGame } from './models/board-game.model';
import { BOARD_GAMES } from './data/board-games.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GameCardComponent], // <-- add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  boardGames: BoardGame[] = BOARD_GAMES;
}
