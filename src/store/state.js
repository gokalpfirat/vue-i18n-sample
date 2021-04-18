import { i18n } from "../i18n";
export const state = {
  language: i18n.locale,
  currentUser: null,
  showModal: false,
  modalError: null,
  users: [
    {
      name: "Gokalp",
      email: "gokalpfirat@gmail.com",
      password: "123456"
    }
  ]
};
