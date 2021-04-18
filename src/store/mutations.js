import { i18n } from "../i18n";
export const mutations = {
  changeLanguage(state, lang) {
    state.language = lang;
    i18n.locale = state.language;
  },
  setUser(state, user) {
    state.currentUser = user;
  },
  registerUser(state, payload) {
    const { name, email, password } = payload;
    state.users.push({
      name,
      email,
      password
    });
  },
  logoutUser(state) {
    state.currentUser = null;
    state.modalError = null;
  },
  switchModal(state, show) {
    state.showModal = show;
  },
  setModalError(state, text) {
    state.modalError = text;
  }
};
