<template>
  <div id="app">
    <Navbar />
    <!-- <RouterLink to="/deneme">Git</RouterLink> -->
    <div class="content">
      <RouterView></RouterView>
    </div>
    <LoginModal v-if="!isLoggedIn" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    LoginModal,
  },
  methods: {
    changeLang() {
      this.$store.commit("increment");
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");
html {
  box-sizing: border-box;
  font-size: 16px;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Noto Sans JP", sans-serif;
  position: relative;
  min-height: 100vh;
  margin: 0;
  padding-bottom: 90px;
  background: #626FA7;
  overflow-x: hidden;
}
.content {
  background: rgba(255, 255, 255, 0.8);
  margin-top: 2rem;
  border-radius: 2rem;
  border: 2px solid #FCAF58;
  max-width: 80%;
  margin: 2rem auto;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
