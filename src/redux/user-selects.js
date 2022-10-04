import { createSelector } from 'reselect';

const usersSelect = (state) => {
  return state.usersPage.users;
};

export const userFilter = createSelector(usersSelect, (users) => users.filter((u) => true));

export const pageSize = (state) => {
  return state.usersPage.pageSize;
};
export const totalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const currentPage = (state) => {
  return state.usersPage.currentPage;
};
export const isFetching = (state) => {
  return state.usersPage.isFetching;
};
