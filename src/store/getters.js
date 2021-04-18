export const getters = {
  getUserName(state) {
    return state.currentUser ? state.currentUser.name : null;
  },
  getUserEmail(state) {
    return state.currentUser ? state.currentUser.email : null;
  },
  isLoggedIn(state) {
    return state.currentUser ? true : false;
  }
};
