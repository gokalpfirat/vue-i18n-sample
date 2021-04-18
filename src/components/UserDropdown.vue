<template>
  <popper
    ref="popper"
    trigger="clickToOpen"
    :options="{
      placement: 'bottom',
      modifiers: {
        offset: { offset: '0,05px' },
      },
    }"
  >
    <div class="popper">
      <div>
        <strong>{{ $t("dropdown.email") }}:</strong> {{ getUserEmail }}
      </div>
      <button class="popper__logout" @click="closePopper">
        {{ $t("dropdown.logout") }}
      </button>
    </div>

    <button slot="reference" class="username">
      {{ getUserName }}
      <FontAwesomeIcon icon="caret-down" />
    </button>
  </popper>
</template>
<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import { mapGetters, mapMutations } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    Popper,
    FontAwesomeIcon,
  },
  methods: {
    closePopper() {
      this.logoutUser();
      this.$refs.popper.doClose();
    },
    ...mapMutations(["logoutUser"]),
  },
  computed: {
    ...mapGetters(["getUserName", "getUserEmail"]),
  },
};
</script>
<style>
.username {
  background: #fff;
  border: 1px solid #e8e8e8;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  min-height: 40px;
  outline: none;
}
.popper {
  padding: 0.5rem;
}
.popper__logout {
  background: red;
  border: 1px solid black;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.25rem;
  width: 80%;
  margin-top: 0.25rem;
}
</style>