import Vue from "vue";
import VueI18n from "vue-i18n";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";
import elementENLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "./zh.js";
import enLocale from "./en.js";

import { getLocal } from "@/utils/auth.js";

Vue.use(VueI18n);

const messages = {
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  en: {
    ...enLocale,
    ...elementENLocale
  }
};

const i18n = new VueI18n({
  locale: getLocal("lang") || "en",
  fallbackLocale: "zh",
  messages
});

export default i18n;
