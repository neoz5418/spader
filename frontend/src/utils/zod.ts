import i18next, {setDefaultNamespace, t} from "i18next";
import { z } from "zod";
import { zodI18nMap, makeZodI18nMap } from "zod-i18n-map";
// Import your language translation files
// import translation from "./locales/zh-CN/zod.json";
import { initReactI18next } from 'react-i18next';
import translation from "zod-i18n-map/locales/zh-CN/zod.json";
import { ApiError } from "./api-error";
import { UseFormReturn } from "react-hook-form";


// lng and resources key depend on your locale.
i18next.use(initReactI18next).init({
  lng: "zh",
  resources: {
    zh: { 
      zod: translation,
      custom: {
        Internal: "内部错误",
        invalid_phone_number: "无效的手机号码",
        invalid_password_uppercase: "密码必须包含至少一个大写字母",
        invalid_password_lowercase: "密码必须包含至少一个小写字母",
        invalid_password_number: "密码必须包含至少一个数字",
        invalid_password_special_character: "密码必须包含至少一个特殊字符",
        password_mismatch: "密码不一致",
        ValidationFailed: "验证失败",
        EmailUndeliverable: "邮箱不可达",
        EmailAlreadyExists: "邮箱已存在",
        EmailNotVerified: "邮箱未验证",
        EmailNotRegistered: "邮箱未注册",
        EmailVerificationFailed: "邮箱验证失败",
        EmailVerificationCodeInvalid: "邮箱验证码无效",
        EmailVerificationCodeExpired: "邮箱验证码已过期",
        InvalidArgument: "无效的参数",
        PasswordMismatch: "密码错误",
        ResourceNotFound: "资源不存在",
      }    
    }
  },
});
// z.setErrorMap(zodI18nMap);
z.setErrorMap(makeZodI18nMap({ ns: ["zod", "custom"] }));

// export configured zod instance
export { z }



export const handleFormError = (
  e: ApiError, 
  form: UseFormReturn<any>
) => {
  console.log(e)
  setDefaultNamespace('custom')
  e.type? form.setError('root', {
    type: 'custom',
    message: t(e.type)
  }) : form.setError('root', {
    type: 'custom',
    message: t('Internal')
  })
  if (e.details) {
    e.details.forEach((value) => {
      form.setError(value.location, {
        type: 'custom',
        message: t(value.type)
      })
    })
  }
}
