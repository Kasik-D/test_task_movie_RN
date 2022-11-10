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

export type Actor = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type AddMovie = {
  title: string;
  year: string | number;
  format: string;
  actors: string[];
};

export type MovieIdType = {
  movieId: string | number;
};

export type FileImport = {
  type: 'success';
  name: string;
  size?: number | undefined;
  uri: string;
  mimeType?: string | undefined;
  lastModified?: number | undefined;
  file?: File | undefined;
  output?: FileList | null | undefined;
};
