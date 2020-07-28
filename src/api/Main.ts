import axios from 'axios';

const BASE_URL = 'https://localhost:3333';

export default class MainAPI {
  static getPosts() {
    return axios.get(`${BASE_URL}/posts`);
  }
}
