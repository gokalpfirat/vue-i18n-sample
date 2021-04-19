<template>
  <Modal ref="modalName">
    <template v-slot:header>
      <div>
        <h1 class="modal__title">{{ modalTitle }}</h1>
      </div>
    </template>

    <template v-slot:body>
      <div class="modal__error" v-if="modalError">{{ modalError }}</div>
      <input
        v-if="state === 'register'"
        type="text"
        name="name"
        :placeholder="$t('modal.name_placeholder')"
        v-model="name"
        class="modal__input"
      />
      <input
        class="modal__input"
        type="email"
        name="email"
        :placeholder="$t('modal.email_placeholder')"
        v-model="email"
      />
      <input
        class="modal__input"
        type="password"
        :placeholder="$t('modal.password_placeholder')"
        name="password"
        v-model="password"
      />
      <a
        class="modal__loginOrRegister"
        href=""
        @click.prevent="changeState()"
        >{{ loginOrRegister }}</a
      >
    </template>

    <template v-slot:footer>
      <div>
        <button
          v-if="state === 'register'"
          @click="register()"
          class="modal__button"
        >
          {{ $t("modal.register") }}
        </button>
        <button v-if="state === 'login'" @click="login()" class="modal__button">
          {{ $t("modal.login") }}
        </button>
      </div>
    </template>
  </Modal>
</template>
<script>
import Modal from "./Modal";
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      state: "login",
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.loginUser({
        email,
        password,
      }).then(
        () => {
          this.setModalError(null);
          this.switchModal(false);
        },
        () => {
          this.setModalError(this.$t("modal.unsuccessfullLogin"));
        }
      );
    },
    register() {
      const { email, name, password } = this;
      if (email.length === 0 || name.length === 0 || password.length === 0) {
        this.setModalError(this.$t("modal.unsuccessfullRegister"));
        return false;
      }
      this.registerUser({
        name,
        email,
        password,
      }).then(
        () => {
          this.setModalError(null);
          this.changeState();
        },
        () => {
          this.setModalError(this.$t("modal.registerAlreadyInUse"));
        }
      );
    },
    changeState() {
      this.state = this.state === "login" ? "register" : "login";
    },
    ...mapMutations(["switchModal", "setModalError"]),
    ...mapActions(["loginUser", "registerUser"]),
  },
  computed: {
    ...mapState(["modalError"]),
    loginOrRegister() {
      return this.state === "login"
        ? this.$t("modal.noAccount")
        : this.$t("modal.haveAccount");
    },
    modalTitle() {
      return this.state === "login"
        ? this.$t("modal.titleLogin")
        : this.$t("modal.titleRegister");
    },
  },
};
</script>
<style>
.modal__title {
  margin: 0;
}

.modal__input {
  display: block;
  width: 100%;
  background: #fff;
  border: 1px solid #e8e8e8;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  min-height: 40px;
  margin-bottom: 0.5rem;
}

.modal__error {
  background: red;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0.25rem;
}

.modal__button {
  font-weight: bold;
  background: #fff;
  border: 1px solid black;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  min-height: 40px;
}

.modal__loginOrRegister {
  display: inline-block;
  color: #FF8C42;
}
</style>