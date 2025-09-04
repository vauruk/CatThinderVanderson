import { Cat } from '../services/types';

export interface CatState {
  cats: Cat[];
  loading: boolean;
  error: string | null;
}
import { CatDetail } from '../services/types';

export interface CatDetailState {
  detail: CatDetail | null;
  loading: boolean;
  error: string | null;
}
