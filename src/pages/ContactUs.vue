<template>
  <div>
    <h2>{{ $t("contact.title") }}</h2>
    <div v-if="isSuccesfull === false" class="contact__error">
      {{ $t("contact.error") }}
    </div>
    <div v-else-if="isSuccesfull === true" class="contact__success">
      {{ $t("contact.success") }}
    </div>
    <form v-on:submit.prevent="onSubmit">
      <input
        type="text"
        name="name"
        :placeholder="$t('contact.name_placeholder')"
        v-model="name"
        :disabled="getUserName"
        class="form__input"
      />
      <input
        type="email"
        name="email"
        :placeholder="$t('contact.email_placeholder')"
        v-model="email"
        :disabled="getUserEmail"
        @input="validateEmail"
        class="form__input"
        :class="{
          'input--valid': isEmailValid === true,
          'input--invalıd': isEmailValid === false,
        }"
      />
      <input
        type="tel"
        name="tel"
        :placeholder="$t('contact.phone_placeholder')"
        v-model="phonenumber"
        class="form__input"
        :class="{
          'input--valid': isPhoneNumberValid === true,
          'input--invalıd': isPhoneNumberValid === false,
        }"
        @input="validatePhoneNumber"
      />
      <multiselect
        v-model="country_code"
        :options="filteredCountryList"
        :searchable="true"
        :allow-empty="false"
        :close-on-select="true"
        :show-labels="false"
        :internal-search="false"
        @search-change="searchCountries"
        label="id"
        track-by="id"
        :placeholder="$t('contact.country_placeholder')"
        class="form__countryselect"
      >
        <template slot="singleLabel" slot-scope="props">
          <span class="option__title">{{
            $t(`country.${props.option.id}`)
          }}</span>
        </template>
        <template slot="option" slot-scope="props">
          <span class="option__title">
            {{ $t(`country.${props.option.id}`) }}
          </span>
        </template>
      </multiselect>
      <textarea
        class="form__textarea"
        name="textarea"
        cols="30"
        rows="10"
        v-model="text"
        :placeholder="$t('contact.message_placeholder')"
      ></textarea>
      <button class="form__button" type="submit">
        {{ $t("contact.send") }}
      </button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      name: "",
      email: "",
      phonenumber: "",
      country_code: null,
      text: "",
      isPhoneNumberValid: null,
      isEmailValid: null,
      isSuccesfull: null,
      countries: [
        { id: "TR" },
        { id: "US" },
        { id: "GB" },
        { id: "DE" },
        { id: "SE" },
        { id: "KE" },
        { id: "BR" },
        { id: "ZW" },
      ],
      filteredCountryList: [
        { id: "TR" },
        { id: "US" },
        { id: "GB" },
        { id: "DE" },
        { id: "SE" },
        { id: "KE" },
        { id: "BR" },
        { id: "ZW" },
      ],
    };
  },
  methods: {
    onSubmit() {
      if (
        this.isPhoneNumberValid === false ||
        this.isEmailValid === false ||
        this.name.length === 0 ||
        this.email.length === 0 ||
        this.phonenumber.length === 0 ||
        !this.country_code ||
        this.text.length === 0
      ) {
        window.scrollTo(0, 0);
        this.isSuccesfull = false;
        return false;
      }
      const data = {
        name: this.name,
        email: this.email,
        phonenumber: this.phonenumber,
        country_code: this.country_code.id,
        text: this.text,
      };
      const jsonData = JSON.stringify(data);
      this.isSuccesfull = true;
      setTimeout(() => {
        this.isSuccesfull = null;
      }, 5000);
      console.log(jsonData);
    },
    searchCountries(query) {
      this.filteredCountryList = this.countries.filter((country) => {
        return this.$t(`country.${country.id}`)
          .toLocaleLowerCase(this.language)
          .includes(query.toLocaleLowerCase(this.language));
      });
    },
    validateEmail(e) {
      if (e.target.value.length === 0) {
        this.isEmailValid = null;
        return;
      }
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.isEmailValid = regex.test(e.target.value.toLowerCase());
    },
    validatePhoneNumber(e) {
      if (e.target.value.length === 0) {
        this.isPhoneNumberValid = null;
        return;
      }
      const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
      this.isPhoneNumberValid = regex.test(e.target.value);
    },
  },
  created() {
    this.name = this.getUserName || "";
    this.email = this.getUserEmail || "";
  },
  watch: {
    getUserName() {
      this.name = this.getUserName;
    },
    getUserEmail() {
      this.email = this.getUserEmail;
    },
  },
  computed: {
    ...mapGetters(["getUserName", "getUserEmail"]),
  },
};
</script>
<style>
input:focus {
  outline: none;
}
.input--valid {
  border: 2px solid green !important;
}
.input--invalıd {
  border: 2px solid red !important;
}

.form__input {
  display: block;
  width: 100%;
  background: #fff;
  border: 1px solid #e8e8e8;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  min-height: 40px;
  margin-bottom: 0.5rem;
}

.form__input[disabled] {
  opacity: 0.5;
}

.form__textarea {
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 0.25rem;
  padding: 0.5rem;
  outline: none;
  resize: none;
  margin-bottom: 0.5rem;
}

.form__button {
  display: block;
  border: 1px solid #e8e8e8;
  padding: 0.25rem;
  width: 50%;
  margin: 0 auto;
  border-radius: 0.25rem;
  font-weight: bold;
  background: #FF8C42;
}

.form__countryselect {
  margin-bottom: 0.5rem;
}

.contact__error {
  background: red;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0.25rem;
}

.contact__success {
  background: green;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0.25rem;
}
</style>