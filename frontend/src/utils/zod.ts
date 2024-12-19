import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap, makeZodI18nMap } from "zod-i18n-map";
// Import your language translation files
// import translation from "./locales/zh-CN/zod.json";
import translation from "zod-i18n-map/locales/zh-CN/zod.json";

// lng and resources key depend on your locale.
i18next.init({
  lng: "zh",
  resources: {
    zh: { 
      zod: translation,
      custom: {
        invalid_phone_number: "无效的手机号码",
        invalid_password_uppercase: "密码必须包含至少一个大写字母",
        invalid_password_lowercase: "密码必须包含至少一个小写字母",
        invalid_password_number: "密码必须包含至少一个数字",
        invalid_password_special_character: "密码必须包含至少一个特殊字符",
        password_mismatch: "密码不一致",
      }    
    }
  },
});
// z.setErrorMap(zodI18nMap);
z.setErrorMap(makeZodI18nMap({ ns: ["zod", "custom"] }));

// export configured zod instance
export { z }