import { Board } from '../interfaces/board';

export const BOARD: Board[] = [
  {
    id: 1,
    title: 'Board 1',
    columns: [
      {
        id: 1,
        title: 'column 1',
        cards: [
          {
            id: 1,
            title: 'card 1',
          },
          {
            id: 2,
            title: 'card 2',
          },
          {
            id: 3,
            title: 'card 3',
          },
        ],
      },
      {
        id: 2,
        title: 'column 2',
        cards: [
          {
            id: 4,
            title: 'card 4',
          },
          {
            id: 5,
            title: 'card 5',
          },
          {
            id: 6,
            title: 'card 6',
          },
        ],
      },
      {
        id: 3,
        title: 'column 3',
        cards: [
          {
            id: 7,
            title: 'card 7',
          },
          {
            id: 8,
            title: 'card 8',
          },
          {
            id: 9,
            title: 'card 9',
          },
        ],
      },
    ],
  },
];
