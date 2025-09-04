export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatState {
  cats: Cat[];
  loading: boolean;
  error: string | null;
}
