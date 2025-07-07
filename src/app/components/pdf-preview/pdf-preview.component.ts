import { Component, Input } from '@angular/core';
import { BoardGame } from '../../models/board-game.model';
import { GameCardComponent } from '../game-card/game-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.css'],
  standalone: true,
  imports: [GameCardComponent, CommonModule],
})
export class PdfPreviewComponent {
  @Input() games: BoardGame[] = [];
}
