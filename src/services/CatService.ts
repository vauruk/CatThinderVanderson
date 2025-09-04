import axios from 'axios';
import { Cat } from './types';
import Config from 'react-native-config';

export class CatService {
  static async fetchCats(limit = 10): Promise<Cat[]> {
    const response = await axios.get<Cat[]>(
      `${Config.URL}/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`,
      {
        headers: {
          'x-api-key': Config.API_KEY,
        },
      },
    );
    return response.data;
  }
}
