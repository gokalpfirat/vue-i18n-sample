<template>
  <div class="hamburger_menu" :class="{ 'hamburger_menu--show': showMenu }">
    <RouterLink
      class="navbar__link hamburger_menu--link"
      to="/"
      @click.native="$emit('toggle')"
      >{{ $t("homepage.menuName") }}</RouterLink
    >
    <RouterLink
      class="navbar__link hamburger_menu--link"
      to="/contact"
      @click.native="$emit('toggle')"
      >{{ $t("contact.menuName") }}</RouterLink
    >
    <div
      class="navbar__link hamburger_menu--link"
      v-if="!isLoggedIn"
      @click="switchModal(true)"
    >
      {{ $t("login") }}
    </div>
    <div v-if="isLoggedIn" class="hamburger_menu__userinfo">
      <div>
        <strong>{{ $t("dropdown.name") }}:</strong> {{ getUserName }}
      </div>
      <div>
        <strong>{{ $t("dropdown.email") }}:</strong> {{ getUserEmail }}
      </div>
      <div class="hamburger_menu__logout" @click="logoutUser">
        {{ $t("dropdown.logout") }}
      </div>
    </div>
    <div class="hamburger_menu__languages">
      <div
        class="hamburger_menu__language"
        :class="{ 'hamburger_menu__language--active': language === 'en' }"
        @click="changeLanguage('en')"
      >
        <img
          class="hamburger_menu__languageImage"
          src="https://www.erasmustrainingcourses.com/uploads/6/5/6/3/65630323/flag-of-england-english-flag-pictures-clipart-best-vr0swm-clipart_21.png"
          alt=""
        />
        {{ $t("languages.en") }}
      </div>
      <div
        class="hamburger_menu__language"
        @click="changeLanguage('tr')"
        :class="{ 'hamburger_menu__language--active': language === 'tr' }"
      >
        <img
          class="hamburger_menu__languageImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/220px-Flag_of_Turkey.svg.png"
          alt=""
        />{{ $t("languages.tr") }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  props: ["showMenu"],
  methods: {
    ...mapMutations(["switchModal", "logoutUser", "changeLanguage"]),
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getUserName", "getUserEmail"]),
    ...mapState(["language"]),
  },
};
</script>
<style>
.hamburger_menu {
  color: #000;
  display: none;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  transform: translate(0, 100%);
  left: 0;
  right: 0;
  z-index: 1;
  background: #fff;
}

.hamburger_menu--show {
  display: flex;
}

.hamburger_menu--close {
  display: none;
}

.hamburger_menu--link {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  height: 30px;
  border-bottom: 1px solid black;
}

.hamburger_menu__userinfo {
  border-bottom: 1px solid black;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hamburger_menu__languages {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}

.hamburger_menu__language {
  width: 50%;
  padding: 1rem;
  border-right: 1px solid black;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.hamburger_menu__languageImage {
  display: inline-block;
  margin-right: 0.5rem;
  width: 20px;
  height: auto;
}

.hamburger_menu__language--active {
  background: #FF8C42;
  color: #fff;
}

.hamburger_menu__logout {
  background: red;
  border: 1px solid black;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.25rem;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 0.25rem;
}
</style>