import axios from 'axios';
import Config from 'react-native-config';
import { VotePayload } from './types';

export class VoteService {
  static async sendVote(payload: VotePayload): Promise<void> {
    await axios.post(`${Config.URL}/v1/votes`, payload, {
      headers: {
        'x-api-key': Config.API_KEY,
      },
    });
  }
}
