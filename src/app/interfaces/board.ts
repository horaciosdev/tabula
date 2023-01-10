export interface Board {
  id?: number;
  title: string;
  columns: Column[];
}

export interface Column {
  id?: number;
  title: string;
  cards: Card[];
}

export interface Card {
  id?: number;
  title: string;
}
