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
  async follow(userId) {
    return await instance.post(`follow/${userId}`).then((res) => res.data);
  },
  async unfollow(userId) {
    return await instance.delete(`follow/${userId}`).then((res) => res.data);
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  async getProfile(userId) {
    return await instance.get(`profile/${userId}`).then((res) => res.data);
  },
  async getStatus(userId) {
    return await instance.get(`profile/status/${userId}`).then((res) => res.data);
  },
  async updateStatus(status) {
    return await instance.put(`profile/status`, { status }).then((res) => res.data);
  },
};

export const authAPI = {
  async me() {
    return await instance.get(`auth/me`).then((res) => res.data);
  },
};
