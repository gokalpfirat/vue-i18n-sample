<template>
  <div class="navbar">
    <div class="navbar__left">
      <FontAwesomeIcon icon="bolt" class="navbar__logo" />
      <h1 class="navbar__title">{{ pageTitle }}</h1>
    </div>
    <div class="navbar__right">
      <RouterLink class="navbar__link" to="/">{{
        $t("homepage.menuName")
      }}</RouterLink>
      <RouterLink class="navbar__link" to="/contact">{{
        $t("contact.menuName")
      }}</RouterLink>
      <button
        v-if="!isLoggedIn"
        @click="switchModal(true)"
        class="navbar__login"
      >
        {{ $t("login") }}
      </button>
      <UserDropdown v-if="isLoggedIn" />
      <LanguageDropdown />
    </div>
    <div
      class="navbar__hamburger_icon"
      :class="{ 'navbar__hamburger_icon--active': showMenu }"
      @click="toggleMenu()"
    >
      <FontAwesomeIcon icon="bars" />
    </div>
    <HambugerMenu :showMenu="showMenu" @toggle="toggleMenu" />
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import UserDropdown from "./UserDropdown";
import LanguageDropdown from "./LanguageDropdown";
import HambugerMenu from "./HamburgerMenu";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    FontAwesomeIcon,
    LanguageDropdown,
    UserDropdown,
    HambugerMenu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    ...mapMutations(["switchModal"]),
  },
  computed: {
    pageTitle: function () {
      const routeName = this.$route.name;
      return routeName
        ? this.$t(`${this.$route.name}.pageName`)
        : this.$route.meta.pageTitle;
    },
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
<style>
.navbar {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 56px;
  background: #424C76;
  color: #FFFFFF;
  border-bottom: 2px solid #161927;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.navbar__left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar__right {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar__hamburger_icon {
  display: none;
  user-select: none;
  height: 100%;
  width: 50px;
  justify-content: center;
  align-items: center;
}

.navbar__hamburger_icon svg {
  transition: all 0.2s;
}

.navbar__hamburger_icon--active {
  background: #fff;
  color: black;
}

.navbar__hamburger_icon--active svg {
  transform: rotate(90deg);
}

.navbar__logo {
  font-size: 2rem;
  color: #FF8C42;
}

.navbar__title {
  margin: 0 0.5rem;
}

.navbar__link {
  color: #FF8C42;
  margin-right: 0.5rem;
}

.navbar__login {
  background: #fff;
  border: 1px solid #e8e8e8;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  min-height: 40px;
}

@media only screen and (max-width: 650px) {
  .navbar__right {
    display: none;
  }
  .navbar__hamburger_icon {
    display: flex;
  }
}

@media only screen and (min-width: 650px) {
  .navbar_hamburger_menu {
    display: none;
  }
}
</style>