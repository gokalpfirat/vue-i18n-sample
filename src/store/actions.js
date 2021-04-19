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
  },
  registerUser({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      const { name, email, password } = payload;
      const user = state.users.find((user) => user.email === email);
      if (user) {
        return reject();
      } else {
        commit("registerUser", {name, email, password});
        return resolve();
      }
    });
  }
};
