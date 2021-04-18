<template>
  <div class="dropwdown">
    <multiselect
      v-model="value"
      :options="options"
      :searchable="false"
      :allow-empty="false"
      :close-on-select="true"
      :show-labels="false"
      @select="onSelect"
      track-by="lang"
    >
      <template slot="singleLabel" slot-scope="props">
        <img class="option__image" :src="props.option.img" alt="" />
        <span class="option__title">{{
          $t(`languages.${props.option.lang}`)
        }}</span>
      </template>
      <template slot="option" slot-scope="props">
        <img class="option__image" :src="props.option.img" alt="" />
        <span class="option__title">{{
          $t(`languages.${props.option.lang}`)
        }}</span>
      </template>
    </multiselect>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import { mapMutations, mapState } from "vuex";
import "vue-multiselect/dist/vue-multiselect.min.css";
export default {
  components: {
    Multiselect,
  },
  data() {
    const options = [
      {
        img:
          "https://www.erasmustrainingcourses.com/uploads/6/5/6/3/65630323/flag-of-england-english-flag-pictures-clipart-best-vr0swm-clipart_21.png",
        lang: "en",
      },
      {
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/220px-Flag_of_Turkey.svg.png",
        lang: "tr",
      },
    ];
    return {
      value: null,
      options,
    };
  },
  created() {
    this.value = this.options.find((option) => option.lang === this.language);
  },
  watch: {
    language() {
      this.value = this.options.find((option) => option.lang === this.language);
    },
  },
  methods: {
    onSelect(selectedOption) {
      this.changeLanguage(selectedOption.lang);
    },
    ...mapMutations(["changeLanguage"]),
  },
  computed: {
    ...mapState(["language"]),
  },
};
</script>
<style>
.dropwdown {
  width: 140px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
.option__image {
  display: inline-block;
  margin-right: 0.5rem;
  width: 20px;
  height: auto;
}
</style>