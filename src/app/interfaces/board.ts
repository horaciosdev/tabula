import { Column } from './column';

export interface Board {
  id?: number;
  title: string;
  columns: Column[];
}
