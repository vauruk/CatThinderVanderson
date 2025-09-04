import axios from 'axios';
import { CatDetail } from './types';
import Config from 'react-native-config';

export class CatDetailService {
  static async fetchCatDetail(id: string): Promise<CatDetail> {
    const response = await axios.get<CatDetail>(
      `${Config.URL}/v1/images/${id}`,
      {
        headers: {
          'x-api-key': Config.API_KEY,
        },
      },
    );
    return response.data;
  }
}
