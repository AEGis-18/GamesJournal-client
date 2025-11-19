export interface Game {
  id: number; 
  slug: string;
  title: string;
  coverUrl: string;
  genres: string[];
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: { empty: boolean; sorted: boolean; unsorted: boolean };
}

export type GameResponse = {
  content: Game[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
};
