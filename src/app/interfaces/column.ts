import { Card } from './card';

export interface Column {
  id?: number;
  title: string;
  cards: Card[];
}
