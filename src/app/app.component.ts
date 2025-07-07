import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-card/game-card.component';
import { BoardGame } from './models/board-game.model';
import { BOARD_GAMES } from './data/board-games.data';
import { PdfPreviewComponent } from './components/pdf-preview/pdf-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GameCardComponent, PdfPreviewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  boardGames: BoardGame[] = BOARD_GAMES;

  showPdfModal = false;

  openPdfModal() {
    this.showPdfModal = true;
  }

  closePdfModal() {
    this.showPdfModal = false;
  }
}
