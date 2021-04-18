import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    login: "Login / Register",
    dropdown: {
      logout: "Logout",
      email: "Email",
      name: "Name"
    },
    languages: {
      en: "English",
      tr: "Turkish"
    },
    homepage: {
      menuName: "Homepage",
      pageName: "Sample",
      title: "Hello World",
      text:
        "Why I say old chap that is spiffing, wellies blow off skive off get stuffed mate I brown bread barney, only a quid bugger ruddy hotpot nancy boy butty. You mug Jeffrey the BBC lavatory chap cor blimey guvnor up the kyver horse play Why it's all gone to pot, at public school barney spend a penny that bodge he nicked it happy days jolly good the wireless, gutted mate super cuppa twit he lost his bottle me old mucker is cup of tea. Show off show off pick your nose and blow off Elizabeth on your bike mate Charles brolly I cheeky barmy bobby boot in my flat, bleeding Jeffrey spiffing nice one burke young delinquent chip shop so I said sloshed don't get shirty with me, I don't want no agro mush lavatory spend a penny cobblers Queen's English at public school bugger ummm I'm telling. Fanny around blower butty gosh off his nut spiffing good time bleeder tosser cor blimey guvnor starkers, bleeding horse play do one haggle cockup lost the plot brown bread morish cuppa lurgy, plastered Richard mush chimney pot barmy give us a bell baking cakes amongst. Bog bender skive off vagabond up the kyver bleeding, Richard I grub squiffy, tinkety tonk old fruit a load of old tosh a buggered. Morish I Queen's English vagabond chap nice one he legged it knackered pear shaped fantastic, a starkers gosh butty easy peasy only a quid bamboozled lost the plot, James Bond it's all gone to pot cobblers naff so I said bum bag hanky panky car boot."
    },
    contact: {
      menuName: "Contact Us",
      pageName: "Contact Us",
      title: "Reach us by filling form",
      send: "Send",
      name_placeholder: "Name",
      email_placeholder: "Email",
      phone_placeholder: "Phone",
      country_placeholder: "Choose your country",
      message_placeholder: "Write your message here...",
      success: "Form successfully sent!",
      error: "Your informations are missing or wrong!"
    },
    modal: {
      titleLogin: "Login",
      titleRegister: "Register",
      name_placeholder: "Nema",
      email_placeholder: "Email",
      password_placeholder: "Password",
      noAccount: "Don't you have an account? Click to register!",
      haveAccount: "Have account already? Click to login!",
      login: "Login",
      register: "Register",
      unsuccessfullLogin: "Unsuccesfull login!",
      unsuccessfullRegister: "Missing inputs!"
    },
    country: {
      TR: "Turkey",
      US: "United States of America",
      GB: "United Kingdom",
      DE: "Germany",
      SE: "Sweden",
      KE: "Kenya",
      BR: "Brazil",
      ZW: "Zimbabwe"
    }
  },
  tr: {
    login: "Giriş / Kayıt",
    languages: {
      en: "İngilizce",
      tr: "Türkçe"
    },
    dropdown: {
      logout: "Çıkış",
      email: "E-Posta",
      name: "İsim"
    },
    homepage: {
      title: "Merhaba Dünya",
      menuName: "Anasayfa",
      text:
        "Neden fışkıran yaşlı ahbap diyorum, küstahlar dolup taşıyor dostum ben esmer ekmek barney, sadece bir pound pislik kırmızı hotpot nancy boy butty. BBC tuvalet adamı Jeffrey'i kandırıyorsun, kyver atı oyununa haykırıyorsun Barney neden her şey çöpe gitti, devlet okulunda barney bir kuruş harcadı, onu çaldı mutlu günler jolly iyi kablosuz, gutted mate super cuppa twit şişesini kaybetti Benim yaşlı pislik bir fincan çaydır. Gösteri havası burnunu çek ve Elizabeth'i bisikletle uçur dostum Charles brolly Dairemde arsız serseri bobby botum, kanayan Jeffrey güzel bir burke genç suçlu cips dükkanını kokluyorum, bu yüzden büzülme benimle büzülme dedim. 'Hiçbir tarımsal lavabonun bir kuruşunu ayakkabıcılara harcamak istemiyorum Kraliçe'nin İngilizcesi devlet okulunda herif hmm diyorum. Fanny üfleyici butty fındığından iyi vakit geçiriyor kanama fırlatıcısı cor blimey guvnor starkers, kanayan at oyunu bir pazarlık yap, komployu kaybetti kahverengi ekmeği morish cuppa lurgy, sıvalı Richard lapa baca kabı barmy bize aralarında çan pişirme kekleri versin. Bataklık bükücü kyver kanamasından sıyrılır, Richard ben cılız, tinkety tonk eski meyveyi bir sürü eski tosh a delirmiş. Morish I Queen'in İngiliz serseri ahbap güzel olanı bacaklarını uzattı armut biçimli fantastik, aptallar gosh butty easy peasy sadece bir pound dolandırıcılık olay örgüsünü kaybetti, James Bond her şey çömlek ayakkabıcılarına gitti, bu yüzden serseri mendil panky araba bagajı dedim."
    },
    contact: {
      menuName: "Bize Ulaş",
      pageName: "Bize Ulaş",
      title: "Bize formu doldurarak ulaş",
      send: "Yolla",
      name_placeholder: "İsim",
      email_placeholder: "E-Posta",
      phone_placeholder: "Telefon",
      country_placeholder: "Ülkenizi seçin",
      message_placeholder: "Mesajınızı buraya yazın...",
      success: "Form başarıyla gönderildi!",
      error: "Bilgilerinizi hata veya eksik girdiniz!"
    },
    modal: {
      titleLogin: "Giriş Yap",
      titleRegister: "Kayıt Ol",
      name_placeholder: "İsim",
      email_placeholder: "E-Posta",
      password_placeholder: "Şifreniz",
      noAccount: "Hesabın yok mu? Kayıt olmak için tıkla!",
      haveAccount: "Zaten hesabınız var mı? Giriş yapmak için tıkla!",
      login: "Giriş",
      register: "Kayıt",
      unsuccessfullLogin: "Başarısız giriş!",
      unsuccessfullRegister: "Bilgiler eksik!"
    },
    country: {
      TR: "Türkiye",
      US: "Amerika Birleşik Devletleri",
      GB: "Birleşik Krallık",
      DE: "Almanya",
      SE: "İsveç",
      KE: "Kenya",
      BR: "Brezilya",
      ZW: "Zimbabve"
    }
  }
};

const browserLanguage = navigator.language.split("-")[0];
export const i18n = new VueI18n({
  locale: messages[browserLanguage] ? browserLanguage : "en",
  fallbackLocale: "en",
  messages
});
