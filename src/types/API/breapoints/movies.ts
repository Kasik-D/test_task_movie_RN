export type MovieAPIParams = {
  limit?: number;
  offset?: number;
  order?: SortingOrders;
  sort?: Sort;
  search?: string;
};

export enum SortingOrders {
  Asc = 'ASC',
  Desc = 'DESC',
}
export enum Sort {
  id = 'id',
  title = 'title',
  year = 'year',
}

export type Movie = {
  id: number;
  title: string;
  year: number;
  format: string;
  createdAt: string;
  updatedAt: string;
};

export type AddMovie = {
  title: string;
  year: string | number;
  format: string;
  actors: string[];
};
