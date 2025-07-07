import { Component, Input } from '@angular/core';
import { BoardGame } from '../../models/board-game.model';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.css'],
  standalone: true,
  imports: [GameCardComponent],
})
export class PdfPreviewComponent {
  @Input() games: BoardGame[] = [];
}
