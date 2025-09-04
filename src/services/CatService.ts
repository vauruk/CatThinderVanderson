import axios from 'axios';
import { Cat } from './types';

export class CatService {
  static async fetchCats(limit = 10): Promise<Cat[]> {
    const response = await axios.get<Cat[]>(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
    );
    return response.data;
  }
}
