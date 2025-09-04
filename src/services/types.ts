export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatBreed {
  name: string;
  origin: string;
  life_span: string;
}

export interface CatDetail {
  id: string;
  url: string;
  breeds: CatBreed[];
}
