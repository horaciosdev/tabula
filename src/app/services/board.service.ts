import { Injectable } from '@angular/core';
import { Board } from '../interfaces/board';
import { BOARD } from '../mocks/boards';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}

  getBoard(id: number): Observable<Board> {
    let board = BOARD.find((board) => board.id === id);
    return of(board!);
  }
}
