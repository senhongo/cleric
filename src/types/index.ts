interface ItemById<T> {
  [id: string]: T;
}

export interface Collection<T> {
  byId: ItemById<T>;
  allIds: string[];
}
