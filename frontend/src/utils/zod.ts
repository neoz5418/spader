import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
// Import your language translation files
import translation from "./locales/zh-CN/zod.json";

// lng and resources key depend on your locale.
i18next.init({
  lng: "zh",
  resources: {
    zh: { 
      zod: translation,
      custom: {
        "Invalid phone number": "",
        my_error_key_with_value: "Something terrible {{msg}}",
      }    
    },
  },
});
z.setErrorMap(zodI18nMap);

// export configured zod instance
export { z }