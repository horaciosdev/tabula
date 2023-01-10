import { Component } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { Board } from 'src/app/interfaces/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  board?: Board;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.getBoard(1);
  }

  getBoard(id: number): void {
    this.boardService.getBoard(id).subscribe((board) => (this.board = board));
  }
}
