import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ee57c704-ab86-4dee-8df7-88171f2263de',
  },
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    return await instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
};
