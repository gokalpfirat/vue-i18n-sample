export const actions = {
  loginUser({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      const { email, password } = payload;
      const user = state.users.find((user) => user.email === email);
      if (user && user.password === password) {
        commit("setUser", user);
        return resolve();
      } else {
        return reject();
      }
    });
  }
};
