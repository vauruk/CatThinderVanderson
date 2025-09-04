import axios from 'axios';
import { CatDetail } from './types';

export class CatDetailService {
  static async fetchCatDetail(id: string): Promise<CatDetail> {
    const response = await axios.get<CatDetail>(
      `https://api.thecatapi.com/v1/images/${id}`,
    );
    return response.data;
  }
}
